import axios, { AxiosResponse } from 'axios'

//---

type Test1DTO = {
  id: string,
}
type Test1Response = Test1DTO[]
type Test2Response = { [id: string]: InnerDTO[] }
type InnerDTO = {
  date: Date,
  number?: number,
}

//---

type Paths = '/test1' | '/test2' 

//---

type Test1Endpoint = {
  get: (id: string[]) => Promise<Test1Response>
}
type Test2Endpoint = {
  get: (id?: string[], from?: string, to?: string, limit?: number) => Promise<Test2Response>
}

//---

type Endpoint<P extends Paths> =
  P extends '/test1' ? Test1Endpoint :
  P extends '/test2' ? Test2Endpoint :
  never

//---


function unknownPath(path: Paths): never {
  throw Error(`Unknown path ${path}`)
}

type Engine<EngineHandler, EngineResponse, Base> = {
  init: (host: string) => EngineHandler;
  validate: boolean;
  handler: (engine: EngineHandler) => (method: string, path: string, params: object, queryParamsFormatter?: (queryParams: object) => string) => EngineResponse;
  process: (response: EngineResponse) => Promise<Base>
}

function api<P extends Paths, EngineHandler, Response>(host: string, engine: Engine<EngineHandler, Response, Endpoint<P>>): (path: P) => Endpoint<P> {
  const engineHandler = engine.init(host)
  const handle = engine.handler(engineHandler)
  const a = function path(p: P) {
    switch(p) {
      case '/test1':
        return {
          get: (id?: string[]) => 
            engine.process(handle('get', p, { id, }))
        } as Test1Endpoint
      case '/test2':
        return {
          get: (id?: string[], from?: string, to?: string, limit?: number) => {
            throw new Error('')
          }
            // engine.process(handle('get', p, { id, from , to, limit })) as Promise<Test2Response>>
        }
      default:
        return unknownPath(p)
    }
  }
  return a
}

//---

export default api