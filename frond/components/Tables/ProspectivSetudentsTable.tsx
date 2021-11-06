import { useState, useEffect } from "react";

import { Disclosure } from "@headlessui/react";

import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { useDataprospectivestudentsQuery } from "../../src/generated/graphql";
import { UserAddIcon, PrinterIcon, SaveIcon } from "@heroicons/react/outline";
import ProspectivSetudentsTbodyTr from "./Tbody/ProspectivSetudentsTbodyTr";

const ProspectivSetudentsTable: React.FC = () => {
  const [{ data, fetching }] = useDataprospectivestudentsQuery();
  const [count, setCount] = useState(String);

  useEffect(() => {
    data;
  }, [data]);

  return (
    <>
      <div className="md:m-5 grid grid-flow-col overflow-x-scroll">
        <div className="table bg-white m-3 co">
          <div className="flex items-center justify-between m-4">
            <div className="left-0 flex text-md text-gray-600 font-semibold items-left">
              Prospectiv Setudents Table
            </div>
            <div className="right-0 flex items-righ">
              <input
                name="email"
                type="text"
                autoComplete="off"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-300 focus:border-gray-300 focus:z-10 sm:text-sm mr-5"
                placeholder="Search..."
                onChange={(e) => setCount(e.target.value)}
              />

              <UserAddIcon className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />

              <PrinterIcon className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
              <SaveIcon className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
            </div>
          </div>

          {fetching ? (
            <div className="grid grid-cols-1 p-6 text-gray-600 justify-items-center">
              <ArrowsExpandIcon
                className="h-12 w-12 animate-spin"
                aria-hidden="true"
              />
            </div>
          ) : !data ? (
            <div className="grid grid-cols-1 p-6 text-3xl text-gray-600 justify-items-center">
              Not Data !
            </div>
          ) : (
            <Disclosure>
              <table className="w-full table-auto">
                <thead className="bg-blue-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      School Origin
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Major
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Class Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Wave Registration
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Source Information
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    ></th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {data?.prospectivestudents
                    .filter((user) => {
                      if (count === null || count === "") {
                        return user;
                      } else if (
                        user.full_name
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.major
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.gender
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.school_origin
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.class_campus_name
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.source_information_name
                          .toLowerCase()
                          .includes(count.toLowerCase())
                      ) {
                        return user;
                      }
                    })
                    .map((user) => (
                      <ProspectivSetudentsTbodyTr
                        key={user.prospective_students_id}
                        Data={user}
                      />
                    ))}
                </tbody>
              </table>
            </Disclosure>
          )}
        </div>
      </div>
    </>
  );
};
export default ProspectivSetudentsTable;
