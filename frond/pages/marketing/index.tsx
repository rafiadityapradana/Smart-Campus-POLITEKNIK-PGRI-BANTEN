import React from "react";
import Layout from "../../components/Layout";

import StudentAcquisitionChart from "../../components/Chart/StudentAcquisitionChart";
import { useAuthQueryDataQuery } from "../../src/generated/graphql";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  const [{ data }] = useAuthQueryDataQuery();
  return (
    <Layout>
      <div className="m-5">
        <div className="max-full px-4 grid items-center grid-cols-1 gap-x-8 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-600 sm:text-2xl">
              Welcome {data?.userdataAuth?.user?.name}
            </h2>
            <p className="mt-4 text-gray-700">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 ">
              <div className=" bg-blue-500 rounded-xl p-4">
                <dt className="font-medium text-white">gghj</dt>
                <dd className="mt-2 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit minus dolorum consequatur similique, dolores,
                  omnis laboriosam, itaque quibusdam nisi deserunt cum doloribus
                  tempore magni vero officiis! Quia omnis quo itaque!
                </dd>
              </div>
              <div className=" bg-indigocover rounded-xl p-4">
                <dt className="font-medium text-white">gghj</dt>
                <dd className="mt-2 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit minus dolorum consequatur similique, dolores,
                  omnis laboriosam, itaque quibusdam nisi deserunt cum doloribus
                  tempore magni vero officiis! Quia omnis quo itaque!
                </dd>
              </div>
              <div className=" bg-red-500 rounded-xl p-4">
                <dt className="font-medium text-white">gghj</dt>
                <dd className="mt-2 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit minus dolorum consequatur similique, dolores,
                  omnis laboriosam, itaque quibusdam nisi deserunt cum doloribus
                  tempore magni vero officiis! Quia omnis quo itaque!
                </dd>
              </div>
              <div className=" bg-blue-800 rounded-xl p-4">
                <dt className="font-medium text-white">gghj</dt>
                <dd className="mt-2 text-sm text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit minus dolorum consequatur similique, dolores,
                  omnis laboriosam, itaque quibusdam nisi deserunt cum doloribus
                  tempore magni vero officiis! Quia omnis quo itaque!
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-1 ">
            <StudentAcquisitionChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
