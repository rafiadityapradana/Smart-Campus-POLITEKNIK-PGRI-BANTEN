import React from "react";
import { useGetGroupAccountQuery } from "../../../src/generated/graphql";

import GroupCashflowTbodyTr from "./GroupCashflowTbodyTr";

interface SubCashflowTbodyTrProps {
  sa: any;
  from: string;
  to: string;
}

const SubCashflowTbodyTr: React.FC<SubCashflowTbodyTrProps> = ({
  sa,
  from,
  to,
}) => {
  const [{ data }] = useGetGroupAccountQuery({
    variables: { id: sa.sub_account_id },
  });

  return (
    <>
      <tr className="border border-gray-400">
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400"></td>
        <td className="px-6 py-2 whitespace-nowrap border border-gray-400">
          {sa.sub_account_value}
        </td>
        <td
          colSpan={4}
          className="px-6 py-2 whitespace-nowrap border border-gray-400"
        >
          {sa.sub_account_des}
        </td>
      </tr>
      {data?.groupaccountwhereaccount.map((gpa: any) => (
        <GroupCashflowTbodyTr
          key={gpa.group_account_id}
          gpa={gpa}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};
export default SubCashflowTbodyTr;
