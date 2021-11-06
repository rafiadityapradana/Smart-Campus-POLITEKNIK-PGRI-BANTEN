import { Cache, QueryInput } from "@urql/exchange-graphcache";

export function BetterUpdateQuery<Result, Query>(
  cache: Cache,
  sid: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(sid, (data) => fn(result, data as any) as any);
}
