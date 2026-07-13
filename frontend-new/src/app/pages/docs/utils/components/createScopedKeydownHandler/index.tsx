import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "ایجاد هندلر کلید اختصاصی" },
];

const markdownPath = "docs/utils/createScopedKeydownHandler";

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "تابع <code>createScopedKeydownHandler</code> یک ابزار برای ساده‌سازی ناوبری با کیبورد در یک محدوده مشخص است. این تابع مدیریت رویدادهای <code>keydown</code> را به‌گونه‌ای فراهم می‌کند که امکان ناوبری شهودی بین عناصر را فراهم کرده و از رفتارهای قابل تنظیم مانند حلقه‌زدن، مدیریت جهت و فعال‌سازی هنگام فوکوس پشتیبانی می‌کند. برای جزئیات استفاده کد را بررسی کنید.",
    Component: Usage,
    markdownName: "Usage",
  },
];

export default function CreateScopedKeydownHandler() {
  return (
    <DemoLayout
      title="ایجاد هندلر کلید اختصاصی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
