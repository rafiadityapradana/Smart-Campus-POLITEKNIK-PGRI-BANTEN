import React from "react";

import { useTransactionsStateQuery } from "../src/generated/graphql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ToRp } from "../src/ActionTypes";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import Image from "next/image";
export default function HomeVa() {
  const [loading, Setloading] = useState(false);
  const [{ data, fetching }] = useTransactionsStateQuery({
    variables: { id: Cookies.getJSON("trid") },
  });
  const Root = useRouter();
  useEffect(() => {
    if (fetching === false)
      if (!data?.TransactionsState) {
        Root.push("/pmb");
      }
  }, [data]);

  return (
    <>
      <div className=" py-6 lg:mt-10 justify-center md:justify-center text-center ">
        <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-4xl text-center">
          <span className="block">PERGURUAN TINGGI</span>
        </h1>

        <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
          <span className="block">POLITEKNIK PGRI BANTEN</span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-8 sm:px-6 lg:mt-10 sm:mt-8 mt-10 text-center  ">
        <div className=" bg-blue-800 font-mono">
          <h1 className="text-2xl tracking-tight font-bold font-sans text-gray-100 sm:text-2xl md:text-2xl text-center pt-5">
            <span className="block">VIRTUAL ACCOUNT</span>
          </h1>
          <h1 className="text-xl tracking-tight font-bold font-sans text-gray-100 sm:text-xl md:text-xl text-center pb-5">
            <span className="block">
              {data?.TransactionsState?.merchant_id}
            </span>
          </h1>
        </div>
        <div className=" mt-20 text-left text-xl font-sans ">
          <div>
            Silakan lakukan pembayaran sebesar{" "}
            <b>{data?.TransactionsState?.amount}</b> dan dengan nomor virtual
            account <b>9889564051354268</b> sebelum batas waktu pembayaran
            berakhir.
          </div>
          <div className="mt-8">
            Note : Biaya Pendaftaran Mahasiswa Baru <b>PMB2012021624165459</b>
          </div>
        </div>
        <div className="mt-20 mb-20">
          <hr />
          <div className=" overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Jenis Transaksi
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {data?.TransactionsState.payment_type}
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Tujuan TRANSAKSI
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {data?.TransactionsState.destination_pay}{" "}
                    {data?.TransactionsState.destination_name}
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Nomor Virtual Account
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {data?.TransactionsState?.va_number}
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Total Tagihan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {data?.TransactionsState?.amount
                      ? ToRp(data?.TransactionsState?.amount)
                      : 0}
                    {" - "}
                    {data?.TransactionsState.currency}
                  </th>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Batas Waktu Pembayaran
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right lg:text-lg sm:text-sm text-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {data?.TransactionsState?.transaction_expired}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <hr />
          <button
            type="button"
            className="w-full mt-10 flex items-center justify-center px-8 py-3 border-transparent font-semibold font-serif  md:text-2xl text-white bg-blue-800 md:py-4 md:text-lg md:px-10 "
            disabled={loading}
            onClick={() => {
              Setloading(true);
              Cookies.remove("trid");
              Cookies.remove("accessToken");
              Cookies.remove("RegID");

              setTimeout(() => {
                Root.push("/");
                Setloading(false);
              }, 8000);
            }}
          >
            {loading ? (
              <ArrowsExpandIcon className="w-10 h-10 animate-spin" />
            ) : (
              "Back To Home"
            )}
          </button>
        </div>
      </div>

      <div className=" bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-8 sm:px-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 font-mono mt-20">
              <div className=" shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-xl leading-6 font-medium text-white">
                    Informasi
                  </h3>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-medium text-gray-300">
                        Telepon
                      </dt>
                      <dd className="mt-1 text-lg text-gray-400 sm:mt-0 sm:col-span-2">
                        (0254) 8493568
                      </dd>
                    </div>

                    <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-medium text-gray-300">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg text-gray-400 sm:mt-0 sm:col-span-2">
                        contact@politeknikpgribanten.ca.id
                      </dd>
                    </div>
                    <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-medium text-gray-300">
                        Senin-Jum'at
                      </dt>
                      <dd className="mt-1 text-lg text-gray-400 sm:mt-0 sm:col-span-2">
                        08.00–21.00
                      </dd>
                    </div>
                    <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-medium text-gray-300">
                        Sabtu
                      </dt>
                      <dd className="mt-1 text-lg text-gray-400 sm:mt-0 sm:col-span-2">
                        08.00–12.00
                      </dd>
                    </div>
                    <div className=" px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-lg font-medium text-gray-300">
                        Alamat
                      </dt>
                      <dd className="mt-1 text-lg text-gray-400 sm:mt-0 sm:col-span-2">
                        Jl. Raya Cilegon No.KM, RW.12, Serdang, Kec. Kramatwatu,
                        Serang, Banten 42161
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 transition duration-500 ease-in-out transform hover:-translate-y-1 mt-5 hover:scale-110">
              <Image
                src="../logo.png"
                alt=""
                width="100%"
                height="100%"
                className="mt-5 opacity-20"
              />
            </div>
          </div>

          <div className="max-w-full text-white text-center font-medium text-lg font-mono p-5">
            CopyRight {new Date().getFullYear()}
            <a href="https://www.instagram.com/rafilatip212/"> RafiLatip212</a>
          </div>
        </div>
      </div>
    </>
  );
}
