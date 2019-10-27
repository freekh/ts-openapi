const yaml = require('js-yaml')
const fs = require('fs')

const debug = (msg) => {
  // console.log(msg)
}

function refToType (rawRef) {
  return rawRef.slice(21)
}

function isSpecialMap (type, schema) {
  return type.startsWith('Map_') && schema.type === 'object' && schema.properties.string
}

function buildType (schemas, types, type, pathType) {
  debug(`Building type ${type}`)

  const schema = schemas[type]

  if (schema.type === 'array') {
    return buildType(schemas, {
      ...types,
      [type]: getType(schema)
    }, refToType(schema.items.$ref))
  }
  if (pathType && isSpecialMap(type, schema)) {
    const itemsSchema = schema.properties.string
    if (itemsSchema.$ref) {
      return {
        ...buildType(schemas, types, refToType(itemsSchema.$ref)),
        [pathType]: {
          type: 'map',
          value: refToType(itemsSchema.$ref)
        }
      }
    } else {
      return {
        ...types,
        [pathType]: {
          type: 'map',
          value: getType(itemsSchema)
        }
      }
    }
  } else if (schema.type === 'object' && schema.properties) {
    return {
      ...Object.keys(schema.properties).reduce((prevTypes, key) => {
        const propSchema = schema.properties[key]
        if (propSchema.$ref) {
          return buildType(schemas, prevTypes, refToType(propSchema.$ref))
        } else if (propSchema.type === 'array' && propSchema.items.$ref) {
          return buildType(schemas, prevTypes, refToType(propSchema.items.$ref))
        }
        return prevTypes
      }, {}),
      [type]: {
        type: 'object',
        properties: Object.keys(schema.properties).map(key => {
          const propSchema = schema.properties[key]
          const required = schema.required.indexOf(key)
          if (propSchema.$ref) {
            const type = refToType(propSchema.$ref)
            return {
              name: key,
              type,
              required
            }
          }
          return {
            name: key,
            type: getType(propSchema),
            required
          }
        })
      },
      ...types
    }
  } else {
    throw Error(`Cannot build type: ${type}\n${JSON.stringify(schema, null, 2)}`)
  }
}

function getType (schema) {
  debug(`Deschemifying ${schema.type}`)
  if (schema.type === 'array') {
    if (schema.items.$ref) {
      return refToType(schema.items.$ref) + '[]'
    } else {
      return getType(schema.items) + '[]'
    }
  } else if (schema.type === 'string' && schema.format === 'date-time') {
    return 'DateTime'
  } else if (schema.type === 'string' && schema.format === 'date') {
    return 'Day'
  } else if (schema.type === 'string') {
    return 'string'
  } else if (schema.type === 'number') {
    return 'number'
  } else if (schema.type === 'integer') {
    return 'number'
  } else if (schema.type === 'boolean') {
    return 'boolean'
  } else {
    throw Error(`Cannot handle schema ${JSON.stringify(schema, null, 2)}`)
  }
}

function casifyPath(path) {
  return path.split('/').reduce((p, c) => p.concat(c.split('-')), []).map(p => p.slice(0, 1).toUpperCase() + p.slice(1)).join('')
}

const doc = yaml.safeLoad(fs.readFileSync('./openapi.yml', 'utf8'))
const schemas = doc.components.schemas

const ast = Object.keys(doc.paths).reduce(({ types, paths }, path) => {
  if (Object.keys(doc.paths[path]).length != 1) { // TODO: fix post, delete, ...
    throw Error('Not (yet) implemented: only "get" paths are currently supported')
  }

  const { get } = doc.paths[path]
  const schema = get.responses['200'].content['application/json'].schema
  const pathType = casifyPath(path) + 'Response'

  let nextType = {}
  let responseType
  if (schema.$ref) {
    const type = refToType(schema.$ref)
    if (isSpecialMap(type, schemas[type])) {
      responseType = pathType
    } else {
      responseType = refToType(schema.$ref)
    }
    nextType = buildType(schemas, types, type, pathType)    
  } else if (schema.type === 'array') {
    responseType = pathType
    nextType = {
      ...buildType(schemas, types, refToType(schema.items.$ref)),
      [pathType]: getType(schema)
    }
  } else {
    responseType = pathType
    nextType = {
      [pathType]: getType(schema)
    }
  }

  const queryParameters = get.parameters.filter(p => p['in'] === 'query')
  if (get.parameters.length !== queryParameters.length) { // TODO: fix other params
    throw Error('Not (yet) implemented: parameters other than query parameters')
  }
  const nextPath = {
    [path]: {
      pathType: path.slice(1, 2).toUpperCase() + casifyPath(path).slice(1) + 'Endpoint',
      methods: {
        get: {
          description: get.description,
          responseType,
          queryParameters: queryParameters.reduce((prev, p) => ({
            ...prev,
            [p.name]: {
              description: p.description,
              required: p.required,
              type: getType(p.schema)
            }
          }), {})
        }
      }
    }
  }

  return {
    types: {
      ...types,
      ...nextType
    },
    paths: {
      ...paths,
      ...nextPath
    }
  }
}, { types: {}, paths: {}, })

