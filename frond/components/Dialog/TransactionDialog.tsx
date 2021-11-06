import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { MinusCircleIcon, EyeIcon } from "@heroicons/react/outline";
import TransactionTableHistory from "../Tables/TransactionTableHistory";
import { useTransactionOneQuery } from "../../src/generated/graphql";
import { ToRp } from "../../src/lib/GnllLib";
import Link from "next/link";

interface TransactionDialogProps {
  op: boolean;
  setop: any;
  tsId: string;
  concernedId: string;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const TransactionDialog: React.FC<TransactionDialogProps> = ({
  op,
  setop,
  tsId,
  concernedId,
}) => {
  const [{ data }] = useTransactionOneQuery({
    variables: { id: tsId },
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
                <div className="h-full w-screen bg-bgdas overflow-y-scroll">
                  <div className="relative px-4 py-5">
                    <button className="text-white bg-white"></button>
                    <div className="w-full px-2 py-16 sm:px-0 ">
                      <div className="grid grid-flow-col ">
                        <div className=" overflow-hidden sm:rounded-lg ">
                          <div className="px-4 py-5 sm:px-6 flex items-center bg-white justify-between">
                            <h3 className="text-lg leading-6 font-medium text-blue-900">
                              Payment Information
                            </h3>
                            <div className="flex">
                              <a
                                onClick={() =>
                                  window.open(
                                    `/finance/invoice/${data?.trasactionone?.transaction_id}`,
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
                          {data?.trasactionone ? (
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
                                        Concerned Id
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.concerned_id}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Payment Type
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone
                                          ?.destination_pay === "bank"
                                          ? data?.trasactionone?.payment_type
                                              .toString()
                                              .split("_")[0]
                                              .toUpperCase() +
                                            " " +
                                            data?.trasactionone?.payment_type
                                              .toString()
                                              .split("_")[1]
                                              .toUpperCase()
                                          : data?.trasactionone?.payment_type.toUpperCase()}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Amount
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {ToRp(data?.trasactionone?.amount) +
                                          " " +
                                          data?.trasactionone?.currency}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Transaction Type
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.transaction_type}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Va Number
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.va_number}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Acquiring Bank
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.destination_name.toUpperCase()}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Transaction Status
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.transaction_status.toUpperCase()}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Transaction Time
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.transaction_time}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Transaction Expired
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {
                                          data?.trasactionone
                                            ?.transaction_expired
                                        }
                                      </dd>
                                    </div>
                                  </dl>
                                </div>

                                {/* OKOS */}

                                <div className="bg-white shadow overflow-hidden sm:rounded-lg m-3 col-span-4 sm:col-span-1">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                      Sender Information
                                    </h3>
                                  </div>
                                  <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Full name
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.full_name}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Gender
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.gender}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Email address
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.email}
                                      </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Phone Number
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.phone_number}
                                      </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                      <dt className="text-sm font-medium text-gray-500">
                                        Address
                                      </dt>
                                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {data?.trasactionone?.address}
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
                                  <TransactionTableHistory
                                    concerned_id={concernedId}
                                  />
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
export default TransactionDialog;
