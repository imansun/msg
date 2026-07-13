import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "بررسی سرور بودن" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "تشخیص می‌دهد که آیا کد در سمت سرور اجرا می‌شود یا خیر.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function IsServer() {
  return (
    <DemoLayout
      title="بررسی سرور بودن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
    />
  );
}
