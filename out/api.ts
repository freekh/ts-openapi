import * as tsgen from './engine';
export const allPaths = ['/pets', '/pets/{petId}'];
export type Paths = '/pets' | '/pets/{petId}';
export type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody
  ? P extends '/pets'
    ? {
        get: (
          limit: number,
          sort: 'asc' | 'desc'
        ) => Promise<
          | {
              status: 200;
              data: {
                id: number;
                name: string;
                tag: 'one' | 'two';
              }[];
            }
          | {
              status: Exclude<tsgen.HttpStatus, 200>;
              data: {
                code: number;
                message: string;
              };
            }
        >;
        post: () => Promise<
          | {
              status: 201;
            }
          | {
              status: Exclude<tsgen.HttpStatus, 201>;
              data: {
                code: number;
                message: string;
              };
            }
        >;
      }
    : P extends '/pets/{petId}'
    ? {
        get: (
          petId: string
        ) => Promise<
          | {
              status: 200;
              data: {
                id: number;
                name: string;
                tag: 'one' | 'two';
              };
            }
          | {
              status: Exclude<tsgen.HttpStatus, 200>;
              data: {
                code: number;
                message: string;
              };
            }
        >;
      }
    : never
  : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse
  ? P extends '/pets'
    ? {
        get: (
          limit: number,
          sort: 'asc' | 'desc'
        ) => Promise<{
          response: Response;
          data:
            | {
                status: 200;
                data: {
                  id: number;
                  name: string;
                  tag: 'one' | 'two';
                }[];
              }
            | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                  code: number;
                  message: string;
                };
              };
          headers: object;
        }>;
        post: () => Promise<{
          response: Response;
          data:
            | {
                status: 201;
              }
            | {
                status: Exclude<tsgen.HttpStatus, 201>;
                data: {
                  code: number;
                  message: string;
                };
              };
          headers: object;
        }>;
      }
    : P extends '/pets/{petId}'
    ? {
        get: (
          petId: string
        ) => Promise<{
          response: Response;
          data:
            | {
                status: 200;
                data: {
                  id: number;
                  name: string;
                  tag: 'one' | 'two';
                };
              }
            | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                  code: number;
                  message: string;
                };
              };
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
        case '/pets':
          return {
            get: (
              limit: number,
              sort: 'asc' | 'desc'
            ): Promise<
              | {
                  status: 200;
                  data: {
                    id: number;
                    name: string;
                    tag: 'one' | 'two';
                  }[];
                }
              | {
                  status: Exclude<tsgen.HttpStatus, 200>;
                  data: {
                    code: number;
                    message: string;
                  };
                }
            > => engine.process(handle('get', 'application/json', p, { limit, sort }, {}, {})),
            post: (): Promise<
              | {
                  status: 201;
                }
              | {
                  status: Exclude<tsgen.HttpStatus, 201>;
                  data: {
                    code: number;
                    message: string;
                  };
                }
            > => engine.process(handle('post', 'application/json', p, {}, {}, {})),
          } as Endpoint<Response, OBFR, P>;
        case '/pets/{petId}':
          return {
            get: (
              petId: string
            ): Promise<
              | {
                  status: 200;
                  data: {
                    id: number;
                    name: string;
                    tag: 'one' | 'two';
                  };
                }
              | {
                  status: Exclude<tsgen.HttpStatus, 200>;
                  data: {
                    code: number;
                    message: string;
                  };
                }
            > =>
              engine.process(
                handle('get', 'application/json', tsgen.pathReplace(p, { petId }), {}, {}, {})
              ),
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
    else
      switch (p) {
        case '/pets':
          return {
            get: (
              limit: number,
              sort: 'asc' | 'desc'
            ): Promise<{
              response: Response;
              data:
                | {
                    status: 200;
                    data: {
                      id: number;
                      name: string;
                      tag: 'one' | 'two';
                    }[];
                  }
                | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                      code: number;
                      message: string;
                    };
                  };
              headers: object;
            }> => engine.process(handle('get', 'application/json', p, { limit, sort }, {}, {})),
            post: (): Promise<{
              response: Response;
              data:
                | {
                    status: 201;
                  }
                | {
                    status: Exclude<tsgen.HttpStatus, 201>;
                    data: {
                      code: number;
                      message: string;
                    };
                  };
              headers: object;
            }> => engine.process(handle('post', 'application/json', p, {}, {}, {})),
          } as Endpoint<Response, OBFR, P>;
        case '/pets/{petId}':
          return {
            get: (
              petId: string
            ): Promise<{
              response: Response;
              data:
                | {
                    status: 200;
                    data: {
                      id: number;
                      name: string;
                      tag: 'one' | 'two';
                    };
                  }
                | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                      code: number;
                      message: string;
                    };
                  };
              headers: object;
            }> =>
              engine.process(
                handle('get', 'application/json', tsgen.pathReplace(p, { petId }), {}, {}, {})
              ),
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
  };
  return { path: path };
}
