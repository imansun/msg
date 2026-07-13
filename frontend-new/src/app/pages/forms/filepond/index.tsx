// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Filled } from "./Filled";
import { NotBordered } from "./NotBordered";
import { Twogrid } from "./Twogrid";
import { ResponsiveGrid } from "./ResponsiveGrid";
import { Circle } from "./Circle";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "آپلود فایل‌ها" },
];

const markdownPath = "forms/filepond";

const demos: Demo[] = [
  {
    title: "فایل‌پاند پایه (Basic Filepond)",
    description:
      "<a href='https://github.com/pqina/react-filepond' class='text-primary-600 dark:text-primary-400 hover:underline'>React FilePond</a> یک کامپوننت ساده و مفید برای اتصال به FilePond است. FilePond یک کتابخانه جاوااسکریپتی برای آپلود همه نوع فایل، بهینه‌سازی تصاویر جهت آپلود سریع‌تر و ارائه تجربه کاربری روان و دسترس‌پذیر می‌باشد.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "فایل‌پاند پرشده (Filled Filepond)",
    description:
      "کامپوننت <code>Filepond</code> می‌تواند به صورت پرشده نمایش داده شود. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: Filled,
    markdownName: "Filled",
  },
  {
    title: "فایل‌پاند بدون کادر (Filepond Without Border)",
    description:
      "کامپوننت <code>Filepond</code> می‌تواند بدون کادر نیز استفاده شود. برای اطلاعات بیشتر، کد نمونه را بررسی نمایید.",
    Component: NotBordered,
    markdownName: "NotBordered",
  },
  {
    title: "دو ستونه (Two Grid)",
    description:
      "با استفاده از پراپرتی <code>grid</code> می‌توانید تعداد فایل‌ها در هر ردیف را تعیین کنید. برای اطلاعات بیشتر، کد را مشاهده نمایید.",
    Component: Twogrid,
    markdownName: "Twogrid",
  },
  {
    title: "گرید واکنش‌گرا (Responsive Grid)",
    description:
      "پراپرتی <code>grid</code> می‌تواند تعداد فایل‌ها در هر ردیف را به صورت پویا تنظیم کند. برای جزئیات بیشتر، کد را مشاهده کنید.",
    Component: ResponsiveGrid,
    markdownName: "ResponsiveGrid",
  },
  {
    title: "فایل‌پاند دایره‌ای (Circle Filepond)",
    description:
      "کامپوننت <code>Filepond</code> می‌تواند ظاهری دایره‌ای داشته باشد. برای اطلاعات بیشتر، کد نمونه را مشاهده کنید.",
    Component: Circle,
    markdownName: "Circle",
  },
];

export default function Filepond() {
  return (
    <DemoLayout
      title="آپلود فایل‌ها"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
