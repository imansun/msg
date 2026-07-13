import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت لیست" },
];

const demos: Demo[] = [
  {
    title: "مثال ساده (Basic)",
    description:
      '<code>useListState</code> یک آرایه را به عنوان آرگومان ورودی دریافت می‌کند و یک لیست از مقادیر به همراه هندلرهایی برای تغییر آن‌ها را به صورت یک تاپل بازمی‌گرداند؛ مشابه هوک <code>useState</code>.',
    Component: Basic,
  },
];

export default function UseListState() {
  return (
    <DemoLayout
      title="هوک مدیریت لیست"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
