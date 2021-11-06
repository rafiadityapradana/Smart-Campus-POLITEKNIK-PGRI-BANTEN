import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function HomeInfo() {
  return (
    <>
      <div className="flex py-6 lg:mt-10 justify-center md:justify-center md:space-x-10 text-center">
        <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
          <span className="block"> Informasi Umum</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 mb-5 mt-10 ">
        <div className="col-span-6 sm:col-span-3">
          <h1 className="text-2xl tracking-tight font-bold font-sans text-gray-700 text-left flex">
            <BadgeCheckIcon className="flex-shrink-0 h-8 w-8 text-blue-700 mr-5" />
            <span className="block"> Ketika Mahasiswa Berprestasi</span>
          </h1>
          <div className="border-b-2 border-opacity-60  border-blue-400 mt-4 p-5">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-12 sm:col-span-3">
                <Image src="/sah.jpg" width="100%" height="100%" />
              </div>
              <div className="col-span-12 sm:col-span-3 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                Hai sahabat Poltek Banten. Hai para pembaca yang dermawan dan
                budiman. Poltek Banten akan sedikit membagikan beberapa dari
                sekian banyak Mahasiswa/I yang berprestasi. Mereka mendapatkan
                prestasi dan penghargaan ini bukanlah hal yang mudah. Mereka
                berjuang dan mengorbankan beberapa hal. Mengorbankan Jiwa &
                Raga, mengorankan waktu istirahat, waktu bermain, waktu bersama
                keluarga, waktu belajar hanya demi membawa satu bendera di
                sebuah ajang. Berikut akan disajikan beberapa mahasiswa tersebut
                yang berprestasi di bidang olahraga. Ayu Sulastri Mahasiswi yang
                satu ini bukanlah nama yang asing lagi bagi mahasiswa –
                mahasiswa POLITEKNIK PGRI BANTEN
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
