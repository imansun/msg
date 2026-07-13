// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Icon } from "./Icon";
import { Rotate } from "./Rotate";
import { Flip } from "./Flip";
import { Polymorphic } from "./Polymorphic";
import { Controlled } from "./Controlled";
import { Disabled } from "./Disabled";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "تعویض" },
];

const markdownPath = "forms/swap";

const demos: Demo[] = [
  {
    title: "تعویض ساده (Basic Swap)",
    description:
      "<code>Swap</code> یک کامپوننت است که امکان جابجایی بین دو وضعیت با افکت انتقال روان را فراهم می‌کند. برای راهنمای استفاده جزئی‌تر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "تعویض با آیکن (Icon Swap)",
    description:
      "با استفاده از آیکن‌ها می‌توانید بین دو وضعیت با افکت انتقال جابجا شوید. برای راهنمایی بیشتر به کد مراجعه کنید.",
    Component: Icon,
    markdownName: "Icon",
  },
  {
    title: "افکت چرخشی (Rotate Effect)",
    description:
      "با مقداردهی پراپ <code>effect</code> به <code>rotate</code>، افکت انتقال چرخشی فعال می‌شود. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Rotate,
    markdownName: "Rotate",
  },
  {
    title: "افکت فلیپ (Flip Effect)",
    description:
      "با مقدار دادن پراپ <code>effect</code> به <code>flip</code>، افکت انتقال فلیپ فعال می‌شود. برای توضیحات کاملتر کد را ببینید.",
    Component: Flip,
    markdownName: "Flip",
  },
  {
    title: "رندر پلی‌مورفیک (Polymorphic Rendering)",
    description:
      "<code>Swap</code> یک کامپوننت پلی‌مورفیک است که امکان رندر انعطاف‌پذیر را فراهم می‌کند. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "کنترل‌شده (Controlled)",
    description:
      "کامپوننت <code>Swap</code> می‌تواند به صورت برنامه‌نویسی کنترل شود. برای راهنمای بیشتر به کد مراجعه کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "غیرفعال (Disabled)",
    description:
      "می‌توانید کامپوننت <code>Swap</code> را غیرفعال کنید. برای راهنمایی بیشتر به کد مراجعه کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
];

export default function Swap() {
  return (
    <DemoLayout
      title="تعویض"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
