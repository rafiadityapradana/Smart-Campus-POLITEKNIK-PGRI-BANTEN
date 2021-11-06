import React from "react";
import Layout from "../../../components/Layout";
import CashflowCard from "../../../components/Card/CashflowCard";

interface CashflowProps {}

const Cashflow: React.FC<CashflowProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5 ">
        <CashflowCard />
      </div>
    </Layout>
  );
};
export default Cashflow;
