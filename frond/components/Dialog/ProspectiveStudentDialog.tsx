import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";

import {
  useDataprospectivestudentsOneQuery,
  useNoteProspectiveStudentsMutation,
} from "../../src/generated/graphql";
import { ToRp } from "../../src/lib/GnllLib";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

interface ProspectiveStudentDialogProps {
  op: boolean;
  setop: any;
  id: string;
}

const ProspectiveStudentDialog: React.FC<ProspectiveStudentDialogProps> = ({
  op,
  setop,
  id,
}) => {
  const [{ data }] = useDataprospectivestudentsOneQuery({
    variables: { id: id },
  });
  const [NotValue, SetNoteValue] = useState(data?.prospectivestudentsone?.note);
  const [Note, SetNote] = useState(false);
  const [, NoteChange] = useNoteProspectiveStudentsMutation();
  const SaveNote = async () => {
    await NoteChange({ id: id, note: NotValue! });
    SetNote(false);
  };
  useEffect(() => {
    data;
  }, [data]);

  return (
    <Transition.Root show={op} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={op}
        onClose={setop}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity" />
          </Transition.Child>
          <div className="fixed w-full h-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <div className="relative w-screen ">
                <div className="h-full w-screen bg-bgdas overflow-y-scroll ">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0">
                      <Transition
                        show={true}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
                          <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-blue-900">
                              {data?.prospectivestudentsone?.reg_code}
                            </h3>
                            <MinusCircleIcon
                              className="h-6 text-blue-500 hover:text-red-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
                              onClick={() => setop(false)}
                            />
                          </div>
                          <div className="border-t border-gray-200">
                            <dl>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Full Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.full_name}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Place And Date Of Birth
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.place_of_birth.toUpperCase()}
                                  {", "}
                                  {
                                    data?.prospectivestudentsone?.date_of_birth
                                      .toString()
                                      .split("T")[0]
                                  }
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.email}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Gender
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.gender}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Religion
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.religion_name}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Phone Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.phone_number}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Last Education
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.education}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  School Origin
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.school_origin}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Graduation Year
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.graduation_year
                                  }
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.province_name},{" "}
                                  {
                                    data?.prospectivestudentsone
                                      ?.district_or_city_name
                                  }
                                  ,{" "}
                                  {
                                    data?.prospectivestudentsone
                                      ?.postal_code_number
                                  }
                                  , {data?.prospectivestudentsone?.address}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Parents Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.parents_name}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Profession
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.profession}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  House Phone Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.house_phone_number
                                  }
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  School Year
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.school_year_value
                                  }
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Date Come
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {new Date(
                                    data?.prospectivestudentsone?.date_come
                                      .toString()
                                      .split("T")[0]
                                  ) + " "}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Registration Status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.registration_status
                                  }
                                  {data?.prospectivestudentsone
                                    ?.date_registration &&
                                    ", " +
                                      new Date(
                                        data?.prospectivestudentsone?.date_registration
                                          .toString()
                                          .split("T")[0]
                                      ) +
                                      " "}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Registration Wave
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.wave} {", "}
                                  {data?.prospectivestudentsone?.wave_desc}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Class Registration
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.class_campus_name
                                  }
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Major
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {data?.prospectivestudentsone?.major_code}
                                  {", "} {data?.prospectivestudentsone?.major}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Source Information
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {
                                    data?.prospectivestudentsone
                                      ?.source_information_name
                                  }
                                  {data?.prospectivestudentsone
                                    ?.source_information_name ===
                                    "Presentasi" &&
                                    +"," +
                                      data?.prospectivestudentsone
                                        ?.presenter_name!}
                                </dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Total Investment
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  {ToRp(
                                    data?.prospectivestudentsone
                                      ?.total_investment
                                  )}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                  Note
                                </dt>
                                <dd
                                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 cursor-pointer"
                                  onDoubleClick={() => {
                                    SetNote(true);
                                  }}
                                >
                                  {Note ? (
                                    <div className="flex">
                                      <textarea
                                        id="note"
                                        name="note"
                                        rows={3}
                                        className="p-2 border border-gray-300  focus:outline-none focus:ring-indigo-200 focus:border-indigo-200 block w-full shadow-sm sm:text-sm rounded-md"
                                        defaultValue={
                                          data?.prospectivestudentsone?.note
                                            ? data?.prospectivestudentsone?.note
                                            : "-"
                                        }
                                        onChange={(e) =>
                                          SetNoteValue(e.target.value)
                                        }
                                      />
                                      <CheckCircleIcon
                                        className="h-7 text-blue-500 ml-3 hover:text-green-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
                                        onClick={() => SaveNote()}
                                      />
                                    </div>
                                  ) : (
                                    data?.prospectivestudentsone?.note
                                  )}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ProspectiveStudentDialog;
