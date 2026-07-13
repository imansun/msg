import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "اطمینان از رشته بودن" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "اطمینان حاصل می‌کند که ورودی یک رشته باشد. اگر ورودی <code>null</code> یا <code>undefined</code> باشد، یک رشته خالی برمی‌گرداند.",
    Component: Usage,
  },
];


export default function EnsureString() {
  return (
    <DemoLayout
      title="اطمینان از رشته بودن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
