import * as tsgen from './engine';
type hallo = {
  test: number;
};
type Paths = 'test' | 'too';
type Endpoint<P extends Paths> = P extends 'too' ? hallo : P extends 'test' ? hallo : never;
type Test = {
  get: (name: string) => string;
  post: (name2: string) => string;
};
function api<EngineHandler, Response>(
  host: string,
  engine: tsgen.Engine<EngineHandler, Response>
): {
  path: <
    P extends Paths,
    OdOrFr extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyData
  >() => Endpoint<Response, OdOrFr, P>;
} {
  const path = <P extends Paths>(p: P): Endpoint<P> => {
    switch (p) {
      case 'test1':
        ({
          get: (name: string): string =>
            engine.process(handle('get', 'application/json', p, { name })),
          post: (name2: string): string =>
            engine.process(handle('post', 'application/json', p, { name2 })),
        } as Endpoint<Response, ODorFR, P>);
      default:
    }
  };
  throw new Error("")
}
