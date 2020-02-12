import * as tsgen from "./engine";
var allPaths = ["/test2"];
type Paths = "/test2";
type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody
  ? P extends "/test2"
    ? {
        /** This is some bullshit */
        get: (name: string) => Promise<string>;
        post: (name2: string) => Promise<string>;
      }
    : never
  : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse
  ? P extends "/test2"
    ? {
        /** This is some bullshit */
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
    onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen
      .OnlyBodyOrFullResponse.OnlyBody
  ): Endpoint<Response, OBFR, P> => {
    switch (p) {
      case "test1":
        ({
          get: (name: string): Promise<string> =>
            engine.process(handle("get", "application/json", p, { name })),
          post: (name2: string): Promise<string> =>
            engine.process(handle("post", "application/json", p, { name2 }))
        } as Endpoint<Response, OBFR, P>);
      default:
        tsgen.unknownPath(allPaths, p);
    }
  };
  return { path: path };
}
