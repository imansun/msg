import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک برجسته‌سازی متن" },
];

const markdownPath = "docs/hooks/useHighlight";

const demos: Demo[] = [
  {
    title: "پایه (Basic)",
    description:
      "برای برجسته‌سازی بخش‌هایی از یک متن استفاده می‌شود. برای جزییات بیشتر، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseHighlight() {
  return (
    <DemoLayout
      title="هوک برجسته‌سازی متن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
