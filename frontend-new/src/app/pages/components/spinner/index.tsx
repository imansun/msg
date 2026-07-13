// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Elastic } from "./Elastic";
import { SoftColor } from "./SoftColor";
import { SoftColorElastic } from "./SoftColorElastic";
import { WithDot } from "./WithDot";
import { SpinnerSizes } from "./SpinnerSizes";
import { NoAnimation } from "./NoAnimation";
import { Disabled } from "./Disabled";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "چرخنده" },
];

const markdownPath = "components/spinner";

const demos: Demo[] = [
  {
    title: "اسپینر پیش‌فرض (Default Spinner)",
    description:
      "کامپوننت <code>Spinner</code> برای نمایش این که یک فرایند در حال انجام است استفاده می‌شود. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "اسپینر ساده (Basic Spinner)",
    description:
      "کامپوننت <code>Spinner</code> می‌تواند رنگ‌های مختلفی داشته باشد <code>(neutral, primary, secondary, info, success, warning, error)</code>. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "اسپینر الاستیک (Elastic Spinner)",
    description:
      "تابع زمان‌بندی (Timing Function) نحوه پیشرفت انیمیشن را مشخص می‌کند و امکان تغییر سرعت را در طول اجرا می‌دهد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Elastic,
    markdownName: "Elastic",
  },
  {
    title: "اسپینر با رنگ ملایم (Soft Color Spinner)",
    description: `کامپوننت <code>Spinner</code> می‌تواند رنگ‌های ملایمی داشته باشد. برای این منظور <code>variant="soft"</code> را تنظیم کنید. برای جزئیات بیشتر به کد مراجعه کنید.`,
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "اسپینر الاستیک با رنگ ملایم (Soft Color Elastic Spinner)",
    description:
      "تابع زمان‌بندی (Timing Function) نحوه پیشرفت انیمیشن را مشخص می‌کند و امکان تغییر سرعت را در طول اجرا می‌دهد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: SoftColorElastic,
    markdownName: "SoftColorElastic",
  },
  {
    title: "اسپینر با نقطه داخلی (With Inner Dot Spinner)",
    description: `کامپوننت <code>Spinner</code> می‌تواند حالت نقطه درونی نیز داشته باشد. برای این منظور <code>variant="innerDot"</code> را تنظیم کنید. برای جزئیات بیشتر به کد مراجعه کنید.`,
    Component: WithDot,
    markdownName: "WithDot",
  },
  {
    title: "سایزهای مختلف اسپینر (Spinner Sizes)",
    description:
      "کامپوننت <code>Spinner</code> می‌تواند اندازه‌های مختلفی داشته باشد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: SpinnerSizes,
    markdownName: "SpinnerSizes",
  },
  {
    title: "اسپینر متوقف شده (Stopped Spinner)",
    description:
      "شما همچنین می‌توانید انیمیشن را غیرفعال کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: NoAnimation,
    markdownName: "NoAnimation",
  },
  {
    title: "اسپینر غیرفعال (Disabled Spinner)",
    description:
      "کامپوننت <code>Spinner</code> هنگام غیر فعال بودن استایل مخصوص به خود را دارد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
];

export default function Spinner() {
  return (
    <DemoLayout
      title="چرخنده"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