const typesCode = Object.keys(ast.types).map(key => {
  const typeDef = ast.types[key]
  let typeDecl = `type ${key} = `
  if (typeDef.type === 'map') {
    typeDecl += `{ [str: string]: ${typeDef.value} }`
  } else if (typeDef.type === 'object') {
    typeDecl += `{
${typeDef.properties.map(({ name, type, required }) => `  ${name}${required ? '?' : ''}: ${type}`).join(',\n')}
}`
  } else {
    typeDecl +=  typeDef
  }
  return typeDecl
}).join('\n')

const pathsSumTypeCode = 'type Paths = ' + Object.keys(ast.paths).map(path => {
  return `'${path}'`
}).join(' | ')

function pathSignature(pathASTMethod, bodyOrType) {
  return '(' + Object.keys(pathASTMethod.queryParameters)
    .sort((a, b) => {
      const ap = pathASTMethod.queryParameters[a]
      const bp = pathASTMethod.queryParameters[b]
      if (ap.required && bp.required) {
        return 0
      } else if (ap.required && !bp.required) {
        return -1
      } else {
        return 1
      } 
    })
    .map(name => {
    const p = pathASTMethod.queryParameters[name]
    return `${name}${p.required ? '' : '?'}: ${p.type}`
  }).join(', ') + `) => ${bodyOrType}`
}

function pathTypeSignature(pathAST) {
  return `{
${pathAST.methods.get.description ? `  /**
${pathAST.methods.get.description.split('\n').map(l => `   * ${l}`).join('\n')}
${Object.keys(pathAST.methods.get.queryParameters).map(p => `   * @param ${pathAST.methods.get.queryParameters[p].description ? `${p} - ${pathAST.methods.get.queryParameters[p].description.split('\n').join(' ').split('|').join(' ')}`: ''}`).join('\n')}
  */
   ` : '   '}get: ${pathSignature(pathAST.methods.get, `Promise<AxiosResponse<${pathAST.methods.get.responseType}>>`)}
}`
}

const pathTypesCode = Object.keys(ast.paths).map(path => {
  const pathAST = ast.paths[path]
  return `type ${pathAST.pathType} = ${pathTypeSignature(pathAST)}`
}).join('\n')

const baseTypeCode = `
type ApiEndpoint<P extends Paths> =
${Object.keys(ast.paths).map(path => {
  const pathAST = ast.paths[path]
  return `  P extends '${path}' ? ${pathAST.pathType} :`
}).join('\n')}
  never
`

const apiCode = `
function unknownPath(path: Paths): never {
  throw Error('Unknown path \$\{path\}')
}

function api<P extends Paths>(p: P): ApiEndpoint<P> {
  switch(p) {
${Object.keys(ast.paths).map(path => {
  const pathAST = ast.paths[path]
  const get = pathAST.methods.get
  const getParams = Object.keys(get.queryParameters).map(p => `                ${p}`).join(',\n')
  const getBody = `{
          return axios
            .get('${path}', {
              params: { 
${getParams} 
              }
            })
            .then(response => {
              return response as AxiosResponse<${get.responseType}>
            })
        }`
  return `    case '${path}':
      return {
        get: ${pathSignature(pathAST.methods.get, getBody)}
      } as ${pathAST.pathType} as ApiEndpoint<P>`
}).join('\n')}
    default:
      return unknownPath(p)
  }
}`

const dateTypes = `
type Day = Date & { readonly __tag: unique symbol }
type DateTime = Date & { readonly __tag: unique symbol }
`

const imports = [`import axios, { AxiosResponse } from 'axios'`].join('\n')
const exportCode = `export default api`
const sep = '\n\n//---\n\n'
const code = imports + sep +
  dateTypes + sep +
  typesCode + sep + 
  pathTypesCode + sep +
  pathsSumTypeCode + sep +
  baseTypeCode + sep +
  apiCode + sep + 
  exportCode
  

// console.log(baseTypeCode)


fs.writeFileSync('./test.ts', code)
