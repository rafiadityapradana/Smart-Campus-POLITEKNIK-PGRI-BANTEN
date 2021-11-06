import Cookies from "js-cookie";

import { dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import {
  SESSION_ACCESS_TOKEN,
  COOKIE_ACCESS_TOKEN,
  SESSION_REFRESH_TOKEN,
  COOKIE_REFRESH_TOKEN,
  TOKEN_KEY,
} from "../lib/GnllLib";
import {
  LogoutMutation,
  AuthQueryDataQuery,
  AuthQueryDataDocument,
  AuthLoginMutation,
} from "../generated/graphql";
import { BetterUpdateQuery } from "./BetterUpdateQuery";

import {
  NoteProspectiveStudentsMutationVariables,
  ChangeReturnAmountMoneyMutationVariables,
} from "../generated/graphql";
import {
  MenuSubmitMutationVariables,
  SubmenuSubmitMutationVariables,
} from "../generated/graphql";

export const CreateUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    referrerPolicy: "origin-when-cross-origin",
    credentials: "include",
    headers: {
      sid_authtorization:
        SESSION_ACCESS_TOKEN + " " + Cookies.get(COOKIE_ACCESS_TOKEN),
      rid_authtorization:
        SESSION_REFRESH_TOKEN + " " + Cookies.get(COOKIE_REFRESH_TOKEN),
      api_key: TOKEN_KEY,
    },
  } as const,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          removeaccountone: (_result, args, cache, info) => {
            cache.invalidate("Query", "getaccount");
          },
          submitupdateaccount: (_result, args, cache, info) => {
            cache.invalidate("Query", "getaccount");
          },
          submitaccount: (_result, args, cache, info) => {
            cache.invalidate("Query", "getaccount");
          },
          changereturnamountmoney: (_result, args, cache, info) => {
            const { id } =
              args.options as ChangeReturnAmountMoneyMutationVariables;
            cache.invalidate("Query", "moneymovementone", {
              options: {
                id: id as string,
              },
            });
          },
          postedmoneymovement: (_result, args, cache, info) => {
            cache.invalidate("Query", "moneymovement", {
              options: {
                from: "",
                to: "",
              },
            });
          },
          markprospectivestudents: (_result, args, cache, info) => {
            cache.invalidate("Query", "prospectivestudents");
          },
          noteprospectivestudents: (_result, args, cache, info) => {
            const { id } =
              args.options as NoteProspectiveStudentsMutationVariables;
            cache.invalidate("Query", "prospectivestudentsone", {
              options: {
                id: id as string,
              },
            });
          },
          submenusubmit: (_result, args, cache, info) => {
            const { role_id } = args.options as SubmenuSubmitMutationVariables;
            cache.invalidate("Query", "submenulist", {
              options: {
                id: role_id as string,
              },
            });
          },
          menusubmit: (_result, args, cache, info) => {
            const { role_id } = args.options as MenuSubmitMutationVariables;
            cache.invalidate("Query", "menulist", {
              options: {
                id: role_id as string,
              },
            });
          },
          newuser: (_result, args, cache, info) => {
            cache.invalidate("Query", "users");
          },
          logout: (_result, args, cache, info) => {
            BetterUpdateQuery<LogoutMutation, AuthQueryDataQuery>(
              cache,
              {
                query: AuthQueryDataDocument,
              },
              _result,
              () => ({ userdataAuth: null, token: null })
            );
          },
          login: (_result, args, cache, info) => {
            BetterUpdateQuery<AuthLoginMutation, AuthQueryDataQuery>(
              cache,
              {
                query: AuthQueryDataDocument,
              },
              _result,
              (result: any, query: any) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    accessToken: result.login.accessToken,
                    refreshToken: result.login.refreshToken,
                  };
                }
              }
            );
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
