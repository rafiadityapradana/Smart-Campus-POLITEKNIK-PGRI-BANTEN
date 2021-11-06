import React from "react";
import { useListMajorSiteQuery } from "../src/generated/graphql";
import { useEffect } from "react";
import Image from "next/image";

export default function HomeDirector() {
  const [{ data, fetching }] = useListMajorSiteQuery();
  useEffect(() => {
    if (fetching === false) {
      return () => {
        data;
      };
    }
  }, [data]);
  console.log(data?.ListMajorSite.length);
  return (
    <>
      <div className="relative bg-white overflow-hidden bg-heroreg bg-center bg-cover bg-blue-700 ">
        <div className="wax-h-xl flex flex-col justify-center pt-20">
          <div className="container mx-auto px-4">
            <div className="relative mb-20">
              <div className="absolute inset-0 bg-gradient-to-r from-cayn to-blue-500 shadow-lg transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-4xl mx-auto">
                  <div className="flex">
                    <Image
                      src="/poltek.png"
                      className="h-20 sm:h-20 duration-500 animate-bounce"
                      height="100%"
                      width="100%"
                    />
                    <div className=" lg:text-3xl md:text-2xl font-serif font-semibold ml-4 text-gray-800">
                      Sambuatan Direktur <br /> POLITEKNIK PGRI BANTEN
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <p>Assalamu’alaikum Wr. Wb </p>
                      <br />
                      <p>
                        Teriring salam dan do’a semoga Allah SWT – Tuhan Yang
                        Maha Esa – senantiasa melimpahkan Rahmat dan Hidayah-Nya
                        kepada kita semua dalam menjalankan kegiatan kita
                        sehari-hari.
                      </p>
                      <br />{" "}
                      <p>
                        Merupakan kebahagian bagi kami dapat hadir ditengah
                        tengah masyarakat yang sedang giat membangun bangsa yang
                        salah satunya melalui pembangunan pendidikan. Semoga
                        dengan hadirnya web ini, Politeknik PGRI Banten dapat
                        menyampaikan informasi-informasi yang berguna bagi
                        masyarakat.
                      </p>
                      <br />{" "}
                      <p>
                        Politeknik PGRI Banten merupakan perguruan tinggi swasta
                        yang berdiri sejak tahun 2003 dengan jenjang pendidikan
                        diploma 3 (D3) dan membuka {data?.ListMajorSite.length}{" "}
                        program studi yakni{" "}
                        {data?.ListMajorSite.map((ls) => (
                          <span key={ls.list_major_id}>
                            {ls.major.toUpperCase()},{" "}
                          </span>
                        ))}
                      </p>
                      <br />
                      <p>
                        {" "}
                        Politeknik PGRI Banten merupakan perguruan tinggi vokasi
                        dan menerapkan konsep pendidikan yang berbasis “Link and
                        Match” untuk meningkatkan sumber daya manusia yang lebih
                        handal dan profesional dengan tetap dalam pemahaman
                        serta pengalaman nilai-nilai keimanan dan ketakwaan,
                        etika dan kepribadian, estetika, serta peningkatan
                        kualitas jasmani yang dapat meningkatkan daya saing
                        bangsa dan pada giliranya dapat mengantarkan bangsa
                        Indonesia menuju bangsa yang modern dan madani.
                        Politeknik PGRI Banten juga menjadikan dirinya sebagai
                        Perguruan Tinggi yang membekali mahasiswanya dengan
                        wawasan kewirausahaan, sehingga diharapkan para
                        alumninya akan mampu mandiri dan turut mengembangkan
                        dunia usaha di wilayahnya.
                      </p>
                      <br />
                      <p>
                        {" "}
                        Pada akhirnya, Politeknik PGRI Banten diharapkan mampu
                        memberikan kontribusi kepada Indonesia pada umumnya dan
                        Propinsi Banten pada khususnya untuk menghasilkan SDM
                        yang siap kerja dan berwirausaha. Hal ini tentunya
                        diharapkan dapat membantu pemerintah dalam menekankan
                        jumlah pengangguran di Propinsi Banten.
                      </p>
                      <p>
                        <br />
                        Wassalamu’alaikum Wr. Wb.
                        <br />
                        Arief Rahman, SE., MM.
                      </p>
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
