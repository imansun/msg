// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { WithIcon } from "./WithIcon";
import { Boxed } from "./Boxed";
import { BoxedWithIcon } from "./BoxedWithIcon";
import { Controlled } from "./Controlled";
import { ShiftLeftAnimation } from "./ShiftLeftAnimation";
import { ShiftUpAnimation } from "./ShiftUpAnimation";
// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "تب" },
];

const markdownPath = "components/tab";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "<a href='https://headlessui.com/react/tabs' class='text-primary-600 dark:text-primary-400 hover:underline'>Headless UI</a> یک کامپوننت سربرگ هدلس ارائه می‌دهد که به شما اجازه می‌دهد به راحتی رابط‌های کاربری تب (Tab) دسترس‌پذیر و کاملاً قابل سفارشی‌سازی با مدیریت فوکوس و پشتیبانی از ناوبری با صفحه‌کلید بسازید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "با آیکون (With Icon)",
    description: "سربرگ‌ها همراه با آیکون. برای جزئیات استفاده، کد مثال را مشاهده کنید.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "سربرگ جعبه‌ای (Boxed Tabs)",
    description: "سربرگ‌ها می‌توانند حالت جعبه‌ای داشته باشند. برای جزئیات استفاده، کد مثال را بررسی کنید.",
    Component: Boxed,
    markdownName: "Boxed",
  },
  {
    title: "سربرگ جعبه‌ای با آیکون (Boxed With Icon)",
    description:
      "نمونه‌ای از سربرگ جعبه‌ای همراه با آیکون. برای جزئیات استفاده، کد مثال را ببینید.",
    Component: BoxedWithIcon,
    markdownName: "BoxedWithIcon",
  },
  {
    title: "قابل‌کنترل (Controlled)",
    description: "سربرگ‌ها می‌توانند به صورت قابل کنترل استفاده شوند. برای جزئیات استفاده، کد مثال را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "انیمیشن انتقال به چپ (Shift To Left Animation)",
    description:
      "انیمیشن اختصاصی انتقال به سمت چپ برای تب‌ها. برای جزئیات استفاده، کد مثال را ببینید.",
    Component: ShiftLeftAnimation,
    markdownName: "ShiftLeftAnimation",
  },
  {
    title: "انیمیشن انتقال به بالا (Shift To Up Animation)",
    description:
      "انیمیشن اختصاصی انتقال به بالا برای تب‌ها. برای جزئیات استفاده، کد مثال را مشاهده نمایید.",
    Component: ShiftUpAnimation,
    markdownName: "ShiftUpAnimation",
  },
];

export default function Tabs() {
  return (
    <DemoLayout
      title="تب"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
