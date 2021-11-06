import React from "react";
import { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import {
  useAuthLoginMutation,
  useAuthQueryDataQuery,
} from "../src/generated/graphql";
import { useRouter } from "next/dist/client/router";
import { SetAuthentication } from "../src/lib/MeStore";

const Index: React.FC = () => {
  const [, Login] = useAuthLoginMutation();
  const [loading, Setloading] = useState(false);
  const [error, Seterror] = useState(false);
  const [errorMsg, SeterrorMsg] = useState("");
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  const RooterPush = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    Setloading(true);
    Seterror(true);
    try {
      const ResLog = await Login({ username: username, password: password });
      if (ResLog) {
        setTimeout(() => {
          if (ResLog?.data) {
            if (ResLog.data?.login) {
              if (ResLog.data.login?.errors) {
                SeterrorMsg(ResLog.data.login?.errors?.message);
              }
              SetAuthentication(ResLog?.data?.login);
              if (ResLog.data.login.user) {
                RooterPush.reload();
              }
            }
            if (ResLog?.error) {
              SeterrorMsg(ResLog?.error.message);
            }
          }
          Setloading(false);
        }, 5000);
      }
    } catch (error) {
      SeterrorMsg(error.message);
    }
  };

  const [{ data }] = useAuthQueryDataQuery();
  useEffect(() => {
    if (data?.userdataAuth) {
      SetAuthentication(data?.userdataAuth);
      if (data?.userdataAuth?.user) {
        RooterPush.push("/" + data?.userdataAuth?.user?.role!.toLowerCase());
      }
    }
  }, [data]);
  return (
    // bg-gradient-to-t from-blue-300 to-blue-400
    <div className="flex flex-col justify-center  ">
      <div
        className={
          "h-screen bg-origin-content flex items-center bg-night bg-center bg-login2 bg-cover bg-no-repeat justify-center"
        }
      >
        <div className=" px-16 max-w-md w-full py-10 bg-white shadow-lg rounded-sm">
          <div className="divide-y divide-gray-200 mt-10">
            <form
              className={"mt-5 space-y-6 " + (loading ? "animate-pulse" : null)}
              onSubmit={handleSubmit}
            >
              <h2 className="mb-2 text-center text-4xl font-serif font-bold text-gray-700">
                Sign in
              </h2>
              <p className="text-center text-md text-red-600 font-mono ">
                {error ? errorMsg : null}
              </p>
              <div className="mb-5">
                <label
                  htmlFor="street-address"
                  className="block text-lg font-serif text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="------"
                  className="ppearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  onChange={(e) => {
                    Setusername(e.target.value);
                  }}
                  disabled={loading}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="street-address"
                  className="block text-lg font-serif text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="------"
                  className="ppearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-300 focus:z-10 sm:text-sm"
                  onChange={(e) => {
                    Setpassword(e.target.value);
                  }}
                  disabled={loading}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-md mb-10 font-serif rounded-md text-white bg-blue-900 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  disabled={loading ? true : false}
                >
                  {loading ? "Loading.." : "Sign In"}

                  <span className="left-0 inset-y-0 flex items-center pl-3 ">
                    <LockClosedIcon
                      className="h-5 w-5 text-gray-200 group-hover:text-gray-200"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center"></div>

            <div className="text-sm">
              <a
                href="#"
                className="font-serif text-gray-500 hover:text-gray-700"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
