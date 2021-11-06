import React from "react";
import { useGetSubAccountQuery } from "../../src/generated/graphql";
import SubTrialBalanceTbodyTr from "../Tables/Tbody/SubTrialBalanceTbodyTr";

interface SubTrialBalanceCardProps {
  Id: string;
  from: string;
  to: string;
}

const SubTrialBalanceCard: React.FC<SubTrialBalanceCardProps> = ({
  Id,
  from,
  to,
}) => {
  const [{ data }] = useGetSubAccountQuery({ variables: { id: Id } });

  return (
    <>
      {data?.subaccountwhereaccount.map((sa) => (
        <SubTrialBalanceTbodyTr
          key={sa.sub_account_id}
          sa={sa}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};
export default SubTrialBalanceCard;
