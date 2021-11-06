import React from "react";
import {
  ArrowsExpandIcon,
  CheckCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { useMenuSubmitMutation } from "../../src/generated/graphql";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/outline";
interface MenuTableProps {
  fetching: any;
  data: any;
  paths: any;
  setop: any;
  id: string;
  role: string;
}
const MenuTable: React.FC<MenuTableProps> = ({
  fetching,
  data,
  paths,
  setop,
  id,
  role,
}) => {
  const [IdPath, SetIdPath] = useState("-");
  const [MenuName, SetMenuName] = useState("");
  const [MenuIcon, SetMenuIcon] = useState("");
  const [MenuType, SetMenuType] = useState("-");
  const [MenuStatus, SetMenuStatus] = useState("Disable");
  const [, SubmitMenu] = useMenuSubmitMutation();
  const HandleMenuSubmit = async (e: any) => {
    e.preventDefault();
    if (MenuName !== "" && MenuIcon !== "" && MenuStatus !== "") {
      await SubmitMenu({
        id_path: IdPath,
        role_id: id,
        menu_name: MenuName,
        menu_icon: MenuIcon,
        menu_type: MenuType,
        menu_status: MenuStatus,
      });
      SetIdPath("-");
      SetMenuName("");
      SetMenuIcon("");
      SetMenuType("-");
      SetMenuStatus("Disable");
    }
  };
  return (
    <div className="table bg-white ">
      <form onSubmit={(e) => HandleMenuSubmit(e)}>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between m-4">
                <div className="left-0 flex text-md font-semibold items-left text-gray-600">
                  {role} Menu Table
                </div>
                <div className="right-0 flex items-righ">
                  {open && (
                    <button type="submit">
                      <CheckCircleIcon className="w-6 m-2 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
                    </button>
                  )}
                  <Disclosure.Button>
                    <PlusCircleIcon className="w-6 m-2 text-gray-400 hover:text-indigo-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer" />
                  </Disclosure.Button>
                  <XCircleIcon
                    className="w-6 m-2 text-gray-400 hover:text-red-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
                    onClick={() => setop(false)}
                  />
                </div>
              </div>
              <Disclosure.Panel className="px-4 text-gray-500 pb-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="menuname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu Name
                    </label>
                    <input
                      type="text"
                      name="menuname"
                      id="menuname"
                      placeholder="Menu Name"
                      autoComplete="off"
                      className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      onChange={(e) => SetMenuName(e.target.value)}
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="menutype"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu Type
                    </label>
                    <select
                      id="menutype"
                      name="menutype"
                      autoComplete="menutype"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={(e) => SetMenuType(e.target.value)}
                    >
                      <option value="-">-</option>
                      <option value="Submenu">Submenu</option>
                    </select>
                  </div>
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="menustatus"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu Status
                    </label>
                    <select
                      id="menustatus"
                      name="menustatus"
                      autoComplete="menustatus"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={(e) => SetMenuStatus(e.target.value)}
                    >
                      <option value="Disable">Disable</option>
                      <option value="Enable">Enable</option>
                    </select>
                  </div>
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="icon"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu Icon
                    </label>
                    <input
                      type="text"
                      name="icon"
                      id="icon"
                      placeholder="Menu Icon"
                      autoComplete="off"
                      className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      onChange={(e) => SetMenuIcon(e.target.value)}
                    />
                  </div>
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="path"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Path
                    </label>
                    <select
                      id="path"
                      name="path"
                      autoComplete="path"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={(e) => SetIdPath(e.target.value)}
                    >
                      <option value="-">-</option>
                      {paths[0].data?.paths.map((p: any) => (
                        <option key={p.path_url_id} value={p.path_url_id}>
                          {p.url}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </form>
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
        <table className="w-full table-auto overflow-x-scroll">
          <thead className="bg-blue-800">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Menu Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Menu Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                Menu Icon
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
                Path
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.menulist?.map((pt: any, no: number) => (
              <tr key={pt.menu_id} className="hover:bg-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{no + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.menu_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.menu_type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">
                    <i className={pt.menu_icon + " block h-4"} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                      (pt.menu_status === "Enable"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800")
                    }
                  >
                    {pt.menu_status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">
                    {pt.url ? pt.url : "#"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default MenuTable;
