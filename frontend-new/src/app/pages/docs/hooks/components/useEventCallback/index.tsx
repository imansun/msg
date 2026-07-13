import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک کال‌بک رویداد" },
];

const demos: Demo[] = [
  {
    title: "پایه (Basic)",
    description:
      "<code>useEventCallback</code> اطمینان حاصل می‌کند که جدیدترین نسخه‌ی تابع کال‌بک در هنگام رندرهای مجدد استفاده می‌شود، در حالی که هویت تابع (reference) ثابت می‌ماند. زمانی باید از این هوک استفاده کنید که به مراجع پایدار برای کال‌بک‌ها در اپلیکیشن‌هایی با عملکرد حساس نیاز دارید.",
    Component: Basic,
  },
];

export default function UseEventCallback() {
  return (
    <DemoLayout
      title="هوک کال‌بک رویداد"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
    />
  );
}
