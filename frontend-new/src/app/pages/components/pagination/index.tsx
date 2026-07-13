// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { WithEdges } from "./WithEdges";
import { Siblings } from "./Siblings";
import { Boundaries } from "./Boundaries";
import { Rounded } from "./Rounded";
import { Controlled } from "./Controlled";
import { Sizes } from "./Sizes";
import { Polymorphic } from "./Polymorphic";
import { Disabled } from "./Disabled";
import { Custom } from "./Custom";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "صفحه‌بندی" },
];

const markdownPath = "components/pagination";

const demos: Demo[] = [
  {
    title: "صفحه‌بندی (Pagination)",
    description:
      "کامپوننت <code>Pagintaion</code> برای جداکردن مجموعه‌های بزرگ داده استفاده می‌شود تا کاربر بتواند اطلاعات را راحت‌تر مشاهده کند. بسته به تعداد داده‌ها، این کامپوننت به صورت خودکار مقیاس‌بندی می‌شود.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "با دکمه‌های ابتدایی و انتهایی (With Edges)",
    description:
      "در <code>Pagintaion</code> می‌توانید دکمه‌هایی برای رفتن به اولین و آخرین صفحه داشته باشید. برای جزییات بیشتر، کد نمونه را مشاهده کنید.",
    Component: WithEdges,
    markdownName: "WithEdges",
  },
  {
    title: "تعداد آیتم‌های مجاور (Sibling Count)",
    description:
      "برای تعیین تعداد دلخواه آیتم‌های فعال مجاور، می‌توانید از prop با نام <code>siblings</code> استفاده کنید. برای اطلاعات بیشتر، کد را ببینید.",
    Component: Siblings,
    markdownName: "Siblings",
  },
  {
    title: "تعداد مرزی (Boundaries Count)",
    description:
      "برای نمایش تعداد دلخواه آیتم پس از دکمه قبلی و قبل از دکمه بعدی، از prop با نام <code>boundaries</code> استفاده کنید.",
    Component: Boundaries,
    markdownName: "Boundaries",
  },
  {
    title: "صفحه‌بندی گرد (Rounded Pagination)",
    description:
      "آیتم‌های <code>Pagintaion</code> می‌توانند دارای گوشه‌های گرد (rounded-sm) باشند. جهت مشاهده جزئیات بیشتر به کد مراجعه نمایید.",
    Component: Rounded,
    markdownName: "Rounded",
  },
  {
    title: "صفحه‌بندی کنترل‌شده (Controlled Pagination)",
    description:
      "<code>Pagintaion</code> می‌تواند به صورت کنترل‌شده عمل کند. برای جزییات بیشتر، کد را بررسی کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "سایزبندی صفحه‌بندی (Sizes Pagination)",
    description:
      "کامپوننت <code>Pagintaion</code> می‌تواند در اندازه‌های مختلف نمایش داده شود. برای جزییات بیشتر، کد را مشاهده کنید.",
    Component: Sizes,
    markdownName: "Sizes",
  },
  {
    title: "شخصی‌سازی (Customize)",
    description:
      "شما می‌توانید با استفاده از کلاس‌های کمکی Tailwind CSS به <code>Pagintaion</code> استایل سفارشی بدهید. برای مشاهده جزئیات، نمونه کد را ببینید.",
    Component: Custom,
    markdownName: "Custom",
  },
  {
    title: "رندر چندریختی (Polymorphic Rendering)",
    description:
      "<code>Pagintaion</code> یک کامپوننت چندریختی است و می‌توانید المان ریشه را تغییر دهید. برای اطلاعات بیشتر نمونه کد را ببینید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "غیرفعال (Disabled)",
    description:
      "<code>Pagintaion</code> زمانی که غیرفعال شود، استایل مخصوص خود را دارد. برای مشاهده جزئیات کد را ببینید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
];

export default function Pagination() {
  return (
    <DemoLayout
      title="صفحه‌بندی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
