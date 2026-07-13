// Local Imports
import React from "react";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { Advanced } from "./Advanced";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "نمای درختی" },
];

const markdownPath = "components/treeview";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "کامپوننت Treeview یک ابزارک است که یک لیست سلسله‌مراتبی از آیتم‌ها را در یک ساختار درختی نمایش می‌دهد. این مولفه برای نمایش حجم زیادی از داده‌های تو در تو مفید است.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "پیشرفته (Advanced)",
    description:
      "کامپوننت Treeview یک ابزارک است که یک لیست سلسله‌مراتبی از آیتم‌ها را در یک ساختار درختی نمایش می‌دهد. این مولفه برای نمایش حجم زیادی از داده‌های تو در تو مفید است.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function Treeview(): React.ReactElement {
  return (
    <DemoLayout
      title="نمای درختی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
