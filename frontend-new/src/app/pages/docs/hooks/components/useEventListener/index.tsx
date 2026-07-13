import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک شنونده رویداد" },
];

const markdownPath = "docs/hooks/useEventListener";

const demos: Demo[] = [
  {
    title: "پایه (Basic)",
    description:
      "<code>useEventListener</code> یک شنونده رویداد به عنصری که ref به آن اختصاص داده شده اضافه می‌کند. این هوک از همان گزینه‌هایی که متد addEventListener پشتیبانی می‌کند نیز پشتیبانی می‌کند. برای جزئیات بیشتر به کد نمونه مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseEventListener() {
  return (
    <DemoLayout
      title="هوک شنونده رویداد"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
    />
  );
}
