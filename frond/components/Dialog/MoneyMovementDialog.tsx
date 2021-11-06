import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {
  MinusCircleIcon,
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

import {
  useMoneyMovementOneQuery,
  useChangeReturnAmountMoneyMutation,
} from "../../src/generated/graphql";
import { NewDate, ToRp } from "../../src/lib/GnllLib";
import MoneyMovementHistoryTable from "../Tables/MoneyMovementHistoryTable";

interface MoneyMovementDialogProps {
  op: boolean;
  setop: any;
  tsId: any;
}

const MoneyMovementDialog: React.FC<MoneyMovementDialogProps> = ({
  op,
  setop,
  tsId,
}) => {
  const [{ data }] = useMoneyMovementOneQuery({
    variables: { id: tsId },
  });
  const [ret, Setret] = useState(true);
  useEffect(() => {
    data;
  }, [data]);
  const [ReturnAmount, SetReturnAmount] = useState(
    data?.moneymovementone?.money_movement?.return_amount
  );
  const [, ChangeReturnAmount] = useChangeReturnAmountMoneyMutation();
  const ChangeReturn = async () => {
    await ChangeReturnAmount({ id: tsId, mark: ReturnAmount?.toString()! });
    Setret(true);
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
                <div className="h-full w-screen bg-bgdas overflow-y-scroll">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0 ">
                      <div className="grid grid-flow-col ">
                        <div className=" overflow-hidden sm:rounded-lg ">
                          <div className="px-4 py-5 sm:px-6 flex items-center bg-white justify-between">
                            <h3 className="text-lg leading-6 font-medium text-blue-900">
                              Money Movement Information
                            </h3>
                            <div className="flex">
                              <a
                                onClick={() =>
                                  window.open(
                                    `/finance/invoice/${data?.moneymovementone?.money_movement?.money_movement_id}`,
                                    "Popup",
                                    "location,status,scrollbars,resizable,width=1000, height=460"
                                  )
                                }
                              >
                                <EyeIcon
                                  className="h-6 text-blue-500 hover:text-green-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1"
                                  aria-hidden="true"
                                />
                              </a>

                              <MinusCircleIcon
                                className="h-6 text-blue-500 hover:text-red-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1"
                                onClick={() => setop(false)}
                              />
                            </div>
                          </div>
                          {data?.moneymovementone?.money_movement ? (
                            <div className="border-t border-gray-200 bg-blue-100">
                              <div className="grid grid-cols-2">
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg m-3 col-span-4 sm:col-span-1">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                      Transaction Information
                                    </h3>
                                  </div>
                                  <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Account
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone?.money_movement
                                            ?.group_account_value
                                        }{" "}
                                        -{" "}
                                        {
                                          data?.moneymovementone?.money_movement
                                            ?.group_account_des
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Proof
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone?.money_movement
                                            ?.proof
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Amount
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {ToRp(
                                          data?.moneymovementone?.money_movement
                                            ?.amount
                                        )}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Return Amount
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {ret ? (
                                          <div onClick={() => Setret(false)}>
                                            {ToRp(
                                              data?.moneymovementone
                                                ?.money_movement?.return_amount
                                            )}
                                          </div>
                                        ) : (
                                          <div className="flex">
                                            <input
                                              type="text"
                                              name="ret"
                                              id="ret"
                                              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                                              onChange={(e) =>
                                                SetReturnAmount(
                                                  parseInt(e.target.value)
                                                )
                                              }
                                              defaultValue={
                                                data?.moneymovementone
                                                  ?.money_movement
                                                  ?.return_amount
                                              }
                                            />
                                            <CheckCircleIcon
                                              className="h-7 ml-3 mt-2 text-green-600 cursor-pointer"
                                              onClick={() => ChangeReturn()}
                                            />
                                          </div>
                                        )}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Total
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {ToRp(
                                          data?.moneymovementone?.money_movement
                                            ?.amount -
                                            data?.moneymovementone
                                              ?.money_movement?.return_amount
                                        )}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Ref
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.moneymovementone?.money_movement
                                          ?.ref
                                          ? data?.moneymovementone
                                              ?.money_movement?.ref
                                          : "-"}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Type
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone?.money_movement
                                            ?.money_movement_type
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Desc
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone?.money_movement
                                            ?.money_movement_des
                                        }
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                                {/* OKOS */}

                                <div className="bg-white shadow overflow-hidden sm:rounded-lg m-3 col-span-4 sm:col-span-1">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                      Connected Information
                                    </h3>
                                  </div>
                                  <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Full name
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.full_name
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Email
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.email
                                        }
                                      </dd>
                                    </div>

                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Phone Number
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.phone_number
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Gender
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.gender
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Place And Date Of Birth
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.place_of_birth
                                        }
                                        ,
                                        {data?.moneymovementone?.connected_value
                                          ?.date_of_birth
                                          ? NewDate(
                                              data?.moneymovementone
                                                ?.connected_value?.date_of_birth
                                            )
                                          : "-"}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        School Year
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.school_year_value
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Class
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.class_campus_name
                                        }
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Major
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.major_code
                                        }{" "}
                                        -{" "}
                                        {
                                          data?.moneymovementone
                                            ?.connected_value?.major
                                        }
                                      </dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                              <div className="m-3 grid grid-flow-col">
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-3">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                      Payment History
                                    </h3>
                                  </div>
                                  <MoneyMovementHistoryTable Id={tsId} />
                                </div>
                              </div>
                            </div>
                          ) : (
                            "  "
                          )}
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
export default MoneyMovementDialog;
