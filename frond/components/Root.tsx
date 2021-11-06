import React from "react";
import { useAuthQueryDataQuery } from "../src/generated/graphql";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Error from "next/error";

import { RemoveAuthenticationStore } from "../src/lib/MeStore";
import Head from "next/head";
import { Transition } from "@headlessui/react";

interface RootProps {
  children: any;
}
const Root: React.FC<RootProps> = ({ children }) => {
  const root = useRouter();
  const [{ data, fetching }] = useAuthQueryDataQuery();
  useEffect(() => {
    if (fetching === false) {
      if (data) {
        if (data?.userdataAuth) {
          if (!data?.userdataAuth?.user) {
            RemoveAuthenticationStore();
            root.push("/");
          }
          if (!data?.userdataAuth?.token) {
            RemoveAuthenticationStore();
            root.push("/");
          }
        } else {
          RemoveAuthenticationStore();
          root.push("/");
        }
      }
      if (data?.userdataAuth?.user.role?.toLowerCase() === undefined) {
        root.push("/");
      }
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>{data?.userdataAuth?.user.role}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Transition
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {root.asPath.split("/")[1] ===
        data?.userdataAuth?.user.role?.toLowerCase() ? (
          children
        ) : (
          <Error statusCode={404} />
        )}
      </Transition>
    </>
  );
};
export default Root;
