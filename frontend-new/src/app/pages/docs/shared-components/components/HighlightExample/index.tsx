import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { componentProps } from "./props";
import { Custom } from "./Custom";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "برجسته‌سازی" },
];

const markdownPath = "docs/shared-components/HighlightExample";

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "این دمو پیاده‌سازی اولیه کامپوننت Highlight را نمایش می‌دهد و نحوه برجسته‌سازی متن خاصی در میان محتوا را نشان می‌دهد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "نمونه سفارشی (Custom)",
    description:
      "این دمو چگونگی سفارشی‌سازی کامپوننت Highlight برای برجسته‌سازی متنی متنوع‌تر و انعطاف‌پذیرتر را نمایش می‌دهد. برای مشاهده جزئیات بیشتر به کد مراجعه کنید.",
    Component: Custom,
    markdownName: "Custom",
  },
];

export default function HighlightExamples() {
  return (
    <DemoLayout
      title="برجسته‌سازی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
}
