import { Ref } from '../ref'

export type Contact = {name?: string; email?: string; url: string }
export type License = {name: string; url?: string }

export type Info = {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
}

export type ExternalDocumentation = {
  url: string;
  description?: string;
}

export type Tag = {
  name: string; description?: string; externalDocs?: ExternalDocumentation;
}

export type Server = {
  url: string;
  description?: string;
}

export type ParameterIn = 'query' | 'header' | 'path' | 'cookie'

export type ParameterStyle = 'simple' | 'form' | 'matrix' | 'label' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'

export type OAuthFlow = { authorizationUrl: string; tokenUrl: string; refreshUrl?: string; scopes: { [ key: string ]: string } }

export type OAuthFlows = {
  implicit?: OAuthFlow;
  password?: OAuthFlow;
  clientCredentials?: OAuthFlow;
  authorizationCode?: OAuthFlow;
}


export type SecurityScheme = {
  type: string;
  description?: string;
  name?: string;
  in?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlows;
  openIdConnectUrl?: string;
}

export type ExampleValue = string

export type SchemaType = 'boolean' | 'object' | 'array' | 'number' | 'string' | 'integer'

export type SchemaFormat = 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password'

export type Discriminator = {
  propertyName: string;
  mapping?: { [ key: string ]: string };
}

export type Schema = {
  title?: string;
  required?: string[];
  type?: SchemaType;
  items?: Ref | Schema;
  properties?: { [ key: string ]: Ref | Schema };
  description?: string;
  format?: SchemaFormat;
  default?: ExampleValue;
  nullable?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: ExampleValue;
  deprecated?: boolean;
  oneOf?: (Ref | Schema)[];
  discriminator?: Discriminator;
  additionalProperties?: Ref | Schema;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minItems?: number;
  maxItems?: number;
  enum?: string[];
}

export type Encoding = {
  contentType?: string;
  headers: { [ key: string ]: Ref | Header };
  style?: ParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
}

export type MediaType = {
  schema?: Ref | Schema;
  example?: ExampleValue;
  examples?: { [ key: string ]: Ref | Example };
  encoding?: { [ key: string ]: Encoding };
}

export type Response = {
  description: string;
  headers: { [ key: string ]: Ref | Header };
  content: { [ key: string ]: MediaType };
}

export type Example = {
  summary?: string;
  description?: string;
  value?: ExampleValue;
  externalValue?: string;
}

export type Header = {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: ParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: Ref | Schema;
  example?: ExampleValue;
  examples: { [ key: string ]: Ref | Example };
  content: { [ key: string ]: MediaType };
}

export type Parameter = {
  name: string;
  in: ParameterIn;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: ParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema: Ref | Schema;
  example?: ExampleValue;
  examples?: { [ key: string ]: Ref | Example };
  content: { [ key: string ]:  MediaType };
}

export type RequestBody = {
  description?: string;
  content: { [ key: string ]: MediaType };
  required?: boolean;
}
export type SecurityRequirement = { [ key: string ]: string[] }

export type Operation = {
  tags?: string[];
  summary?: string;
  description?: string;
  operationId?: string;
  parameters?: (Ref | Parameter)[];
  requestBody?: Ref | RequestBody;
  responses: { [ key: string ]: Ref | Response };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
}

export type PathItem = {
  summary?: string;
  description?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  servers?: Server[];
  parameters?: (Ref | Parameter)[];
}

export type Components = {
  schemas: { [ key: string ]: Ref | Schema };
  securitySchemes?: { [ key: string ]: Ref | SecurityScheme };
}

export type OpenAPI = {
  openapi: string;
  info: Info;
  tags: Tag[];
  servers: Server[];
  paths: { [ key: string ]: PathItem };
  components?: Components;
  security: SecurityRequirement[];
}
