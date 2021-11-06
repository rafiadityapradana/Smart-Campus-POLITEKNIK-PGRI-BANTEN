import React from "react";
import Layout from "../../components/Layout";
import ProspectivSetudentsTable from "../../components/Tables/ProspectivSetudentsTable";

interface ProspectivsetudentsProps {}

const Prospectivsetudents: React.FC<ProspectivsetudentsProps> = ({}) => {
  return (
    <Layout>
      <ProspectivSetudentsTable />
    </Layout>
  );
};
export default Prospectivsetudents;
