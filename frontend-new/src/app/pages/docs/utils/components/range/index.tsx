import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "محدوده (Range)" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "یک آرایه از اعداد را از مقدار شروع تا پایان (شامل انتها) تولید می‌کند.",
    Component: Usage,
  },
];

export default function Range() {
  return (
    <DemoLayout
      title="محدوده (Range)"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
} 