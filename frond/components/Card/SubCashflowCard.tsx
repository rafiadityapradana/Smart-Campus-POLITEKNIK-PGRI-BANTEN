import React from "react";
import { useGetSubAccountQuery } from "../../src/generated/graphql";

import SubCashflowTbodyTr from "../Tables/Tbody/SubCashflowTbodyTr";

interface SubCashflowCardProps {
  Id: string;
  from: string;
  to: string;
}

const SubCashflowCard: React.FC<SubCashflowCardProps> = ({ Id, from, to }) => {
  const [{ data }] = useGetSubAccountQuery({ variables: { id: Id } });

  return (
    <>
      {data?.subaccountwhereaccount.map((sa) => (
        <SubCashflowTbodyTr
          key={sa.sub_account_id}
          sa={sa}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};
export default SubCashflowCard;
