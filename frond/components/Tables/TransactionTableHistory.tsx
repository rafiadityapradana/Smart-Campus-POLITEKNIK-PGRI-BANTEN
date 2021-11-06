import React from "react";

import { useEffect } from "react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import TransactionTbodyTr from "./Tbody/TransactionTbodyTr";
import { useGetHistoryTransactionQuery } from "../../src/generated/graphql";

interface TransactionTableHistoryProps {
  concerned_id: string;
}

const TransactionTableHistory: React.FC<TransactionTableHistoryProps> = ({
  concerned_id,
}) => {
  const [{ data, fetching }] = useGetHistoryTransactionQuery({
    variables: { id: concerned_id },
  });
  useEffect(() => {
    data;
  }, [data]);

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
                  Concerned Id
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Transaction Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Va Number
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
                  Transaction Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Transaction Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-md font-bold text-white"
                >
                  Transaction Expired
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.gethistorytransaction.map((ts) => (
                <TransactionTbodyTr ts={ts} key={ts.transaction_id} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default TransactionTableHistory;
