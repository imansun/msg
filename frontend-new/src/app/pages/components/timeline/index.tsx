// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { WithLineSpace } from "./WithLineSpace";
import { Outlined } from "./Outlined";
import { ActiveItem } from "./ActiveItem";
import { Advanced } from "./Advanced";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "خط زمان" },
];

const markdownPath = "components/timeline";

const demos: Demo[] = [
  {
    title: "خط زمان (Timeline)",
    description:
      "کامپوننت <code>Timeline</code> برای نمایش اطلاعات زمانی به صورت استایل‌دار و کرونولوژیک کاربرد دارد.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "با فاصله بین خطوط (With Line Space)",
    description:
      "هر مرحله می‌تواند دارای فاصله بین خطوط باشد. برای این کار، پراپرتی <code>lineSpace</code> را به ریشه اضافه کنید. برای جزئیات بیشتر کد را بررسی کنید.",
    Component: WithLineSpace,
    markdownName: "WithLineSpace",
  },
  {
    title: "حالت خطی (Outlined)",
    description: `مراحل می‌توانند به صورت outlined نمایش داده شوند. برای این کار، پراپرتی <code>variant="outlined"</code> را تنظیم کنید. برای جزئیات بیشتر کد را بررسی کنید.`,
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "مرحله فعال (ActiveItem)",
    description:
      "یک مرحله می‌تواند دارای انیمیشن ping باشد. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: ActiveItem,
    markdownName: "ActiveItem",
  },
  {
    title: "پیشرفته (Advanced)",
    description: "نمونه پیشرفته‌ی مرحله. برای جزئیات بیشتر کد را بررسی کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function Timeline() {
  return (
    <DemoLayout
      title="خط زمان"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
