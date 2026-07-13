// Local Imports
import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Default } from "./Default";
import { WithLabel } from "./WithLabel";
import { WithDescription } from "./WithDescription";
import { SelectSizes } from "./SelectSizes";
import { SelectError } from "./SelectError";
import { Disabled } from "./Disabled";
import { Custom } from "./Custom";
import { DataProp } from "./DataProp";
import { SuffixPrefix } from "./SuffixPrefix";
import { Multiple } from "./Multiple";
import { componentProps } from "./props";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "انتخاب" },
];

const markdownPath = "forms/select";

const demos = [
  {
    title: "انتخاب پیش‌فرض (Default Select)",
    description:
      "عنصر <code>select</code> در HTML یک کنترل ورودی برای نمایش فهرستی از گزینه‌ها است. برای مشاهده نحوه‌ی استفاده، کد را بررسی کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "پراپ Data (Data Prop)",
    description:
      "می‌توانید گزینه‌ها را از طریق پراپ <code>data</code> وارد کنید. برای جزئیات و نحوه پیاده‌سازی کد را ببینید.",
    Component: DataProp,
    markdownName: "DataProp",
  },
  {
    title: "با لیبل (With Label)",
    description:
      "کامپوننت <code>Select</code> می‌تواند دارای لیبل باشد. جزئیات را در کد مشاهده کنید.",
    Component: WithLabel,
    markdownName: "WithLabel",
  },
  {
    title: "با توضیح (With Description)",
    description:
      "کامپوننت <code>Select</code> می‌تواند توضیح داشته باشد. برای مشاهده جزئیات به کد مراجعه کنید.",
    Component: WithDescription,
    markdownName: "WithDescription",
  },
  {
    title: "پسوند و پیشوند (Suffix & Prefix)",
    description:
      "کامپوننت <code>Select</code> می‌تواند دارای پسوند و پیشوند باشد. جزئیات پیاده‌سازی را در کد مشاهده کنید.",
    Component: SuffixPrefix,
    markdownName: "SuffixPrefix",
  },
  {
    title: "انتخاب چندگانه (Multiple)",
    description:
      "پراپ <code>multiple</code> این امکان را می‌دهد که چند گزینه همزمان انتخاب شوند. برای مشاهده نحوه استفاده کد را بررسی کنید.",
    Component: Multiple,
    markdownName: "Multiple",
  },
  {
    title: "سایزهای مختلف (Select Sizes)",
    description:
      "کامپوننت <code>Select</code> می‌تواند اندازه‌های مختلفی داشته باشد. برای آشنایی با نحوه کاربرد کد را ببینید.",
    Component: SelectSizes,
    markdownName: "SelectSizes",
  },
  {
    title: "حالت خطا (Select Error)",
    description:
      "کامپوننت <code>Select</code> برای حالات خطا دارای استایل متناسب است. نمونه کد را مشاهده کنید.",
    Component: SelectError,
    markdownName: "SelectError",
  },
  {
    title: "غیرفعال (Disabled Select)",
    description:
      "کامپوننت <code>Select</code> در حالت غیرفعال استایل متفاوتی دارد. برای مشاهده کد بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "سفارشی‌سازی (Custom Select)",
    description:
      "می‌توانید با استفاده از کلاس‌های کمکی Tailwind CSS، به <code>Select</code> استایل سفارشی بدهید. برای نمونه‌ها کد را مشاهده کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function Select() {
  return (
    <DemoLayout
      title="انتخاب"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
