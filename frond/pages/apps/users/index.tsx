import { useState, Fragment, useEffect } from "react";
import Layout from "../../../components/Layout";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { Disclosure, Transition, Dialog } from "@headlessui/react";
import {
  UserAddIcon,
  PrinterIcon,
  SaveIcon,
  TrashIcon,
  PencilAltIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import {
  useUsersDataQuery,
  useRolesDataQuery,
} from "../../../src/generated/graphql";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { useNewDataUserMutation } from "../../../src/generated/graphql";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Index: React.FC = () => {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [RoleId, SetRoleId] = useState("");
  const [{ data, fetching }] = useUsersDataQuery();
  const [count, setCount] = useState(String);
  const [open, setop] = useState(false);
  const [newuser, senewuser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const roles = useRolesDataQuery();
  const [, newDataUsers] = useNewDataUserMutation();
  const HandelSubmitUser = async (e: any) => {
    e.preventDefault();
    if (Username !== "" && Password !== "" && Email !== "" && RoleId !== "") {
      await newDataUsers({
        username: Username,
        password: Password,
        email: Email,
        role_id: RoleId,
      });
      senewuser(false);
    }
  };

  useEffect(() => {
    data;
  }, [data]);

  return (
    <Layout>
      <div className="md:m-5 grid grid-flow-col">
        <div className="table bg-white m-3 co">
          <Disclosure>
            {() => (
              <>
                <div className="flex items-center justify-between m-4">
                  <div className="left-0 flex text-md text-gray-600 font-semibold items-left">
                    Users Table
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
                    <Disclosure.Button>
                      <UserAddIcon
                        className="w-5 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
                        onClick={() => senewuser(true)}
                      />
                    </Disclosure.Button>
                    <PrinterIcon className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
                    <SaveIcon className="w-9 ml-3 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
                  </div>
                </div>
                <Disclosure.Panel className="px-4 pb-2">
                  <form className="mb-5" onSubmit={(e) => HandelSubmitUser(e)}>
                    <Transition show={newuser}>
                      <Transition.Child
                        enter="transition ease-in-out duration-1000 transform"
                        enterFrom="translate-x-full"
                        enterTo="-translate-x-0"
                        leave="transition ease-in-out duration-1000 transform"
                        leaveFrom="-translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="username"
                              className="block text-sm font-medium text-gray-700"
                            >
                              UserName
                            </label>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="UserName"
                              autoComplete="off"
                              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                              onChange={(e) => SetUsername(e.target.value)}
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                              autoComplete="off"
                              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                              onChange={(e) => SetEmail(e.target.value)}
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                              autoComplete="off"
                              className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                              onChange={(e) => SetPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <label
                              htmlFor="role"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Role
                            </label>
                            <select
                              id="role"
                              name="role"
                              autoComplete="role"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                              onChange={(e) => SetRoleId(e.target.value)}
                            >
                              <option value="">-</option>
                              {roles[0].data?.roles.map((e) => (
                                <option key={e.role_id} value={e.role_id}>
                                  {e.role}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-span-4 sm:col-span-1">
                            <button
                              type="submit"
                              className="group relative   flex justify-center py-2 px-4 border border-transparent text-md  font-serif rounded-md text-white bg-blue-900 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </Transition.Child>
                    </Transition>
                  </form>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
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
                      Username
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-white"
                    >
                      Role
                    </th>
                    <th scope="col" className="font-bold relative px-6 py-3">
                      <Disclosure.Button>
                        {open ? (
                          <ChevronRightIcon
                            className="h-5 w-5 cursor-pointer text-white hover:text-gray-400 hover:bg-white  rounded-full "
                            onClick={() => {
                              setop(open ? false : true);
                              // console.log(user?.user_id);
                              // console.log(open);
                            }}
                          />
                        ) : (
                          <ChevronLeftIcon
                            className="h-5 w-5 cursor-pointer text-white hover:text-gray-400 hover:bg-white  rounded-full "
                            onClick={() => {
                              setop(open ? false : true);
                              // console.log(user?.user_id);
                              // console.log(open);
                            }}
                          />
                        )}
                      </Disclosure.Button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data?.users
                    .filter((user) => {
                      if (count === null || count === "") {
                        return user;
                      } else if (
                        user.username
                          .toLowerCase()
                          .includes(count.toLowerCase()) ||
                        user.email.toLowerCase().includes(count.toLowerCase())
                      ) {
                        return user;
                      }
                    })
                    .map((user) => (
                      <tr key={user.user_id} className="hover:bg-gray-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm  text-gray-900">
                            {user.username}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={
                              "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                              (user.user_status === "Enable"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800")
                            }
                          >
                            {user.user_status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.role}
                        </td>
                        <td className="flex-grow text-right font-bold fixed overflow-hidden">
                          <Transition show={open}>
                            <Transition.Child
                              enter="transition ease-in-out duration-500 transform"
                              enterFrom="translate-x-full"
                              enterTo="-translate-x-0"
                              leave="transition ease-in-out duration-500 transform"
                              leaveFrom="-translate-x-0"
                              leaveTo="translate-x-full"
                            >
                              <div
                                className={classNames(
                                  "p-5 h-aoto z-10 max-w-lg xl:min-lg flex "
                                )}
                              >
                                <TrashIcon
                                  className="w-5  text-red-400 hover:text-red-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
                                  onClick={() => setIsOpen(true)}
                                />
                                <PencilAltIcon className="w-5  text-blue-400 hover:text-blue-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
                              </div>
                            </Transition.Child>
                          </Transition>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Disclosure>
          )}
        </div>
      </div>

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
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm  text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};
export default Index;
