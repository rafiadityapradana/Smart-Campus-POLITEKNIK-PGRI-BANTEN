import {
  SortAscendingIcon,
  DocumentDownloadIcon,
} from "@heroicons/react/outline";
import React from "react";
import { ToRp } from "../../src/lib/GnllLib";

interface InvoiceCardProps {
  dataInv: any;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({ dataInv }) => {
  return (
    <div className="bg-white max-w-5xl shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6  text-right">
        <h3 className="text-3xl leading-6 font-medium text-gray-900">
          #RET{dataInv.merchant_id}
        </h3>
        <p className="mt-1 text-sm font-medium text-indigo-700">
          {dataInv.concerned_id}
        </p>
      </div>
      <div className="border-t border-gray-200 ml-10 mr-10">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm text-gray-900">
              <div className="font-bold">POLITEKNIK PGRI BANTEN</div>
              <div className="text-sm text-gray-800">
                Jl. Raya Cilegon No.KM, RW.12, Serdang, Kec. Kramatwatu, Serang,
                Banten 42161
              </div>
              <div className="text-sm text-gray-800">
                Invoice Type : {dataInv.transaction_type}
              </div>
              <div className="text-sm text-gray-800">
                {dataInv.transaction_time}
              </div>
            </dt>
            <dd className="mt-1 text-right text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="font-bold"> {dataInv.full_name}</div>
              <div className="text-sm text-gray-800"> {dataInv.email}</div>
              <div className="text-sm text-gray-800">
                {dataInv.phone_number}
              </div>
              <div className="text-sm text-gray-800"> {dataInv.address}</div>
            </dd>
          </div>
        </dl>
      </div>
      <div className=" ml-10 mr-10 ">
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
                Va Number
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Payment Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Destination Payment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="w-5 mt-4 text-green-400 hover:text-green-500 transition duration-100 ease-in-out transform hover:bg-gray-200 cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm  text-gray-900">1</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm  text-gray-900">
                  {dataInv.va_number}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm  text-gray-900">
                  {dataInv.payment_type !== "bank_transfer"
                    ? dataInv.payment_type.toUpperCase()
                    : dataInv.payment_type.split("_")[0].toUpperCase() +
                      " " +
                      dataInv.payment_type.split("_")[1].toUpperCase()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm  text-gray-900">
                  {dataInv.destination_name.toUpperCase()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm  text-gray-900">
                  {ToRp(dataInv.amount)} {dataInv.currency}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-200 ml-10 mr-10 ">
        <dl className="flex">
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 font-serif ">
            <dt className="flex">
              <div className="cursor-pointer bg-blue-600 max-w-md flex py-3 px-3 m-1 rounded-xl text-white">
                Send Receipt
                <span className="flex items-center pl-3 ">
                  <SortAscendingIcon
                    className="h-6 text-gray-200 group-hover:text-gray-200"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="cursor-pointer bg-red-600 max-w-md flex py-3 px-3 m-1 rounded-xl text-white">
                PDF
                <span className="flex items-center pl-3 ">
                  <DocumentDownloadIcon
                    className="h-6 text-gray-200 group-hover:text-gray-200"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default InvoiceCard;
