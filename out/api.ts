import * as api0 from "./api.0";
import * as api1 from "./api.1";
import * as tsgen from "./engine";
import { on } from "cluster";

export type Paths = api0.Paths | api1.Paths;
export const allPaths = api0.allPaths.concat(api1.allPaths);
export type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = P extends api0.Paths
  ? api0.Endpoint<Response, OBFR, P>
  : P extends api1.Paths
  ? api1.Endpoint<Response, OBFR, P>
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
  const api0F = api0.api(host, engine);
  const api1F = api1.api(host, engine);
  const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(
    p: P,
    onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen
      .OnlyBodyOrFullResponse.OnlyBody
  ): Endpoint<Response, OBFR, P> => {
    if (api0.isPath(p)) {
      return api0F.path(p, onlyBodyOrFullResponse) as Endpoint<
        Response,
        OBFR,
        P
      >;
    } else if (api1.isPath(p)) {
      return api1F.path(p, onlyBodyOrFullResponse) as Endpoint<
        Response,
        OBFR,
        P
      >;
    } else {
      return tsgen.unknownPath(allPaths, p);
    }
  };
  return {
    path
  };
}
