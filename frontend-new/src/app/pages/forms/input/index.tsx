// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { WithLabel } from "./WithLabel";
import { WithDescription } from "./WithDescription";
import { InputSizes } from "./InputSizes";
import { InputError } from "./InputError";
import { Disabled } from "./Disabled";
import { Polymorphic } from "./Polymorphic";
import { Prefix } from "./Prefix";
import { Suffix } from "./Suffix";
import { Password } from "./Password";
import { Search } from "./Search";
import { Custom } from "./Custom";
import { Controlled } from "./Controlled";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "ورودی" },
];

const markdownPath = "forms/input";

const demos: Demo[] = [
  {
    title: "پیش‌فرض (Default)",
    description:
      "<code>Input</code> یک ویجت پایه برای دریافت ورودی کاربر در یک فیلد متنی است. امکان وارد کردن یا تغییر داده از طریق صفحه کلید و ماوس وجود دارد.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "با برچسب (With Label)",
    description:
      "می‌توانید برای <code>Input</code> یک برچسب (Label) تعیین کنید. برای جزییات استفاده به کد مراجعه کنید.",
    Component: WithLabel,
    markdownName: "WithLabel",
  },
  {
    title: "با توضیح (With Description)",
    description:
      "امکان افزودن توضیح (Description) به <code>Input</code> وجود دارد. برای جزییات استفاده به کد مراجعه کنید.",
    Component: WithDescription,
    markdownName: "WithDescription",
  },
  {
    title: "اندازه‌های ورودی (Input Sizes)",
    description:
      "کامپوننت <code>Input</code> می‌تواند اندازه‌های مختلفی داشته باشد. برای مشاهده جزئیات استفاده به کد مراجعه کنید.",
    Component: InputSizes,
    markdownName: "InputSizes",
  },
  {
    title: "خطا در ورودی (Input Error)",
    description:
      "هنگام وقوع خطا، <code>Input</code> ظاهر مخصوص به خود را خواهد داشت. برای جزییات استفاده به کد مراجعه کنید.",
    Component: InputError,
    markdownName: "InputError",
  },
  {
    title: "ورودی غیرفعال (Disabled Input)",
    description:
      "در حالت غیرفعال نیز <code>Input</code> دارای استایل مخصوص است. جزییات بیشتر را در کد ببینید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "رندر چندشکلی (Polymorphic Rendering)",
    description:
      "<code>Input</code> یک کامپوننت چندشکلی است و می‌توانید المنت اصلی آن را با پراپ <code>component</code> تغییر دهید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "کنترل‌شده (Controlled)",
    description:
      "امکان کنترل کامپوننت <code>Input</code> وجود دارد. برای جزییات استفاده به کد مراجعه کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "ورودی با پیشوند (Prefix Input)",
    description:
      "می‌توانید به <code>Input</code> یک پیشوند بدهید؛ کافی است از پراپ <code>prefix</code> استفاده کنید. برای جزییات بیشتر کد را ببینید.",
    Component: Prefix,
    markdownName: "Prefix",
  },
  {
    title: "ورودی با پسوند (Suffix Input)",
    description:
      "برای افزودن پسوند به <code>Input</code> کافی است پراپ <code>suffix</code> را تنظیم کنید. برای جزییات به کد مراجعه کنید.",
    Component: Suffix,
    markdownName: "Suffix",
  },
  {
    title: "ورودی رمز عبور (Password Input)",
    description:
      "اگر نیاز به دریافت رمز عبور از کاربر دارید از ورودی رمز عبور استفاده کنید. این کامپوننت امکان نمایش یا مخفی کردن رمز را فراهم می‌کند. برای مشاهده کد به مثال مراجعه کنید.",
    Component: Password,
    markdownName: "Password",
  },
  {
    title: "ورودی جستجو (Search Input)",
    description:
      "ورودی جستجو از نوع search برای دریافت عبارات جستجو از کاربر طراحی شده است. برای جزییات بیشتر کد را ببینید.",
    Component: Search,
    markdownName: "Search",
  },
  {
    title: "استایل سفارشی (Custom Input)",
    description:
      "با استفاده از کلاس‌های utility تیلویند (Tailwind CSS) می‌توانید به <code>Input</code> استایل دلخواه بدهید. برای جزییات بیشتر به کد مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function Input() {
  return (
    <DemoLayout
      title="ورودی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
