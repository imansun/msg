// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Bordered } from "./Bordered";
import { FullBordered } from "./FullBordered";
import { Separated } from "./Separated";
import { Primary } from "./Primary";
import { Custom } from "./Custom";
import { Advanced } from "./Advanced";
import { Multiple } from "./Multiple";
import { Controlled } from "./Controlled";
import { NoAnimation } from "./NoAnimation";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "آکاردئون" },
];

const markdownPath = "components/accordion";

const demos: Demo[] = [
  {
    title: "آکاردئون ساده (Basic Accordion)",
    description:
      "کامپوننت <code>Accordion</code> به کاربر اجازه می‌دهد تا بخش‌هایی از محتوای مرتبط در صفحه را نمایش داده یا مخفی کند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "آکاردئون با حاشیه (Bordered Accordion)",
    description:
      "می‌توانید برای <code>Accordion</code> حاشیه قرار دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Bordered,
    markdownName: "Bordered",
  },
  {
    title: "آکاردئون با حاشیه کامل (Full Bordered Accordion)",
    description:
      "می‌توانید کل <code>Accordion</code> را درون حاشیه قرار دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: FullBordered,
    markdownName: "FullBordered",
  },
  {
    title: "آکاردئون جداشده (Separated Accordion)",
    description:
      "می‌توانید <code>Accordion</code> را به صورت جداشده نمایش دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Separated,
    markdownName: "Separated",
  },
  {
    title: "آکاردئون با رنگ اصلی (Primary Accordion)",
    description:
      "آکاردئون با رنگ اصلی (<code>Primary</code>). برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Primary,
    markdownName: "Primary",
  },
  {
    title: "آکاردئون سفارشی (Custom Accordion)",
    description:
      "می‌توانید برای <code>Accordion</code> استایل دلخواه با استفاده از کلاس‌های کمکی Tailwind CSS اعمال کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
  {
    title: "آکاردئون پیشرفته (Advanced Accordion)",
    description:
      "مثال پیشرفته از کامپوننت <code>Accordion</code>. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
  {
    title: "چندتایی (Multiple)",
    description:
      "می‌توانید همزمان چندین آیتم از آکاردئون را باز کنید. ویژگی <code>multiple</code> در کامپوننت آکاردئون به شما اجازه می‌دهد چندین آیتم را به طور همزمان باز کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Multiple,
    markdownName: "Multiple",
  },
  {
    title: "کنترل شده (Controlled)",
    description:
      "کامپوننت <code>Accordion</code> را می‌توان کنترل‌شده کرد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "بدون انیمیشن (No Transition)",
    description:
      "برای غیرفعال کردن انیمیشن انتقال، مقدار <code>transitionDuration={0}</code> را تنظیم کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: NoAnimation,
    markdownName: "NoAnimation",
  },
];

export default function Accordion() {
  return (
    <DemoLayout
      title="آکاردئون"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
