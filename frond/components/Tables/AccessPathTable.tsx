import React from "react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { usePathsQuery } from "../../src/generated/graphql";
import { useEffect } from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
interface AccessPathTableProps {
  role: string;
}

const AccessPathTable: React.FC<AccessPathTableProps> = ({ role }) => {
  const [{ data, fetching }] = usePathsQuery();
  useEffect(() => {
    data;
  }, [data]);
  return (
    <div className="table bg-white">
      <div className="flex items-center justify-between m-4">
        <div className="left-0 flex text-md font-semibold items-left text-gray-600">
          {role} Access Path Table
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
        <table className="w-full table-auto overflow-x-scroll">
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
            {data?.paths.map((pt, no) => (
              <tr key={pt.path_url_id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{no + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    id={pt.path_url_id}
                    name={pt.path_url_id}
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.url}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default AccessPathTable;
