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

type Test1Endpoint = {
  get(id: string): Test1Response
}
type Test2Endpoint = {
  get(id?: string[], from?: string, to?: string, limit?: number): Test2Response
}

type PromiseOf<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
type FullResponseOf<Headers extends object, Response, T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<{ headers: Headers; data: ReturnType<T>, engineResponse: Response }>;

type FunctionObject = {
  [name: string]: (...args: any[]) => any
};

type OnlyBodyPromiseOf<U extends FunctionObject> = {
  [N in keyof U]: PromiseOf<U[N]>
}

type FullResponsePromiseOf<T extends FunctionObject, Response, Headers extends object> = {
  [P in keyof T]: FullResponseOf<Headers, Response, T[P]>
}


//---

type Endpoint<R, C extends Complete, P extends Paths> = C extends Complete.Off ? (
  P extends '/test1' ? OnlyBodyPromiseOf<Test1Endpoint> :
  P extends '/test2' ? OnlyBodyPromiseOf<Test2Endpoint> :
  never
) : C extends Complete.On ? (
  P extends '/test1' ? FullResponsePromiseOf<Test1Endpoint, R, { 'x-next': string; }> :
  P extends '/test2' ? FullResponsePromiseOf<Test2Endpoint, R, { 'x-next': string; }> :
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
  handler(engine: EngineHandler): <A>(method: string, responseType: string, path: string, params: object, queryParamsFormatter?: (queryParams: object) => string, body?: A) => EngineResponse;
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
            get: (id: string) =>
              engine.process(handle('get', 'application/json', p, { id, }))
          } as Endpoint<Response, C, P>
        case '/test2':
          return {
            get: (id?: string[], from?: string, to?: string, limit?: number) =>
              engine.process(handle('get', 'application/json', p, { id, from , to, limit }))
          } as Endpoint<Response, C, P>
        default:
          return unknownPath(p)
      }
    } else {
      switch(p) {
        case '/test1':
          return {
            get: (id: string) =>
              engine.process(handle('get', 'application/json', p, { id, }))
          } as Endpoint<Response, C, P>
        case '/test2':
          return {
            get: (id?: string[], from?: string, to?: string, limit?: number) =>
              engine.process(handle('get', 'application/json', p, { id, from , to, limit }))
          } as Endpoint<Response, C, P>
        default:
          return unknownPath(p)
      }
    }
  }
  // const methods = {
  //   getTest1: (id: string[]): Promise<Test1Response> => {
  //     return path('/test1', Complete.Off).get(id)
  //   }
  // }
  return {
    path,
  }
}

// //---
class AxiosEngine implements Engine<AxiosInstance, AxiosResponse> {
  handler(engine: AxiosInstance): <A>(method: string, responseType: string, path: string, params: object, queryParamsFormatter?: ((queryParams: object) => string) | undefined, body?: A | undefined) => AxiosResponse<any> {
    throw new Error("Method not implemented.")
  }
  private config?: AxiosRequestConfig
  constructor(config?: AxiosRequestConfig) {
    this.config = config;
  }
  init(host: string): AxiosInstance {
    return axios.create(this.config)
  }
  process<R>(response: AxiosResponse): R {
    response.data
    throw new Error("Method not implemented.")
  }
}
//

const a = api('http://localhost/server', new AxiosEngine())

a.path('/test1', Complete.On).get('').then(d => d)


export default api
