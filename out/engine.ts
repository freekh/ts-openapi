import axios, {
  AxiosStatic,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance
} from "axios";

export enum OnlyBodyOrFullResponse {
  OnlyBody = "only-body",
  FullResponse = "full-response"
}

// TODO: something more performant (use lib?). Move reg exp to somewhere outside hotpath?
export function pathReplace(
  path: string,
  replacements: { [key: string]: string }
): string {
  return Object.keys(replacements).reduce((path, key) => {
    const re = new RegExp(`{${key}}`, "g");
    return path.replace(re, replacements[key]);
  }, path);
}

export type HttpStatus =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 427
  | 428
  | 429
  | 430
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 509
  | 510
  | 511;

export const HttpStatus = [
  100,
  101,
  102,
  103,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  226,
  300,
  301,
  302,
  303,
  304,
  305,
  306,
  307,
  308,
  400,
  401,
  402,
  403,
  404,
  405,
  406,
  407,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  415,
  416,
  417,
  421,
  422,
  423,
  424,
  425,
  426,
  427,
  428,
  429,
  430,
  431,
  451,
  500,
  501,
  502,
  503,
  504,
  505,
  506,
  507,
  508,
  509,
  510,
  511
];

// We could do something like this, but it seems more complicated, will it be faster or slower to compile, what to do about headers (this seems solvable but still)...
// type PromiseOf<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
// type FullResponseOf<Headers extends object, Response, T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<{ headers: Headers; data: ReturnType<T>, engineResponse: Response }>;

// type FunctionObject = {
//   [name: string]: (...args: any[]) => any
// };

// export type OnlyBodyPromiseOf<U extends FunctionObject> = {
//   [N in keyof U]: PromiseOf<U[N]>
// }

// export type FullResponsePromiseOf<T extends FunctionObject, Response, Headers extends object> = {
//   [P in keyof T]: FullResponseOf<Headers, Response, T[P]>
// }

export function unknownPath<Paths>(paths: string[], path: Paths): never {
  throw Error(`Unknown path ${path}. Valid paths are: ${paths.join(",")}`);
}

export interface Engine<EngineHandler, EngineResponse> {
  init(host: string): EngineHandler;
  handler(
    engine: EngineHandler
  ): <A>(
    method: string,
    path: string,
    queryParams: object,
    header: object,
    body?: A,
    queryParamsFormatter?: (queryParams: object) => string
  ) => EngineResponse;
  // TODO: encode
  // TODO: validate
  process<R>(response: EngineResponse): R;
}

// TODO: remember to flatten status unless in HttpStatus values to closest 100 (ref Hamberg)
export class AxiosEngine implements Engine<AxiosInstance, AxiosResponse> {
  init(host: string): AxiosInstance {
    throw new Error("Method not implemented.");
  }
  handler(engine: AxiosInstance): <A>(method: string, path: string, queryParams: object, header: object, body?: A | undefined, queryParamsFormatter?: ((queryParams: object) => string) | undefined) => AxiosResponse<any> {
    throw new Error("Method not implemented.");
  }
  process<R>(response: AxiosResponse<any>): R {
    throw new Error("Method not implemented.");
  }
  private config?: AxiosRequestConfig;
  constructor(config?: AxiosRequestConfig) {
    this.config = config;
  }
}
