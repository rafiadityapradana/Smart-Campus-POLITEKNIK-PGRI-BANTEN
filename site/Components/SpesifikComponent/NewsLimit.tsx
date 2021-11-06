import React from "react";
import Image from "next/image";
export default function NewsLimit() {
  return (
    <>
      <div className="max-w-7xl mx-auto md:mt-10">
        <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center mb-10">
          <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-700 sm:text-5xl md:text-6xl text-center">
            <span className="block">
              Berita <br /> POLITEKNIK PGRI BANTEN
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-6 sm:col-span-2">
            <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-blue-700  border-opacity-80 ">
              <Image
                className="mx-auto duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src={"http://localhost:4000/public/images/" + "one.jpg"}
                alt=""
                width="100%"
                height="100%"
              />
              <div className="m-3 text-2xl font-semibold">This Is Title</div>
              Nihil dicta velit nobis ut.
            </div>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-blue-700  border-opacity-80 ">
              <Image
                className="mx-auto duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                src={"http://localhost:4000/public/images/" + "one.jpg"}
                alt=""
                width="100%"
                height="100%"
              />
              <div className="m-3 text-2xl font-semibold">This Is Title</div>
              Nihil dicta velit nobis ut.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
