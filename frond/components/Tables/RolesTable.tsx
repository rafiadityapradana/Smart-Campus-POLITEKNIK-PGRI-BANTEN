import { ArrowsExpandIcon } from "@heroicons/react/outline";
import React from "react";
import { useEffect } from "react";

import RolesTbodyTr from "./Tbody/RolesTbodyTr";

import { useRolesDataQuery } from "../../src/generated/graphql";

interface RolesTableProps {}

const RolesTable: React.FC<RolesTableProps> = () => {
  const [{ data, fetching }] = useRolesDataQuery();
  useEffect(() => {
    data;
  }, [data]);
  return (
    <>
      <div className="table bg-white flex m-3 col-span-4 sm:col-span-1">
        <div className="flex items-center justify-between m-4">
          <div className="left-0 flex text-md font-semibold items-left text-gray-600">
            Roles Table
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
                  Role
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  CreatedAt
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  UpdatedAt
                </th>
                <th scope="col" className="font-bold relative px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.roles?.map((rl, no) => (
                <RolesTbodyTr key={rl.role_id} no={no} role={rl} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default RolesTable;
