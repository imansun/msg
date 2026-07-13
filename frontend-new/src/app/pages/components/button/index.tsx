// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { componentProps } from "./props";
import { Default } from "./Default";
import { Basic } from "./Basic";
import { Rounded } from "./Rounded";
import { SoftColor } from "./SoftColor";
import { Outlined } from "./Outlined";
import { Flat } from "./Flat";
import { Polymorphic } from "./Polymorphic";
import { GlowButton } from "./GlowButton";
import { Gradient } from "./Gradient";
import { OutlinedGradient } from "./OutlinedGradient";
import { WithIcon } from "./WithIcon";
import { OnlyIcon } from "./OnlyIcon";
import { ButtonSize } from "./ButtonSize";
import { ButtonGroup } from "./ButtonGroup";
import { Disabled } from "./Disabled";
import { SoftBordered } from "./SoftBordered";
import { Segment } from "./Segment";
import { Loading } from "./Loading";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "دکمه" },
];

const markdownPath = "components/button";

const demos: Demo[] = [
  {
    title: "دکمه پیش‌فرض (Default Button)",
    description:
      "یک <code>دکمه</code> به معنی انجام یک عملیات (یا مجموعه‌ای از عملیات‌ها) است. کلیک کردن روی دکمه منجر به اجرای منطق مورد نظر کسب‌وکار می‌شود. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "دکمه ساده (Basic Button)",
    description:
      "کامپوننت <code>Button</code> می‌تواند رنگ‌های مختلفی داشته باشد <code> (neutral, primary, secondary, info, success, warning, error) </code>. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "دکمه گرد (Rounded Button)",
    description:
      "کامپوننت <code>Button</code> می‌تواند گوشه‌های گرد داشته باشد. برای این کار باید از کلاس کمکی <code>rounded-full</code> استفاده کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Rounded,
    markdownName: "Rounded",
  },
  {
    title: "دکمه با رنگ ملایم (Soft Color Button)",
    description: `<code>Button</code> می‌تواند رنگ ملایم داشته باشد. برای این کار مقدار <code>variant="soft"</code> را قرار دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "دکمه دورخط‌دار (Outlined Button)",
    description: `<code>Button</code> می‌تواند دورخط‌دار باشد. برای این منظور مقدار <code>variant="outlined"</code> را تنظیم کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "دکمه تخت (Flat Button)",
    description: `<code>Button</code> می‌تواند حالت تخت داشته باشد. برای این کار مقدار <code>variant="flat"</code> را قرار دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: Flat,
    markdownName: "Flat",
  },
  {
    title: "دکمه ملایم با حاشیه (Soft Bordered Button)",
    description: `<code>Button</code> می‌تواند هم رنگ ملایم و هم حاشیه داشته باشد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: SoftBordered,
    markdownName: "SoftBordered",
  },
  {
    title: "رندر پلی‌مورفیک (Polymorphic Rendering)",
    description:
      "<code>Button</code> یک کامپوننت پلی‌مورفیک است و می‌توانید المنت ریشه‌ را تغییر دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "دکمه نورانی (Glow Button)",
    description: `<code>Button</code> قابلیت نورانی بودن دارد. برای این کار پراپ <code>isGlow</code> را اضافه کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: GlowButton,
    markdownName: "GlowButton",
  },
  {
    title: "دکمه با گرادینت سفارشی (Custom Gradient Button)",
    description:
      "کامپوننت <code>Button</code> می‌تواند به صورت گرادینت باشد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Gradient,
    markdownName: "Gradient",
  },
  {
    title: "دکمه گرادینت دورخط‌دار (Outlined Gradient Button)",
    description:
      "کامپوننت <code>Button</code> می‌تواند گرادینت دورخط‌دار باشد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: OutlinedGradient,
    markdownName: "OutlinedGradient",
  },
  {
    title: "دکمه بارگذاری (Loading Button)",
    description:
      "دکمه‌های بارگذاری <code>Button</code> دکمه‌هایی هستند که حالت بارگذاری یک کامپوننت یا صفحه را با اسپینر نمایش می‌دهند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Loading,
    markdownName: "Loading",
  },
  {
    title: "دکمه با آیکون (Button with Icon)",
    description:
      "کامپوننت <code>Button</code> می‌تواند آیکون داشته باشد. این دکمه‌ها به خوبی با <a href='https://react-icons.github.io/react-icons/' class='text-primary-600 dark:text-primary-400 hover:underline'>react-icons</a> و <a href='https://heroicons.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Heroicon</a> کار می‌کند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "دکمه فقط آیکون (Only Icon Button)",
    description:
      "کامپوننت <code>Button</code> می‌تواند فقط یک آیکون داشته باشد. این دکمه‌ها به خوبی با <a href='https://react-icons.github.io/react-icons/' class='text-primary-600 dark:text-primary-400 hover:underline'>react-icons</a> و <a href='https://heroicons.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Heroicon</a> کار می‌کند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: OnlyIcon,
    markdownName: "OnlyIcon",
  },
  {
    title: "اندازه‌های دکمه (Button Sizes)",
    description:
      "کامپوننت‌های <code>Button</code> می‌توانند اندازه‌های متفاوتی داشته باشند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: ButtonSize,
    markdownName: "ButtonSize",
  },
  {
    title: "گروه دکمه‌ (Button Group)",
    description:
      "می‌توانید چندین دکمه را در یک ردیف افقی کنار هم قرار دهید.",
    Component: ButtonGroup,
    markdownName: "ButtonGroup",
  },
  {
    title: "دکمه‌های سگمنت (Segment Buttons)",
    description:
      "دکمه‌های سگمنت مجموعه‌ای از دکمه‌های مرتبط در یک سگمنت هستند. این دکمه‌ها به صورت افقی نمایش داده می‌شوند. با تنظیم مقدار سگمنت به مقدار دکمه سگمنت، یک دکمه می‌تواند به طور پیش‌فرض انتخاب شود. فقط یک دکمه سگمنت در هر لحظه می‌تواند انتخاب شود.",
    Component: Segment,
    markdownName: "Segment",
  },
  {
    title: "دکمه غیرفعال (Disabled Button)",
    description:
      "دکمه‌های <code>Button</code> زمانی که غیرفعال باشند استایل خاص خود را دارند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Disabled,
    markdownName: "Disabled",
  },
];

export default function Button() {
  return (
    <DemoLayout
      title="دکمه"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
