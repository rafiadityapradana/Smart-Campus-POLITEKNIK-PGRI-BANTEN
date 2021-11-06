import React from "react";
import { Disclosure, Transition, Dialog, Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import { LogoutIcon, UserIcon, XCircleIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import Image from "next/image";
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import SidebarOptios from "./SidebarOptios";
import Root from "./Root";
import { _SEMPEL_ } from "../src/lib/GnllLib";
import { useLogoutMutation } from "../src/generated/graphql";
import { RemoveAuthenticationStore } from "../src/lib/MeStore";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useMenuAppStateUsersQuery,
  useAuthQueryDataQuery,
} from "../src/generated/graphql";
import {
  ViewGridIcon,
  MenuAlt3Icon,
  BellIcon,
  MenuIcon,
} from "@heroicons/react/outline";
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Layout = ({ children }: any) => {
  const [proopen, setOpen] = useState(false);
  const router = useRouter();
  const [, Logout] = useLogoutMutation();
  const [{ data }] = useMenuAppStateUsersQuery();
  const Auth = useAuthQueryDataQuery();
  const HandleLoout = () => {
    RemoveAuthenticationStore();
    Logout();
    router.push("/");
  };
  return (
    <Root>
      <Transition.Root show={proopen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden"
          open={proopen}
          onClose={setOpen}
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
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-transparent overflow-y-scroll">
                    <div className="relative mt-20  max-w-xl">
                      <div className="relative px-4 py-10 bg-white shadow-md rounded-3xl">
                        <div className="max-w-md mx-auto">
                          <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                              <div className="w-56 h-56  mx-auto">
                                <Image
                                  className="rounded-full"
                                  width={500}
                                  height={500}
                                  src={_SEMPEL_}
                                  alt=""
                                />
                              </div>
                            </div>

                            <figcaption className="font-medium pt-6  p-8 max-w-7xl text-center ">
                              <div className="text-gray-800 text-2xl">
                                {Auth[0]?.data?.userdataAuth?.user?.name}
                              </div>
                              <div className="text-gray-500 mt-3">
                                {Auth[0]?.data?.userdataAuth?.user?.email}
                              </div>
                              <div className="text-gray-500">
                                {Auth[0]?.data?.userdataAuth?.user?.role},
                                POLTEK
                              </div>
                            </figcaption>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <button
                            className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-lg mb-5 font-serif rounded-md text-white bg-bghsidebar focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            Close <XCircleIcon className="w-7 p-1" />
                          </button>
                          <button
                            className="group relative w-full  flex justify-center py-2 px-4 border border-transparent text-lg mb-5 font-serif rounded-md text-white bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                            onClick={() => HandleLoout()}
                          >
                            Logout <LogoutIcon className="w-7 p-1" />
                          </button>
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

      <Disclosure>
        {({ open }: any) => (
          <>
            <div className="fixed w-full bg-white shadow-lg z-40">
              <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-12">
                <div className="relative flex items-center justify-between h-14">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Disclosure.Button className="text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none ml-3">
                      {open ? (
                        <MenuAlt3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  <div className=" absolute right-0 flex items-right">
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button className="text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none m-3">
                            <BellIcon className="h-7 w-6" aria-hidden="true" />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-300"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-20 left-3/4  transform -translate-x-3/4  mt-3 px-2 w-screen max-w-sm sm:px-0"
                            >
                              <div className="rounded-lg shadow-md overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {resources.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-blue-100"
                                    >
                                      <SpeakerphoneIcon
                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <button
                      className=" ml-4 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none m-3"
                      onClick={() => setOpen(true)}
                    >
                      <UserIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <main className="flex">
              <div className="fixed overflow-hidden border-gray-100 z-30">
                <Transition show={open}>
                  <Transition.Child
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-500 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div
                      className={classNames(
                        "p-5 mt-14 h-screen z-10 max-w-md xl:min-w-md bg-white "
                      )}
                    >
                      <Link
                        href={
                          "/" +
                          Auth[0]?.data?.userdataAuth?.user?.role?.toLowerCase()
                        }
                      >
                        <div
                          className={classNames(
                            router.asPath ===
                              "/" +
                                Auth[0]?.data?.userdataAuth?.user?.role?.toLowerCase()
                              ? " bg-blue-800 text-white "
                              : " text-gray-500 hover:bg-blue-800 hover:text-white ",
                            "flex items-center mt-2 p-2 pl-4 pr-24  text-sm font-medium font-med cursor-pointer rounded-md space-x-4 "
                          )}
                        >
                          <ViewGridIcon className="block h-4" />
                          <p className="inline-flex "> Dashbord</p>
                        </div>
                      </Link>
                      {data?.menus.map((ms) => (
                        <SidebarOptios
                          sub={ms.menu_type === "Submenu" ? true : false}
                          key={ms.menu_id}
                          icon={ms.menu_icon}
                          menu_name={ms.menu_name}
                          url={ms.url}
                          menu_id={ms.menu_id}
                        />
                      ))}
                    </div>
                  </Transition.Child>
                </Transition>
              </div>
              <ToastContainer
                className="mt-10"
                draggablePercent={60}
                autoClose={5000}
                closeButton={false}
              />
              <div className="max-auto w-screen md:mt-24 mt-20">{children}</div>
            </main>
          </>
        )}
      </Disclosure>
    </Root>
  );
};
export default Layout;
