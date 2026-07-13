// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Duration } from "./Duration";
import { TimingFunction } from "./TimingFunction";
import { MinWidth } from "./MinWidth";
import { Polymorphic } from "./Polymorphic";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "جمع شونده" },
];

const markdownPath = "components/collapse";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "کامپوننت <code>Collapse</code> برای کاهش فضای عمودی هنگام نمایش مقادیر زیادی اطلاعات کاربردی است.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "مدت زمان انتقال (Transition Duration)",
    description:
      "برای تنظیم مدت زمان انتقال دلخواه، از پراپ <code>transitionDuration</code> استفاده کنید. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: Duration,
    markdownName: "Duration",
  },
  {
    title: "تابع زمان‌بندی انتقال (Transition Timing Function)",
    description:
      "برای تنظیم تابع زمان‌بندی انتقال دلخواه، از پراپ <code>transitionTimingFunction</code> استفاده کنید. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: TimingFunction,
    markdownName: "Duration",
  },
  {
    title: "حداقل عرض (Min Width)",
    description:
      "برای تعیین حداقل عرض محتوا، از پراپ <code>min</code> استفاده کنید. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: MinWidth,
    markdownName: "MinWidth",
  },
  {
    title: "رندر چندشکلی (Polymorphic Rendering)",
    description:
      "<code>Collapse</code> یک کامپوننت چندشکلی است و می‌توانید المنت ریشه را تغییر دهید. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
];

export default function Collapse() {
  return (
    <DemoLayout
      title="جمع شونده"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
