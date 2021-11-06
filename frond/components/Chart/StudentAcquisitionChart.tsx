import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface StudentAcquisitionChartProps {}

const StudentAcquisitionChart: React.FC<StudentAcquisitionChartProps> =
  ({}) => {
    const [options, setOptions] = useState({
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
          2002,
        ],
      },
    });
    const [series, setSeries] = useState([
      {
        color: "#289672",
        name: "MI",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 453],
      },
      {
        color: "#0F52BA",
        name: "TM",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 200],
      },
      {
        color: "#FFCC29",
        name: "TE",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 190],
      },
    ]);
    return (
      <div className="w-full px-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow"
                )
              }
            >
              By Year
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-blue-800 hover:text-white bg-white shadow"
                )
              }
            >
              By Month
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <Chart options={options} series={series} type="bar" />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <select
                id="year"
                name="year"
                autoComplete="year"
                className="block w-xl py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>2021</option>
                <option>2020</option>
                <option>2021</option>
              </select>

              <Chart options={options} series={series} type="bar" />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  };
export default StudentAcquisitionChart;
