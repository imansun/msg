// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Outlined } from "./Outlined";
import { Disabled } from "./Disabled";
import { Square } from "./Square";
import { SwitchSizes } from "./SwitchSizes";
import { Controlled } from "./Controlled";
import { SwitchThumbSizes } from "./SwitchThumbSizes";
import { HeadlessUIExamples } from "./HeadlessUIExamples";
import { Loading } from "./Loading";
import { HeadlessUiCustom } from "./HeadlessUiCustom";
import { Custom } from "./Custom";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "سوییچ" },
];

const markdownPath = "forms/switch";

const demos: Demo[] = [
  {
    title: "سوییچ پیش‌فرض (Default Switch)",
    description:
      "<code>Switch</code> یک کامپوننت ساده است که برای فعال یا غیرفعال کردن یکی از دو گزینه از پیش تعریف شده استفاده می‌شود. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "سوییچ ساده (Basic Switch)",
    description:
      "کامپوننت <code>Switch</code> می‌تواند رنگ‌های مختلفی داشته باشد <code> (neutral, primary, secondary, info, success, warning, error) </code>. برای مشاهده جزئیات نحوه استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "سوییچ مربعی (Square Switch)",
    description:
      "<code>Switch</code> می‌تواند ظاهر مربعی داشته باشد. برای این کار، باید از کلاس کاربردی <code>rounded-lg before:rounded-md</code> استفاده کنید. برای دیدن نحوه استفاده، کد را مشاهده کنید.",
    Component: Square,
    markdownName: "Square",
  },
  {
    title: "سوییچ دورخط‌دار (Outlined Switch)",
    description: `<code>Switch</code> می‌تواند ظاهر دورخط‌دار داشته باشد. برای این کار، مقدار <code>variant=\"outlined\"</code> را تنظیم کنید. برای جزئیات بیش‌تر، کد را ببینید.`,
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "سوییچ غیرفعال (Disabled Switch)",
    description:
      "<code>Switch</code> هنگام غیرفعال بودن ظاهر ویژه‌ای دارد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "اندازه‌های سوییچ (Switch Sizes)",
    description:
      "کامپوننت <code>Switch</code> می‌تواند اندازه‌های گوناگونی داشته باشد. برای جزییات بیشتر، به کد مراجعه کنید.",
    Component: SwitchSizes,
    markdownName: "SwitchSizes",
  },
  {
    title: "اندازه‌های دکمه سوییچ (Switch Thumb Sizes)",
    description:
      "دکمه (Thumb) <code>Switch</code> می‌تواند اندازه‌های متفاوتی داشته باشد. برای اطلاعات بیشتر، کد را مشاهده کنید.",
    Component: SwitchThumbSizes,
    markdownName: "SwitchThumbSizes",
  },
  {
    title: "سوییچ کنترل‌شونده (Controlled)",
    description:
      "<code>Switch</code> می‌تواند به صورت کنترل‌شونده استفاده شود. برای مشاهده نحوه پیاده‌سازی، کد را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "نمونه‌های Headless UI (Headless UI Examples)",
    description:
      "سوییچ‌های استایل‌شده با Headless UI. برای جزئیات، کد را مشاهده کنید.",
    Component: HeadlessUIExamples,
    markdownName: "HeadlessUIExamples",
  },
  {
    title: "حالت بارگذاری (Loading State)",
    description: "سوییچ با وضعیت بارگذاری. برای دیدن کد و جزئیات استفاده، کد را بررسی کنید.",
    Component: Loading,
    markdownName: "Loading",
  },
  {
    title: "سفارشی‌سازی (Custom)",
    description:
      "شما می‌توانید به <code>Switch</code> استایل‌های سفارشی با استفاده از کلاس‌های ابزار Tailwind CSS بدهید. برای مشاهده نحوه انجام کار، به کد مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
  {
    title: "نمونه‌های Headless UI (Headless UI Examples)",
    description:
      "سوییچ‌های استایل‌شده با Headless UI. برای جزئیات، کد را مشاهده کنید.",
    Component: HeadlessUiCustom,
    markdownName: "HeadlessUiCustom",
  },
];

export default function Switch() {
  return (
    <DemoLayout
      title="سوییچ"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
