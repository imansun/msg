import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "مقایسه آرایه‌ها" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "دو آرایه را به‌صورت عمیق مقایسه می‌کند تا بررسی شود آیا یکسان هستند.",
    Component: Usage,
  },
];


export default function CompareArrays() {
  return (
    <DemoLayout
      title="مقایسه آرایه‌ها"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
