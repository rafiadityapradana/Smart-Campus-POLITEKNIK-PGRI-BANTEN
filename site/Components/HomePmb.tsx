import {
  useListClassOpenRegisterQuery,
  useLisMajorRegisterStateMutation,
} from "../src/generated/graphql";
import React, { useEffect } from "react";

import {
  ArrowsExpandIcon,
  BadgeCheckIcon,
  EmojiSadIcon,
} from "@heroicons/react/outline";

import { useState } from "react";
import { useRouter } from "next/router";
import { Device, setTokenStateClass } from "../src/ActionTypes";
import Image from "next/image";
export default function HomePmb() {
  const [, Req] = useLisMajorRegisterStateMutation();
  const rou = useRouter();

  const [{ data, fetching }] = useListClassOpenRegisterQuery();
  useEffect(() => {
    if (fetching === false) {
      return () => {
        data;
      };
    }
  }, [data]);

  const [loading, Setloading] = useState(false);
  const [classSatet, SetclassSatet] = useState("");
  const [boot, Setboot] = useState(false);
  const [error, seterror] = useState(false);
  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    if (Device().bot !== null) {
      Setboot(true);
      Setloading(false);
    }

    if (
      classSatet === "" ||
      classSatet === null ||
      classSatet === undefined ||
      classSatet === "-Choose Class-"
    ) {
      seterror(true);
    } else {
      Setloading(true);
      try {
        const ResStateCode = await Req({
          id_class_campus: classSatet,
        });

        setTimeout(() => {
          Setloading(false);
        }, 8000);
        if (ResStateCode.data?.ListMajorsRegister) {
          setTokenStateClass(classSatet);
          rou.push("/register");
        }
      } catch (error) {
        return error;
      }
    }
  };
  return (
    <>
      <div className="bg-heropmb bg-cover bg-no-repeat ">
        <div className="bg-gray-600 opacity-90 ">
          <div className="wax-h-max flex flex-col justify-center pt-20">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto mb-20">
              <div className="absolute inset-0 bg-gradient-to-r from-cayn to-blue-500 shadow-lg transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-xl mx-auto">
                  <div className="flex">
                    {boot ? (
                      <>
                        <EmojiSadIcon className="h-20 sm:h-20" />
                        <div className="mt-7 text-3xl font-serif font-semibold ml-4 text-gray-800">
                          YOUR BOOT
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src="/poltek.png"
                          className="h-20 sm:h-20 duration-500 "
                          height="50%"
                          width="50%"
                        />
                        <div className="mt-7 text-3xl font-serif font-semibold ml-4 text-gray-800">
                          PILIH KELAS
                        </div>
                      </>
                    )}
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <p>
                        Langkah-langkah pendaftarannya adalah sebagai berikut:
                      </p>
                      <ul className="list-disc space-y-2">
                        <li className="flex items-start">
                          <span className="h-6 flex items-center sm:h-7">
                            <BadgeCheckIcon className="flex-shrink-0 h-5 w-5 text-cayn" />
                          </span>
                          <p className="ml-2">Pilih kelas yang kamu minati</p>
                        </li>
                        <li className="flex items-start">
                          <span className="h-6 flex items-center sm:h-7">
                            <BadgeCheckIcon className="flex-shrink-0 h-5 w-5 text-cayn" />
                          </span>
                          <p className="ml-2">Mengisi formulir pendaftaran</p>
                        </li>
                        <li className="flex items-start">
                          <span className="h-6 flex items-center sm:h-7">
                            <BadgeCheckIcon className="flex-shrink-0 h-5 w-5 text-cayn" />
                          </span>
                          <p className="ml-2">Membayar biaya pendaftaran</p>
                        </li>
                      </ul>

                      <form onSubmit={HandleSubmit}>
                        <select
                          name="id_presenter"
                          autoComplete="off"
                          className={
                            "appearance-none rounded-none relative block w-full  px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-xl lg:mb-5 " +
                            (error ? "border-red-600 " : "border-gray-600 ")
                          }
                          onChange={(e) => {
                            SetclassSatet(e.target.value);
                          }}
                        >
                          <option>-Pilih Kelas-</option>
                          {data?.ClassOpenRegister.map((cs) => (
                            <option
                              value={cs.class_campus_id}
                              key={cs.class_campus_id}
                            >
                              {cs.class_campus_name}
                            </option>
                          ))}
                        </select>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center px-5 py-3 border-transparent font-semibold font-serif  md:text-2xl text-white bg-gray-700 hover:bg-gray-900 md:py-2 md:text-md md:px-10 rounded-lg mt-5"
                          disabled={loading}
                        >
                          {loading ? (
                            <ArrowsExpandIcon className="w-8 h-8 animate-spin" />
                          ) : (
                            "Lanjutkan"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
