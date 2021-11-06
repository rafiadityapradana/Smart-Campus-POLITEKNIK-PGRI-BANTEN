import React from "react";
import { ToRp } from "../../../src/lib/GnllLib";

import { useTotalMoneyMovementSumQuery } from "../../../src/generated/graphql";

interface TotalTrialBalanceTbodyTrProps {
  from: string;
  to: string;
}

const TotalTrialBalanceTbodyTr: React.FC<TotalTrialBalanceTbodyTrProps> = ({
  from,
  to,
}) => {
  const [{ data }] = useTotalMoneyMovementSumQuery({
    variables: { from: from, to: to },
  });
  return (
    <tbody className="bg-gray-50">
      <tr>
        <td
          className="border border-gray-400 font-semibold text-center p-2"
          colSpan={4}
        >
          Total
        </td>
        <td className="border border-gray-400 font-semibold p-2 pl-6">
          {data?.totalmoneymovementsum?.debit
            ? ToRp(data?.totalmoneymovementsum?.debit)
            : "Rp. 0"}
        </td>
        <td className="border border-gray-400 font-semibold p-2 pl-6">
          {data?.totalmoneymovementsum?.kredit
            ? ToRp(data?.totalmoneymovementsum?.kredit)
            : "Rp. 0"}
        </td>
      </tr>
    </tbody>
  );
};
export default TotalTrialBalanceTbodyTr;
