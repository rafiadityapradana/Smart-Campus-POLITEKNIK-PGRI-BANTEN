import React from "react";
import { ToRp } from "../../src/ActionTypes";
import { useTotalPricesQuery } from "../../src/generated/graphql";

export default function Total({ ID }: any) {
  const [{ data }] = useTotalPricesQuery({ variables: { id: ID } });

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="w-1/3"></th>
            <th className="w-1/6"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>TOTAL :</th>
            <tr className="font-semibold">
              {data?.totalPrices.Total ? ToRp(data?.totalPrices.Total) : ""}
            </tr>
          </tr>
          <tr>
            <th>DISKON :</th>
            <tr className="font-semibold">
              {" "}
              {data?.totalPrices.discount
                ? ToRp(data?.totalPrices.discount)
                : 0}
            </tr>
          </tr>
          <tr>
            <th>TOTAL INVESTASI :</th>
            <tr className="font-semibold">
              {" "}
              {data?.totalPrices.TotAndDis
                ? ToRp(data?.totalPrices.TotAndDis)
                : ""}{" "}
            </tr>
          </tr>
        </tbody>
      </table>
    </>
  );
}
