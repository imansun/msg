// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { componentProps } from "./props";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "ناوبری مسیر" },
];

const markdownPath = "docs/shared-components/BreadcrumbsExamples";

const demos: Demo[] = [
  {
    title: "ناوبری مسیر (Breadcrumbs)",
    description:
      "کامپوننت ناوبری مسیر سفارشی را بررسی کنید و برای مشاهده جزئیات پیاده‌سازی و نحوه استفاده، کد را مشاهده نمایید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

const BreadcrumbsExamples = () => {
  return (
    <DemoLayout
      title="ناوبری مسیر"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
};

export default BreadcrumbsExamples;
