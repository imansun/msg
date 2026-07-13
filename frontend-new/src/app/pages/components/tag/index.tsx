// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Rounded } from "./Rounded";
import { Glow } from "./Glow";
import { SoftColor } from "./SoftColor";
import { Polymorphic } from "./Polymorphic";
import { Outlined } from "./Outlined";
import { TagGroup } from "./TagGroup";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/Components" },
  { title: "برچسب" },
];

const markdownPath = "components/tag";

const demos: Demo[] = [
  {
    title: "برچسب پیش‌فرض (Default Tag)",
    description:
      "<code>تگ‌ها</code> عناصر جمع‌وجوری هستند که یک ورودی، ویژگی یا اقدام را نمایش می‌دهند. تگ‌ها به کاربران اجازه می‌دهند اطلاعات وارد کنند، انتخاب انجام دهند، محتوا را فیلتر کرده یا عملی انجام دهند. برای جزئیات بیشتر، کد نمونه را مشاهده کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "برچسب ساده (Basic Badge)",
    description:
      "کامپوننت <code>Tag</code> می‌تواند رنگ‌های مختلفی داشته باشد <code>(neutral، primary، secondary، info، success، warning، error)</code>. برای مشاهده جزئیات، به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "برچسب گرد (Rounded Badge)",
    description:
      "<code>Tag</code> می‌تواند به شکل گرد نمایش داده شود. برای این کار کافی است کلاس <code>rounded-full</code> را اضافه کنید. برای جزئیات بیشتر کد را بررسی نمایید.",
    Component: Rounded,
    markdownName: "Rounded",
  },
  {
    title: "برچسب درخشان (Glow Badge)",
    description:
      "<code>Tag</code> قابلیت نمایش افکت درخشان را دارد. برای این کار کافی است prop <code>isGlow</code> را اضافه کنید. جزئیات بیشتر در کد نمونه.",
    Component: Glow,
    markdownName: "Glow",
  },
  {
    title: "برچسب رنگ ملایم (Soft Color Badge)",
    description: `<code>Tag</code> می‌تواند رنگ ملایم داشته باشد. کافی است prop <code>variant="soft"</code> را تنظیم کنید. جزئیات بیشتر در کد نمونه.`,
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "برچسب حاشیه‌دار (Outlined Badge)",
    description: `<code>Tag</code> می‌تواند به صورت حاشیه‌دار نمایش داده شود. کافی است prop <code>variant="outlined"</code> را تنظیم نمایید. جزئیات بیشتر در کد نمونه.`,
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "گروه برچسب‌ها (Tag Group)",
    description: "چندین تگ را می‌توانید در یک خط به صورت گروهی نمایش دهید.",
    Component: TagGroup,
    markdownName: "TagGroup",
  },
  {
    title: "رندر چندشکلی (Polymorphic Rendering)",
    description:
      "<code>Tag</code> یک کامپوننت چندشکلی است و می‌توانید المنت ریشه آن را تغییر دهید. برای توضیحات بیشتر، کد را مشاهده کنید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
];

export default function Badge() {
  return (
    <DemoLayout
      title="برچسب"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
