// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { WithoutAnimation } from "./WithoutAnimation";
import { StrokeWidth } from "./StrokeWidth";
import { componentProps } from "./props";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "تیک متحرک" },
];

const markdownPath = "docs/shared-components/AnimatedTickExamples";

const demos: Demo[] = [
  {
    title: "نمونهٔ ساده (Basic)",
    description:
      "نمایش تیک با انیمیشنی روان در حالت اولیه. با استفاده از دکمه می‌توانید تیک را نمایش دهید یا پنهان کنید. برای مشاهده جزئیات نحوه استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "بدون انیمیشن (Without Animation)",
    description:
      "تیک را بدون هیچ‌گونه انیمیشنی نمایش می‌دهد. با دکمه می‌توانید تیک را نمایش دهید یا پنهان کنید. برای مشاهده جزئیات نحوه استفاده، کد را بررسی کنید.",
    Component: WithoutAnimation,
    markdownName: "WithoutAnimation",
  },
  {
    title: "ضخامت خط (Stroke Width)",
    description:
      "می‌توانید اندازه و ضخامت خط علامت تیک را سفارشی‌سازی کنید. برای مشاهده جزئیات نحوه استفاده، کد را بررسی کنید.",
    Component: StrokeWidth,
    markdownName: "StrokeWidth",
  },
];

const AnimatedTickExamples = () => {
  return (
    <DemoLayout
      title="تیک متحرک"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      componentProps={componentProps}
    />
  );
};

export default AnimatedTickExamples;
