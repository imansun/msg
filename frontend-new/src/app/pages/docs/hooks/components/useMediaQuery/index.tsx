import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک بررسی مدیا کوئری" },
];

const markdownPath = "docs/hooks/useMediaQuery";

const demos: Demo[] = [
  {
    title: "استفاده پایه (Basic)",
    description:
      "<code>useMediaQuery</code> به تغییرات مدیا کوئری گوش می‌دهد. این هوک یک مدیا کوئری به عنوان ورودی دریافت می‌کند و اگر مدیا کوئری داده‌شده با وضعیت فعلی مطابق باشد مقدار true و در غیر این صورت false بازمی‌گرداند. برای جزئیات بیشتر به کد استفاده مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseMediaQuery() {
  return (
    <DemoLayout
      title="هوک بررسی مدیا کوئری"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
