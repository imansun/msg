// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { EllipsisDots } from "./EllipsisDots";
import { Primary } from "./Primary";
import { Scrollable } from "./Scrollable";
import { WithIcon } from "./WithIcon";
import { Advanced } from "./Advanced";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "منوی کشویی" },
];

const markdownPath = "components/dropdown";

const demos: Demo[] = [
  {
    title: "لیست کشویی ساده (Basic Dropdown)",
    description:
      "<a href='https://headlessui.com/react/menu' class='text-primary-600 dark:text-primary-400 hover:underline'>Headless UI</a> Dropdown (Menu) یک روش آسان برای ساخت کامپوننت کشویی سفارشی و قابل دسترس با پشتیبانی کامل از پیمایش توسط صفحه‌کلید ارائه می‌دهد.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "دکمه سه‌نقطه (Ellipsis Dots)",
    description: "نمونه دکمه سه‌نقطه. برای جزئیات استفاده، کد را مشاهده کنید.",
    Component: EllipsisDots,
    markdownName: "EllipsisDots",
  },
  {
    title: "با رنگ اصلی (Primary)",
    description: "نمونه با رنگ اصلی. برای جزئیات استفاده، کد را مشاهده کنید.",
    Component: Primary,
    markdownName: "Primary",
  },
  {
    title: "قابل اسکرول (Scrollable)",
    description:
      "نمونه منوی کشویی قابل اسکرول. برای جزئیات استفاده، کد را مشاهده کنید.",
    Component: Scrollable,
    markdownName: "Scrollable",
  },
  {
    title: "با آیکون (With Icon)",
    description:
      "می‌توانید به آیتم‌های کشویی آیکون اضافه کنید. برای جزئیات استفاده، کد را مشاهده کنید.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "پیشرفته (Advanced)",
    description:
      "نمونه منوی کشویی پیشرفته. برای جزئیات استفاده، کد را مشاهده کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function Dropdown() {
  return (
    <DemoLayout
      title="منوی کشویی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
