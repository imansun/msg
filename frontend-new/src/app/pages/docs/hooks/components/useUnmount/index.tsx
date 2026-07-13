import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک هنگام از بین رفتن کامپوننت" },
];

const demos: Demo[] = [
  {
    title: "مثال پایه (Basic)",
    description:
      "هوک سفارشی که یک تابع پاکسازی را هنگام حذف شدن کامپوننت اجرا می‌کند.",
    Component: Basic,
  },
];

export default function UseUnmount() {
  return (
    <DemoLayout
      title="هوک هنگام از بین رفتن کامپوننت"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
    />
  );
}
