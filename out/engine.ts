import axios, {
  AxiosStatic,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance
} from "axios";

export interface Engine<EngineHandler, EngineResponse> {
  init(host: string): EngineHandler;
  handler(
    engine: EngineHandler
  ): <A>(
    method: string,
    responseType: string,
    path: string,
    params: object,
    body?: A,
    queryParamsFormatter?: (queryParams: object) => string
  ) => EngineResponse;
  // TODO: encode
  // TODO: validate
  process<R>(response: EngineResponse): R;
}

export enum OnlyBodyOrFullResponse {
  OnlyBody = "only-body",
  FullResponse = "full-response"
}

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

export class AxiosEngine implements Engine<AxiosInstance, AxiosResponse> {
  private config?: AxiosRequestConfig;
  constructor(config?: AxiosRequestConfig) {
    this.config = config;
  }
  init(host: string): AxiosInstance {
    return axios.create(this.config);
  }
  handler(
    engine: AxiosInstance
  ): <A>(
    method: string,
    responseType: string,
    path: string,
    params: object,
    body?: A,
    queryParamsFormatter?: ((queryParams: object) => string) | undefined
  ) => AxiosResponse {
    throw new Error("Method not implemented.");
  }
  process<R>(response: AxiosResponse): R {
    throw new Error("Method not implemented.");
  }
}
