import React from "react";
import { useListMajorSiteQuery } from "../src/generated/graphql";
import { useEffect } from "react";
import { EyeIcon, BadgeCheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function HomeMajors() {
  const [{ data, fetching }] = useListMajorSiteQuery();

  useEffect(() => {
    if (fetching === false) {
      return () => {
        data;
      };
    }
  }, [data]);
  return (
    <>
      <div className=" pt-10">
        <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center">
          <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-800 sm:text-5xl md:text-6xl text-center">
            <span className="block mb-4"> Program Studi</span>
            POLITEKNIK PGRI BANTEN
          </h1>
        </div>
      </div>

      <div className="flex justify-center md:justify-center md:space-x-10 text-center"></div>

      <div className="max-w-screen-2xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 text-gray-700 ">
        <div className="grid grid-cols-3 gap-6 pb-20">
          {data?.ListMajorSite.map((ls) => (
            <div
              className="col-span-4 sm:col-span-1 m-4"
              key={ls.list_major_id}
            >
              <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-b-8  border-blue-700  border-opacity-80  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <Image
                  className="mx-auto rounded-b-xl"
                  src={"http://localhost:4000/public/images/" + ls.major_image}
                  alt=""
                  width="100%"
                  height="100%"
                />
                <div className="pt-6 text-center space-y-7">
                  <blockquote>
                    <p className="lg:text-2xl md:text-xl sm:text-xl text-xl font-semibold m-3 flex">
                      <BadgeCheckIcon className="flex-shrink-0 h-8 w-8 text-blue-700 " />
                      {ls.major.toUpperCase()}
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-gray-600 p-3">{ls.major_desc}</div>
                    <div className="text-gray-300 bg-gray-700 p-2 cursor-pointer hover:rounded-3xl hover:shadow-md flex text-center justify-center font-bold font-lg  mt-5">
                      <EyeIcon className="w-7 space-5" />
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
