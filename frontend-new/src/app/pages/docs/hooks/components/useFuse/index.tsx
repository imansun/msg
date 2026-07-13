import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { params } from "./params";
import { returns } from "./returns";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک جستجو با Fuse" },
];

const demos: Demo[] = [
  {
    title: "پایه (Basic)",
    description:
      "به‌راحتی می‌توانید جستجوی فازی را با استفاده از هوک و <a href='https://www.fusejs.io/' class='text-primary-600 dark:text-primary-400 hover:underline'>Fuse.js</a> پیاده‌سازی کنید.",
    Component: Basic,
  },
];

export default function UseFuse() {
  return (
    <DemoLayout
      title="هوک جستجو با Fuse"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
