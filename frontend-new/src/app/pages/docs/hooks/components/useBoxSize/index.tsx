import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک اندازه المان" },
];

const markdownPath = "docs/hooks/useBoxSize";

const demos = [
  {
    title: "ساده (Basic)",
    description:
      "پیاده‌سازی و استفاده پایه از هوک <code>useBoxSize</code> را مشاهده کنید. برای جزئیات بیشتر به کد مراجعه نمایید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseBoxSize() {
  return (
    <DemoLayout
      title="هوک اندازه المان"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
