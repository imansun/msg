import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک قفل اسکرولبار" },
];

const markdownPath = "docs/hooks/useLockScrollbar";

const demos: Demo[] = [
  {
    title: "هوک قفل اسکرولبار (useLockScrollbar)",
    description:
      "یک هوک سفارشی برای قفل کردن و آزاد کردن اسکرول صفحه. برای جزئیات استفاده کد نمونه را مشاهده کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseLockScrollbar() {
  return (
    <DemoLayout
      title="هوک قفل اسکرولبار"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
