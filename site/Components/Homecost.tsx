import React from "react";
import Prices from "./SpesifikComponent/Prices";
import Total from "./SpesifikComponent/Total";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import {
  useProspectiveInfoQuery,
  useMajorFromClassCampusQuery,
} from "../src/generated/graphql";

export default function Homecost() {
  const [info] = useProspectiveInfoQuery();
  const Major = useMajorFromClassCampusQuery({
    variables: {
      id_class_campus: info?.data?.prospectiveInfo?.id_class_campus!,
    },
  });

  console.log(info);
  return (
    <>
      <div className=" py-6 lg:mt-10 justify-center md:justify-center text-center">
        <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-4xl text-center">
          <span className="block">PERGURUAN TINGGGI</span>
        </h1>

        <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
          <span className="block">POLITEKNIK PGRI BANTEN</span>
        </h1>
        <h1 className="text-1xl tracking-tight font-bold font-sans text-gray-700 sm:text-2xl md:text-2xl text-center">
          <span className="block">
            INVESTASI PROGRAM PENDIDIKAN KULIAH D3{" "}
            {info?.data?.prospectiveInfo?.class_campus?.toLocaleUpperCase()}
          </span>
          <span className="block">
            TAHUN AKADEMIK {info?.data?.prospectiveInfo?.year}
          </span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 sm:mt-8 mb-5 border-t-8 border-green-500">
        <div className="text-xl font-semibold">
          {info?.data?.prospectiveInfo?.wave_desc}
        </div>
        {Major[0]?.data?.majorFromClassCampus
          ? Major[0]?.data?.majorFromClassCampus.map((m) => (
              <div
                key={m.list_major_id}
                className="mt-4 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border border-gray-500"
              >
                <dt className="text-2xl  font-bold text-gray-700 text-center">
                  {m.major}
                </dt>
                <dd className=" mt-1 text-lg sm:mt-0 sm:col-span-2 text-left ">
                  <Prices ID={m.list_major_id} />
                  <hr />
                  <Total ID={m.list_major_id} />
                </dd>
              </div>
            ))
          : ""}

        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 mb-5 mt-10 ">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 text-left">
                <span className="block">Persyaratan Pendaftaran</span>
              </h1>
              <ul className="list-disc space-y-2 mt-5">
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <BadgeCheckIcon className="flex-shrink-0 h-8 w-8 text-blue-700" />
                  </span>
                  <p className="ml-2 text-xl">Lulus SMA atau sederajat</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <BadgeCheckIcon className="flex-shrink-0 h-8 w-8 text-blue-700" />
                  </span>
                  <p className="ml-2 text-xl">Lulus SMA atau sederajat</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
