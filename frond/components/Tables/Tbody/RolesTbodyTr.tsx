import React from "react";
import RoleDialog from "../../Dialog/RoleDialog";
import { useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/outline";
import { useRoleCgangeStatusMutation } from "../../../src/generated/graphql";

interface RolesTbodyTrProps {
  role: any;
  no: number;
}

const RolesTbodyTr: React.FC<RolesTbodyTrProps> = ({ role, no }) => {
  const [op, setop] = useState(false);
  const [, Change] = useRoleCgangeStatusMutation();
  const ChangeRolesStatus = async (role: string) => {
    const changeRole = await Change({ id: role });
    if (!changeRole.data?.RoleCgangeStatus) return;
    SetActive(Active === "Disable" ? "Enable" : "Disable");
  };
  const [idmenu, Setidmenu] = useState("");
  const OpenMenuAndPath = (e: any) => {
    Setidmenu(e);
    setop(true);
  };
  const [Active, SetActive] = useState(role.role_status);

  return (
    <>
      <RoleDialog op={op} setop={setop} id={idmenu} role={role.role} />
      <tr
        key={role.role_id}
        className="w-5 mt-4 text-green-400 hover:text-green-500 transition duration-100 ease-in-out transform hover:bg-gray-200 cursor-pointer"
      >
        <td
          className="px-6 py-4 whitespace-nowrap"
          onClick={() => OpenMenuAndPath(role.role_id)}
        >
          <div className="text-sm  text-gray-900">{no + 1}</div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onClick={() => OpenMenuAndPath(role.role_id)}
        >
          <div className="text-sm  text-gray-900">{role.role}</div>
        </td>

        <td
          className="px-6 py-4 whitespace-nowrap"
          onClick={() => OpenMenuAndPath(role.role_id)}
        >
          <span
            className={
              "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
              (Active === "Enable"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800")
            }
          >
            {role.role_status}
          </span>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onClick={() => OpenMenuAndPath(role.role_id)}
        >
          <div className="text-sm  text-gray-900">{role.createdAt}</div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onClick={() => OpenMenuAndPath(role.role_id)}
        >
          <div className="text-sm  text-gray-900">{role.updatedAt}</div>
        </td>
        <td className="flex-grow text-right font-bold fixed overflow-hidden">
          {Active === "Enable" ? (
            <LockClosedIcon
              className="w-5 mt-4 text-red-400 hover:text-red-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
              onClick={() => {
                ChangeRolesStatus(role.role_id);
              }}
            />
          ) : (
            <LockOpenIcon
              className="w-5 mt-4 text-green-400 hover:text-green-500 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer"
              onClick={() => {
                ChangeRolesStatus(role.role_id);
              }}
            />
          )}
        </td>
      </tr>
    </>
  );
};
export default RolesTbodyTr;
