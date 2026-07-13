import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "فرمت‌بندی اعداد" },
];

const demos = [
  {
    title: "استفاده (Usage)",
    description:
      "تبدیل یک عدد به فرمت ساده‌تر (مثلاً 10k، 11.1M، 141.1k، 125).",
    Component: Usage,
  },
];


export default function FormatNumber() {
  return (
    <DemoLayout
      title="فرمت‌بندی اعداد"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
