// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Advanced } from "./Advanced";
import { Links } from "./Links";
import { Forms } from "./Forms";
import { Filter } from "./Filter";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "پاپ آپ" },
];

const markdownPath = "components/popover";

const demos: Demo[] = [
  {
    title: "پاپ‌اور ساده (Basic Popover)",
    description:
      "<a href='https://headlessui.com/react/popover' class='text-primary-600 dark:text-primary-400 hover:underline'>Headless UI</a> پاپ‌اورها برای پنل‌های شناور با محتوای دلخواه مانند منوی ناوبری، منوی موبایل و منوهای بازشو بسیار مناسب هستند.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "پاپ‌اور پیشرفته (Advanced Popover)",
    description:
      "نمونه‌ای از پاپ‌اور پیشرفته. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
  {
    title: "پاپ‌اور لینک‌ها (Links Popover)",
    description:
      "نمونه‌ای از لینک‌های سفارشی جهت راه‌اندازی سریع. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Links,
    markdownName: "Links",
  },
  {
    title: "پاپ‌اور فرم (Form Popover)",
    description: "نمونه حاوی فرم. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Forms,
    markdownName: "Forms",
  },
  {
    title: "پاپ‌اور فیلتر (Filter Popover)",
    description: "نمونه حاوی فیلتر. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Filter,
    markdownName: "Filter",
  },
];

export default function Popovers() {
  return (
    <DemoLayout
      title="پاپ آپ"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
