import React from "react";
import { NewDateTime, ToRp } from "../../../src/lib/GnllLib";
import MoneyMovementDialog from "../../Dialog/MoneyMovementDialog";
import { useState } from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import {
  useMarkMoneyMovementMutation,
  usePostedkMoneyMovementMutation,
} from "../../../src/generated/graphql";

interface MoneyMovementTbodyTrProps {
  ts: any;
}

const MoneyMovementTbodyTr: React.FC<MoneyMovementTbodyTrProps> = ({ ts }) => {
  const OpenTrasaction = (trs: string) => {
    SettsId(trs);
    setop(true);
  };
  const [op, setop] = useState(false);
  const [tsId, SettsId] = useState(ts.money_movement_id);
  const [, MarkMutation] = useMarkMoneyMovementMutation();
  const [Mark, SetMark] = useState(ts.mark);
  const SetMarkMutationCange = async (Id: string) => {
    const NewMark = await MarkMutation({
      id: Id,
      mark: Mark === "Yes" ? "No" : "Yes",
    });
    SetMark(NewMark.data?.markmoneymovement?.mark);
  };
  const [Pos, SetPos] = useState(ts.posted);
  const [, PostedToTrue] = usePostedkMoneyMovementMutation();
  const PostedChange = async (Id: string) => {
    await PostedToTrue({ id: Id });

    SetPos(true);
  };

  return (
    <>
      <MoneyMovementDialog op={op} setop={setop} tsId={tsId} />
      <tr
        className={
          "w-5 mt-4 text-green-400 transition duration-100 ease-in-out transform cursor-pointer " +
          (Mark === "Yes" ? " bg-yellow-400" : " bg-white hover:bg-gray-200")
        }
      >
        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ts.proof}</div>
        </td>

        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ts.ref ? ts.ref : "-"}</div>
        </td>

        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ts.group_account_value}</div>
        </td>

        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ts.money_movement_type}</div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ToRp(ts.amount)}</div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">{ToRp(ts.return_amount)}</div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">
            {Pos ? ToRp(ts.amount - ts.return_amount) : "-"}
          </div>
        </td>

        <td
          className="px-6 py-4 whitespace-nowrap"
          onDoubleClick={() => SetMarkMutationCange(ts.money_movement_id)}
        >
          <div className="text-md  text-gray-900">
            {Pos ? NewDateTime(ts?.updated_at) : "-"}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {Pos ? (
            <div className="text-md text-green-600">
              <CheckCircleIcon className="h-6" />
            </div>
          ) : (
            <div className="text-md text-red-600">
              <CheckCircleIcon
                className="h-6"
                onClick={() => PostedChange(ts.money_movement_id)}
              />
            </div>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-md ">
            <InformationCircleIcon
              className="h-6 text-blue-600"
              onClick={() => OpenTrasaction(ts.money_movement_id)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};
export default MoneyMovementTbodyTr;
