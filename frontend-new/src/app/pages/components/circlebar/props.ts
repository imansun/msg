import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Circlebar",
    desc: "یک ایندیکاتور پیشرفت دایره‌ای با قابلیت سفارشی‌سازی استایل و رفتار.",
    props: [
      {
        name: "value",
        type: "number",
        default: "0",
        description:
          "مقدار فعلی پیشرفت در حالت معین. باید عددی بین ۰ تا ۱۰۰ باشد.",
      },
      {
        name: "isIndeterminate",
        type: "boolean",
        default: false,
        description:
          "در صورت true بودن، نوار دایره‌ای به حالت نامعین و با انیمیشن چرخشی نمایش داده می‌شود.",
      },
      {
        name: "offsetDegree",
        type: "number",
        description:
          "زاویه شروع (به درجه) برای نمایش پیشرفت.",
      },
      {
        name: "gapDegree",
        type: "number",
        default: "0",
        description:
          "زاویه (به درجه) فاصله بین ابتدای نوار و انتهای نوار پیشرفت.",
      },
      {
        name: "gapOffsetDegree",
        type: "number",
        default: "0",
        description:
          "میزان جابجایی (به درجه) برای جایگاه فاصله نوار پیشرفت.",
      },
      {
        name: "strokeWidth",
        type: "number",
        default: "6",
        description: "ضخامت خط پیشرفت دایره‌ای.",
      },
      {
        name: "strokeLinecap",
        type: "'round' | 'butt' | 'square'",
        default: "round",
        description: "شکل انتهای خطوط نوار پیشرفت را مشخص می‌کند.",
      },
      {
        name: "isActive",
        type: "boolean",
        default: false,
        description:
          "در صورت true بودن، استایل یا انیمیشن فعال روی دایره اعمال می‌شود.",
      },
      {
        name: "size",
        type: "number",
        default: "24",
        description:
          "اندازه (قطر) دایره. مقادیر tailwind css نیز قابل استفاده است.",
      },
      {
        name: "showRail",
        type: "boolean",
        default: true,
        description:
          "در صورت true بودن، حلقه پس‌زمینه (ریل) پیشرفت نمایش داده می‌شود.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوای سفارشی یا المان‌های داخلی که در وسط دایره نمایش داده می‌شوند.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description: "رنگ نمایش‌دهنده پیشرفت را مشخص می‌کند.",
      },
      {
        name: "variant",
        type: "'default' | 'soft' | 'gradient'",
        default: "default",
        description: "نوع استایل (واریانت) دایره را تعیین می‌کند.",
      },
      {
        name: "contentProps",
        type: "object",
        description:
          "پراپز اضافه برای عنصر محتوای درون دایره.",
      },
      {
        name: "rootProps",
        type: "object",
        description: "پراپز اضافه برای ریشه دایره.",
      },
      {
        name: "wrapperProps",
        type: "object",
        description:
          "پراپز اضافه برای عنصر اطراف دایره.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی برای ریشه دایره.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "شیئی شامل کلاس‌های CSS مخصوص بخش‌های مختلف کامپوننت.",
      },
      {
        name: "gradient",
        type: "object",
        description: "یک شی شامل رنگ شروع و پایان گرادیان.",
      },
    ],
  },
];
