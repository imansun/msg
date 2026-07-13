import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Avatar",
    desc: "یک تصویر آواتار یا جایگزین هنگام نبود تصویر را نمایش می‌دهد.",
    props: [
      {
        name: "component",
        default: "div",
        type: "string | React.ElementType",
        description:
          "کامپوننت سفارشی یا المان HTML برای رندر کردن ریشه اصلی.",
      },
      {
        name: "imgComponent",
        default: "img",
        type: "string | React.ElementType",
        description: "کامپوننت سفارشی یا المان HTML برای نمایش تصویر.",
      },
      {
        name: "alt",
        type: "string",
        description:
          "متن جایگزین برای تصویر که برای دسترس‌پذیری و سئو کاربرد دارد.",
      },
      {
        name: "loading",
        default: "lazy",
        type: '"lazy" | "eager"',
        description: "رفتار بارگذاری تصویر را مشخص می‌کند.",
      },
      {
        name: "imgProps",
        type: "object",
        description: "پراپ‌های اضافی برای ارسال به کامپوننت تصویر.",
      },
      {
        name: "src",
        type: "string",
        description: "آدرس منبع تصویر آواتار.",
      },
      {
        name: "srcSet",
        type: "string",
        description:
          "تعیین منابع مختلف تصویر برای تفکیک بر اساس اندازه یا رزولوشن نمایشگر.",
      },
      {
        name: "name",
        type: "string",
        description: "نام یا برچسب نمایش داده شده هنگام نبود تصویر.",
      },
      {
        name: "initialColor",
        default: "neutral",
        type: "ColorType",
        description:
          "رنگ اولیه آواتار زمانیکه تصویری وجود ندارد.",
      },
      {
        name: "initialVariant",
        default: "filled",
        type: '"filled" | "soft"',
        description:
          "استایل اولیه آواتار، زمانی که تصویری وجود نداشته باشد.",
      },
      {
        name: "initialProps",
        type: "object",
        description:
          "پراپ‌های اضافی برای نود اولیه زمانی که تصویر وجود ندارد.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های اضافی CSS برای ریشه کامپوننت.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "آبجکتی شامل کلاس‌های CSS برای نواحی خاص مختلف کامپوننت.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوایی که زمانی که نه نام و نه تصویر وجود دارد نمایش داده می‌شود.",
      },
      {
        name: "size",
        default: "12",
        type: "number",
        description: "اندازه آواتار را مشخص می‌کند.",
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "استایل‌های خطی برای اِلمان ریشه.",
      },
      {
        name: "indicator",
        type: "React.ReactNode",
        description:
          "نشان‌گر اختیاری مانند بج یا علامت وضعیت که کنار آواتار نمایش داده می‌شود.",
      },
    ],
  },
  {
    componentName: "AvatarDot",
    desc: "یک نقطه وضعیت برای آواتار نمایش می‌دهد.",
    props: [
      {
        name: "color",
        default: "neutral",
        type: "ColorType",
        description: "رنگ نقطه وضعیت را مشخص می‌کند.",
      },
      {
        name: "isPing",
        default: false,
        type: "boolean",
        description: "آیا انیمیشن پینگ برای نقطه اعمال شود یا خیر.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های اضافی CSS برای نقطه.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که درون نقطه نمایش داده می‌شود.",
      },
    ],
  },
];
