import * as tsgen from './engine';
export const allPaths = ['/test2'];
export type Paths = '/test2';
export type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody
  ? P extends '/test2'
    ? {
        get: (name: string) => Promise<string>;
        post: (name2: string) => Promise<string>;
      }
    : never
  : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse
  ? P extends '/test2'
    ? {
        get: (
          name: string
        ) => Promise<{
          response: Response;
          data: string;
          headers: object;
        }>;
        post: (
          name2: string
        ) => Promise<{
          response: Response;
          data: string;
          headers: object;
        }>;
      }
    : never
  : never;
export function api<EngineHandler, Response>(
  host: string,
  engine: tsgen.Engine<EngineHandler, Response>
): {
  path: <
    P extends Paths,
    OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody
  >(
    p: P,
    onlyBodyOrFullResponse?: OBFR
  ) => Endpoint<Response, OBFR, P>;
} {
  const engineHandler = engine.init(host);
  const handle = engine.handler(engineHandler);
  const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(
    p: P,
    onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody
  ): Endpoint<Response, OBFR, P> => {
    if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
      switch (p) {
        case 'test1':
          return {
            get: (name: string): Promise<string> =>
              engine.process(handle('get', 'application/json', p, { name })),
            post: (name2: string): Promise<string> =>
              engine.process(handle('post', 'application/json', p, { name2 })),
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
    else
      switch (p) {
        case 'test1':
          return {
            get: (
              name: string
            ): Promise<{
              response: Response;
              data: string;
              headers: object;
            }> => engine.process(handle('get', 'application/json', p, { name })),
            post: (
              name2: string
            ): Promise<{
              response: Response;
              data: string;
              headers: object;
            }> => engine.process(handle('post', 'application/json', p, { name2 })),
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
  };
  return { path: path };
}
