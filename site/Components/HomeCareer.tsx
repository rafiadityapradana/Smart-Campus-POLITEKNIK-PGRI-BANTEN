import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function HomeCareer() {
  return (
    <>
      <div className="flex py-6 lg:mt-20 justify-center md:justify-center md:space-x-10 text-center">
        <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
          <span className="block">Informasi Karir </span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 mb-5 mt-10 ">
        <div className="col-span-6 sm:col-span-3">
          <h1 className="text-2xl tracking-tight font-bold font-sans text-gray-700 text-left flex">
            <BadgeCheckIcon className="flex-shrink-0 h-8 w-8 text-blue-700 mr-5" />
            <span className="block">
              {" "}
              PELUANG USAHA BAGI PELAJAR DAN MAHASISWA
            </span>
          </h1>
          <div className="border-b-2 border-opacity-60  border-blue-400 mt-4 p-5">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-12 sm:col-span-3">
                <Image src="/peluang-usaha-01.jpg" width="100%" height="100%" />
              </div>
              <div className="col-span-12 sm:col-span-3 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                Tak sedikit pelajar atau mahasiswa yang mencari penghasilan
                sambil tetap melanjutkan pendidikannya. Ada yang bekerja paruh
                waktu dan ada juga yang membuka usaha sampingan. <br />
                <br /> Berikut ini enam peluang usaha bagi pelajar dan mahasiswa
                seperti yang Poltek Banten rangkum dari QuickBooks.
                <ul className="list-disc space-y-2 mt-5">
                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Bimbingan Belajar
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Sebagai pelajar atau mahasiswa, Anda bisa berbagi
                      pengetahuan atau keahlian di bidang yang Anda kuasai
                      dengan cara mengajar siswa lain. Anda bisa mengajak
                      beberapa teman Anda yang memiliki minat yang sama untuk
                      memulai bisnis les privat atau bimbingan belajar. Anda
                      dapat menawarkan sesi di malam hari atau hari libur saat
                      usai sekolah atau kuliah.
                    </p>
                  </li>
                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Kedai Makanan atau Minuman
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Jika Anda menyukai dunia kuliner atau senang bereksperimen
                      di dapur, maka Anda layak mencoba bisnis kedai makanan
                      atau minuman. Tentunya menu yang disuguhkan adalah sajain
                      yang Anda kuasai. Selain itu, Anda juga bisa menjual
                      makanan kemasan dari perusahaan makanan lain, sehingga
                      Anda tak perlu membuatnya sendiri.
                    </p>
                  </li>

                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Pakaian atau aksesoris
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Saat ini berjualan barang mellaui sosial media sudah
                      dilakukan banyak orang. Anda selaku pelajar atau mahasiswa
                      bisa memilih menjual produk yang disukai kaum muda seperti
                      pakaian atau aksesoris lainnya seperti tas, sepatu atau
                      jam tangan.
                    </p>
                  </li>

                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Desain dan Pengembangan Web
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Anda bisa meraih penghasilan yang cukup menjanjikan dengan
                      memulai bisnis desain dan pengembangan web. Anda bisa
                      memulai dari proyek sederhana seperti mendesain logo, atau
                      mendesain situs web.
                    </p>
                  </li>

                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Pembersihan Rumah dan Apartemen
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Layanan pembersihan rumah dan apartemen termasuk jasa yang
                      banyak dicari orang. Anda bisa mulai menawarkan jasa
                      pembersihan rumah atau apartemen ke kerabat atau teman
                      Anda. Sebagai awalan, Anda bisa mengajak 1-2 teman Anda
                      untuk menjadi bagian dari tim Anda.
                    </p>
                  </li>

                  <br />
                  <li className="flex items-start">
                    <span className="h-6 flex items-center sm:h-7">
                      <BadgeCheckIcon className="flex-shrink-0 h-8  w-8 text-blue-700" />
                    </span>
                    <p className="ml-2 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Ojek Online dan Delivery
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="ml-10 xl:text-xl md:text-lg font-serif  text-gray-900 font-medium">
                      Jika Anda memiliki motor atau mobil lebih dari satu atau
                      Anda bersama beberapa teman Anda yang memiliki kendaraan
                      bisa mendirikan bisnis transportasi online. Anda bisa
                      menawarkan jasa antar barang atau penumpang.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
