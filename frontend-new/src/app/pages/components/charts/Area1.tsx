// Import Dependencies
import { ApexOptions } from "apexcharts";
import moment from "jalali-moment";
import Chart from "react-apexcharts";

// ----------------------------------------------------------------------

const options: ApexOptions = {
  chart: {
    fontFamily: "Kook, sans-serif",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    x: {
      formatter: (value: any) => moment(value).locale("fa").format("YYYY/MM/DD HH:mm"),
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontSize: "14px",
  },
};

export function Area1() {
  const series = [
    {
      name: "سری 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "سری 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const categories = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T03:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
  ];

  const chartOptions: ApexOptions = {
    ...options,
    colors: ["#34d399", "#ffba1a"],
    xaxis: {
      type: "datetime",
      categories,
    },
  };

  return (
    <div className="max-w-lg">
      <Chart series={series} type="area" height="350" options={chartOptions} />
    </div>
  );
}
