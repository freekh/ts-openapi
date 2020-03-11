import * as ts from "typescript";
import { OpenAPI, Operation, Schema } from "./index";
import {
  EndpointDef,
  EndpointMethod,
  HttpStatusType
} from "../../gen-ast-helpers";
import { Ref, isRef } from "../ref";
import { RefStore } from "../../../old_src/openapi/ref";
import { MediaType } from "../../../old_src/openapi/v300";

function isNotIdentifier(n: string): boolean {
  const entityName = ts.parseIsolatedEntityName(n, ts.ScriptTarget.ES3);
  if (entityName) {
    return !ts.isIdentifier(entityName);
  } else {
    return false;
  }
}

function gracefulProp2ObjectFail(properties: { [key: string]: Ref | Schema }) {
  return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
}

export async function convertSchema(
  schema: Schema,
  refStore: RefStore
): Promise<ts.TypeNode> {
  if (schema.type == "object") {
    const properties = schema.properties || {};
    if (!!Object.keys(properties).find(isNotIdentifier)) {
      return gracefulProp2ObjectFail(properties);
    }
    const members = await Promise.all(
      Object.keys(properties).map(async name => {
        const property = properties[name];
        const type = await convertSchema(
          await refStore.resolve(property),
          refStore
        );
        return ts.createPropertySignature(
          [],
          isNotIdentifier(name) ? ts.createStringLiteral(name) : name,
          undefined,
          type,
          undefined
        );
      }, [] as ts.TypeElement[])
    );
    return ts.createTypeLiteralNode(members);
  } else if (schema.type == "boolean") {
    return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  } else if (schema.type == "number") {
    return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  } else if (schema.type == "integer") {
    return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  } else if (schema.type == "string" && schema.enum) {
    return ts.createUnionTypeNode(
      schema.enum.map(e => ts.createLiteralTypeNode(ts.createStringLiteral(e)))
    );
  } else if (schema.type == "string") {
    return ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  } else if (schema.type == "array" && schema.items) {
    const type = await convertSchema(
      await refStore.resolve(schema.items),
      refStore
    );
    return ts.createArrayTypeNode(type);
  } else if (schema.type == "array") {
    return ts.createArrayTypeNode(
      ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );
  } else {
    return ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }
}

type OperationType = Operation & {
  type:
    | "delete"
    | "get"
    | "head"
    | "options"
    | "patch"
    | "post"
    | "put"
    | "trace";
};
const ValidMethods = [
  "delete",
  "options",
  "get",
  "post",
  "trace",
  "put",
  "head",
  "patch"
];

const PreferredMediaTypes = ["application/json", "text/xml"];

function pickMediaTypeSchema(content?: {
  [key: string]: MediaType;
}): {
  mediaType: string;
  schema: Schema | Ref | null;
} {
  const supportedMediaTypes = Object.keys(content || {});
  const mediaType = PreferredMediaTypes.find(preferred => supportedMediaTypes.indexOf(preferred) != -1) || supportedMediaTypes[0];
  if (content && mediaType && content[mediaType]) {
    const schema = content[mediaType].schema;
    if (schema) {
      return { mediaType, schema };
    }
  }
  return { mediaType: mediaType || '*/*', schema: null };
}

