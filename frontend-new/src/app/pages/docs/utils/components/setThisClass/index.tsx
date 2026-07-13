import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "اعمال کلاس مشخص" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "کلاس CSS مربوط به رنگ مشخص شده را بازمی‌گرداند. <code>(primary, secondary, info, success, warning, error)</code>",
    Component: Usage,
  },
];

export default function SetThisClass() {
  return (
    <DemoLayout
      title="اعمال کلاس مشخص"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
} 