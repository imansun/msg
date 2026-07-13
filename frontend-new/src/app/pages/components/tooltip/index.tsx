// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Placement } from "./Placement";
import { JSXContent } from "./JSXContent";
import { Controlled } from "./Controlled";
import { Delay } from "./Delay";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "تولتیپ" },
];

const markdownPath = "components/tooltip";

const demos: Demo[] = [
  {
    title: "تولتیپ پیش‌فرض (Default Tooltip)",
    description:
      "کامپوننت <code>Tooltip</code> اغلب برای نمایش اطلاعات اضافی زمانی که کاربر نشانگر ماوس را روی یک عنصر می‌برد، استفاده می‌شود. برای نمایش تولتیپ‌ها از کتابخانه <a href='https://react-tooltip.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>react-tooltip</a> استفاده شده است. برای جزئیات بیشتر، به کد مراجعه کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "تولتیپ ساده (Basic Tooltip)",
    description:
      "کامپوننت <code>Tooltip</code> می‌تواند رنگ‌های مختلفی داشته باشد <code>(info، success، warning، error)</code>. برای مشاهده جزئیات، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "تولتیپ جایگاه‌پذیر (Placement Tooltip)",
    description:
      "کامپوننت <code>Tooltip</code> می‌تواند در چهار موقعیت اصلی نسبت به عنصر مرجع قرار بگیرد. برای جزئیات بیشتر، به کد مراجعه کنید.",
    Component: Placement,
    markdownName: "Placement",
  },
  {
    title: "محتوای JSX (JSX Content)",
    description:
      "کامپوننت <code>Tooltip</code> می‌تواند محتوای JSX را در خود جای دهد. برای مشاهده نحوه پیاده‌سازی، کد را بررسی کنید.",
    Component: JSXContent,
    markdownName: "JSXContent",
  },
  {
    title: "تولتیپ کنترل‌شونده (Controlled)",
    description:
      "کامپوننت <code>Tooltip</code> می‌تواند به صورت کنترل‌شده باشد. برای جزئیات بیشتر، به کد مراجعه کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "تاخیر در تولتیپ (Delay)",
    description:
      "می‌توانید زمان تاخیر برای نمایش یا مخفی شدن تولتیپ را تنظیم کنید. برای مشاهده جزئیات، کد را بررسی کنید.",
    Component: Delay,
    markdownName: "Delay",
  },
];

export default function Tooltip() {
  return (
    <DemoLayout
      title="تولتیپ"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
