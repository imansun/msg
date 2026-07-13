// Import Dependencies
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

const chartConfig: ApexOptions = {
  colors: ["#FF5724"],
  chart: {
    fontFamily: "Kook, sans-serif",
    stacked: false,
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
    },
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  tooltip: {
    shared: true,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

export function DailyVisits() {
  const series = [
    {
      data: [0, 20, 10, 30, 20, 50],
    },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="absolute top-0 left-0 p-4">
        <p>بازدیدهای روزانه</p>
        <p className="dark:text-dark-100 text-3xl font-semibold text-gray-800">
          ۲۳۴
        </p>
      </div>
      <Chart series={series} type="line" height="150" options={chartConfig} />
    </Card>
  );
}
