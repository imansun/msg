import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "دریافت مرورگر از User Agent" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "نوع مرورگر کاربر را بر اساس رشته User Agent تشخیص می‌دهد.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function GetUserAgentBrowser() {
  return (
    <DemoLayout
      title="دریافت مرورگر از User Agent"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
