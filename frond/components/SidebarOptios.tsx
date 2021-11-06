import React from "react";
import { useRouter } from "next/dist/client/router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Disclosure, Transition } from "@headlessui/react";

import { useSubmenuQuery } from "../src/generated/graphql";
import { SupportIcon } from "@heroicons/react/outline";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface SidebarOptiosProps {
  url: any;
  icon: string;
  menu_name: string;
  menu_id: string;
  sub: boolean;
}
const SidebarOptios: React.FC<SidebarOptiosProps> = ({
  url,
  menu_name,
  icon,
  sub,
  menu_id,
}) => {
  const [{ data }] = useSubmenuQuery({ variables: { id: menu_id } });
  const router = useRouter();
  return sub ? (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className={classNames(
              open
                ? " bg-gray-300 text-gray-700 "
                : " text-gray-500 hover:bg-blue-800 hover:text-white ",
              "flex justify-between mt-1 p-2 pl-4   text-sm font-medium items-center cursor-pointer rounded-md space-x-4 "
            )}
          >
            <p className="inline-flex ">
              <i className={icon + " mr-4 mt-1"} /> {menu_name}
            </p>
            {open ? (
              <i className=" fas fa-chevron-down" />
            ) : (
              <i className=" fas fa-chevron-right" />
            )}
          </Disclosure.Button>
          <Transition
            show={open}
            as="div"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {data?.submenu?.map((mu) => (
              <Link href={mu.url} key={mu.submenu_id}>
                <Disclosure.Panel
                  as="div"
                  className={classNames(
                    router.asPath === mu.url
                      ? " bg-blue-800 text-white "
                      : " text-gray-500 hover:bg-blue-800 hover:text-white ",
                    "flex items-center mt-1 p-2 pl-7 pr-10  text-sm font-medium cursor-pointer rounded-md space-x-4 "
                  )}
                >
                  <SupportIcon className="h-3" />
                  <p className="inline-flex "> {mu.sub_name_menu}</p>
                </Disclosure.Panel>
              </Link>
            ))}
          </Transition>
        </>
      )}
    </Disclosure>
  ) : (
    <Link href={url}>
      <div
        className={classNames(
          router.asPath === url
            ? " bg-blue-800 text-white "
            : " text-gray-500 hover:bg-blue-800 hover:text-white ",
          "flex items-center mt-1 p-2 pl-4 pr-20  text-sm font-medium cursor-pointer rounded-md space-x-4 "
        )}
      >
        <i className={icon + " block h-4"} />
        <p className="inline-flex "> {menu_name}</p>
      </div>
    </Link>
  );
};

export default SidebarOptios;
