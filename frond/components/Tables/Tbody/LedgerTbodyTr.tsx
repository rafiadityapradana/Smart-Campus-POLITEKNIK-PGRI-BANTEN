import React from "react";
import { NewDate, ToRp } from "../../../src/lib/GnllLib";

interface LedgerTbodyTrProps {
  lg: any;
}
const LedgerTbodyTr: React.FC<LedgerTbodyTrProps> = ({ lg }) => {
  return (
    <tbody className="bg-white">
      <tr>
        <td className=" py-2 whitespace-nowrap border border-gray-400 font-semibold text-center">
          {NewDate(lg.created_at)}
        </td>

        <td className="py-2 whitespace-nowrap border border-gray-400 font-semibold ">
          <div className="pl-3">{lg.group_account_des}</div>
        </td>
        <td className="py-2 whitespace-nowrap border border-gray-400 font-semibold ">
          <div className="pl-3">{lg.ref ? lg.ref : "-"}</div>
        </td>
        <td className="py-2 whitespace-nowrap border border-gray-400 font-semibold ">
          <div className="pl-3">
            {lg.money_movement_type === "Debit"
              ? ToRp(lg.amount - lg.return_amount)
              : "-"}
          </div>
        </td>
        <td className="py-2 whitespace-nowrap border border-gray-400 font-semibold ">
          <div className="pl-3">
            {lg.money_movement_type === "Kredit"
              ? ToRp(lg.amount - lg.return_amount)
              : "-"}
          </div>
        </td>
      </tr>
    </tbody>
  );
};
export default LedgerTbodyTr;
