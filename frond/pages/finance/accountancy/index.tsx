import React from "react";
import Layout from "../../../components/Layout";
import ListAccountCard from "../../../components/Card/ListAccountCard";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout>
      <div className="m-5 ">
        <ListAccountCard />
      </div>
    </Layout>
  );
};
export default index;
