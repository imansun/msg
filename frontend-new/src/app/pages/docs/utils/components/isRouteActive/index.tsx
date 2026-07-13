import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "بررسی فعال بودن مسیر" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description: "بر اساس مسیر جاری، بررسی می‌کند که آیا یک مسیر فعال است یا خیر.",
    Component: Usage,
  },
];


export default function IsRouteActive() {
  return (
    <DemoLayout
      title="بررسی فعال بودن مسیر"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
