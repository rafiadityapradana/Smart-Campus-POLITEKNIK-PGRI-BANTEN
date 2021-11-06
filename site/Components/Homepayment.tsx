import React from "react";
import {
  useProspectiveInfoQuery,
  usePaymenttypesQuery,
} from "../src/generated/graphql";
import Image from "next/image";

import { useState, useEffect } from "react";
import { BadgeCheckIcon, ArrowsExpandIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useRegistrationTransactionsCreateMutation } from "../src/generated/graphql";
import Cookies from "js-cookie";
export default function Homepayment() {
  const [, PustPayment] = useRegistrationTransactionsCreateMutation();
  const [stateRa, SetststeRa] = useState("");

  const [{ data, fetching }] = usePaymenttypesQuery();
  const Root = useRouter();
  useEffect(() => {
    if (fetching === false)
      if (!data?.paymenttypes) {
        Root.push("/pmb");
      }
  }, [data]);
  const [loading, Setloading] = useState(false);
  const RaChange = (e: any) => {
    SetststeRa(e.target.value);
  };

  const HandleProses = async (e: any) => {
    e.preventDefault();
    if (stateRa !== "" || stateRa !== undefined) {
      Setloading(true);
      try {
        const pay = await PustPayment({ id_payment: stateRa });
        console.log(pay);
        if (pay.data?.RegistrationTransactionsCreate) {
          Cookies.set("trid", pay.data?.RegistrationTransactionsCreate?.tr_id!);
          Root.push("/inforegistration/va");
        }
      } catch (error) {
        return error;
      }

      setTimeout(() => {
        Setloading(false);
      }, 8000);
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 text-gray-700 mb-20">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-4 ">
            <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 text-left mb-10">
              <span className="block"> Informasi</span>
            </h1>
            <ul className="list-disc space-y-2 mt-5">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Silakan pilih pembayaran yang ingin Anda gunakan.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Jangan beritahu nomor pendaftaran Anda kepada siapa pun
                  kecuali pihak POLITEKNIK PGRI BANTEN.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Pembayaran dilakukan sebelumnya 20.00.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Jika Anda telah melewati tanggal kedaluwarsa, pembayaran Anda
                  tidak dapat diproses.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Simpan kwitansi atau bukti pembayaran yang masih berlaku,
                  sebagai jaminan dalam jika sesuatu yang tidak terduga terjadi.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Biaya pendaftaran Anda adalah <b>Rp. 350,000</b>
                </p>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 text-left mb-10">
              <span className="block">Pembayaran</span>
            </h1>
            <form onSubmit={HandleProses}>
              {data?.paymenttypes
                ? data?.paymenttypes?.map((py) => (
                    <div
                      key={py.payment_id}
                      className={
                        "border-2 rounded-2xl cursor-pointer  flex items-center m-2 overflow-hidden " +
                        (stateRa === py.payment_id
                          ? "transition duration-500 transform  scale-110 border-blue-700 ease-in-out -translate-y-0"
                          : "border-gray-300")
                      }
                      onClick={() => {
                        loading ? "" : SetststeRa(py.payment_id);
                      }}
                    >
                      <div className="flex items-center m-6">
                        <input
                          disabled={loading}
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          value={py.payment_id}
                          className="focus:ring-blue-900 h-8 w-8 text-blue-600 border-gray-300"
                          checked={stateRa === py.payment_id}
                          onChange={RaChange}
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-1 w-full block text-sm font-medium text-gray-700 flex space-x-10 ml-9"
                        >
                          <img
                            className="ml-5"
                            src={
                              "http://localhost:4000/public/images/" +
                              py.destination_image
                            }
                            width="50%"
                            height="50%"
                            alt={py.destination_image}
                          />
                        </label>
                      </div>
                    </div>
                  ))
                : ""}

              <button
                type="submit"
                className="w-full flex items-center justify-center mt-4 px-8 py-3 border-transparent font-semibold font-serif  md:text-2xl text-white bg-gray-700 hover:bg-gray-900 md:py-4 md:text-lg md:px-10 rounded-lg "
                disabled={loading}
              >
                {loading ? (
                  <ArrowsExpandIcon className="w-10 h-10 animate-spin" />
                ) : (
                  "Bayar Sekarang"
                )}
              </button>
            </form>
          </div>
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
              <img
                src="../logo.png"
                alt=""
                width="100%"
                className="mt-5 opacity-20"
              />
            </div>
          </div>

          <div className="max-w-full text-white text-center font-medium text-lg font-mono p-5">
            CopyRight {new Date().getFullYear()} By{" "}
            <a href="https://www.instagram.com/rafilatip212/"> RafiLatip212</a>
          </div>
        </div>
      </div>
    </>
  );
}
