import * as api0 from "./api.0";
import * as api1 from "./api.1";
import * as api2 from "./api.2";
import * as api3 from "./api.3";
import * as api4 from "./api.4";
import * as api5 from "./api.5";
import * as api6 from "./api.6";
import * as api7 from "./api.7";
import * as api8 from "./api.8";
import * as api9 from "./api.9";
import * as api10 from "./api.10";
import * as api11 from "./api.11";
import * as api12 from "./api.12";
import * as api13 from "./api.13";
import * as api14 from "./api.14";
import * as api15 from "./api.15";
import * as api16 from "./api.16";
import * as api17 from "./api.17";
import * as api18 from "./api.18";
import * as tsgen from "./engine";

export type Paths =
  | api0.Paths
  | api1.Paths
  | api2.Paths
  | api3.Paths
  | api4.Paths
  | api5.Paths
  | api6.Paths
  | api7.Paths
  | api8.Paths
  | api9.Paths
  | api10.Paths
  | api11.Paths
  | api12.Paths
  | api13.Paths
  | api14.Paths
  | api15.Paths
  | api16.Paths
  | api17.Paths
  | api18.Paths;
export const allPaths = api0.allPaths.concat(api1.allPaths);

export type Endpoint<
  Response,
  OBFR extends tsgen.OnlyBodyOrFullResponse,
  P extends Paths
> = P extends api0.Paths
  ? api0.Endpoint<Response, OBFR, P>
  : P extends api1.Paths
  ? api1.Endpoint<Response, OBFR, P>
  : P extends api1.Paths
  ? api1.Endpoint<Response, OBFR, P>
  : P extends api2.Paths
  ? api2.Endpoint<Response, OBFR, P>
  : P extends api3.Paths
  ? api3.Endpoint<Response, OBFR, P>
  : P extends api4.Paths
  ? api4.Endpoint<Response, OBFR, P>
  : P extends api5.Paths
  ? api5.Endpoint<Response, OBFR, P>
  : P extends api6.Paths
  ? api6.Endpoint<Response, OBFR, P>
  : P extends api7.Paths
  ? api7.Endpoint<Response, OBFR, P>
  : P extends api8.Paths
  ? api8.Endpoint<Response, OBFR, P>
  : P extends api9.Paths
  ? api9.Endpoint<Response, OBFR, P>
  : P extends api10.Paths
  ? api10.Endpoint<Response, OBFR, P>
  : P extends api11.Paths
  ? api11.Endpoint<Response, OBFR, P>
  : P extends api12.Paths
  ? api12.Endpoint<Response, OBFR, P>
  : P extends api13.Paths
  ? api13.Endpoint<Response, OBFR, P>
  : P extends api14.Paths
  ? api14.Endpoint<Response, OBFR, P>
  : P extends api15.Paths
  ? api15.Endpoint<Response, OBFR, P>
  : P extends api16.Paths
  ? api16.Endpoint<Response, OBFR, P>
  : P extends api17.Paths
  ? api17.Endpoint<Response, OBFR, P>
  : P extends api18.Paths
  ? api18.Endpoint<Response, OBFR, P>
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
