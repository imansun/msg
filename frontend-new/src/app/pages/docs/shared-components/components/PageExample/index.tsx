import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { componentProps } from "./props";
import { Basic } from "./Basic";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "صفحه" },
];

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "این مثال، استفاده ساده از کامپوننت Page را نمایش می‌دهد و نحوه تنظیم عنوان و محتوای آن را نشان می‌دهد. برای مشاهده جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
  },
];

export default function PageExamples() {
  return (
    <DemoLayout
      title="صفحه"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
}
