import React from "react";
import Root from "../../../components/Root";
import InvoiceCard from "../../../components/Card/InvoiceCard";
import { useGetId } from "../../../src/lib/GnllLib";
import { useTransactionOneQuery } from "../../../src/generated/graphql";
import { useEffect } from "react";

import Error from "next/error";
interface InvoiceProps {}

const Invoice: React.FC<InvoiceProps> = ({}) => {
  const Id = useGetId();

  const [{ data }] = useTransactionOneQuery({
    variables: { id: Id?.toString() },
  });

  useEffect(() => {
    data;
  }, [data]);

  return (
    <>
      {data?.trasactionone ? (
        <Root>
          <div className="m-2 grid justify-items-center">
            <InvoiceCard dataInv={data?.trasactionone} />
          </div>
        </Root>
      ) : (
        <Error statusCode={404} />
      )}
    </>
  );
};
export default Invoice;
