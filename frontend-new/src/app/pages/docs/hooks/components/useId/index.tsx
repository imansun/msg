import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت شناسه" },
];

const markdownPath = "docs/hooks/use-id";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "هوک <code>useId</code> یک شناسه تصادفی تولید می‌کند که در رندرهای مختلف ثابت باقی می‌ماند.",
    Component: Basic,
  },
];

export default function UseId() {
  return (
    <DemoLayout
      title="هوک مدیریت شناسه"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
