import * as tsgen from "./engine";
export const allPaths = ["/pets", "/pets/{petId}"];
export type Paths = "/pets" | "/pets/{petId}";
export type Endpoint<Response, OBFR extends tsgen.OnlyBodyOrFullResponse, P extends Paths> = OBFR extends tsgen.OnlyBodyOrFullResponse.OnlyBody ? P extends "/pets" ? {
    get: (liMit?: number, sort?: "asc" | "desc", o1?: number, oFoo2?: number, oAfdafd3?: number, o4?: number) => Promise<{
        status: 200;
        data: {
            id: number;
            name: string;
            tag: "one" | "two";
        }[];
    } | {
        status: Exclude<tsgen.HttpStatus, 200>;
        data: {
            code: number;
            message: string;
        };
    }>;
    post: () => Promise<{
        status: 201;
    } | {
        status: Exclude<tsgen.HttpStatus, 201>;
        data: {
            code: number;
            message: string;
        };
    }>;
} : P extends "/pets/{petId}" ? {
    get: (petId: string) => Promise<{
        status: 200;
        data: {
            id: number;
            name: string;
            tag: "one" | "two";
        };
    } | {
        status: Exclude<tsgen.HttpStatus, 200>;
        data: {
            code: number;
            message: string;
        };
    }>;
} : never : OBFR extends tsgen.OnlyBodyOrFullResponse.FullResponse ? P extends "/pets" ? {
    get: (liMit?: number, sort?: "asc" | "desc", o1?: number, oFoo2?: number, oAfdafd3?: number, o4?: number) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: number;
                name: string;
                tag: "one" | "two";
            }[];
        } | {
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
        data: {
            status: 201;
        } | {
            status: Exclude<tsgen.HttpStatus, 201>;
            data: {
                code: number;
                message: string;
            };
        };
        headers: object;
    }>;
} : P extends "/pets/{petId}" ? {
    get: (petId: string) => Promise<{
        response: Response;
        data: {
            status: 200;
            data: {
                id: number;
                name: string;
                tag: "one" | "two";
            };
        } | {
            status: Exclude<tsgen.HttpStatus, 200>;
            data: {
                code: number;
                message: string;
            };
        };
        headers: object;
    }>;
} : never : never;
export function api<EngineHandler, Response>(host: string, engine: tsgen.Engine<EngineHandler, Response>): {
    path: <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody>(p: P, onlyBodyOrFullResponse?: OBFR) => Endpoint<Response, OBFR, P>;
} { const engineHandler = engine.init(host); const handle = engine.handler(engineHandler); const path = <P extends Paths, OBFR extends tsgen.OnlyBodyOrFullResponse>(p: P, onlyBodyOrFullResponse: tsgen.OnlyBodyOrFullResponse = tsgen.OnlyBodyOrFullResponse.OnlyBody): Endpoint<Response, OBFR, P> => { if (onlyBodyOrFullResponse === tsgen.OnlyBodyOrFullResponse.OnlyBody)
    switch (p) {
        case "/pets": return { get: (liMit?: number, sort?: "asc" | "desc", o1?: number, oFoo2?: number, oAfdafd3?: number, o4?: number): Promise<{
                status: 200;
                data: {
                    id: number;
                    name: string;
                    tag: "one" | "two";
                }[];
            } | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                    code: number;
                    message: string;
                };
            }> => engine.process(handle("get", p, { liMit, sort }, { "Content-Type": "*/*", Cookie: `o1=${engine.cookieValueEncode(o1)};o-foo2=${engine.cookieValueEncode(oFoo2)};`, ...{ "o-afdafd_3": oAfdafd3, "o4": o4 } })), post: (): Promise<{
                status: 201;
            } | {
                status: Exclude<tsgen.HttpStatus, 201>;
                data: {
                    code: number;
                    message: string;
                };
            }> => engine.process(handle("post", p, {}, { "Content-Type": "*/*", ...{} })) } as Endpoint<Response, OBFR, P>;
        case "/pets/{petId}": return { get: (petId: string): Promise<{
                status: 200;
                data: {
                    id: number;
                    name: string;
                    tag: "one" | "two";
                };
            } | {
                status: Exclude<tsgen.HttpStatus, 200>;
                data: {
                    code: number;
                    message: string;
                };
            }> => engine.process(handle("get", tsgen.pathReplace(p, { petId }), {}, { "Content-Type": "*/*", ...{} })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    }
else
    switch (p) {
        case "/pets": return { get: (liMit?: number, sort?: "asc" | "desc", o1?: number, oFoo2?: number, oAfdafd3?: number, o4?: number): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: number;
                        name: string;
                        tag: "one" | "two";
                    }[];
                } | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                        code: number;
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", p, { liMit, sort }, { "Content-Type": "*/*", Cookie: `o1=${engine.cookieValueEncode(o1)};o-foo2=${engine.cookieValueEncode(oFoo2)};`, ...{ "o-afdafd_3": oAfdafd3, "o4": o4 } })), post: (): Promise<{
                response: Response;
                data: {
                    status: 201;
                } | {
                    status: Exclude<tsgen.HttpStatus, 201>;
                    data: {
                        code: number;
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("post", p, {}, { "Content-Type": "*/*", ...{} })) } as Endpoint<Response, OBFR, P>;
        case "/pets/{petId}": return { get: (petId: string): Promise<{
                response: Response;
                data: {
                    status: 200;
                    data: {
                        id: number;
                        name: string;
                        tag: "one" | "two";
                    };
                } | {
                    status: Exclude<tsgen.HttpStatus, 200>;
                    data: {
                        code: number;
                        message: string;
                    };
                };
                headers: object;
            }> => engine.process(handle("get", tsgen.pathReplace(p, { petId }), {}, { "Content-Type": "*/*", ...{} })) } as Endpoint<Response, OBFR, P>;
        default: return tsgen.unknownPath(allPaths, p);
    } }; return { path: path }; }
