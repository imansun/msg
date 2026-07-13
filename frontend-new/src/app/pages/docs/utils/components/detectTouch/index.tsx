import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تشخیص صفحه لمسی" },
];

const markdownPath = "docs/utils/detectTouch";

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "تشخیص می‌دهد که دستگاه قابلیت لمسی دارد یا خیر بر اساس رشته User Agent. برای جزئیات استفاده کد را بررسی کنید.",
    Component: Usage,
    markdownName: "Usage",
  },
];

export default function DetectTouch() {
  return (
    <DemoLayout
      title="تشخیص صفحه لمسی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
    />
  );
}
