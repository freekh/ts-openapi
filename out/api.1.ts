import * as tsgen from "./engine";
export const allPaths = [
  "/video/clip/conversions",
  "/video/program/total-screen-rating",
  "/video/program/web-rating",
  "/service/visitor-frequencies",
  "/service/unique-visitors"
];
export type Paths =
  | "/video/clip/conversions"
  | "/video/program/total-screen-rating"
  | "/video/program/web-rating"
  | "/service/visitor-frequencies"
  | "/service/unique-visitors";
export function isPath(path: string): path is Paths {
  return allPaths.indexOf(path) !== -1;
}
export type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody
  ? P extends "/video/clip/conversions"
    ? {
        get: (
          id: string,
          to?: string
        ) => Promise<
          | {
              status: 200;
              data: {
                articleId: string;
                views: number;
                conversions: number;
                rate: number;
              }[];
            }
          | {
              status: Exclude<tsgen.HttpStatus, 200>;
              data: {
                message: string;
              };
            }
        >;
      }
    : P extends "/video/program/total-screen-rating"
    ? {
        get: (
          id: string
        ) => Promise<
          | {
              status: 200;
              data: {
                fromDate: string;
                toDate: string;
                tsr: number;
                live: number;
                recording: number;
                rebroadcast: number;
                webRating: number;
              };
            }
          | {
              status: Exclude<tsgen.HttpStatus, 200>;
              data: {
                message: string;
              };
            }
        >;
      }
    : P extends "/video/program/web-rating"
    ? {
        get: (
          id: string,
          to: string
        ) => Promise<{
          status: 200;
          data: {
            date: string;
            webRating: number;
          }[];
        }>;
      }
    : P extends "/service/visitor-frequencies"
    ? {
        get: (
          id: string,
          from: string,
          to: string
        ) => Promise<{
          status: 200;
          data: {
            date: string;
            clients: string;
          }[];
        }>;
      }
    : P extends "/service/unique-visitors"
    ? {
        get: (
          id: string,
          from: string,
          to: string
        ) => Promise<{
          status: 200;
          data: {
            date: string;
            clients: {
              clientType: string;
              total: number;
              dates: {
                date: string;
                uniques: number;
              }[];
            }[];
          }[];
        }>;
      }
    : never
  : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse
  ? P extends "/video/clip/conversions"
    ? {
        get: (
          id: string,
          to?: string
        ) => Promise<{
          response: Response;
          data:
            | {
                status: 200;
                data: {
                  articleId: string;
                  views: number;
                  conversions: number;
                  rate: number;
                }[];
              }
            | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                  message: string;
                };
              };
          headers: object;
        }>;
      }
    : P extends "/video/program/total-screen-rating"
    ? {
        get: (
          id: string
        ) => Promise<{
          response: Response;
          data:
            | {
                status: 200;
                data: {
                  fromDate: string;
                  toDate: string;
                  tsr: number;
                  live: number;
                  recording: number;
                  rebroadcast: number;
                  webRating: number;
                };
              }
            | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                  message: string;
                };
              };
          headers: object;
        }>;
      }
    : P extends "/video/program/web-rating"
    ? {
        get: (
          id: string,
          to: string
        ) => Promise<{
          response: Response;
          data: {
            status: 200;
            data: {
              date: string;
              webRating: number;
            }[];
          };
          headers: object;
        }>;
      }
    : P extends "/service/visitor-frequencies"
    ? {
        get: (
          id: string,
          from: string,
          to: string
        ) => Promise<{
          response: Response;
          data: {
            status: 200;
            data: {
              date: string;
              clients: string;
            }[];
          };
          headers: object;
        }>;
      }
    : P extends "/service/unique-visitors"
    ? {
        get: (
          id: string,
          from: string,
          to: string
        ) => Promise<{
          response: Response;
          data: {
            status: 200;
            data: {
              date: string;
              clients: {
                clientType: string;
                total: number;
                dates: {
                  date: string;
                  uniques: number;
                }[];
              }[];
            }[];
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
    onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen
      .OnlyBodyOrFullResponse.OnlyBody
  ): Endpoint<Response, OBFR, P> => {
    if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
      switch (p) {
        case "/video/clip/conversions":
          return {
            get: (
              id: string,
              to?: string
            ): Promise<
              | {
                  status: 200;
                  data: {
                    articleId: string;
                    views: number;
                    conversions: number;
                    rate: number;
                  }[];
                }
              | {
                  status: Exclude<tsgen.HttpStatus, 200>;
                  data: {
                    message: string;
                  };
                }
            > =>
              engine.process(
                handle("get", p, { id, to }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/video/program/total-screen-rating":
          return {
            get: (
              id: string
            ): Promise<
              | {
                  status: 200;
                  data: {
                    fromDate: string;
                    toDate: string;
                    tsr: number;
                    live: number;
                    recording: number;
                    rebroadcast: number;
                    webRating: number;
                  };
                }
              | {
                  status: Exclude<tsgen.HttpStatus, 200>;
                  data: {
                    message: string;
                  };
                }
            > =>
              engine.process(
                handle("get", p, { id }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/video/program/web-rating":
          return {
            get: (
              id: string,
              to: string
            ): Promise<{
              status: 200;
              data: {
                date: string;
                webRating: number;
              }[];
            }> =>
              engine.process(
                handle("get", p, { id, to }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/service/visitor-frequencies":
          return {
            get: (
              id: string,
              from: string,
              to: string
            ): Promise<{
              status: 200;
              data: {
                date: string;
                clients: string;
              }[];
            }> =>
              engine.process(
                handle(
                  "get",
                  p,
                  { id, from, to },
                  { "Content-Type": "*/*", ...{} }
                )
              )
          } as Endpoint<Response, OBFR, P>;
        case "/service/unique-visitors":
          return {
            get: (
              id: string,
              from: string,
              to: string
            ): Promise<{
              status: 200;
              data: {
                date: string;
                clients: {
                  clientType: string;
                  total: number;
                  dates: {
                    date: string;
                    uniques: number;
                  }[];
                }[];
              }[];
            }> =>
              engine.process(
                handle(
                  "get",
                  p,
                  { id, from, to },
                  { "Content-Type": "*/*", ...{} }
                )
              )
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
    else
      switch (p) {
        case "/video/clip/conversions":
          return {
            get: (
              id: string,
              to?: string
            ): Promise<{
              response: Response;
              data:
                | {
                    status: 200;
                    data: {
                      articleId: string;
                      views: number;
                      conversions: number;
                      rate: number;
                    }[];
                  }
                | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                      message: string;
                    };
                  };
              headers: object;
            }> =>
              engine.process(
                handle("get", p, { id, to }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/video/program/total-screen-rating":
          return {
            get: (
              id: string
            ): Promise<{
              response: Response;
              data:
                | {
                    status: 200;
                    data: {
                      fromDate: string;
                      toDate: string;
                      tsr: number;
                      live: number;
                      recording: number;
                      rebroadcast: number;
                      webRating: number;
                    };
                  }
                | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                      message: string;
                    };
                  };
              headers: object;
            }> =>
              engine.process(
                handle("get", p, { id }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/video/program/web-rating":
          return {
            get: (
              id: string,
              to: string
            ): Promise<{
              response: Response;
              data: {
                status: 200;
                data: {
                  date: string;
                  webRating: number;
                }[];
              };
              headers: object;
            }> =>
              engine.process(
                handle("get", p, { id, to }, { "Content-Type": "*/*", ...{} })
              )
          } as Endpoint<Response, OBFR, P>;
        case "/service/visitor-frequencies":
          return {
            get: (
              id: string,
              from: string,
              to: string
            ): Promise<{
              response: Response;
              data: {
                status: 200;
                data: {
                  date: string;
                  clients: string;
                }[];
              };
              headers: object;
            }> =>
              engine.process(
                handle(
                  "get",
                  p,
                  { id, from, to },
                  { "Content-Type": "*/*", ...{} }
                )
              )
          } as Endpoint<Response, OBFR, P>;
        case "/service/unique-visitors":
          return {
            get: (
              id: string,
              from: string,
              to: string
            ): Promise<{
              response: Response;
              data: {
                status: 200;
                data: {
                  date: string;
                  clients: {
                    clientType: string;
                    total: number;
                    dates: {
                      date: string;
                      uniques: number;
                    }[];
                  }[];
                }[];
              };
              headers: object;
            }> =>
              engine.process(
                handle(
                  "get",
                  p,
                  { id, from, to },
                  { "Content-Type": "*/*", ...{} }
                )
              )
          } as Endpoint<Response, OBFR, P>;
        default:
          return tsgen.unknownPath(allPaths, p);
      }
  };
  return { path: path };
}
