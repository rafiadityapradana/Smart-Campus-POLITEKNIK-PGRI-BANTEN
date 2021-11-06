import React from "react";
import { useMenulistQuery, usePathsQuery } from "../../src/generated/graphql";
import { useEffect, Fragment } from "react";
import { Transition, Dialog, Tab } from "@headlessui/react";
import SubMenuTable from "../Tables/SubMenuTable";
import MenuTable from "../Tables/MenuTable";
import AccessPathTable from "../Tables/AccessPathTable";
interface RoleDialogProps {
  op: boolean;
  setop: any;
  id: string;
  role: string;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const RoleDialog: React.FC<RoleDialogProps> = ({ op, setop, id, role }) => {
  const paths = usePathsQuery();
  const [{ data, fetching }] = useMenulistQuery({
    variables: { id: id },
  });
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
                <div className="h-full w-screen bg-bgdas ">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0">
                      <Tab.Group>
                        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
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
                            Menu
                          </Tab>
                          <Tab
                            className={({ selected }) =>
                              classNames(
                                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ",
                                selected
                                  ? "bg-white shadow"
                                  : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow"
                              )
                            }
                          >
                            SubMenu
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
                            Access Path
                          </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                          <Tab.Panel className="bg-white rounded-xl">
                            <div className="md:m-5 grid grid-flow-col">
                              <MenuTable
                                data={data}
                                fetching={fetching}
                                paths={paths}
                                id={id}
                                setop={setop}
                                role={role}
                              />
                            </div>
                          </Tab.Panel>
                          <Tab.Panel className="bg-white rounded-xl">
                            <div className="md:m-5 grid grid-flow-col">
                              <SubMenuTable
                                id={id}
                                menudata={data?.menulist}
                                paths={paths[0].data?.paths}
                                role={role}
                              />
                            </div>
                          </Tab.Panel>
                          <Tab.Panel className="bg-white rounded-xl">
                            <div className="md:m-5 grid grid-flow-col">
                              <AccessPathTable role={role} />
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
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
export default RoleDialog;
