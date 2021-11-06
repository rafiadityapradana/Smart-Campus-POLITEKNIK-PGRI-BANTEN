import React from "react";
import { useMoneyMovementHistoryQuery } from "../../src/generated/graphql";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import MoneyMovementTbodyTr from "./Tbody/MoneyMovementTbodyTr";
import { useState } from "react";

interface MoneyMovementHistoryTableProps {
  Id: string;
}

const MoneyMovementHistoryTable: React.FC<MoneyMovementHistoryTableProps> = ({
  Id,
}) => {
  const [count, setCount] = useState(String);
  const [{ fetching, data }] = useMoneyMovementHistoryQuery({
    variables: { id: Id },
  });
  return (
    <div className="grid grid-flow-col overflow-x-scroll xl:overflow-hidden">
      <div className="table bg-white flex m-3 col-span-4 sm:col-span-1 ">
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
          <table className="w-full table-auto">
            <thead className="bg-blue-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Proof
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Ref
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
                  Desc
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Type
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Amount
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Return Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Total
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
                  PostedAt
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Posted
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.moneymovementhistory
                .filter((ts) => {
                  if (count === null || count === "") {
                    return ts;
                  } else if (
                    ts.account.toLowerCase().includes(count.toLowerCase()) ||
                    ts.proof.toLowerCase().includes(count.toLowerCase()) ||
                    ts.money_movement_type
                      .toLowerCase()
                      .includes(count.toLowerCase()) ||
                    ts.group_account_value
                      .toLowerCase()
                      .includes(count.toLowerCase()) ||
                    ts.created_at.toLowerCase().includes(count.toLowerCase()) ||
                    ts.group_account_des
                      .toLowerCase()
                      .includes(count.toLowerCase())
                  ) {
                    return ts;
                  }
                })
                .map((ts) => (
                  <MoneyMovementTbodyTr ts={ts} key={ts.money_movement_id} />
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default MoneyMovementHistoryTable;
