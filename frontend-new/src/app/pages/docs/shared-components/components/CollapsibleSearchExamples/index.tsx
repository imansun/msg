import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { componentProps } from "./props";
import { CustomButton } from "./CustomButton";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "جستجوی جمع‌شونده" },
];

const markdownPath = "docs/shared-components/CollapsibleSearchExamples";

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "یک پیاده‌سازی ساده از کامپوننت جستجوی جمع‌شونده که عملکرد اصلی آن را نمایش می‌دهد. برای مشاهده جزئیات نحوه استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "دکمه سفارشی (Custom Button)",
    description:
      "نمونه‌ای که نحوه سفارشی‌سازی دکمه در کامپوننت جستجوی جمع‌شونده را نمایش می‌دهد. برای مشاهده جزئیات نحوه استفاده، به کد مراجعه کنید.",
    Component: CustomButton,
    markdownName: "CustomButton",
  },
];

export default function CollapsibleSearchExamples() {
  return (
    <DemoLayout
      title="جستجوی جمع‌شونده"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
}
