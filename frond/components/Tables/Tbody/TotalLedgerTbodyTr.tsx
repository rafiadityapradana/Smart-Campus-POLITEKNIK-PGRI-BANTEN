import React from "react";
import { ToRp } from "../../../src/lib/GnllLib";
import { useState } from "react";
import { useLedgerQuery } from "../../../src/generated/graphql";

interface TotalLedgerTbodyTrProps {}

const TotalLedgerTbodyTr: React.FC<TotalLedgerTbodyTrProps> = ({}) => {
  const [From, SetForm] = useState(String);
  const [To, SetTo] = useState(String);
  const [{ data }] = useLedgerQuery({
    variables: { from: From, to: To },
  });
  let sum = 0;
  for (let i = 0; i < data?.ledger.length!; i++) {
    sum += data?.ledger[i].amount!;
  }
  return (
    <tbody className="bg-gray-50">
      <tr>
        <td
          className="border border-gray-400 font-semibold text-center p-2"
          colSpan={3}
        >
          Total
        </td>
        <td
          className="border border-gray-400 font-semibold p-2 text-center"
          colSpan={2}
        >
          {ToRp(sum)}
        </td>
      </tr>
    </tbody>
  );
};
export default TotalLedgerTbodyTr;
