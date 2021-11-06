import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";

interface AccountAccountancyDialogProps {
  op: boolean;
  setop: any;
}

import { Tab } from "@headlessui/react";
import { MinusCircleIcon } from "@heroicons/react/outline";
import AccountTable from "../Tables/AccountTable";
import SubAccountTable from "../Tables/SubAccountTable";
import GroupAccountTable from "../Tables/GroupAccountTable";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const AccountAccountancyDialog: React.FC<AccountAccountancyDialogProps> = ({
  op,
  setop,
}) => {
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
          <div className="fixed w-full h-full flex ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen">
                <div className="h-full w-screen bg-bgdas overflow-y-scroll">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0 ">
                      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-center justify-between m-4">
                            <div className="left-0 items-left">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Account
                              </h3>
                              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Personal details and application.
                              </p>
                            </div>
                            <div className="right-0 items-right">
                              <MinusCircleIcon
                                className="h-7 text-red-700 hover:text-red-900 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
                                onClick={() => setop(false)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 sm:px-6">
                          <div className="w-full px-2 sm:px-0">
                            <Tab.Group>
                              <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                                <Tab
                                  className={({ selected }) =>
                                    classNames(
                                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                      selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow "
                                    )
                                  }
                                >
                                  Account
                                </Tab>
                                <Tab
                                  className={({ selected }) =>
                                    classNames(
                                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                      selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow"
                                    )
                                  }
                                >
                                  Sub Account
                                </Tab>
                                <Tab
                                  className={({ selected }) =>
                                    classNames(
                                      "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                                      selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow"
                                    )
                                  }
                                >
                                  Group Account
                                </Tab>
                              </Tab.List>
                              <Tab.Panels className="mt-2 mb-2">
                                <Tab.Panel
                                  className={classNames(
                                    "bg-white rounded-xl p-3",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                  )}
                                >
                                  <AccountTable />
                                </Tab.Panel>
                                <Tab.Panel
                                  className={classNames(
                                    "bg-white rounded-xl p-3",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                  )}
                                >
                                  <SubAccountTable />
                                </Tab.Panel>
                                <Tab.Panel
                                  className={classNames(
                                    "bg-white rounded-xl p-3",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                  )}
                                >
                                  <GroupAccountTable />
                                </Tab.Panel>
                              </Tab.Panels>
                            </Tab.Group>
                          </div>
                        </div>
                      </div>
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
export default AccountAccountancyDialog;
