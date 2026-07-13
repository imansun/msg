// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Prepend } from "./Prepend";
import { Append } from "./Append";
import { Between } from "./Between";
import { Filled } from "./Filled";
import { Advanced } from "./Advanced";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "ورودی" },
];

const markdownPath = "forms/input-group";

const demos: Demo[] = [
  {
    title: "افزونه قبل ورودی (Prepend Addon)",
    description:
      "کامپوننت <code>Input</code> می‌تواند افزونه (addon) قبل از خود داشته باشد. برای جزئیات بیشتر نحوه استفاده، کد را بررسی کنید.",
    Component: Prepend,
    markdownName: "Prepend",
  },
  {
    title: "افزونه بعد ورودی (Append Addon)",
    description:
      "کامپوننت <code>Input</code> می‌تواند افزونه (addon) بعد از خود داشته باشد. برای جزئیات بیشتر نحوه استفاده، کد را بررسی کنید.",
    Component: Append,
    markdownName: "Append",
  },
  {
    title: "افزونه دوطرفه ورودی (Input Between Addon)",
    description:
      "کامپوننت <code>Input</code> می‌تواند بین دو افزونه (addon) قرار بگیرد. برای جزئیات بیشتر نحوه استفاده، کد را بررسی کنید.",
    Component: Between,
    markdownName: "Between",
  },
  {
    title: "افزونه پرشده (Filled Addon)",
    description:
      "افزونه (addon) می‌تواند به صورت پرشده (filled) باشد. برای جزئیات بیشتر نحوه استفاده، کد را بررسی کنید.",
    Component: Filled,
    markdownName: "Filled",
  },
  {
    title: "افزونه پیشرفته (Advanced Addon)",
    description:
      "نمونه‌های بیشتر از افزونه (addon) برای ورودی. برای جزئیات بیشتر نحوه استفاده، کد را بررسی کنید.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function InputGroup() {
  return (
    <DemoLayout
      title="گروه ورودی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
