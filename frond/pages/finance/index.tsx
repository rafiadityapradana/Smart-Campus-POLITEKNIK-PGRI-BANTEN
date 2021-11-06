import React from "react";
import Layout from "../../components/Layout";
import TransactionChart from "../../components/Chart/TransactionChart";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5">
        <TransactionChart />
      </div>
    </Layout>
  );
};
export default index;
