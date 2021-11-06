import React from "react";
import { useListPricesRegisterQuery } from "../../src/generated/graphql";
import { ToRp } from "../../src/ActionTypes";
import Image from "next/image";
export default function Prices({ ID }: any) {
  const [{ data }] = useListPricesRegisterQuery({
    variables: {
      id_major: ID,
    },
  });

  return (
    <>
      <table className="table-auto ">
        <thead>
          <tr>
            <th className="w-1/3"></th>
            <th className="w-1/6"></th>
          </tr>
        </thead>
        {data?.ListPricesRegister?.map((p) => (
          <tbody key={p.list_price_id}>
            <tr>
              <th>{p.list_price_desc}</th>
              <td className="font-semibold">{ToRp(p.list_price_value)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
