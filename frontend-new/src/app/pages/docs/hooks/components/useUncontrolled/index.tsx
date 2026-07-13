import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت بدون کنترل" },
];

const demos: Demo[] = [
  {
    title: "مثال ساده (Basic)",
    description:
      "<code>useUncontrolled</code> مدیریت وضعیت برای کامپوننت‌های کنترل‌شده و کنترل‌نشده را برعهده می‌گیرد.",
    Component: Basic,
  },
];

export default function UseUncontrolled() {
  return (
    <DemoLayout
      title="هوک مدیریت بدون کنترل"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
