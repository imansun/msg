import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک تغییر عنوان سند" },
];

const markdownPath = "docs/hooks/useDocumentTitle";

const demos: Demo[] = [
  {
    title: "مثال پایه (Basic)",
    description:
      "<code>useDocumentTitle</code> با استفاده از هوک <code>useLayoutEffect</code> مقدار document.title را تنظیم می‌کند. برای مشاهده جزئیات استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseDocumentTitle() {
  return (
    <DemoLayout
      title="هوک تغییر عنوان سند"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
    />
  );
}

