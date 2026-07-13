// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { WithLabel } from "./WithLabel";
import { WithDescription } from "./WithDescription";
import { TextareaError } from "./TextareaError";
import { Disabled } from "./Disabled";
import { Polymorphic } from "./Polymorphic";
import { Controlled } from "./Controlled";
import { Append } from "./Append";
import { Prepend } from "./Prepend";
import { AppendPrepend } from "./AppendPrepend";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "تکست اریا" },
];

const markdownPath = "forms/textarea";

const demos: Demo[] = [
  {
    title: "تکست اریای پیش‌فرض (Default Textarea)",
    description:
      "<code>Textarea</code> یک کنترل ورودی متنی چند خطی را تعریف می‌کند. تکست اریا معمولاً در فرم‌ها برای جمع‌آوری نظرات یا بازخورد کاربران استفاده می‌شود.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "با برچسب (With Label)",
    description:
      "<code>Textarea</code> می‌تواند دارای یک برچسب باشد. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: WithLabel,
    markdownName: "WithLabel",
  },
  {
    title: "با توضیح (With Description)",
    description:
      "<code>Textarea</code> می‌تواند توضیح نیز داشته باشد. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: WithDescription,
    markdownName: "WithDescription",
  },
  {
    title: "خطای تکست اریا (Textarea Error)",
    description:
      "<code>Textarea</code> هنگام وجود حالت خطا، استایل مخصوص به خود را دارد. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: TextareaError,
    markdownName: "TextareaError",
  },
  {
    title: "تکست اریای غیرفعال (Disabled Textarea)",
    description:
      "<code>Textarea</code> هنگام غیرفعال بودن، استایل مخصوص به خود را دارد. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "رندر چندشکلی (Polymorphic Rendering)",
    description:
      "<code>Textarea</code> یک کامپوننت چندشکلی است و می‌توانید المنت اصلی را با پراپ <code>component</code> تغییر دهید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "کنترل‌شده (Controlled)",
    description:
      "<code>Textarea</code> می‌تواند به صورت کنترل‌شده استفاده شود. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "افزودن محتوا قبل (Prepend Content)",
    description:
      "می‌توانید قبل از <code>Textarea</code> محتوا اضافه کنید. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Prepend,
    markdownName: "Prepend",
  },
  {
    title: "افزودن محتوا بعد (Append Content)",
    description:
      "می‌توانید بعد از <code>Textarea</code> محتوا اضافه کنید. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: Append,
    markdownName: "Append",
  },
  {
    title: "افزودن محتوا قبل و بعد (Prepend & Append Content)",
    description:
      "می‌توانید قبل و بعد از <code>Textarea</code> محتوا اضافه کنید. برای مشاهده نحوه استفاده، کد را بررسی کنید.",
    Component: AppendPrepend,
    markdownName: "AppendPrepend",
  },
];

export default function Textarea() {
  return (
    <DemoLayout
      title="تکست اریا"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
