import { BadgeCheckIcon } from "@heroicons/react/outline";
import React from "react";

export default function HomeProfile() {
  return (
    <>
      <div className="flex py-6 lg:mt-20 justify-center md:justify-center md:space-x-10 text-center">
        <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
          <span className="block">Vision & Mission</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 mb-5 mt-10 ">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 text-left">
              <span className="block">Visi</span>
            </h1>
            <ul className="list-disc space-y-2 mt-5">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Visi Poltek Banten yaitu menjadi perguruan tinggi vokasi yang
                  unggul dalam aplikasi teknologi pada skala nasional di tahun
                  2030.
                </p>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 text-left">
              <span className="block">Misi</span>
            </h1>
            <ul className="list-disc space-y-2 mt-5">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Menyelenggarakan pendidikan vokasi dengan bidang kajian pokok
                  teknologi industri, tata niaga, dan informatika.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Menyelenggarakan melaksanakan penelitian terapan guna
                  meningkatkan kualitas kehidupan masyarakat.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Melaksanakan pengabdian kepada masyarakat atas dasar tanggung
                  jawab sosial demi kepentingan masyarakat.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Melaksanakan kerjasama yang berkelanjutan dengan stakeholder
                  baik secara kerjasama regional, nasional, maupun
                  internasional.
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <BadgeCheckIcon className="flex-shrink-0 h-10 w-10 text-blue-700" />
                </span>
                <p className="ml-2 text-xl">
                  Senantiasa menanamkan akhlak mulia, terampil, disiplin,
                  mandiri, dan kompetitif.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
