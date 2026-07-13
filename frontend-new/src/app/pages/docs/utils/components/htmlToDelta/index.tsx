import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "تبدیل HTML به Delta" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "تبدیل HTML به فرمت Quill Delta.",
    Component: Usage,
  },
];


export default function HtmlToDelta() {
  return (
    <DemoLayout
      title="تبدیل HTML به Delta"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
