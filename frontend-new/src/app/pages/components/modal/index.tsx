// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Blur } from "./Blur";
import { ConfirmModalExample } from "./ConfirmModalExample";
import { ScaleDown } from "./ScaleDown";
import { ScaleUp } from "./ScaleUp";
import { ShiftDown } from "./ShiftDown";
import { ShiftUp } from "./ShiftUp";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "مودال" },
];

const markdownPath = "components/modal";

const demos: Demo[] = [
  {
    title: "مودال ساده (Basic)",
    description:
      "<a href='https://headlessui.com/react/dialog' class='text-primary-600 dark:text-primary-400 hover:underline'>Headless UI</a> یک کامپوننت گفت‌وگو (مودال) کاملاً مدیریت‌شده و بدون نمایش مستقیم است که با ویژگی‌های دسترسی و امکان کار با صفحه‌کلید ارائه می‌شود، مناسب برای ساخت پنجره‌های مودال و گفت‌وگو کاملاً سفارشی.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "پس‌زمینه تار (Blur Backdrop)",
    description:
      "با استفاده از Tailwind CSS کلاس blur-sm را برای پس‌زمینه تنظیم کنید. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Blur,
    markdownName: "Blur",
  },
  {
    title: "انیمیشن بالا آمدن (Shift Up Animation)",
    description:
      "انیمیشن بالا آمدن با Tailwind CSS. برای جزییات استفاده، کد را بررسی کنید.",
    Component: ShiftUp,
    markdownName: "ShiftUp",
  },
  {
    title: "انیمیشن پایین آمدن (Shift Down Animation)",
    description:
      "انیمیشن پایین آمدن با Tailwind CSS. برای جزییات استفاده، کد را بررسی کنید.",
    Component: ShiftDown,
    markdownName: "ShiftDown",
  },
  {
    title: "انیمیشن بزرگ‌شدن (Scale Up Animation)",
    description:
      "انیمیشن بزرگ‌شدن با Tailwind CSS. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: ScaleUp,
    markdownName: "ScaleUp",
  },
  {
    title: "انیمیشن کوچک‌شدن (Scale Down Animation)",
    description:
      "انیمیشن کوچک‌شدن با Tailwind CSS. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: ScaleDown,
    markdownName: "ScaleDown",
  },
  {
    title: "مودال تایید (Confirm Modal)",
    description:
      "انیمیشن کوچک‌شدن با Tailwind CSS. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: ConfirmModalExample,
    markdownName: "ConfirmModalExample",
  },
];

export default function Modal() {
  return (
    <DemoLayout
      title="مودال"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
