import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تبدیل رشته به اسلاگ" },
];

const demos: Demo[] = [
  {
    title: "نحوه استفاده (Usage)",
    description: "یک رشته را به یک اسلاگ مناسب برای استفاده در URL تبدیل می‌کند.",
    Component: Usage,
    markdownName: "Usage",
  },
];

export default function StringToSlug() {
  return (
    <DemoLayout
      title="تبدیل رشته به اسلاگ"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
