import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تشخیص نوع دستگاه" },
];

const markdownPath = "docs/utils/detectDeviceType";

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "نوع دستگاه را بر اساس رشته User Agent تشخیص می‌دهد. برای جزئیات استفاده کد را بررسی کنید.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function DetectDeviceType() {
  return (
    <DemoLayout
      title="تشخیص نوع دستگاه"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
