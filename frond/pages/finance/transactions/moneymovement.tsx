import React from "react";
import Layout from "../../../components/Layout";
import MoneyMovementTable from "../../../components/Tables/MoneyMovementTable";

interface moneymovementProps {}

const moneymovement: React.FC<moneymovementProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5">
        <MoneyMovementTable />
      </div>
    </Layout>
  );
};
export default moneymovement;
