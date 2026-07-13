// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Rounded } from "./Rounded";
import { Outlined } from "./Outlined";
import { OutlinedRouned } from "./OutlinedRouned";
import { Disabled } from "./Disabled";
import { CheckboxSizes } from "./CheckboxSizes";
import { CheckboxGroup } from "./CheckboxGroup";
import { Custom } from "./Custom";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "چک‌باکس" },
];

const markdownPath = "forms/checkbox";

const demos: Demo[] = [
  {
    title: "چک‌باکس پیش‌فرض (Default Checkbox)",
    description:
      "<code>Checkboxes</code> (چک‌باکس‌ها) برای انتخاب یک یا چند گزینه از یک لیست استفاده می‌شوند، در حالی که رادیوها (<code>Radio</code>) برای انتخاب تنها یک گزینه از بین چند گزینه مناسب هستند. برای جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "چک‌باکس ساده (Basic Checkbox)",
    description:
      "کامپوننت <code>Checkbox</code> می‌تواند رنگ‌های مختلفی داشته باشد <code>(neutral، primary، secondary، info، success، warning، error)</code>. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "چک‌باکس گرد (Rounded Checkbox)",
    description:
      "چک‌باکس می‌تواند شکل گرد (sm) داشته باشد. برای این کار باید از کلاس کمکی <code>rounded-full</code> استفاده کنید. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: Rounded,
    markdownName: "Rounded",
  },
  {
    title: "چک‌باکس حاشیه‌دار (Outlined Checkbox)",
    description: `<code>Checkbox</code> می‌تواند بصورت حاشیه‌دار نمایش داده شود. برای این کار، ویژگی <code>variant="outlined"</code> را تنظیم کنید. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.`,
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "چک‌باکس گرد حاشیه‌دار (Outlined Rounded)",
    description:
      "چک‌باکس می‌تواند شکل گرد (sm) داشته باشد. برای این کار باید از کلاس کمکی <code>rounded-full</code> استفاده کنید. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: OutlinedRouned,
    markdownName: "OutlinedRouned",
  },
  {
    title: "چک‌باکس غیرفعال (Disabled Checkbox)",
    description:
      "<code>Checkbox</code> هنگامی که غیرفعال شود، ظاهر مخصوص به خود را دارد. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "سایزهای چک‌باکس (Checkbox Sizes)",
    description:
      "کامپوننت‌های <code>Checkbox</code> می‌توانند اندازه‌های مختلفی داشته باشند. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: CheckboxSizes,
    markdownName: "CheckboxSizes",
  },
  {
    title: "گروه چک‌باکس (Checkbox Group)",
    description:
      "از گروه <code>Checkbox</code> استفاده کنید تا به کاربر اجازه انتخاب چندین مورد از بین یک لیست یا انتخاب یک مورد خاص را بدهید. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: CheckboxGroup,
    markdownName: "CheckboxGroup",
  },
  {
    title: "چک‌باکس سفارشی (Custom Checkbox)",
    description:
      "شما می‌توانید <code>Checkbox</code>های سفارشی بسازید. برای مشاهده جزئیات بیشتر و نحوه استفاده، کد نمونه را بررسی کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function Checkbox() {
  return (
    <DemoLayout
      title="چک‌باکس ورودی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
