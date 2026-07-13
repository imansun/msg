// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Default } from "./Default";
import { SoftColor } from "./SoftColor";
import { SquareLinecap } from "./SquareLinecap";
import { Active } from "./Active";
import { Indeterminate } from "./Indeterminate";
import { OffsetDegree } from "./OffsetDegree";
import { GapDegree } from "./GapDegree";
import { CirclebarSize } from "./CirclebarSize";
import { StrokeSize } from "./StrokeSize";
import { Customizer } from "./Customizer";
import { Custom } from "./Custom";
import { componentProps } from "./props";
import { Gradient } from "./Gradient";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "نوار دایره‌ای" },
];

const markdownPath = "components/circlebar";

const demos: Demo[] = [
  {
    title: "پیش‌فرض (Default Circlebar)",
    description:
      "کامپوننت <code>Circlebar</code> برای نمایش اطلاعات به صورت دایره‌ای به کاربران استفاده می‌شود. همچنین می‌تواند به حالت نامعین برای نمایش وضعیت بارگذاری قرار گیرد.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "ساده (Basic Circlebar)",
    description:
      "کامپوننت <code>Circlebar</code> می‌تواند رنگ‌های مختلفی <code>(neutral, primary, secondary, info, success, warning, error)</code> داشته باشد. برای مشاهده جزئیات استفاده، کد را مشاهده کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "مقطع مربعی (Square Linecap)",
    description:
      "کامپوننت <code>Circlebar</code> می‌تواند خطوطی با انتهای مربعی (square linecap) داشته باشد. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: SquareLinecap,
    markdownName: "SquareLinecap",
  },
  {
    title: "رنگ ملایم (Soft Color Circlebar)",
    description: `<code>Circlebar</code> می‌تواند رنگ ملایم داشته باشد. برای این کار، مقدار <code>variant="soft"</code> را تنظیم کنید. جزئیات بیشتر در کد نمونه موجود است.`,
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "رنگ گرادیانی (Gradient Color Circlebar)",
    description: `<code>Circlebar</code> می‌تواند رنگ گرادیانی داشته باشد. برای این کار، مقدار <code>variant="gradient"</code> را تنظیم نمایید. برای جزئیات استفاده، به کد مراجعه کنید.`,
    Component: Gradient,
    markdownName: "Gradient",
  },
  {
    title: "حالت فعال (Active State)",
    description: `<code>Circlebar</code> می‌تواند به حالت فعال قرار گیرد. برای این کار، <code>isActive={true}</code> را ست کنید. توضیحات بیشتر در کد نمونه می‌باشد.`,
    Component: Active,
    markdownName: "Active",
  },
  {
    title: "حالت نامعین (Indeterminate State)",
    description: `<code>Circlebar</code> می‌تواند به صورت نامعین نمایش داده شود. برای این حالت، <code>isIndeterminate={true}</code> را قرار دهید. برای جزئیات، به کد مراجعه کنید.`,
    Component: Indeterminate,
    markdownName: "Indeterminate",
  },
  {
    title: "زاویه آغازی سفارشی (Custom OffsetDegree)",
    description:
      "پیشرفت <code>Circlebar</code> می‌تواند دارای <code>offsetDegree</code> سفارشی باشد. برای مشاهده جزئیات، به کد مراجعه کنید.",
    Component: OffsetDegree,
    markdownName: "OffsetDegree",
  },
  {
    title: "زاویه فاصله سفارشی (Custom GapDegree)",
    description:
      "پیشرفت <code>Circlebar</code> می‌تواند دارای <code>gapDegree</code> سفارشی باشد. برای مشاهده جزئیات، به کد مراجعه کنید.",
    Component: GapDegree,
    markdownName: "OffsetDegree",
  },
  {
    title: "اندازه دایره‌ای (Circlebar Size)",
    description:
      "کامپوننت‌های <code>Circlebar</code> می‌توانند اندازه‌های گوناگونی داشته باشند. برای مشاهده جزئیات استفاده، کد را ببینید.",
    Component: CirclebarSize,
    markdownName: "CirclebarSize",
  },
  {
    title: "ضخامت خط (Stroke Size)",
    description:
      "کامپوننت‌های <code>Circlebar</code> می‌توانند ضخامت خط <code>strokeWidth</code> سفارشی داشته باشند. جهت مشاهده جزئیات، کد را بررسی کنید.",
    Component: StrokeSize,
    markdownName: "StrokeSize",
  },
  {
    title: "شخصی‌ساز (Customizer)",
    Component: Customizer,
    markdownName: "Customizer",
  },
  {
    title: "سفارشی (Custom)",
    description:
      "شما همچنین می‌توانید استایل <code>Circlebar</code> را با استفاده از کلاس‌های کمکی Tailwind CSS شخصی‌سازی کنید. جهت مشاهده جزئیات، به کد مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function Circlebar() {
  return (
    <DemoLayout
      title="نوار دایره‌ای"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
