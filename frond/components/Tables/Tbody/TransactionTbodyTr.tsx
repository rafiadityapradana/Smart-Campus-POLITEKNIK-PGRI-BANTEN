import React from "react";
import { ToRp } from "../../../src/lib/GnllLib";
import TransactionDialog from "../../Dialog/TransactionDialog";
import { useState } from "react";

interface TransactionTbodyTrProps {
  ts: any;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const TransactionTbodyTr: React.FC<TransactionTbodyTrProps> = ({ ts }) => {
  const OpenTrasaction = (trs: string) => {
    SettsId(trs);
    setop(true);
  };
  const [op, setop] = useState(false);
  const [tsId, SettsId] = useState(ts.transaction_id);
  return (
    <>
      <TransactionDialog
        op={op}
        setop={setop}
        tsId={tsId}
        concernedId={ts.concerned_id}
      />
      <tr
        className="w-5 mt-4 text-green-400 hover:text-green-500 transition duration-100 ease-in-out transform hover:bg-gray-200 cursor-pointer"
        onClick={() => OpenTrasaction(ts.transaction_id)}
      >
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">{ts.concerned_id}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">{ts.transaction_type}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">
            {ts.id_payment === "-" ? "" : ts.va_number}
          </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">{ToRp(ts.amount)}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div
            className={classNames(
              "text-md font-bold  ",
              ts.transaction_status === "pending" && " text-yellow-600",
              ts.transaction_status === "settlement" && " text-green-600",
              ts.transaction_status === "expired" && " text-red-600"
            )}
          >
            {ts.transaction_status.toUpperCase()}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">{ts.transaction_time}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md  text-gray-900">{ts.transaction_expired}</div>
        </td>
      </tr>
    </>
  );
};
export default TransactionTbodyTr;
