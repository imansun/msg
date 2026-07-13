import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Button",
    desc: "یک کامپوننت دکمه چند منظوره که از سبک‌ها، واریانت‌ها و رفتارهای مختلف پشتیبانی می‌کند.",
    props: [
      {
        name: "component",
        type: "string | React.ElementType",
        default: "button",
        description: "کامپوننت سفارشی یا عنصر HTML برای رندر دکمه.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی جهت اعمال به عنصر دکمه.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که داخل دکمه نمایش داده می‌شود.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description: "تم رنگی دکمه را مشخص می‌کند.",
      },
      {
        name: "isIcon",
        type: "boolean",
        default: false,
        description:
          "مشخص می‌کند که آیا دکمه فقط به‌عنوان یک دکمه آیکون نمایش داده شود.",
      },
      {
        name: "variant",
        type: '"filled" | "outlined" | "soft" | "flat"',
        default: "filled",
        description: "نوع ظاهر (واریانت) دکمه را مشخص می‌کند.",
      },
      {
        name: "unstyled",
        type: "boolean",
        default: false,
        description:
          "در صورت true بودن، دکمه بدون هیچ استایل پیش‌فرضی نمایش داده می‌شود.",
      },
      {
        name: "type",
        type: '"button" | "submit" | "reset"',
        default: "button",
        description: "صفت type دکمه را مشخص می‌کند.",
      },
      {
        name: "isGlow",
        type: "boolean",
        default: false,
        description: "در صورت فعال بودن افکت گلو (درخشش) به دکمه اضافه می‌کند.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: false,
        description: "دکمه را غیرفعال کرده و امکان تعامل کاربر را می‌گیرد.",
      },
    ],
  },
];
