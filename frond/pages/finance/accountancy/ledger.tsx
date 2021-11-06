import React from "react";
import LedgerCard from "../../../components/Card/LedgerCard";
import Layout from "../../../components/Layout";

interface LedgerProps {}

const Ledger: React.FC<LedgerProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5">
        <LedgerCard />
      </div>
    </Layout>
  );
};
export default Ledger;
// Cash flow
