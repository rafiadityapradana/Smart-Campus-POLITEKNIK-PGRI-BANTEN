import { PlusCircleIcon, ArrowsExpandIcon } from "@heroicons/react/outline";
import React from "react";
import { useGetAccountQuery } from "../../src/generated/graphql";
import ListSubAccountCard from "./ListSubAccountCard";
import { useState } from "react";
import AccountAccountancyDialog from "../Dialog/AccountAccountancyDialog";

interface ListAccountCardProps {}

const ListAccountCard: React.FC<ListAccountCardProps> = ({}) => {
  const [{ data, fetching }] = useGetAccountQuery();
  const [op, setop] = useState(false);
  return (
    <>
      <AccountAccountancyDialog op={op} setop={setop} />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between m-4">
            <div className="left-0 items-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Account Table
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="right-0 items-right">
              <PlusCircleIcon
                className="h-7 text-blue-700 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
                onClick={() => setop(true)}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 m-4">
          {fetching ? (
            <div className="grid grid-cols-1 p-6 text-gray-600 justify-items-center">
              <ArrowsExpandIcon
                className="h-12 w-12 animate-spin"
                aria-hidden="true"
              />
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-800">
                <tr className="border border-gray-400">
                  <th
                    colSpan={3}
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                  >
                    Account
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                  >
                    Account Name
                  </th>
                </tr>
              </thead>
              {data?.getaccount.map((ac) => (
                <tbody className="bg-white" key={ac.account_id}>
                  <tr className="border border-gray-400">
                    <td className="px-6 py-2 whitespace-nowrap border border-gray-400 font-semibold">
                      {ac.account_value}
                    </td>
                    <td
                      colSpan={5}
                      className="px-6 py-2 whitespace-nowrap border border-gray-400 font-semibold"
                    >
                      {ac.account_des.toUpperCase()}
                    </td>
                  </tr>

                  <ListSubAccountCard Id={ac.account_id} />
                </tbody>
              ))}
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ListAccountCard;
