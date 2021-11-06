import React from "react";
import {
  useGetAccountQuery,
  useSubmitAccountMutation,
} from "../../src/generated/graphql";
import { useState, useEffect } from "react";

import { ArrowsExpandIcon } from "@heroicons/react/outline";
import TrAccount from "./Tr/TrAccount";

import { notify } from "../../src/lib/GnllLib";

interface AccountTableProps {}

const AccountTable: React.FC<AccountTableProps> = ({}) => {
  const [Account, SetAccount] = useState(String);
  const [Desc, SetDesc] = useState(String);
  const [{ data, fetching }] = useGetAccountQuery();
  const [, SubmitNewAccount] = useSubmitAccountMutation();

  const SubmitAccount = async (e: any) => {
    e.preventDefault();
    if (Account !== "" && Account !== null && Desc !== "" && Desc !== null) {
      await SubmitNewAccount({ account: Account, desc: Desc });

      SetAccount("");
      SetDesc("");
      notify(" Created Account Successfully...", "success");
    }
  };
  useEffect(() => {
    Account;
    Desc;
  }, []);
  return (
    <>
      <form onSubmit={(e) => SubmitAccount(e)}>
        <div className="grid grid-cols-4 gap-6 mb-2">
          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              Account
            </label>
            <input
              type="text"
              name="state"
              id="state"
              autoComplete="off"
              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
              defaultValue={Account}
              onChange={(e) => SetAccount(e.target.value)}
            />
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="off"
              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
              defaultValue={Desc}
              onChange={(e) => SetDesc(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-1 mt-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
      {fetching ? (
        <div className="grid grid-cols-1 p-6 text-gray-600 justify-items-center">
          <ArrowsExpandIcon
            className="h-12 w-12 animate-spin"
            aria-hidden="true"
          />
        </div>
      ) : (
        <>
          <table className="w-full table-auto overflow-x-scroll mt-7">
            <thead className="bg-blue-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Account
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.getaccount.map((ac, no) => (
                <TrAccount Dt={ac} key={ac.account_id} No={no} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
export default AccountTable;
