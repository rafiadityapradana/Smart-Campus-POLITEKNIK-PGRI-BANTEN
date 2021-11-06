import React from "react";
import { useState } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface TransactionChartProps {}

const TransactionChart: React.FC<TransactionChartProps> = ({}) => {
  const [options, setOptions] = useState({
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      stroke: {
        curve: "smooth",
      },

      categories: [
        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      color: "#0F52BA",
      name: "Income",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 453],
    },
    {
      color: "#FF2626",
      name: "Expenditure",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 70, 453],
    },
  ]);

  return (
    <div className="w-full px-2 sm:px-0">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-3 shadow overflow-hidden focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Transaction Chart Donut
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <Chart
              options={{
                colors: ["#0F52BA", "#FF2626"],
                labels: ["Income", "Expenditure"],
              }}
              series={[90090, 45332]}
              type="donut"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow overflow-hidden focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Transaction Chart Bar
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <Chart options={options} series={series} type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionChart;
