import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useState, Fragment } from "react";
import UpdateAccountAccountancyDialog from "../../Dialog/UpdateAccountAccountancyDialog";

import { Transition, Dialog } from "@headlessui/react";
import { useRemoveAccountMutation } from "../../../src/generated/graphql";
import { notify } from "../../../src/lib/GnllLib";

interface TrAccountProps {
  Dt: any;
  No: number;
}
const TrAccount: React.FC<TrAccountProps> = ({ Dt, No }) => {
  const [op, setop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [, RemoveAccount] = useRemoveAccountMutation();
  const HandelDeleteAccount = async (Id: string) => {
    const Remove = await RemoveAccount({ id: Id });
    if (Remove) {
      notify("Delete Account Successfully ...", "success");
    }
    setIsOpen(false);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsOpen(true)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Information
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-mxl text-gray-500">
                    Are You Sure Delete This Data ?
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex m-1 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => HandelDeleteAccount(Dt.account_id)}
                  >
                    Got it, thanks!
                  </button>
                  <button
                    type="button"
                    className="inline-flex m-1 justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <UpdateAccountAccountancyDialog op={op} setop={setop} Id={Dt} />
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{No + 1}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{Dt?.account_value}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm  text-gray-900">{Dt?.account_des}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm flex">
            <PencilAltIcon
              className="w-5 cursor-pointer text-blue-500 m-1 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  "
              onClick={() => setop(true)}
            />
            <TrashIcon
              className="w-5 cursor-pointer text-red-500 m-1 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
              onClick={() => setIsOpen(true)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};
export default TrAccount;