export async function openapiConverter(
  tsGenIdentifier: ts.Identifier,
  api: OpenAPI
): Promise<{ [path: string]: EndpointDef }> {
  const refStore = new RefStore(api);
  const endpoints: { [path: string]: EndpointDef } = await Object.keys(
    api.paths
  ).reduce(async (endpoints, path) => {
    const pathItem = api.paths[path];
    const operations: (OperationType & { defined: boolean })[] = [
      {
        ...pathItem.delete,
        defined: !!pathItem.delete,
        type: "delete"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.get,
        defined: !!pathItem.get,
        type: "get"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.head,
        defined: !!pathItem.head,
        type: "head"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.options,
        defined: !!pathItem.options,
        type: "options"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.patch,
        defined: !!pathItem.patch,
        type: "patch"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.post,
        defined: !!pathItem.post,
        type: "post"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.put,
        defined: !!pathItem.put,
        type: "put"
      } as OperationType & { defined: boolean },
      {
        ...pathItem.trace,
        defined: !!pathItem.trace,
        type: "trace"
      } as OperationType & { defined: boolean }
    ].filter(op => op.defined);
    const endpoint: EndpointDef = await operations.reduce(
      async (endpoint, operation) => {
        const parameters: {
          query: { [name: string]: { type: ts.TypeNode; required: boolean } };
          path: { [name: string]: { type: ts.TypeNode; required: boolean } };
          header: { [name: string]: { type: ts.TypeNode; required: boolean } };
          cookie: { [name: string]: { type: ts.TypeNode; required: boolean } };
        } = await (operation.parameters || []).reduce(
          async (prevP, parameterOrRef) => {
            const prev = await prevP;
            const parameter = await refStore.resolve(parameterOrRef);
            const typeNode = await convertSchema(
              await refStore.resolve(parameter.schema),
              refStore
            );
            switch (parameter.in) {
              case "cookie":
                return {
                  ...prev,
                  cookie: {
                    ...prev.cookie,
                    [parameter.name]: {
                      type: typeNode,
                      required: !!parameter.required
                    }
                  }
                };
              case "header":
                return {
                  ...prev,
                  header: {
                    ...prev.header,
                    [parameter.name]: {
                      type: typeNode,
                      required: !!parameter.required
                    }
                  }
                };
              case "path":
                return {
                  ...prev,
                  path: {
                    ...prev.path,
                    [parameter.name]: {
                      type: typeNode,
                      required: !!parameter.required
                    }
                  }
                };
              case "query":
                return {
                  ...prev,
                  query: {
                    ...prev.query,
                    [parameter.name]: {
                      type: typeNode,
                      required: !!parameter.required
                    }
                  }
                };
            }
          },
          Promise.resolve({
            query: {},
            path: {},
            header: {},
            cookie: {}
          })
        );

        const requestBody = await refStore.resolve(operation.requestBody);
        const { mediaType, schema: bodySchemaOrRef } = pickMediaTypeSchema(
          requestBody?.content
        );
        const bodySchema = await refStore.resolve(bodySchemaOrRef);
        const body = bodySchema
          ? await convertSchema(bodySchema, refStore)
          : undefined;
        const responseValues = Object.keys(operation.responses);

        const isValidResponseValues = !!responseValues.find(
          responseValue =>
            responseValue.match(/\d{3}/) || responseValue === "default"
        );
        if (!isValidResponseValues) {
          throw new Error(`Unexpected response value in ${responseValues}`);
        }

        const returnTypes = await Promise.all(
          responseValues.map(async responseValue => {
            const response = await refStore.resolve(
              operation.responses[responseValue]
            );
            const statusProperty = responseValue.match(/\d{3}/)
              ? [
                  ts.createPropertySignature(
                    undefined,
                    "status",
                    undefined,
                    ts.createLiteralTypeNode(
                      ts.createNumericLiteral(responseValue)
                    ),
                    undefined
                  )
                ]
              : [
                  ts.createPropertySignature(
                    undefined,
                    "status",
                    undefined,
                    ts.createTypeReferenceNode("Exclude", [
                      ts.createTypeReferenceNode(
                        ts.createQualifiedName(tsGenIdentifier, HttpStatusType),
                        []
                      ),
                      ts.createUnionTypeNode(
                        responseValues
                          .filter(r => r != responseValue)
                          .map(r => {
                            if (r.match(/\d{3}/)) {
                              return ts.createLiteralTypeNode(
                                ts.createNumericLiteral(r)
                              );
                            }
                            throw new Error(
                              `Expected a numeric value here ${r}`
                            );
                          })
                      )
                    ]),
                    //ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
                    undefined
                  )
                ];
            if (!response?.content) {
              return ts.createTypeLiteralNode(statusProperty);
            }
            const { schema } = pickMediaTypeSchema(response.content);
            const returnType = schema
              ? await convertSchema(await refStore.resolve(schema), refStore)
              : ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
            const contentPropertyName =
              responseValue.match(/\d{3}/) && parseInt(responseValue) >= 300
                ? "error"
                : "data";
            return ts.createTypeLiteralNode([
              ...statusProperty,
              ts.createPropertySignature(
                undefined,
                contentPropertyName,
                undefined,
                returnType,
                undefined
              )
            ]);
          })
        );
        const endpointMethod: EndpointMethod = {
          queryParameters: parameters.query,
          pathParameters: parameters.path,
          headerParameters: parameters.header,
          cookieParameters: parameters.cookie,
          body,
          mediaType,
          returnType: ts.createUnionTypeNode(returnTypes)
        };
        return {
          ...(await endpoint),
          [operation.type]: endpointMethod
        };
      },
      Promise.resolve({})
    );
    return {
      ...(await endpoints),
      [path]: endpoint
    };
  }, Promise.resolve({}));
  return endpoints;
}
