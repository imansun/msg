import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تبدیل میلی‌ثانیه به زمان" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "تبدیل میلی‌ثانیه به رشته زمان قالب‌بندی‌شده.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function MsToTime() {
  return (
    <DemoLayout
      title="تبدیل میلی‌ثانیه به زمان"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
