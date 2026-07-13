import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { CustomValue } from "./CustomValue";
import { params } from "./params";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک تغییر وضعیت روشن/خاموش" },
];

const markdownPath = "docs/hooks/useToggle";

const demos: Demo[] = [
  {
    title: "مثال ساده (Basic)",
    description:
      "<code>useToggle</code> یک الگوی رایج برای مدیریت وضعیت پیاده‌سازی می‌کند - این هوک بین مقادیر داده‌شده وضعیت را تغییر می‌دهد. برای جزئیات بیشتر به کد نمونه مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "مقدار سفارشی (Custom Value)",
    description:
      "امکان افزودن مقادیر سفارشی نیز به این هوک وجود دارد. برای جزئیات بیشتر نحوه استفاده، کد نمونه را ببینید.",
    Component: CustomValue,
    markdownName: "CustomValue",
  },
];

export default function UseToggle() {
  return (
    <DemoLayout
      title="هوک تغییر وضعیت روشن/خاموش"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
