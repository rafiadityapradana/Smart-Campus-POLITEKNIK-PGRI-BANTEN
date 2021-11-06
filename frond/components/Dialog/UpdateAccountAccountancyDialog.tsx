import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useSubmitUpdateAccountMutation } from "../../src/generated/graphql";
import { notify } from "../../src/lib/GnllLib";

interface UpdateAccountAccountancyDialogProps {
  op: boolean;
  setop: any;
  Id: any;
}
const UpdateAccountAccountancyDialog: React.FC<UpdateAccountAccountancyDialogProps> =
  ({ op, setop, Id }) => {
    const [Account, SetAccount] = useState(String);
    const [Desc, SetDesc] = useState(String);
    useEffect(() => {
      if (Id) {
        SetAccount(Id?.account_value);
        SetDesc(Id?.account_des);
      }
    }, []);
    const [, SubmitNewAccount] = useSubmitUpdateAccountMutation();
    const SubmitAccount = async (e: any) => {
      e.preventDefault();
      if (Account !== "" && Account !== null && Desc !== "" && Desc !== null) {
        await SubmitNewAccount({
          id: Id?.account_id,
          account: Account,
          desc: Desc,
        });
        setop(false);
        notify(" Updated Account Successfully...", "success");
      }
    };

    return (
      <>
        <Transition.Root show={op} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 overflow-hidden"
            open={Id ? op : false}
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
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="relative w-screen max-w-lg">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        ></button>
                      </div>
                    </Transition.Child>
                    <div className="h-full flex flex-col py-6  overflow-y-scroll">
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="bg-white shadow-xl absolute inset-0 px-4 sm:px-6 mt-9">
                          <form onSubmit={(e) => SubmitAccount(e)}>
                            <div className="left-0 items-left mt-10">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Update Account
                              </h3>
                              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Personal details and application.
                              </p>
                            </div>
                            <div className="grid mt-8 b grid-cols-1 gap-6 mb-2">
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="state"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Account
                                </label>
                                <input
                                  type="text"
                                  name="state"
                                  id="state"
                                  autoComplete="off"
                                  className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                                  defaultValue={Account}
                                  onChange={(e) => SetAccount(e.target.value)}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="postal-code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Description
                                </label>
                                <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autoComplete="off"
                                  className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                                  defaultValue={Desc}
                                  onChange={(e) => SetDesc(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="grid mt-4 grid-cols-4 gap-6 mb-2">
                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <button
                                  type="submit"
                                  className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-md mb-10 font-serif rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                >
                                  Submit
                                </button>
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <button
                                  type="button"
                                  className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-md mb-10 font-serif rounded-md text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                  onClick={() => setop(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    );
  };
export default UpdateAccountAccountancyDialog;
