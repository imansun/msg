// Local Imports
import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { Bordered } from "./Bordered";
import { Hoverable } from "./Hoverable";
import { Zebra } from "./Zebra";
import { Dense } from "./Dense";
import { componentProps } from "./props";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "جدول‌ها", path: "/tables" },
  { title: "جدول ساده" },
];

const markdownPath = "tables/basic-table";

const demos = [
  {
    title: "جدول ساده",
    description:
      "یک چیدمان ساده برای جدول که داده‌ها را به شکلی قابل اسکن و بررسی نمایش می‌دهد. برای جزئیات بیشتر نحوه استفاده کد را مشاهده کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "دارای حاشیه",
    description:
      "با استفاده از کلاس‌های کمکی، جدول را با حاشیه‌ سفارشی کنید. برای مشاهده جزئیات بیشتر به کد مراجعه کنید.",
    Component: Bordered,
    markdownName: "Bordered",
  },
  {
    title: "دارای افکت هاور",
    description:
      "با افزودن prop <code>hoverable</code> افکت هاور روی سطرها را فعال کنید. کد را برای جزئیات بیشتر ببینید.",
    Component: Hoverable,
    markdownName: "Hoverable",
  },
  {
    title: "زیبرا (ردیف‌های راه‌راه)",
    description:
      "با prop <code>zebra</code> رنگ‌های متناوب به سطرهای جدول (زیبرا استریپینگ) اعمال کنید. برای جزئیات به کد مراجعه کنید.",
    Component: Zebra,
    markdownName: "Zebra",
  },
  {
    title: "تراکم بالا (فشرده)",
    description:
      "با استفاده از prop <code>dense</code> یک چیدمان جدول فشرده ایجاد کنید. برای جزئیات بیشتر کد را ببینید.",
    Component: Dense,
    markdownName: "Dense",
  },
];

export default function BasicTable() {
  return (
    <DemoLayout
      title="جدول ساده"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
