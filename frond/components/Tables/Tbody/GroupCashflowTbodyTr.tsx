import React from "react";
import { useMoneyMovementSumQuery } from "../../../src/generated/graphql";
import { ToRp } from "../../../src/lib/GnllLib";

interface GroupCashflowTbodyTrProps {
  gpa: any;
  from: string;
  to: string;
}

const GroupCashflowTbodyTr: React.FC<GroupCashflowTbodyTrProps> = ({
  gpa,
  from,
  to,
}) => {
  const [{ data }] = useMoneyMovementSumQuery({
    variables: { id: gpa.group_account_id, from: from, to: to },
  });
  return (
    <>
      <tr className="border border-gray-400">
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400"></td>
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400"></td>
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400">
          {gpa.group_account_value}
        </td>
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400">
          {gpa.group_account_des}
        </td>
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400">
          {data?.moneymovementsum?.blance
            ? ToRp(data?.moneymovementsum?.blance)
            : "Rp. 0"}
        </td>
      </tr>
    </>
  );
};
export default GroupCashflowTbodyTr;
