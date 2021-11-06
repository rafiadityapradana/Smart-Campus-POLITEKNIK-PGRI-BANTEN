import React from "react";
import Layout from "../../../components/Layout";
import TrialBalanceCard from "../../../components/Card/TrialBalanceCard";

interface TrialBalanceProps {}

const TrialBalance: React.FC<TrialBalanceProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5 ">
        <TrialBalanceCard />
      </div>
    </Layout>
  );
};
export default TrialBalance;
