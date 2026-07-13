// Import Dependencies
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

// ----------------------------------------------------------------------

const options: ApexOptions = {
  chart: {
    fontFamily: "Kook, sans-serif",
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
    },
  },
  xaxis: {
    categories: [
      "۱۳۹۰ بهار",
      "۱۳۹۰ تابستان",
      "۱۳۹۰ پاییز",
      "۱۳۹۰ زمستان",
      "۱۳۹۱ بهار",
      "۱۳۹۱ تابستان",
      "۱۳۹۱ پاییز",
      "۱۳۹۱ زمستان",
    ],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontSize: "14px",
  },
};

export function Column() {
  const series = [
    {
      name: "محصول الف",
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      name: "محصول ب",
      data: [13, 23, 20, 8, 13, 27, 33, 12],
    },
    {
      name: "محصول ج",
      data: [11, 17, 15, 15, 21, 14, 15, 13],
    },
  ];

  return (
    <div className="max-w-lg">
      <Chart series={series} type="bar" height="350" options={options} />
    </div>
  );
}
