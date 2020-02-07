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
  engine: Engine<EngineHandler, Response>
): {
  path: <P extends Paths, FR extends FullResponseOrNot = FullResponseOrNot.Not>() => Endpoint<
    Response,
    FR,
    P
  >;
} {
  const path = <P extends Paths>(p: P): Endpoint<P> => {
    switch (p) {
      case 'test1':
        ({
          get: (name: string): string =>
            engine.process(handle('get', 'application/json', p, { name })),
          post: (name2: string): string =>
            engine.process(handle('post', 'application/json', p, { name2 })),
        } as Endpoint<Response, FR, P>);
      default:
    }
  };
}
