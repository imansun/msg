// Import Dependencies
import Chart from "react-apexcharts";

// Local Imports
import { useThemeContext } from "@/app/contexts/theme/context";
import { ApexOptions } from "apexcharts";

// ----------------------------------------------------------------------

const options: ApexOptions = {
  chart: {
    fontFamily: "Kook, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "55%",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },

  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " هزار تومان";
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    fontSize: "14px",
  },
};

export function Bar() {
  const { primaryColorScheme } = useThemeContext();

  const series = [
    {
      name: "سود خالص",
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: "درآمد",
      data: [76, 85, 101, 98, 87, 105, 91],
    },
  ];

  const categories = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
  ];

  const chartOptions = {
    ...options,
    colors: ["#ff9800", primaryColorScheme[500]],
    xaxis: {
      categories,
    },
  };

  return (
    <div className="max-w-lg">
      <Chart series={series} type="bar" height="350" options={chartOptions} />
    </div>
  );
}
