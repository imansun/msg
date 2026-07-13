import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "استفاده از موقعیت المان" },
];

const markdownPath = "docs/hooks/useBoxPosition";

const demos = [
  {
    title: "نمونهٔ ساده (Basic)",
    description:
      "<code>useBoxPosition</code> یک هوک برای مشاهده موقعیت یک عنصر DOM نسبت به نمای فعلی صفحه است. برای مشاهده جزییات نحوهٔ استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseBoxPosition() {
  return (
    <DemoLayout
      title="استفاده از موقعیت المان"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
    />
  );
}
