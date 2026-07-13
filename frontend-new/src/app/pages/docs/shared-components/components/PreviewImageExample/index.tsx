// Local Imports
import { DemoLayout, Demo } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { componentProps } from "./props";

const breadcrumbs = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "تصویر پیش‌نمایش" },
];

const markdownPath = "docs/shared-components/PreviewImageExample";

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "یک نمایش از پیاده‌سازی ساده کامپوننت <code>PreviewImage</code>. پیش‌نمایش یک تصویر با یک منبع پیش‌فرض را نمایش می‌دهد اگر هیچ فایلی انتخاب نشده باشد. برای جزییات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

const PreviewImageExamples = () => {
  return (
    <DemoLayout
      title="تصویر پیش‌نمایش"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
};

export default PreviewImageExamples; 