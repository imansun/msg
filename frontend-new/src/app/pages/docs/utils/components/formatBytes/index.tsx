import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "فرمت‌بندی بایت‌ها" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "تبدیل تعداد بایت‌ها به فرمت قابل خواندن توسط انسان (مثلاً KB، MB، GB).",
    Component: Usage,
  },
];


export default function FormatBytes() {
  return (
    <DemoLayout
      title="فرمت‌بندی بایت‌ها"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
