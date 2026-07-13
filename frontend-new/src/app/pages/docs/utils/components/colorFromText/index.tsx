import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "رنگ از متن" },
];

const markdownPath = "docs/utils/colorFromText";

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "یک رشته متنی را بر اساس اولین حرف آن به یک رنگ نگاشت می‌کند. برای جزئیات استفاده کد را بررسی کنید.",
    Component: Usage,
    markdownName: "Usage",
  },
];

export default function ColorFromText() {
  return (
    <DemoLayout
      title="رنگ از متن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
