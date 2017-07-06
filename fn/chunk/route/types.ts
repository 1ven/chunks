export type Params = { [key: string]: string }
export type Matched = { params?: Params, rest?: string }
export type RouteRequest = Request & Matched
export type RouteChunk = (req: RouteRequest) => Promise<Response>

// TODO: handle cases when `params` and `rest` are not exist
export const isRouteRequest = (arg): arg is RouteRequest => (
  !!arg.rest && !!arg.params
)