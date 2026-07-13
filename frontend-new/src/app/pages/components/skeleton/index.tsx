// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { CustomColor } from "./CustomColor";
import { Default } from "./Default";
import { NoAnimation } from "./NoAnimation";
import { PulseAnimation } from "./PulseAnimation";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "اسکلتون" },
];

const markdownPath = "components/skeleton";

const demos: Demo[] = [
  {
    title: "اسکلت پیش‌فرض (Default Skeleton)",
    description:
      "کامپوننت <code>Skeleton</code> یک مکان‌نگهدار نمایش می‌دهد تا زمان بارگذاری محتوای واقعی یا برای نشان دادن محتوایی که هنوز وجود ندارد از آن استفاده کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "اسکلت ساده (Basic Skeleton)",
    description:
      "با کامپوننت <code>Skeleton</code> می‌توانید اشکال مختلفی بسازید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "اسکلت رنگ موج سفارشی (Custom Wave Color Skeleton)",
    description:
      "رنگ کامپوننت <code>Skeleton</code> و موج ان قابل سفارشی‌سازی است. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: CustomColor,
    markdownName: "CustomColor",
  },
  {
    title: "غیرفعال کردن انیمیشن (Disable Animation)",
    description:
      "برای غیرفعال کردن انیمیشن، مقدار <code>animate={false}</code> را قرار دهید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: NoAnimation,
    markdownName: "NoAnimation",
  },
  {
    title: "اسکلت با انیمیشن ضربانی (Pulse Animation Skeleton)",
    description:
      "با استفاده از کلاس کاربردی <code>animate-pulse</code> در tailwind می‌توانید <code>Skeleton</code> را به صورت ضربانی نمایش دهید. جزئیات را در کد ببینید.",
    Component: PulseAnimation,  
    markdownName: "PulseAnimation",
  },
];

export default function Legend() {
  return (
    <DemoLayout
      title="اسکلتون"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
