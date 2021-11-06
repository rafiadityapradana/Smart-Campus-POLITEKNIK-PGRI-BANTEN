import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartSquareBarIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  DesktopComputerIcon,
  DocumentTextIcon,
  LibraryIcon,
  MenuIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";

import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Campus = [
  {
    name: "Profil",
    description: "Informasi Tentang Profil Kampus",
    href: "/profile",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Sambutan Direktur",
    description: "Pesan Yang Disampaikan Oleh Pimpinan Kampus Atau Direktur",
    href: "director",
    icon: DocumentTextIcon,
  },

  {
    name: "Program Studi",
    description:
      "Informasi Program Studi atau Jurusan di POLITEKNIK PGRI BANTEN",
    href: "majors",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Gallery",
    description: "Ada foto dan beberapa informasi POLITEKNIK PGRI BANTEN",
    href: "/gallery",
    icon: DatabaseIcon,
  },
  {
    name: " Informasi Karir",
    description: "Peluang Karir Bersama POLITEKNIK PGRI BANTEN",
    href: "/career",
    icon: ChartSquareBarIcon,
  },
  {
    name: " Alumni",
    description: "Alumni POLITEKNIK PGRI BANTEN",
    href: "/graduate",
    icon: UsersIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function Headers() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-screen-2xl mx-auto px-8 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a href="#">
                    <img
                      className="h-10 md:h-20 md:w-20 w-auto sm:h-20 "
                      src="http://localhost:4000/public/site/poltek.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-16">
                <a
                  href="/"
                  className="text-2xl font-semibold font-mono text-gray-900 hover:text-blue-600  "
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-2xl font-semibold font-mono text-gray-900 hover:text-blue-600 "
                >
                  Sistem Informasi
                </a>
                <a
                  href="/information"
                  className="text-2xl font-semibold font-mono text-gray-900 hover:text-blue-600  "
                >
                  Informasi Umun
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-blue-600" : "text-gray-900",
                          "group bg-white rounded-md inline-flex items-center text-2xl font-semibold font-mono "
                        )}
                      >
                        <span>Kampus</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500 "
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {Campus.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-lg font-semibold font-mono text-gray-900 hover:text-gray-700">
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
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="/login"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-semibold font-mono text-white bg-blue-900 hover:bg-blue-800"
                >
                  Masuk
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="poltek.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <LibraryIcon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-lg font-semibold font-mono text-gray-900 hover:text-gray-700">
                          Home
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <DesktopComputerIcon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-lg font-semibold font-mono text-gray-900 hover:text-gray-700">
                          Sistem Informasi
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <ShieldCheckIcon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-lg font-semibold font-mono text-gray-900 hover:text-gray-700">
                          Informasi Umum
                        </span>
                      </a>
                      {Campus.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-lg font-semibold font-mono text-gray-900 hover:text-gray-700">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <a
                    href="/login"
                    className="w-full whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm text-xl font-semibold font-mon text-white bg-blue-900 hover:bg-blue-800 font-mono"
                  >
                    Masuk
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
