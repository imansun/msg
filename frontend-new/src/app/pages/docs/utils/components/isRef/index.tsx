import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "بررسی Ref بودن" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "بررسی می‌کند که آیا یک مقدار یک Vue ref یا شیء reactive است یا خیر.",
    Component: Usage,
  },
];


export default function IsRef() {
  return (
    <DemoLayout
      title="بررسی Ref بودن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
