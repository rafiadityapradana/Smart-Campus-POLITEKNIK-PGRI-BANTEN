import React from "react";

export default function Footers() {
  return (
    <>
      <div className=" bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-8 sm:px-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 font-mono mt-20">
              <div className=" overflow-hidden sm:rounded-lg">
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
                        Address
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
                src="http://localhost:4000/public/site/logowhite.png"
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
