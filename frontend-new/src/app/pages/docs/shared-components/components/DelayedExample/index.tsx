import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { componentProps } from "./props";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "تاخیری" },
];

const markdownPath = "docs/shared-components/DelayedExample";

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "این دمو استفاده‌ی ساده از کامپوننت تاخیری (Delayed) را نمایش می‌دهد. این کامپوننت فرزند خود را پس از یک تأخیر مشخص رندر می‌کند. برای مشاهده جزئیات استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function ApplyWrapperExamples() {
  return (
    <DemoLayout
      title="تاخیری"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
}
