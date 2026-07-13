import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت حافظه محلی" },
];

const markdownPath = "docs/hooks/useLocalStorage";

const demos: Demo[] = [
  {
    title: "نمونه ساده (Basic)",
    description:
      "<code>useLocalStorage</code> این امکان را می‌دهد که مقدار موجود در localStorage را به عنوان state ری‌اکت استفاده کنید. این هوک مشابه <code>useState</code> عمل می‌کند، اما علاوه بر آن مقدار را در localStorage نیز ذخیره می‌کند.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseLocalStorage() {
  return (
    <DemoLayout
      title="هوک مدیریت حافظه محلی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
