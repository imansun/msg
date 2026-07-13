// Import Dependencies
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

// ----------------------------------------------------------------------

const options: ApexOptions = {
  chart: {
    fontFamily: "Kook, sans-serif",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
};

export function Radar() {
  const series = [
    {
      name: "سری ۱",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "سری ۲",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "سری ۳",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const chartOptions = {
    ...options,
    xaxis: {
      categories: [
        "۱۳۹۰",
        "۱۳۹۱",
        "۱۳۹۲",
        "۱۳۹۳",
        "۱۳۹۴",
        "۱۳۹۵",
      ],
    },
  };

  return (
    <div className="max-w-lg">
      <Chart series={series} type="radar" height="350" options={chartOptions} />
    </div>
  );
}
