import * as tsgen from './engine';
type Paths = '/test1';
type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody
  ? P extends '/test1'
    ? tsgen.OnlyBodyPromiseOf<{
        get: (name: string) => string;
        post: (name2: string) => string;
      }>
    : never
  : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse
  ? P extends '/test1'
    ? tsgen.FullResponsePromiseOf<{
        get: (name: string) => string;
        post: (name2: string) => string;
      }, Response, object>
    : never
  : never;
function api<EngineHandler, Response>(
  host: string,
  engine: tsgen.Engine<EngineHandler, Response>
): {
  path: <
    P extends Paths,
    OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody
  >() => Endpoint<Response, OBFR, P>;
} {
  const path = <P extends Paths>(P: P): Endpoint<P> => {
    switch (P) {
      case 'test1':
        ({
          get: (name: string): string =>
            engine.process(handle('get', 'application/json', P, { name })),
          post: (name2: string): string =>
            engine.process(handle('post', 'application/json', P, { name2 })),
        } as Endpoint<Response, OBFR, P>);
      default:
    }
  };
}
