import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "بررسی خالی نبودن Delta" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "بررسی می‌کند که آیا یک شیء Quill Delta حاوی هرگونه محتوای غیر فاصله خالی است یا خیر.",
    Component: Usage,
  },
];


export default function IsDeltaNotEmpty() {
  return (
    <DemoLayout
      title="بررسی خالی نبودن Delta"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
