import * as ts from "typescript";
import { OpenAPI, Operation, Schema } from "./index";
import { EndpointDef, EndpointMethod } from "../../gen-ast-helpers";
import { Ref, isRef } from "../ref";
import { RefStore } from "../../../old_src/openapi/ref";
import { schemaToTypeNode } from "../../../old_src/gen";

// function refToName(ref: string): string {
//   return ref.split("/").slice(-1)[0];
// }

// export function schemaToTypeNode(
//   schemaOrRef: Schema | Ref,
//   refs: readonly Ref[]
// ): { unresolved: readonly Ref[]; type: ts.TypeNode } {
//   if (isRef(schemaOrRef)) {
//     return {
//       unresolved: refs.find(({ $ref }) => $ref == schemaOrRef.$ref)
//         ? refs
//         : refs.concat(schemaOrRef),
//       type: ts.createTypeReferenceNode(refToName(schemaOrRef.$ref), undefined)
//     };
//   } else if (schemaOrRef.type == "object") {
//     const properties = schemaOrRef.properties || {};
//     const { unresolved: recUnresolved, members } = Object.keys(
//       properties
//     ).reduce(
//       (prev, name) => {
//         const property = properties[name];
//         const { unresolved, type } = schemaToTypeNode(
//           property,
//           prev.unresolved
//         );
//         return {
//           unresolved,
//           members: prev.members.concat(
//             ts.createPropertySignature([], name, undefined, type, undefined)
//           )
//         };
//       },
//       {
//         unresolved: refs,
//         members: [] as ts.TypeElement[]
//       }
//     );
//     return {
//       unresolved: recUnresolved,
//       type: ts.createTypeLiteralNode(members)
//     };
//   } else if (schemaOrRef.type == "boolean") {
//     return {
//       unresolved: refs,
//       type: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)
//     };
//   } else if (schemaOrRef.type == "number") {
//     return {
//       unresolved: refs,
//       type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
//     };
//   } else if (schemaOrRef.type == "integer") {
//     return {
//       unresolved: refs,
//       type: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
//     };
//   } else if (schemaOrRef.type == "string" && schemaOrRef.enum) {
//     return {
//       unresolved: refs,
//       type: ts.createUnionTypeNode(
//         schemaOrRef.enum.map(e =>
//           ts.createLiteralTypeNode(ts.createStringLiteral(e))
//         )
//       )
//     };
//   } else if (schemaOrRef.type == "string") {
//     return {
//       unresolved: refs,
//       type: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
//     };
//   } else if (schemaOrRef.type == "array" && schemaOrRef.items) {
//     const { unresolved: recUnresolved, type } = schemaToTypeNode(
//       schemaOrRef.items,
//       refs
//     );
//     return {
//       unresolved: recUnresolved,
//       type: ts.createArrayTypeNode(type)
//     };
//   } else if (schemaOrRef.type == "array") {
//     return {
//       unresolved: refs,
//       type: ts.createArrayTypeNode(
//         ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
//       )
//     };
//   } else {
//     return {
//       unresolved: refs,
//       type: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
//     };
//   }
// }

export async function convertSchema(
  schema: Schema,
  refStore: RefStore
): Promise<ts.TypeNode> {
  if (schema.type == "object") {
    const properties = schema.properties || {};
    const members = await Promise.all(
      Object.keys(properties).map(async name => {
        const property = properties[name];
        const type = await convertSchema(
          await refStore.resolve(property),
          refStore
        );
        return ts.createPropertySignature([], name, undefined, type, undefined);
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

export async function openapiConverter(
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
        const parameters: { [name: string]: ts.TypeNode } = await (
          operation.parameters || []
        ).reduce(async (prev, parameterOrRef) => {
          const parameter = await refStore.resolve(parameterOrRef);
          const typeNode = await convertSchema(await refStore.resolve(parameter.schema), refStore);

          return { [parameter.name]: typeNode };
        }, Promise.resolve({}));
        
        const endpointMethod: EndpointMethod = {
          parameters,
          responseType: 
        };
        return {
          ...endpoint,
          [operation.type]: endpointMethod
        };
      },
      Promise.resolve({})
    );
    return {
      ...endpoints,
      [path]: endpoint
    };
  }, Promise.resolve({}));
  return {};
}
