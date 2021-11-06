import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RendomMerchantId } from "../../src/lib/GnllLib";

interface AddTransactionDialogProps {
  op: boolean;
  setop: any;
}

const AddTransactionDialog: React.FC<AddTransactionDialogProps> = ({
  op,
  setop,
}) => {
  const [PymentType, SetPymentType] = useState(String);
  const HandelChangePayType = "";
  const HandleSubmitTrans = (e: any) => {
    e.preventDefault();
    const NewData = {
      merchant_id: "G" + RendomMerchantId(),
      va_number: Math.floor(Math.random() * 346) + "" + RendomMerchantId(),
    };
  };
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
              <div className="relative w-screen ">
                <div className="h-full w-screen bg-bgdas overflow-y-scroll">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0 ">
                      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Applicant Information
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Personal details and application.
                          </p>
                        </div>
                        <div className="border-t border-gray-200">
                          <div className="mt-10 sm:mt-0">
                            <div className="md:grid ">
                              <div className="mt-5 md:mt-0 ">
                                <form onSubmit={(e) => HandleSubmitTrans(e)}>
                                  <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 sm:p-6">
                                      <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                          <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Transaction Type
                                          </label>
                                          <select
                                            id="menustatus"
                                            name="menustatus"
                                            autoComplete="menustatus"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                            onChange={(e) =>
                                              SetPymentType(e.target.value)
                                            }
                                          >
                                            <option value="Registration">
                                              Registration
                                            </option>
                                            <option value="Down Payment">
                                              Down Payment
                                            </option>
                                            <option value="Installment">
                                              Installment
                                            </option>
                                            <option value="Etc">Etc</option>
                                          </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                          <label
                                            htmlFor="state"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            State / Province
                                          </label>
                                          <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                                          />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                          <label
                                            htmlFor="postal-code"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            ZIP / Postal
                                          </label>
                                          <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="px-4 py-3 text-right sm:px-6">
                                      <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 m-1"
                                      >
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 m-1"
                                        onClick={() => setop(false)}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
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
export default AddTransactionDialog;
