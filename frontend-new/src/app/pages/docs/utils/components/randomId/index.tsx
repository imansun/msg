import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "شناسه تصادفی" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "یک رشته شناسه تصادفی تولید می‌کند.",
    Component: Usage,
    markdownName: "Usage",
  },
];

export default function RandomId() {
  return (
    <DemoLayout
      title="شناسه تصادفی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
    />
  );
}
