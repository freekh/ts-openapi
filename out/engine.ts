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
