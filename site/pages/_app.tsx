import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { cacheExchange, Cache, QueryInput } from "@urql/exchange-graphcache";
import Cookies from "js-cookie";
import {
  AuthStateCodeQuery,
  AuthStateCodeDocument,
} from "../src/generated/graphql";
import { PublicAuthStateMutation } from "../src/generated/graphql";

function BetterUpdateQuery<Result, Query>(
  cache: Cache,
  psid: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(psid, (data) => fn(result, data as any) as any);
}
function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
      headers: {
        psid_authtorization: "bearer " + Cookies.get("accessToken"),
      },
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            PublicAuth: (_result, args, cache, info) => {
              BetterUpdateQuery<PublicAuthStateMutation, AuthStateCodeQuery>(
                cache,
                {
                  query: AuthStateCodeDocument,
                },
                _result,
                (result: any, query: any) => {
                  if (result.PublicAuth.errors) {
                    return query;
                  } else {
                    return {
                      stateToken: result.PublicAuth.stateToken,
                    };
                  }
                }
              );
            },
          },
        },
      }),
      fetchExchange,
    ],
  });
  return (
    <Provider value={client}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}
export default MyApp;
