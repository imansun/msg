import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک جمع و باز شدن المان" },
];

const markdownPath = "docs/hooks/useCollapse";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "پیاده‌سازی و استفاده پایه از هوک <code>useCollapse</code> را مشاهده کنید. برای جزئیات بیشتر نحوه استفاده، به کد مراجعه نمایید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseCollapse() {
  return (
    <DemoLayout
      title="هوک جمع و باز شدن المان"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
