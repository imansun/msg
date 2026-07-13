// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Rounded } from "./Rounded";
import { Glow } from "./Glow";
import { SoftColor } from "./SoftColor";
import { SoftColorBordered } from "./SoftColorBordered";
import { Outlined } from "./Outlined";
import { Custom } from "./Custom";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "بج" },
];

const markdownPath = "components/badge";

const demos: Demo[] = [
  {
    title: "بج پیش‌فرض (Default Badge)",
    description:
      "بج‌ها برای اطلاع‌رسانی وضعیت داده‌های خاص به کاربر استفاده می‌شوند. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "بج ساده (Basic Badge)",
    description:
      "کامپوننت <code>Badge</code> می‌تواند رنگ‌های مختلفی داشته باشد <code>(neutral, primary, secondary, info, success, warning, error)</code>. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "بج گرد (Rounded Badge)",
    description:
      "کامپوننت <code>Badge</code> می‌تواند ظاهری گرد داشته باشد. برای این منظور باید از کلاس کمکی <code>rounded-full</code> استفاده کنید. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Rounded,
    markdownName: "Rounded",
  },
  {
    title: "بج درخشان (Glow Badge)",
    description:
      "کامپوننت <code>Badge</code> قابلیت درخشش (Glow) دارد. برای این کار کافیست پراپرتی <code>isGlow</code> را اضافه کنید. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Glow,
    markdownName: "Glow",
  },
  {
    title: "بج رنگ ملایم (Soft Color Badge)",
    description:
      "کامپوننت <code>Badge</code> می‌تواند رنگ ملایم داشته باشد. برای این کار پراپرتی <code>variant=\"soft\"</code> را استفاده کنید. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "بج رنگ ملایم با حاشیه (Soft Color Bordered Badge)",
    description:
      "کامپوننت <code>Badge</code> می‌تواند علاوه بر رنگ ملایم، حاشیه نیز داشته باشد. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: SoftColorBordered,
    markdownName: "SoftColorBordered",
  },
  {
    title: "بج حاشیه‌دار (Outlined Badge)",
    description:
      "کامپوننت <code>Badge</code> می‌تواند به صورت outlined نمایش داده شود. برای این منظور پراپرتی <code>variant=\"outlined\"</code> را ست کنید. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "بج سفارشی (Custom Badge)",
    description:
      "همچنین می‌توانید با استفاده از کلاس‌های کمکی Tailwind CSS به <code>Badge</code> استایل سفارشی دهید. برای جزئیات استفاده، به کد مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function Badge() {
  return (
    <DemoLayout
      title="بج"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
