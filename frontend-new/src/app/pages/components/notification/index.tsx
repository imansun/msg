// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { WithDescription } from "./WithDescription";
import { Invert } from "./Invert";
import { InfinityExample } from "./Infinity";
import { PromiseExample } from "./Promise";
import { Color } from "./Color";
import { Position } from "./Position";
import { Expand } from "./Expand";
import { Custom } from "./Custom";
import { Message } from "./Message";
import { Blur } from "./Blur";
import { LinkNotification } from "./LinkNotification";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "اعلان" },
];

const markdownPath = "components/notification";

const demos: Demo[] = [
  {
    title: "اعلان پایه (Basic Notification)",
    description:
      "اعلان‌ها برای نمایش سریع یک پیام به کاربر استفاده می‌شوند. اعلان‌ها از موقعیت یابی، تاخیر در حذف و کال‌بک‌ها پشتیبانی می‌کنند. <a href='https://github.com/emilkowalski/sonner' class='text-primary-600 dark:text-primary-400 hover:underline'>Sonner</a> یک کامپوننت اعلان در ری‌اکت است که قابلیت شخصی‌سازی دارد.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "اعلان با توضیح (With Description)",
    description:
      "برای افزودن توضیح به اعلان خود می‌توانید از prop با نام <code>description</code> استفاده کنید. مثال استفاده را در کد زیر مشاهده کنید.",
    Component: WithDescription,
    markdownName: "WithDescription",
  },
  {
    title: "وارونگی رنگ (Invert Color)",
    description:
      "برای واژگون کردن رنگ اعلان، گزینه <code>invert</code> را روی true قرار دهید. مثال استفاده را در کد زیر مشاهده کنید.",
    Component: Invert,
    markdownName: "Invert",
  },
  {
    title: "مدت نامحدود (Infinity Duration)",
    description:
      "برای جلوگیری از ناپدید شدن اعلان خود، گزینه <code>duration</code> را روی <code>Infinity</code> قرار دهید. مثال استفاده را در کد زیر ببینید.",
    Component: InfinityExample,
    markdownName: "InfinityExample",
  },
  {
    title: "مثال Promise (Promise Example)",
    description:
      "مثالی از اعلان بر پایه Promise. برای مشاهده نحوه استفاده به کد زیر مراجعه کنید.",
    Component: PromiseExample,
    markdownName: "PromiseExample",
  },
  {
    title: "اعلان رنگی (Colored Notification)",
    description:
      "می‌توانید رنگ اعلان‌های موفق یا خطا را شخصی سازی کنید. مثال استفاده در کد زیر آمده است.",
    Component: Color,
    markdownName: "Color",
  },
  {
    title: "موقعیت اعلان (Position Notification)",
    description:
      'شما می‌توانید موقعیت اعلان را با استفاده از تابع <code>setNotificationPosition</code> تغییر دهید. مقادیر مجاز شامل <code>"top-left", "top-right", "top-center", "bottom-left", "bottom-center", "bottom-right"</code> است. مثال استفاده را در کد زیر ببینید.',
    Component: Position,
    markdownName: "Position",
  },
  {
    title: "اعلان قابل گسترش (Expanded Notification)",
    description:
      "اعلان‌ها می‌توانند گسترش پیدا کنند و روی هم انباشته شوند. برای مشاهده نحوه استفاده به کد زیر رجوع کنید.",
    Component: Expand,
    markdownName: "Expand",
  },
  {
    title: "اعلان سفارشی (Custom Notification)",
    description:
      "سبک اعلان سفارشی شده. برای مشاهده نحوه استفاده به کد زیر مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
  {
    title: "پیام جدید (New Message)",
    description:
      "سبک اعلان سفارشی شده. برای مشاهده نحوه استفاده به کد زیر مراجعه کنید.",
    Component: Message,
    markdownName: "Message",
  },
  {
    title: "اعلان با لینک (Link Notification)",
    description:
      "سبک اعلان سفارشی شده. برای مشاهده نحوه استفاده به کد زیر مراجعه کنید.",
    Component: LinkNotification,
    markdownName: "LinkNotification",
  },
  {
    title: "اعلان شیشه‌ای (Glass Notification)",
    description:
      "سبک اعلان سفارشی شده. برای مشاهده نحوه استفاده به کد زیر مراجعه کنید.",
    Component: Blur,
    markdownName: "Blur",
  },
];

export default function Notification() {
  return (
    <DemoLayout
      title="اعلان"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
