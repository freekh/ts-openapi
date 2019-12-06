export type AstType = {}
export type AstEndpoint = {}
export type AstConditional = {}
export type AstPath = string
export type Ast = {
  endpoints: AstEndpoint[];
  conditionals: AstConditional[];
  types: AstType[];
  paths: AstPath[];
}
export type RefCache<T> = { [ref: string]: T }

