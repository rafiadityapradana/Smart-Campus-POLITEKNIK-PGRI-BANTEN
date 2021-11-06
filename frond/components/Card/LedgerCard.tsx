import React from "react";
import { useLedgerQuery } from "../../src/generated/graphql";
import { ToRp } from "../../src/lib/GnllLib";
import LedgerTbodyTr from "../Tables/Tbody/LedgerTbodyTr";
import { useState } from "react";
interface LedgerCardProps {}
const LedgerCard: React.FC<LedgerCardProps> = ({}) => {
  const [From, SetForm] = useState(String);
  const [To, SetTo] = useState(String);
  const [{ data }] = useLedgerQuery({
    variables: { from: From, to: To },
  });
  let sum = 0;
  for (let i = 0; i < data?.ledger.length!; i++) {
    sum += data?.ledger[i].amount!;
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between m-4">
          <div className="left-0 items-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ledger
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
      <div className="border-t border-gray-200 ">
        <div className="m-4">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-blue-800">
              <tr className="border border-gray-400">
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                >
                  Account
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                >
                  Ref
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                >
                  Debit
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-md font-medium text-white uppercase tracking-wider"
                >
                  Kredit
                </th>
              </tr>
            </thead>
            {data?.ledger.map((lg) => (
              <LedgerTbodyTr lg={lg} key={lg.money_movement_id} />
            ))}
            <tbody className="bg-gray-50">
              <tr>
                <td
                  className="border border-gray-400 font-semibold text-center p-2"
                  colSpan={3}
                >
                  Total
                </td>
                <td
                  className="border border-gray-400 font-semibold p-2 text-center"
                  colSpan={2}
                >
                  {ToRp(sum)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default LedgerCard;
