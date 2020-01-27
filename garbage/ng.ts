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

type CompleteResponse<R, T> = Promise<{ headers: Test1Headers; statusCode: number; data: T; engineResponse: R; }>

// TODO: WebData & https://github.com/smaccoun/ts-remotedata
type Test1Endpoint<R> = {
  complete: {
    get: (id: string[]) => CompleteResponse<R, Test1Response>
  }
  get: (id: string[]) => Promise<Test1Response>
}
type Test2Endpoint = {
  get: (id?: string[], from?: string, to?: string, limit?: number) => Promise<Test2Response>
}

//---

type Endpoint<R, P extends Paths> =
  P extends '/test1' ? Test1Endpoint<R> :
  P extends '/test2' ? Test2Endpoint :
  never

//---

function unknownPath(path: Paths): never {
  throw Error(`Unknown path ${path}. Valid paths are: ${paths.join(',')}`)
}

interface Engine<EngineHandler, EngineResponse> {
  init(host: string): EngineHandler
  handler(engine: EngineHandler): (method: string, path: string, params: object, queryParamsFormatter?: (queryParams: object) => string) => EngineResponse;
  process<R>(response: EngineResponse): R
}

function api<EngineHandler, Response>(host: string, engine: Engine<EngineHandler, Response>): { path: <P extends Paths>(path: P) => Endpoint<Response, P> } {
  const engineHandler = engine.init(host)
  const handle = engine.handler(engineHandler)
  const path = <P extends Paths>(p: P): Endpoint<Response, P> => {
    switch(p) {
      case '/test1':
        return {
          get: (id?: string[]) =>
            engine.process(handle('get', p, { id, }))
        } as Test1Endpoint<Response> as Endpoint<Response, P>
      case '/test2':
        return {
          get: (id?: string[], from?: string, to?: string, limit?: number) =>
            engine.process(handle('get', p, { id, from , to, limit }))
        } as Endpoint<Response, P>
      default:
        return unknownPath(p)
    }
  }
  return {
    // operations: {
    //   getTest1(id?: string[]) {
    //     return path('/test1').get(id)
    //   }
    // },
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
  handler(engine: AxiosInstance): (method: string, path: string, params: object, queryParamsFormatter?: ((queryParams: object) => string) | undefined) => AxiosResponse {
    engine.put
    throw new Error()
  }
  process<R>(response: AxiosResponse): R {
    response.data
    throw new Error("Method not implemented.")
  }
}

api('test', new AxiosEngine()).path('/test1').get([])


export default api
