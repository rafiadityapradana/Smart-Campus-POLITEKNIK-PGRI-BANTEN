import React from "react";
import {
  useGetAllSubAccountQuery,
  useGetAccountQuery,
} from "../../src/generated/graphql";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

interface SubAccountTableProps {}

const SubAccountTable: React.FC<SubAccountTableProps> = ({}) => {
  const [{ data, fetching }] = useGetAllSubAccountQuery();
  const account = useGetAccountQuery();

  return (
    <>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Account
          </label>
          <select
            id="menustatus"
            name="menustatus"
            autoComplete="menustatus"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          >
            {account[0].data?.getaccount.map((ac) => (
              <option key={ac.account_id} value={ac.account_id}>
                {ac.account_value} - {ac.account_des}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            Sub Account
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
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
            autoComplete="postal-code"
            className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
          />
        </div>
      </div>
      {fetching ? (
        <div className="grid grid-cols-1 p-6 text-gray-600 justify-items-center">
          <ArrowsExpandIcon
            className="h-12 w-12 animate-spin"
            aria-hidden="true"
          />
        </div>
      ) : !data ? (
        <div className="grid grid-cols-1 p-6 text-3xl text-gray-600 justify-items-center">
          Not Data !
        </div>
      ) : (
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
                Sub Account
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.subaccountaccountall.map((sa, no) => (
              <tr key={sa.sub_account_id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{no + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {sa?.account_value ? sa?.account_value : "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {sa.sub_account_value}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">
                    {sa.sub_account_des}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default SubAccountTable;
