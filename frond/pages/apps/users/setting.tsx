import React from "react";
import Layout from "../../../components/Layout";

import RolesTable from "../../../components/Tables/RolesTable";

interface SettingRolesProps {}

const SettingRoles: React.FC<SettingRolesProps> = ({}) => {
  return (
    <Layout>
      <div className="md:m-5 grid grid-flow-col">
        <RolesTable />
      </div>
    </Layout>
  );
};
export default SettingRoles;
