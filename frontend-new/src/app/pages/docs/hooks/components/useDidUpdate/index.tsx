import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک پس از به‌روزرسانی"},
];

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "تابع داده شده را تنها زمانی که مقدار ورودی تغییر کند (در useEffect)، اجرا می‌کند؛ نه هنگام اولین بار که کامپوننت mount می‌شود.",
    Component: Basic,
  },
];

export default function UseDidUpdate() {
  return (
    <DemoLayout
      title="هوک پس از به‌روزرسانی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
    />
  );
}
