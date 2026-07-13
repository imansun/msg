import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "دریافت چند مقدار تصادفی" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "یک زیرمجموعه تصادفی از عناصر آرایه ورودی برمی‌گرداند.",
    Component: Usage,
  },
];


export default function GetMultipleRandom() {
  return (
    <DemoLayout
      title="دریافت چند مقدار تصادفی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
