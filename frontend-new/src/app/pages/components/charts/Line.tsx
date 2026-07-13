// Import Dependencies
import { ApexOptions } from "apexcharts";
import moment from "jalali-moment";
import Chart from "react-apexcharts";

// ----------------------------------------------------------------------


const options: ApexOptions = {
  colors: ["#a855f7"],

  tooltip: {
    x: {
      formatter: function (value) {
        // نمایش به صورت "۲۳ فروردین"
        return moment(value).locale("fa").format("jDD jMMMM");
      },
    },
  },

  chart: {
    fontFamily: "Kook, sans-serif",
    dropShadow: {
      enabled: true,
      color: "#1E202C",
      top: 18,
      left: 6,
      blur: 8,
      opacity: 0.1,
    },

    locales: [
      {
        name: "fa",
        options: {
          toolbar: {
            download: "دانلود",
            selection: "انتخاب",
            selectionZoom: "بزرگ‌نمایی ناحیه",
            zoomIn: "بزرگ‌نمایی",
            zoomOut: "کوچک‌نمایی",
            pan: "جابجایی",
            reset: "بازنشانی بزرگ‌نمایی",
            exportToSVG: "SVG دانلود",
            exportToPNG: "PNG دانلود",
            exportToCSV: "CSV دانلود",
          },
        },
      },
    ],
    defaultLocale: "fa",
    toolbar: {
      export: {
        svg: { filename: "نمودار" },
        png: { filename: "نمودار" },
        csv: { filename: "داده‌ها" },
      },
    },
  },

  stroke: {
    width: 8,
    curve: "smooth",
  },

  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
    ],
    tickAmount: 10,
    labels: {
      formatter: function (_value, timestamp) {
        return timestamp
          ? moment(timestamp).locale("fa").format("jDD jMMM")
          : "";
      },
      style: {
        cssClass: "apexcharts-xaxis-label-rtl",
      },
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#86efac"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 0.95,
      stops: [0, 100, 0, 100],
    },
  },

  yaxis: {
    min: -10,
    max: 40,
  },
};


export function Line() {
  const series = [
    {
      name: "فروش",
      data: [14, 13, 10, 9, 19, 22, 25],
    },
  ];

  return (
    <div className="max-w-lg">
      <Chart series={series} type="line" height="350" options={options} />
    </div>
  );
}
