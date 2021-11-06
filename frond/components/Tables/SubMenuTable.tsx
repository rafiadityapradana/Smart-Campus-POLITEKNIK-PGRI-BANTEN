import React from "react";
import {
  ArrowsExpandIcon,
  CheckCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import {
  useSubmenulistQuery,
  useSubmenuSubmitMutation,
} from "../../src/generated/graphql";
import { Disclosure } from "@headlessui/react";
interface SubMenuTableProps {
  id: string;
  menudata: any;
  paths: any;
  role: string;
}
const SubMenuTable: React.FC<SubMenuTableProps> = ({
  id,
  menudata,
  paths,
  role,
}) => {
  const [menuname, Setmenuname] = useState("");
  const [menusubname, Setmenusubname] = useState("");
  const [url, Seturl] = useState("");
  const [{ data, fetching }] = useSubmenulistQuery({ variables: { id: id } });
  const [, SubmitSubmenu] = useSubmenuSubmitMutation();
  const HandelSubmitSubmenu = async (e: any) => {
    e.preventDefault();
    if (menuname !== "" && menusubname !== "" && url !== "") {
      await SubmitSubmenu({
        role_id: id,
        menu_name: menuname,
        sub_name_menu: menusubname,
        url: url,
      });
      Setmenuname("");
      Setmenusubname("");
      Seturl("");
    }
  };
  useEffect(() => {
    menudata;
    data;
  }, [data]);
  return (
    <div className="table bg-white ">
      <Disclosure>
        {({ open }) => (
          <>
            <form onSubmit={(e) => HandelSubmitSubmenu(e)}>
              <div className="flex items-center justify-between m-4">
                <div className="left-0 flex text-md font-semibold items-left text-gray-600">
                  {role} Submenu Table
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
                </div>
              </div>
              <Disclosure.Panel className="px-4 text-gray-500 pb-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="menu"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu
                    </label>
                    <select
                      id="menu"
                      name="menu"
                      autoComplete="menu"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      onChange={(e) => Setmenuname(e.target.value)}
                    >
                      <option value="">-</option>
                      {menudata.map((m: any) => (
                        <option key={m.menu_id} value={m.menu_id}>
                          {m.menu_name}
                        </option>
                      ))}
                    </select>
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
                      onChange={(e) => Seturl(e.target.value)}
                    >
                      <option value="">-</option>
                      {paths.map((p: any) => (
                        <option key={p.path_url_id} value={p.path_url_id}>
                          {p.url}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="submenu"
                      className="block text-sm font-medium text-gray-700"
                    >
                      SubMenu Name
                    </label>
                    <input
                      type="text"
                      name="submenu"
                      id="submenu"
                      placeholder="SubMenu Name"
                      autoComplete="off"
                      className="mt-1 p-2 border border-gray-300  focus:outline-none focus:ring-gray-400 focus:border-gray-500 block w-full shadow-sm sm:text-sm rounded-md"
                      onChange={(e) => Setmenusubname(e.target.value)}
                    />
                  </div>
                </div>
              </Disclosure.Panel>
            </form>
          </>
        )}
      </Disclosure>
      {fetching ? (
        <div className="grid grid-cols-1 p-6 text-gray-600 justify-items-center ">
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
                Menu Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-bold text-white"
              >
                SubMenu Menu
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
            {data?.submenulist?.map((pt, no) => (
              <tr key={pt.submenu_id} className="hover:bg-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{no + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.menu_name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">
                    {pt.sub_name_menu}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm  text-gray-900">{pt.url}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default SubMenuTable;
