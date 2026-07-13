// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { SoftColor } from "./SoftColor";
import { ProgressSizes } from "./ProgressSizes";
import { Active } from "./Active";
import { Indeterminate } from "./Indeterminate";
import { Customizer } from "./Customizer";
import { Custom } from "./Custom";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "پیشرفت" },
];

const markdownPath = "components/progress";

const demos: Demo[] = [
  {
    title: "پیش‌فرض (Default Progress)",
    description:
      "کامپوننت <code>Progress</code> یک نوار بارگذاری رنگی نمایش می‌دهد. برای جزئیات استفاده، کد نمونه را مشاهده کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "پیشرفت ساده (Basic Progress)",
    description:
      "کامپوننت <code>Progress</code> می‌تواند رنگ‌های مختلفی داشته باشد <code> (neutral, primary, secondary, info, success, warning, error) </code>. برای مشاهده جزئیات استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "رنگ ملایم (Soft Color Progress)",
    description: `<code>Progress</code> می‌تواند دارای رنگ ملایم (Soft) باشد. برای این کار، مقدار <code>variant="soft"</code> را تنظیم کنید. جزئیات بیشتر در کد نمونه موجود است.`,
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "اندازه‌های مختلف (Progress Sizes)",
    description:
      "کامپوننت <code>Progress</code> می‌تواند اندازه‌های مختلفی داشته باشد. برای مشاهده جزئیات استفاده، کد را ببینید.",
    Component: ProgressSizes,
    markdownName: "ProgressSizes",
  },
  {
    title: "فعال (Active Progress)",
    description: `<code>Progress</code> می‌تواند به حالت فعال قرار گیرد. برای این کار، <code>isActive={true}</code> را ست کنید. توضیحات بیشتر در کد نمونه می‌باشد.`,
    Component: Active,
    markdownName: "Active",
  },
  {
    title: "نامعین (Indeterminate Progress)",
    description: `<code>Progress</code> می‌تواند به صورت نامعین نمایش داده شود. برای این حالت، <code>isIndeterminate={true}</code> را قرار دهید. برای جزییات، به کد مراجعه نمایید.`,
    Component: Indeterminate,
    markdownName: "Indeterminate",
  },
  {
    title: "شخصی‌ساز (Customizer)",
    Component: Customizer,
    markdownName: "Customizer",
  },
  {
    title: "پیشرفت سفارشی (Custom Progress)",
    description:
      "شما همچنین می‌توانید با استفاده از کلاس‌های Tailwind CSS ظاهر <code>Progress</code> را سفارشی‌سازی کنید. کد نمونه را برای جزئیات مشاهده کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

const Progress = () => {
  return (
    <DemoLayout
      title="پیشرفت"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
};

export default Progress;
