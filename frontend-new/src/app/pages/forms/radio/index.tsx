// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Outlined } from "./Outlined";
import { Disabled } from "./Disabled";
import { Square } from "./Square";
import { RadioSizes } from "./RadioSizes";
import { Controlled } from "./Controlled";
import { RadioGroups } from "./RadioGroups";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "دکمه رادیویی" },
];

const markdownPath = "forms/radio";

const demos: Demo[] = [
  {
    title: "رادیوی پیش‌فرض (Default Radio)",
    description:
      "<code>Radio</code> معمولاً در گروه‌های رادیویی برای مجموعه‌ای از گزینه‌های مرتبط استفاده می‌شود. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "رادیوی ساده (Basic Radio)",
    description:
      "کامپوننت <code>Radio</code> می‌تواند رنگ‌های متفاوتی داشته باشد <code>(neutral, primary, secondary, info, success, warning, error)</code>. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "رادیوی مربعی (Square Radio)",
    description:
      "<code>Radio</code> می‌تواند شکل مربعی نیز داشته باشد. برای انجام این کار از کلاس <code>rounded-lg</code> استفاده کنید. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Square,
    markdownName: "Square",
  },
  {
    title: "رادیوی طرح حاشیه‌دار (Outlined Radio)",
    description:
      "کامپوننت <code>Radio</code> می‌تواند به صورت حاشیه‌دار (Outlined) باشد. برای این کار، prop <code>variant=\"outlined\"</code> را تنظیم کنید. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "رادیوی غیرفعال (Disabled Radio)",
    description:
      "کامپوننت <code>Radio</code> در حالت غیرفعال (disabled) استایل مخصوص خود را دارد. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "اندازه‌های رادیو (Radio Sizes)",
    description:
      "کامپوننت‌های <code>Radio</code> می‌توانند اندازه‌های مختلفی داشته باشند. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: RadioSizes,
    markdownName: "RadioSizes",
  },
  {
    title: "حالت کنترل‌شده (Controlled)",
    description:
      "کامپوننت <code>Radio</code> می‌تواند به صورت کنترل‌شده مدیریت شود. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "گروه رادیو (Radio Group)",
    description:
      "<code>Radio Group</code> برای گروه‌بندی رادیوها استفاده می‌شود و این امکان را فراهم می‌کند که فقط یکی از گزینه‌ها انتخاب شود. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: RadioGroups,
    markdownName: "RadioGroups",
  },
];

export default function Radio() {
  return (
    <DemoLayout
      title="دکمه رادیویی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
