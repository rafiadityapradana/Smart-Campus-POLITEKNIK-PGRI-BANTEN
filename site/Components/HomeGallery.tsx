import React from "react";

export default function HomeGallery() {
  return (
    <>
      <div className=" pt-10">
        <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center">
          <h1 className="text-4xl tracking-tight font-bold font-sans text-gray-800 sm:text-5xl md:text-6xl text-center">
            <span className="block mb-4">Gallery</span>
            POLITEKNIK PGRI BANTEN
          </h1>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 text-gray-700 ">
        <div className="grid grid-cols-3 pb-20">
          <div className="col-span-4 sm:col-span-1 m-4">
            <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-b-8  border-blue-700  border-opacity-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:opacity-70">
              <img
                className="mx-auto"
                src={"http://localhost:4000/public/images/" + "one.jpg"}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-span-4 sm:col-span-1 m-4">
            <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-b-8  border-blue-700  border-opacity-80 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:opacity-70">
              <img
                className="mx-auto"
                src={"http://localhost:4000/public/images/" + "one.jpg"}
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
