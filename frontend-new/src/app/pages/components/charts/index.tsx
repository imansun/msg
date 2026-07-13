// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Area1 } from "./Area1";
import { Area2 } from "./Area2";
import { Bar } from "./Bar";
import { Line } from "./Line";
import { Candlestick } from "./Candlestick";
import { Bubble } from "./Bubble";
import { Column } from "./Column";
import { Radialbar } from "./Radialbar";
import { Radar } from "./Radar";
import { PolarArea } from "./PolarArea";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "نموادرها" },
];

const markdownPath = "components/charts";

const demos: Demo[] = [
  {
    title: "نمودار ناحیه‌ای نمونه ۱ (Area Chart Example 1)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> یک کتابخانه مدرن برای رسم نمودار است که به توسعه‌دهندگان اجازه می‌دهد با استفاده از یک API ساده، ویژوالایزیشن‌های زیبا و تعاملی برای صفحات وب ایجاد کنند.",
    Component: Area1,
    markdownName: "Area1",
  },
  {
    title: "نمودار ناحیه‌ای نمونه ۲ (Area Chart Example 2)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودارهای ناحیه‌ای پشتیبانی می‌کند. نمودار ناحیه‌ای نوعی نمودار است که تغییرات کمی داده‌ها را در طول زمان یا یک دسته‌بندی نمایش می‌دهد.",
    Component: Area2,
    markdownName: "Area2",
  },
  {
    title: "نمودار میله‌ای (Bar Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودارهای میله‌ای پشتیبانی می‌کند. نمودار میله‌ای نوعی نمودار است که مقایسه مقادیر متریک در مجموعه دسته‌بندی‌های مختلف یا زیرگروه‌های داده را نشان می‌دهد.",
    Component: Bar,
    markdownName: "Bar",
  },
  {
    title: "نمودار خطی (Line Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودارهای خطی پشتیبانی می‌کند. نمودار خطی نوعی نمودار است که روند‌ها و رفتارهای داده را در طول زمان یا یک دسته‌بندی نشان می‌دهد.",
    Component: Line,
    markdownName: "Line",
  },
  {
    title: "نمودار شمعی (Candlestick Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودار شمعی پشتیبانی می‌کند. نمودار شمعی نوعی نمودار است که تغییرات قیمت یک اوراق بهادار، مشتقه یا ارز را در یک بازه زمانی معین نمایش می‌دهد.",
    Component: Candlestick,
    markdownName: "Candlestick",
  },
  {
    title: "نمودار حبابی (Bubble Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودارهای حبابی پشتیبانی می‌کند.",
    Component: Bubble,
    markdownName: "Bubble",
  },
  {
    title: "نمودار ستونی (Column Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودار ستونی پشتیبانی می‌کند. نمودار ستونی نوعی نمودار است که مقایسه مقادیر متریک را در میان دسته‌بندی‌ها یا زیرگروه‌های مختلف داده نمایش می‌دهد.",
    Component: Column,
    markdownName: "Column",
  },
  {
    title: "نمودار رادباری (Radialbar Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودار رادباری پشتیبانی می‌کند. نمودار رادباری نوعی نمودار است که از اشکال دایره‌ای برای مقایسه دسته‌بندی‌های مختلف استفاده می‌کند.",
    Component: Radialbar,
    markdownName: "Radialbar",
  },
  {
    title: "نمودار رادار (Radar Chart)",
    description:
      "<a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> دارای نمودار رادار داخلی است که با تنظیم ویژگی chart.type به radar می‌توانید از آن استفاده کنید. باید داده‌های خود را به صورت آرایه‌ای از اعداد در خصلت series ارائه دهید، طوری که هر کدام نمایانگر مقدار یک متغیر باشند.",
    Component: Radar,
    markdownName: "Radar",
  },
  {
    title: "نمودار ناحیه قطبی (Polar Area Chart)",
    description:
      "نمودار ناحیه قطبی نوعی نمودار است که اندازه نسبی دسته‌بندی‌های مختلف را در یک شبکه دایره‌ای نشان می‌دهد. <a href='https://apexcharts.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>ApexCharts</a> از نمودارهای قطبی نیز پشتیبانی می‌کند.",
    Component: PolarArea,
    markdownName: "PolarArea",
  },
];

export default function Charts() {
  return (
    <DemoLayout
      title="نموارها"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
