import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک شناسایی هاور" },
];

const markdownPath = "docs/hooks/useHover";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "تشخیص می‌دهد که آیا عنصر داده شده در حالت هاور قرار دارد یا خیر. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseHover() {
  return (
    <DemoLayout
      title="هوک شناسایی هاور"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
    />
  );
}
