import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تزریق استایل‌ها به Head" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "تزریق پویا CSS به تگ <head> سند.",
    Component: Usage,
    markdownName: "Usage",
  },
];


export default function InjectStylesToHead() {
  return (
    <DemoLayout
      title="تزریق استایل‌ها به Head"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
    />
  );
} 