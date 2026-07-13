import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک مدیریت کلیپ‌بورد" },
];

const markdownPath = "docs/hooks/useClipboard";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "این هوک برای کپی کردن به کلیپ‌بورد استفاده می‌شود. همچنین می‌توانید از کامپوننت <code>CopyButton</code> نیز استفاده کنید. برای مشاهده جزئیات نحوه استفاده، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

export default function UseClipboard() {
  return (
    <DemoLayout
      title="هوک مدیریت کلیپ‌بورد"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
