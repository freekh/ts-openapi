import axios, { AxiosStatic, AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'

//---

type Test1DTO = {
  id: string,
}
type Test1Response = Test1DTO[]
type Test1Headers = { 'x-next': string; }
type Test2Response = { [id: string]: InnerDTO[] }
type InnerDTO = {
  date: Date,
  number?: number,
}

//---

type Paths = '/test1' | '/test2'
const paths = ['/test1', '/test2']

//---

type SimpleEndpoint<E> = E extends { headers: infer H; statusCode: number; data: infer T; engineResponse: R; } ?
  T : never

type Test1CompleteEndpoint<R> = {
  get: (id: string[]) => Promise<{ headers: object; data: Test1Response, engineResponse: R }>
}
type Test2CompleteEndpoint<R>2 = {
  get: (id?: string[], from?: string, to?: string, limit?: number) => Promise<{ headers: object; data: Test2Response, engineResponse: R }>
}

type Test1Endpoint<R> = {
  get: (id: string[]) => Promise<Test1Response>
}
type Test2Endpoint = {
  get: (id?: string[], from?: string, to?: string, limit?: number) => Promise<Test2Response>
}


//---

type Endpoint<R, C extends Complete, P extends Paths> = C extends Complete.Off ? (
  P extends '/test1' ? Test1Endpoint<R> :
  P extends '/test2' ? Test2Endpoint :
  never
) : C extends Complete.On ? (
  P extends '/test1' ? Test1CompleteEndpoint<R> :
  P extends '/test2' ? Test2CompleteEndpoint :
  never
) : never

//---

function unknownPath(path: Paths): never {
  throw Error(`Unknown path ${path}. Valid paths are: ${paths.join(',')}`)
}

// Or FullResponse or WithResponseData (full, data-only) or OnlyDataOrFullResponse
enum Complete {
  On = "on",
  Off = "off",
}

interface Engine<EngineHandler, EngineResponse> {
  init(host: string): EngineHandler
  handler(engine: EngineHandler): <A>(method: string, responseType: string, path: string, body?: A, params: object, queryParamsFormatter?: (queryParams: object) => string) => EngineResponse;
  // TODO: encode
  // TODO: validate
  process<R>(response: EngineResponse): R
}

function api<EngineHandler, Response>(host: string, engine: Engine<EngineHandler, Response>): { path: <P extends Paths, C extends Complete = Complete.Off>(path: P, complete?: C) => Endpoint<Response, C, P> } {
  const engineHandler = engine.init(host)
  const handle = engine.handler(engineHandler)
  const path = <P extends Paths, C extends Complete = Complete.Off>(p: P, complete: Complete = Complete.Off): Endpoint<Response, C, P> => {
    if (complete == Complete.On) {
      switch(p) {
        case '/test1':
          return {
            get: (id: string[]) =>
              engine.process(handle('get', 'application/json', p, undefined, { id, }))
          } as Endpoint<Response, C, P>
        case '/test2':
          return {
            get: (id?: string[], from?: string, to?: string, limit?: number) =>
              engine.process(handle('get', 'application/json', p, undefined, { id, from , to, limit }))
          } as Endpoint<Response, C, P>
        default:
          return unknownPath(p)
      }
    } else {
      switch(p) {
        case '/test1':
          return {
            get: (id?: string[]) =>
              engine.process(handle('get', 'application/json', p, undefined, { id, }))
          } as Endpoint<Response, C, P>
        case '/test2':
          return {
            get: (id?: string[], from?: string, to?: string, limit?: number) =>
              engine.process(handle('get', 'application/json', p, undefined, { id, from , to, limit }))
          } as Endpoint<Response, C, P>
        default:
          return unknownPath(p)
      }
    }
  }
  const methods = {
    getTest1: (id: string[]): Promise<Test1Response> => {
      return path('/test1', Complete.Off).get(id)
    }
  }
  return {
    methods,
    path,
  }
}

// //---
class AxiosEngine implements Engine<AxiosInstance, AxiosResponse> {
  private config?: AxiosRequestConfig
  constructor(config?: AxiosRequestConfig) {
    this.config = config;
  }
  init(host: string): AxiosInstance {
    return axios.create(this.config)
  }
  handler(engine: AxiosInstance): (method: string, responseType: string, path: string, params: object, queryParamsFormatter?: ((queryParams: object) => string) | undefined) => AxiosResponse {
    engine.put
    throw new Error()
  }
  process<R>(response: AxiosResponse): R {
    response.data
    throw new Error("Method not implemented.")
  }
}

api('test', new AxiosEngine()).path('/test1', Complete.On).get([])


export default api
