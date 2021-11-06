import React from "react";
import { useListMajorSiteQuery } from "../src/generated/graphql";
import { useEffect } from "react";
import Image from "next/image";

export default function HeroProfile() {
  const [{ data, fetching }] = useListMajorSiteQuery();
  useEffect(() => {
    if (fetching === false) {
      return () => {
        data;
      };
    }
  }, [data]);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 z-10 lg:w-3/5 xl:w-3/6 ">
        <Image
          height="100%"
          width="100%"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full  lg:h-full lg:rounded-l-3xl"
          src="hero.jpg"
          alt=""
        />
      </div>
      <div className="max-w-full mx-auto md:pb-32">
        <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32 rounded-r-3xl">
          <main className="mt-10 mx-auto max-w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left transform  ">
              <h1 className="text-4xl tracking-tight font-extrabold font-mono text-gray-900 sm:text-5xl md:text-5xl xl:text-4xl">
                <span className="block text-indigo-600 xl:inline">Tentang</span>

                <span className="block">POLITEKNIK PGRI BANTEN</span>
              </h1>
              <p
                className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg 
              sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 font-serif"
              >
                Politeknik PGRI Banten adalah salah satu perguruan tinggi swasta
                yang berada di Banten sejak tahun 2003 dengan program Diploma 3
                (D3) dan membuka 3 progam studi yaitu{" "}
                {data?.ListMajorSite.map((ls) => (
                  <span key={ls.list_major_id}>{ls.major.toUpperCase()}, </span>
                ))}
                dengan kurikulum yang berbasis industri dimana di daerah Cilegon
                – Banten merupakan kota industri. Kami hadir bertujuan untuk
                membantu lulusan meraih cita – cita menjadi profesional dibidang
                masing – masing. Sebagai pendidikan berbasis vokasi, yaitu
                pendidikan yang berorientasi ke dunia kerja tanpa meninggalkan
                kaidah – kaidah akademis kami terus menerus meningkatkan
                kualitas pendidikan dengan cara menyesuaikan kurikulum dengan
                mengikuti perkembangan yang terjadi di dunia industri
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow ">
                  <a
                    href="/pmb"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-semibold font-serif  md:text-2xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
