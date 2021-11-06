import { CubeTransparentIcon, EyeIcon } from "@heroicons/react/outline";
import { useListMajorSiteQuery } from "../src/generated/graphql";
import { useEffect } from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
export default function HomeWelcome() {
  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];

  const [{ data, fetching }] = useListMajorSiteQuery();

  useEffect(() => {
    if (fetching === false) {
      return () => {
        data;
      };
    }
  }, [data]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:mt-20 sm:mt-8 mb-5 mt-10 ">
        {fetching ? (
          <div className="grid justify-items-center">
            <div className="col-span-6 sm:col-span-6 text-blue-700">
              <CubeTransparentIcon className="w-20 h-20 animate-spin" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {data?.ListMajorSite.map((ls) => (
              <div
                className="col-span-4 sm:col-span-1 m-4"
                key={ls.list_major_id}
              >
                <div className="shadow-xl bg-white sm:overflow-hidden border-t-8 border-blue-700  border-opacity-80 ">
                  <img
                    className="mx-auto rounded-b-xl"
                    src={
                      "http://localhost:4000/public/images/" + ls.major_image
                    }
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <div className="pt-6 text-center space-y-7">
                    <blockquote>
                      <p className="text-xl font-semibold">
                        {ls.major.toUpperCase()}
                      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-gray-600 p-3">{ls.major_desc}</div>
                      <div className="text-gray-300 bg-gray-700 p-2 cursor-pointer hover:rounded-3xl hover:shadow-md flex text-center justify-center font-bold font-lg  mt-5">
                        <EyeIcon className="w-7 space-5" />
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-900 lg:bg-bgb bg-center xl:bg-bgb md:bg-bgb lg:bg-cover md:bg-cover  xl:bg-cover ">
        <div className=" pt-10 mb-20">
          <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center">
            <h1 className="text-4xl tracking-tight font-bold font-sans text-white sm:text-5xl md:text-6xl text-center">
              <span className="block">
                Raih kesuksesan Bersama <br /> POLITEKNIK PGRI BANTEN
              </span>
            </h1>
          </div>
          <div className=" flex justify-center md:justify-center md:space-x-5 text-center">
            <p className="text-2xl text-gray-300 font-mono">
              Ada banyak definisi sukses, salah satunya adalah melanjutkan
              pendidikan
            </p>
          </div>
        </div>
        <div className="max-w-full mx-auto">
          <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mb-10">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6 " aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-100">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="max-w-full mx-auto">
          <div className="flex py-6 justify-center md:justify-center md:space-x-10 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 mb-10">
                <div className="relative ">
                  <h1 className="text-3xl tracking-tight font-bold font-sans text-white sm:text-4xl md:text-5xl text-center">
                    <span className="block">Kuota Terbatas!</span>
                  </h1>
                </div>
                <div className="relative">
                  <div className="bg-smoke border-t-4 border-blue-600">
                    <h1 className="text-3xl tracking-tight font-bold font-sans text-gray-700 sm:text-4xl md:text-5xl text-center">
                      <span className="block">Pendaftaran Beasiswa</span>
                    </h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    neque dolores quasi id vero ipsam suscipit magni rerum
                    aspernatur reiciendis, laudantium fugit quos rem ut
                    excepturi odit nulla iste minima?
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="relative sm:max-w-7xl  sm:mx-auto lg:mb-40">
//         <div className="md:absolute border-t-8 border-blue-600 bg-white z-10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 A better way to send money
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
//                 magnam voluptatum cupiditate veritatis in accusamus quisquam.
//               </p>
//             </div>

//             <div className="mt-10">
//               <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative">
//                     <dt>
//                       <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                         <feature.icon className="h-6 w-6" aria-hidden="true" />
//                       </div>
//                       <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                         {feature.name}
//                       </p>
//                     </dt>
//                     <dd className="mt-2 ml-16 text-base text-gray-500">
//                       {feature.description}
//                     </dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//         </div>
//       </div>
