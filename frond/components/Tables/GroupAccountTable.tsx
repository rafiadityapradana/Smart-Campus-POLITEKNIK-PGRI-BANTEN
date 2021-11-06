import React from "react";

interface GroupAccountTableProps {}

const GroupAccountTable: React.FC<GroupAccountTableProps> = ({}) => {
  return (
    <>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Sub Account
          </label>
          <select
            id="menustatus"
            name="menustatus"
            autoComplete="menustatus"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          >
            <option value="Registration">Registration</option>
            <option value="Down Payment">Down Payment</option>
            <option value="Installment">Installment</option>
            <option value="Etc">Etc</option>
          </select>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            Group Account
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
              Access
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-md font-bold text-white"
            >
              Path
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">ml;'</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">l;''</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm  text-gray-900">ml;'</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default GroupAccountTable;
