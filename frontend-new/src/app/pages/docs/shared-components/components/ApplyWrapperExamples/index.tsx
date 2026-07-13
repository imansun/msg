import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { componentProps } from "./props";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "کامپوننت پوشاننده" },
];

const markdownPath = "docs/shared-components/ApplyWrapperExamples";

const demos: Demo[] = [
  {
    title: "نمونهٔ ساده (Basic)",
    description:
      "عنصر موردنظر را به‌صورت شرطی با یک کامپوننت رَپِر (بَدل‌بَر) مشخص‌شده پوشش می‌دهد. برای مشاهده جزئیات نحوه استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function ApplyWrapperExamples() {
  return (
    <DemoLayout
      title="کامپوننت پوشاننده"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
}
