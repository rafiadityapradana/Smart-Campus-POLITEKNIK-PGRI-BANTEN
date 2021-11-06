import React from "react";
import Layout from "../../../components/Layout";
import TransactionTable from "../../../components/Tables/TransactionTable";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5">
        <TransactionTable />
      </div>
    </Layout>
  );
};
export default index;
