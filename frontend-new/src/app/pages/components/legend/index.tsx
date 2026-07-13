// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { SoftColor } from "./SoftColor";
import { Outlined } from "./Outlined";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "لجند" },
];

const markdownPath = "components/legend";

const demos: Demo[] = [
  {
    title: "لجند ساده (Basic Legend)",
    description:
      "شاخص لجند برای افزایش شفافیت و توضیح معنای رنگ‌ها در نمودارها، گراف‌ها، نقشه‌ها، داشبوردها، رویدادهای تقویم و وضعیت‌ها استفاده می‌شود.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "لجند با حاشیه (Outlined Legend)",
    description: "لجندها می‌توانند با یک حاشیه نمایش داده شوند.",
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "لجند با رنگ ملایم (Soft Color Legend)",
    description:
      "لجندها می‌توانند با یک رنگ ملایم برای ظاهری لطیف‌تر و ظریف‌تر نمایش داده شوند.",
    Component: SoftColor,
    markdownName: "SoftColor",
  },
];

export default function Legend() {
  return (
    <DemoLayout
      title="لجند"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
