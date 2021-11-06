import React from "react";
import { TrashIcon, EyeIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useMarkProspectiveStudentMutation } from "../../../src/generated/graphql";
import ProspectiveStudentDialog from "../../Dialog/ProspectiveStudentDialog";
interface ProspectivSetudentsTbodyTrProps {
  Data: any;
}
const ProspectivSetudentsTbodyTr: React.FC<ProspectivSetudentsTbodyTrProps> = ({
  Data,
}) => {
  const [Id, SetId] = useState(String);
  const [isOpen, setIsOpen] = useState(false);
  const [mark, Setmark] = useState(Data.mark);
  const [op, setop] = useState(false);
  const [DialogId, SetDialogId] = useState(String);
  const [, MarkProses] = useMarkProspectiveStudentMutation();
  const ShowDialogProspectivSetudents = (e: string) => {
    SetDialogId(e);
    setop(true);
  };
  const HandelDeleteProspectiveStudent = (Id: string) => {
    console.log(Id);
  };

  return (
    <>
      <ProspectiveStudentDialog op={op} setop={setop} id={DialogId} />
      <tr
        onDoubleClick={async () => {
          await MarkProses({
            id: Data.prospective_students_id,
            mark: mark === "Yes" ? "No" : "Yes",
          });
          Setmark(mark === "Yes" ? "No" : "Yes");
        }}
        className={
          mark === "Yes" ? "bg-yellow-200" : "bg-white hover:bg-gray-200"
        }
      >
        <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.full_name}
          </div>
          <div className="text-sm text-blue-500">{Data.reg_code}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.school_origin}
          </div>
          <div className="text-sm text-gray-500">{Data.graduation_year}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.major}
          </div>
          <div className="text-sm text-gray-700">{Data.school_year_value}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.class_campus_name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.wave_desc}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold">
            {Data.source_information_name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap  cursor-pointer">
          <div className="text-sm  text-gray-900 font-semibold flex space-x-2">
            {Data.registration_status === "Yes" && (
              <CheckCircleIcon className="w-5 text-green-500" />
            )}

            <EyeIcon
              className="w-5 text-blue-500"
              onClick={() =>
                ShowDialogProspectivSetudents(Data.prospective_students_id)
              }
            />
            <TrashIcon
              className="w-5 text-red-500"
              onClick={() => {
                SetId(Data.prospective_students_id);
                setIsOpen(true);
              }}
            />
          </div>
        </td>
      </tr>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center shadow-2xl">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity" />
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
                  className="text-lg  leading-6 text-gray-900"
                >
                  Notifications
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are You Sure You Want To Delete Prospective Student Data ?
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm  text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => {
                      HandelDeleteProspectiveStudent(Id);
                      setIsOpen(false);
                    }}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ProspectivSetudentsTbodyTr;
