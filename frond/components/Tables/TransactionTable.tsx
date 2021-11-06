import React from "react";
import { useGetTransactionsQuery } from "../../src/generated/graphql";
import { useEffect, useState } from "react";
import { ArrowsExpandIcon, FolderAddIcon } from "@heroicons/react/outline";
import TransactionTbodyTr from "./Tbody/TransactionTbodyTr";
import AddTransactionDialogProps from "../Dialog/AddTransactionDialog";
interface TransactionTableProps {}

const TransactionTable: React.FC<TransactionTableProps> = ({}) => {
  const [count, setCount] = useState(String);
  const [{ data, fetching }] = useGetTransactionsQuery();
  useEffect(() => {
    data;
  }, [data]);

  const [op, setop] = useState(false);
  return (
    <>
      <AddTransactionDialogProps op={op} setop={setop} />
      <div className="grid grid-flow-col overflow-x-scroll xl:overflow-hidden">
        <div className="table bg-white flex m-3 col-span-4 sm:col-span-1">
          <div className="flex items-center justify-between m-4">
            <div className="left-0 flex text-md font-semibold items-left text-gray-600">
              Transactions Table
            </div>
            <div className="right-0 flex items-righ">
              <input
                name="tras"
                type="text"
                autoComplete="off"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-300 focus:border-gray-300 focus:z-10 sm:text-sm mr-5"
                placeholder="Search..."
                onChange={(e) => setCount(e.target.value)}
              />
              <FolderAddIcon
                className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
                onClick={() => setop(true)}
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
                {data.gettransaction
                  .filter((ts) => {
                    if (count === null || count === "") {
                      return ts;
                    } else if (
                      ts.concerned_id
                        .toLowerCase()
                        .includes(count.toLowerCase()) ||
                      ts.va_number
                        .toLowerCase()
                        .includes(count.toLowerCase()) ||
                      ts.status_code
                        .toLowerCase()
                        .includes(count.toLowerCase()) ||
                      ts.transaction_type
                        .toLowerCase()
                        .includes(count.toLowerCase()) ||
                      ts.transaction_status
                        .toLowerCase()
                        .includes(count.toLowerCase()) ||
                      ts.currency.toLowerCase().includes(count.toLowerCase())
                    ) {
                      return ts;
                    }
                  })
                  .map((ts) => (
                    <TransactionTbodyTr ts={ts} key={ts.transaction_id} />
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default TransactionTable;
