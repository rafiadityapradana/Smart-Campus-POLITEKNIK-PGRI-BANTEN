import React from "react";
import { useGetAccountQuery } from "../../src/generated/graphql";

import SubCashflowCard from "./SubCashflowCard";
import { useState } from "react";
import TotalCashflowTbodyTr from "../Tables/Tbody/TotalCashflowTbodyTr";

interface CashflowCardProps {}

const CashflowCard: React.FC<CashflowCardProps> = ({}) => {
  const [{ data }] = useGetAccountQuery();

  const [From, SetForm] = useState(String);
  const [To, SetTo] = useState(String);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between m-4">
          <div className="left-0 items-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Cash flow
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="right-0 flex items-righ">
            <div className="flex grid-cols-6 gap-3">
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  type="date"
                  name="from"
                  id="from"
                  className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                  onChange={(e) => SetForm(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  type="date"
                  name="to"
                  id="to"
                  className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                  onChange={(e) => SetTo(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <button
                  type="button"
                  className="mt-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 ml-1"
                >
                  Pdf
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 m-4">
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
              <th
                scope="col"
                className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
              >
                Balance
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

              <SubCashflowCard Id={ac.account_id} from={From} to={To} />
            </tbody>
          ))}
          <TotalCashflowTbodyTr from={From} to={To} />
        </table>
      </div>
    </div>
  );
};

export default CashflowCard;
