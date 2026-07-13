// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { Horizontal } from "./Horizontal";
import { HideScrollbar } from "./HideScrollbar";
import { Offset } from "./Offset";
import { ShadowSize } from "./ShadowSize";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "اسکرول" },
];

const markdownPath = "components/scroll-shadow";

const demos: Demo[] = [
  {
    title: "استفاده پایه (Basic Usage)",
    description:
      "کامپوننت <code>ScrollShadow</code> زمانی که محتوای قابل اسکرول از محدوده خارج شود، به طور خودکار به بالا و پایین کادر سایه می‌افزاید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "افقی (Horizontal)",
    description:
      "اگر می‌خواهید سایه برای اسکرول افقی اعمال شود، می‌توانید پراپ <code>orientation=\"horizontal\"</code> را تنظیم کنید.",
    Component: Horizontal,
    markdownName: "Horizontal",
  },
  {
    title: "سایز سایه (Shadow Size)",
    description:
      "سایز پیش‌فرض سایه برابر با ۱۰ اسپیس در تایلوایند (۲.۵rem) است، اما می‌توانید با استفاده از پراپ <code>size</code> آن را تغییر دهید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: ShadowSize,
    markdownName: "ShadowSize",
  },
  {
    title: "افست سایه (Offset)",
    description:
      "افست سایه به شما امکان می‌دهد سایه را در یک موقعیت خاص اعمال کنید. مقدار پیش‌فرض افست سایه ۰ پیکسل است، اما می‌توانید با پراپ <code>offset</code> آن را تغییر دهید. جزئیات استفاده را در کد بررسی کنید.",
    Component: Offset,
    markdownName: "Offset",
  },
  {
    title: "مخفی‌کردن اسکرول‌بار (Hide Scrollbar)",
    description:
      "می‌توانید با افزودن کلاس <code>hide-scrollbar</code> اسکرول‌بارها را مخفی کنید. برای جزئیات به نمونه کد مراجعه کنید.",
    Component: HideScrollbar,
    markdownName: "HideScrollbar",
  },
];

export default function ScrollShadow() {
  return (
    <DemoLayout
      title="اسکرول"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
