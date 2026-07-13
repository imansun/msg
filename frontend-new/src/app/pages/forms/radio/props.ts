import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Radio",
    desc: "یک کامپوننت رادیو باتن قابل سفارشی‌سازی با پشتیبانی از برچسب، استایل و وضعیت‌ها.",
    props: [
      {
        name: "variant",
        type: "'basic' | 'outlined'",
        default: "basic",
        description: "نوع ظاهری رادیو باتن را مشخص می‌کند.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "اگر true باشد، تمام استایل‌های پیش‌فرض حذف می‌شود و امکان سفارشی‌سازی کامل فراهم می‌گردد.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "primary",
        description:
          "رنگ رادیو باتن را بر اساس تم یا مقادیر دلخواه مشخص می‌کند.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی برای اعمال روی عنصر رادیو.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک شی حاوی کلاس‌های سفارشی برای بخش‌های خاص کامپوننت رادیو.",
      },
      {
        name: "type",
        type: "string",
        default: "radio",
        description:
          "نوع input را مشخص می‌کند که به صورت پیش‌فرض 'radio' است.",
      },
      {
        name: "label",
        type: "string | React.ReactNode",
        description:
          "متن یا عنصر نمایشی برچسب کنار رادیو باتن.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر true باشد، رادیو باتن غیرفعال می‌شود و امکان تعامل با آن وجود ندارد.",
      },
      {
        name: "labelProps",
        type: "object",
        description: "پراپ‌های اضافی برای اعمال روی عنصر برچسب.",
      },
    ],
  },
];
