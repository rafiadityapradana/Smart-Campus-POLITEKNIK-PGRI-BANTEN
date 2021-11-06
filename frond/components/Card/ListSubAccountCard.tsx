import React from "react";
import { useGetSubAccountQuery } from "../../src/generated/graphql";
import SubAccountTbodyTr from "../Tables/Tbody/SubAccountTbodyTr";

interface ListSubAccountCardProps {
  Id: string;
}

const ListSubAccountCard: React.FC<ListSubAccountCardProps> = ({ Id }) => {
  const [{ data }] = useGetSubAccountQuery({ variables: { id: Id } });

  return (
    <>
      {data?.subaccountwhereaccount.map((sa) => (
        <SubAccountTbodyTr key={sa.sub_account_id} sa={sa} />
      ))}
    </>
  );
};
export default ListSubAccountCard;
//id-5489562e-ff41-4773-8156y-btbq5rd5rbn
//id-548956ce-ff41-4773-8156y-btbq5rd5rhn
