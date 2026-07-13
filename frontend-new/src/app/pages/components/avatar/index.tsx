// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { componentProps } from "./props";
import { ActiveIndicator } from "./ActiveIndicator";
import { AutoColor } from "./AutoColor";
import { AvatarGroup } from "./AvatarGroup";
import { Basic } from "./Basic";
import { BasicInitial } from "./BasicInitial";
import { ColoredIndicator } from "./ColoredIndicator";
import { CustomStyles } from "./CustomStyles";
import { Default } from "./Default";
import { GradientBorder } from "./GradientBorder";
import { IndicatorPosition } from "./IndicatorPosition";
import { InitialSoft } from "./InitialSoft";
import { InitialSoftBordered } from "./InitialSoftBordered";
import { Polymorphic } from "./Polymorphic";
import { Skeleton } from "./Skeleton";
import { Square } from "./Square";
import { Squircle } from "./Squircle";
import { WithIndicator } from "./WithIndicator";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "آواتار" },
];

const markdownPath = "components/avatar";

const demos: Demo[] = [
  {
    title: "آواتار پیش‌فرض (Default Avatar)",
    description:
      "کامپوننت <code>Avatar</code> یک عنصر مقیاس‌پذیر و قابل رنگ‌دهی ایجاد می‌کند که می‌تواند متن، آیکن یا تصویر را درون خود جای دهد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "آواتار پایه (Basic Avatar)",
    description:
      "کامپوننت <code>Avatar</code> می‌تواند در اندازه‌های مختلف نسبت به پلتفرم یا اپلیکیشن نمایش داده شود. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "آواتار مربع (Square Avatar)",
    description:
      "کامپوننت <code>Avatar</code> می‌تواند به صورت مربع نمایش داده شود. برای این کار باید از کلاس <code>rounded-lg</code> استفاده کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Square,
    markdownName: "Square",
  },
  {
    title: "آواتار اسکویریکل (Squircle Avatar (Mask))",
    description:
      "کامپوننت <code>Avatar</code> می‌تواند به‌شکل اسکویریکل نمایش داده شود. برای این هدف باید از کلاس‌های <code>mask is-squircle</code> استفاده کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Squircle,
    markdownName: "Squircle",
  },
  {
    title: "اینیشیال پایه (Basic Initial)",
    description:
      "در صورت نبود تصویر، می‌توانید از اینیشیال (ابتدای نام) استفاده کنید. حروف ابتدایی را می‌توان در حالت‌های مختلف نمایش داد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: BasicInitial,
    markdownName: "BasicInitial",
  },
  {
    title: "اینیشیال ملایم (Initial Soft)",
    description: `اینیشیال <code>Avatar</code> می‌تواند رنگ‌های ملایم داشته باشد. برای این کار مقدار <code>variant="soft"</code> را تنظیم کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.`,
    Component: InitialSoft,
    markdownName: "InitialSoft",
  },
  {
    title: "اینیشیال ملایم حاشیه‌دار (Initial Soft Bordered)",
    description:
      "اینیشیال <code>Avatar</code> می‌تواند دارای حاشیه باشد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: InitialSoftBordered,
    markdownName: "InitialSoftBordered",
  },
  {
    title: "آواتار با نشانگر (Avatar With Indicator)",
    description:
      "کامپوننت <code>Avatar</code> می‌تواند یک نشانگر نقطه‌ای متصل به خود داشته باشد که وضعیت کاربر را نمایش می‌دهد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: WithIndicator,
    markdownName: "WithIndicator",
  },
  {
    title: "نشانگرهای رنگی (Colored Indicators)",
    description:
      "نقطه‌های <code>Avatar</code> می‌توانند در رنگ‌های مختلف نمایش داده شوند و وضعیت کاربر را نشان دهند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: ColoredIndicator,
    markdownName: "ColoredIndicator",
  },
  {
    title: "نشانگر فعال (Active Indicator)",
    description:
      "نقطه‌های <code>Avatar</code> می‌توانند دارای انیمیشن پینگ باشند که برای نمایش پیام‌های مهم کاربرد دارد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: ActiveIndicator,
    markdownName: "ActiveIndicator",
  },
  {
    title: "موقعیت نشانگر (Indicator Position)",
    description:
      "موقعیت نقطه <code>Avatar</code> می‌تواند بالا، پایین، چپ و راست باشد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: IndicatorPosition,
    markdownName: "IndicatorPosition",
  },
  {
    title: "گروه آواتار (Avatar Group)",
    description:
      "گروه <code>Avatar</code> فرزندان خود را به‌صورت دسته‌ای و چیده شده نمایش می‌دهد. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: AvatarGroup,
    markdownName: "AvatarGroup",
  },
  {
    title: "حاشیه گرادینت (Gradient Border)",
    description:
      "حاشیه <code>Avatar</code> می‌تواند با رنگ‌های گرادینت (تدریجی) نمایش داده شود. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: GradientBorder,
    markdownName: "GradientBorder",
  },
  {
    title: "استایل سفارشی (Custom Styles)",
    description:
      "می‌توانید با استفاده از کلاس‌های ابزاری Tailwind CSS، به <code>Avatar</code> استایل‌های سفارشی بدهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: CustomStyles,
    markdownName: "CustomStyles",
  },
  {
    title: "گروه اسکلت آواتار (Avatar Skeleton Group)",
    description:
      "می‌توانید گروه آواتار را با استفاده از کامپوننت <code>Avatar</code> به‌شکل اسکلت نیز ایجاد کنید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Skeleton,
    markdownName: "Skeleton",
  },
  {
    title: "رندر پلی‌مورفیک (Polymorphic Rendering)",
    description:
      "<code>Avatar</code> یک کامپوننت پلی‌مورفیک است و ریشه عنصر را می‌توانید تغییر دهید. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Polymorphic,
    markdownName: "Polymorphic",
  },
  {
    title: "آواتار با رنگ خودکار (AutoColor Avatar)",
    description:
      "کامپوننت <code>Avatar</code> می‌تواند برای اینیشیال، به صورت خودکار رنگ دریافت کند. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: AutoColor,
    markdownName: "AutoColor",
  },
];
export default function Avatar() {
  return (
    <DemoLayout
      title="آواتار"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
