import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "حذف Ref" },
];

const demos: Demo[] = [
  {
    title: "نحوه استفاده (Usage)",
    description: "مقدار نهایی Ref را دریافت کنید.",
    Component: Usage,
  },
];

export default function UnRef() {
  return (
    <DemoLayout
      title="حذف Ref"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
