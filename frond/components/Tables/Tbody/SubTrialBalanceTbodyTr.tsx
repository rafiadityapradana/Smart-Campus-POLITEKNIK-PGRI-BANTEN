import React from "react";
import { useGetGroupAccountQuery } from "../../../src/generated/graphql";
import GroupTrialBalanceTbodyTr from "./GroupTrialBalanceTbodyTr";

interface SubTrialBalanceTbodyTrProps {
  sa: any;
  from: string;
  to: string;
}

const SubTrialBalanceTbodyTr: React.FC<SubTrialBalanceTbodyTrProps> = ({
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
      {data?.groupaccountwhereaccount.map((gpa) => (
        <GroupTrialBalanceTbodyTr
          key={gpa.group_account_id}
          gpa={gpa}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};
export default SubTrialBalanceTbodyTr;
//id-5489562e-ff41-4773-8156y-btbq5rd5rbn
// id-b2e0f062-3b6b-4a8a-8e83-8cec981dc10n
