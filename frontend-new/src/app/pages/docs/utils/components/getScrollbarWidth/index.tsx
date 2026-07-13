import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "دریافت عرض اسکرولبار" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "دریافت عرض نوار اسکرول مرورگر بر حسب پیکسل.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function GetScrollbarWidth() {
  return (
    <DemoLayout
      title="دریافت عرض اسکرولبار"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
    />
  );
}
