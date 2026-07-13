// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { RangeSizes } from "./RangeSizes";
import { Controlled } from "./Controlled";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "محدوده" },
];

const markdownPath = "forms/range";

const demos: Demo[] = [
  {
    title: "بازه پیش‌فرض (Default Range)",
    description:
      "ورودی‌های <code>Range</code> سفارشی برای استایل‌دهی یکنواخت در تمام مرورگرها و قابلیت سفارشی‌سازی داخلی. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Default,

    markdownName: "Default",
  },
  {
    title: "بازه ساده (Basic Range)",
    description:
      "کامپوننت <code>Range</code> می‌تواند رنگ‌های مختلفی داشته باشد <code> (خنثی، اصلی، ثانویه، اطلاعات، موفق، هشدار، خطا) </code>. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Basic,

    markdownName: "Basic",
  },
  {
    title: "اندازه‌های بازه (Range Sizes)",
    description:
      "کامپوننت‌های <code>Range</code> می‌توانند اندازه‌های متفاوتی داشته باشند. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: RangeSizes,

    markdownName: "RangeSizes",
  },
  {
    title: "بازه کنترل‌شده (Controlled Range)",
    description:
      "<code>Range</code> می‌تواند به صورت کنترل‌شده استفاده شود. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Controlled,

    markdownName: "Controlled",
  },
];

export default function Range() {
  return (
    <DemoLayout
      title="محدوده"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
