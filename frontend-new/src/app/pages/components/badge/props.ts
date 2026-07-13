import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Badge",
    desc: "کامپوننت کوچکی برای برجسته‌سازی یا برچسب‌گذاری المان‌ها با قابلیت استایل‌دهی اختیاری.",
    props: [
      {
        name: "component",
        type: "string | React.ElementType",
        default: "span",
        description: "کامپوننت سفارشی یا عنصر HTML برای رندر نشان (Badge).",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که به المنت Badge اضافه می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        default: "false",
        description:
          "اگر true باشد، نشان را بدون هیچ استایل پیش‌فرضی نمایش می‌دهد.",
      },
      {
        name: "variant",
        type: '"filled" | "outlined" | "soft"',
        default: "filled",
        description: "نوع استایل (طرح) نمایش نشان را تعیین می‌کند.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description: "تم رنگی نشان را مشخص می‌کند.",
      },
      {
        name: "isGlow",
        type: "boolean",
        default: "false",
        description: "در صورت true بودن، جلوه درخشان به نشان اضافه می‌کند.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوای قرار گرفته در داخل نشان.",
      },
    ],
  },
];
