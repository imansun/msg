// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { CreditCard } from "./CreditCard";
import { Prefix } from "./Prefix";
import { CustomBlock } from "./CustomBlock";
import { DateTime } from "./DateTime";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "ورودی" },
];

const markdownPath = "forms/input-mask";

const demos: Demo[] = [
  {
    title: "کارت اعتباری (Credit Card)",
    description:
      "یک ماسک ورودی رشته‌ای است که قالب داده معتبر را مشخص می‌کند. برای جزییات بیشتر، کد نمونه را بررسی کنید.",
    Component: CreditCard,
    markdownName: "CreditCard",
  },
  {
    title: "پیشوند (Prefix)",
    description:
      "یک ماسک ورودی رشته‌ای است که قالب داده معتبر را مشخص می‌کند. برای جزییات بیشتر، کد نمونه را بررسی کنید.",
    Component: Prefix,
    markdownName: "Prefix",
  },
  {
    title: "بلوک‌های سفارشی (Custom Blocks)",
    description:
      "یک ماسک ورودی رشته‌ای است که قالب داده معتبر را مشخص می‌کند. برای جزییات بیشتر، کد نمونه را بررسی کنید.",
    Component: CustomBlock,
    markdownName: "CustomBlock",
  },
  {
    title: "تاریخ و زمان (Date & Time)",
    description:
      "یک ماسک ورودی رشته‌ای است که قالب داده معتبر را مشخص می‌کند. برای جزییات بیشتر، کد نمونه را بررسی کنید.",
    Component: DateTime,
    markdownName: "DateTime",
  },
];

export default function InputMask() {
  return (
    <DemoLayout
      title="ماسک ورودی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
