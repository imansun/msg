import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Tag",
    desc: "یک کامپوننت برای دسته‌بندی یا برچسب‌گذاری عناصر با استایل قابل سفارشی‌سازی.",
    props: [
      {
        name: "component",
        type: "string | React.ElementType",
        default: "a",
        description: "کامپوننت سفارشی یا عنصر HTML برای رندر شدن تگ.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی که به عنصر تگ اضافه می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        default: false,
        description: "اگر true باشد، تگ بدون هیچ استایل پیش‌فرضی رندر می‌شود.",
      },
      {
        name: "variant",
        type: '"filled" | "outlined" | "soft"',
        default: "filled",
        description: "نوع ظاهر (سبک) تگ را مشخص می‌کند.",
      },
      {
        name: "color",
        type: "string",
        default: "neutral",
        description: "تم رنگ تگ را مشخص می‌کند.",
      },
      {
        name: "isGlow",
        type: "boolean",
        default: false,
        description: "در صورت فعال بودن (true) افکت درخشان به تگ اعمال می‌شود.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که درون تگ نمایش داده می‌شود.",
      },
    ],
  },
];
