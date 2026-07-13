// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { WithLineSpace } from "./WithLineSpace";
import { Vertical } from "./Vertical";
import { VerticalWithLineSpace } from "./VerticalWithLineSpace";
import { Advanced } from "./Advanced";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "مراحل" },
];

const markdownPath = "components/steps";

const demos: Demo[] = [
  {
    title: "پایه (Basic)",
    description:
      "مراحل (Steps) پیشرفت را از طریق مراحل شماره‌گذاری شده نمایش می‌دهد. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "با فاصله خط (With Line Space)",
    description:
      "مراحل می‌توانند فاصله خط داشته باشند. برای این کار، کلاس <code>.line-space</code> را به ریشه اضافه کنید. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: WithLineSpace,
    markdownName: "WithLineSpace",
  },
  {
    title: "نمونه عمودی (Vertical Example)",
    description:
      "مراحل می‌توانند عمودی باشند. برای این کار، کلاس <code>.is-vertical</code> را به ریشه اضافه کنید. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Vertical,
    markdownName: "Vertical",
  },
  {
    title: "عمودی با فاصله خط (Vertical With Line Space)",
    description:
      "نمونه عمودی و فاصله خط. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: VerticalWithLineSpace,
    markdownName: "VerticalWithLineSpace",
  },
  {
    title: "پیشرفته (Advanced)",
    description:
      "ادغام با هوک <code>useStep</code>. برای جزئیات استفاده، کد را بررسی کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function Steps() {
  return (
    <DemoLayout
      title="مراحل"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
