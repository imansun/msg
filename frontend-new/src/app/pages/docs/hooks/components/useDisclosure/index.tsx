import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت باز/بسته شدن" },
];

const markdownPath = "docs/hooks/useDisclosure";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "این نمونه نحوه استفاده از هوک <code>useDisclosure</code> برای مدیریت وضعیت بولین را نشان می‌دهد. این هوک توابعی مثل open، close و toggle را فراهم می‌کند و همچنین امکان تعریف callback برای رویدادهای onOpen و onClose وجود دارد. برای جزئیات بیشتر استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseDisclosure() {
  return (
    <DemoLayout
      title="هوک مدیریت باز/بسته شدن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}

