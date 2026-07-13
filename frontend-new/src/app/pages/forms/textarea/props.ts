import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Textarea",
    desc: "یک کامپوننت تکست‌اریا قابل تنظیم با قابلیت نمایش لیبل، توضیحات و پشتیبانی از حالت خطا.",
    props: [
      {
        name: "component",
        default: "textarea",
        type: "string | React.ElementType",
        description:
          "مشخص می‌کند که کدام کامپوننت ریشه یا عنصر HTML برای تکست‌اریا استفاده شود.",
      },
      {
        name: "label",
        type: "string | React.ReactNode",
        description:
          "لیبل که در بالای تکست‌اریا نمایش داده می‌شود یا به آن وابسته است.",
      },
      {
        name: "description",
        type: "string | React.ReactNode",
        description:
          "توضیحات اضافی که زیر تکست‌اریا نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافه برای استفاده در عنصر ریشه.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک آبجکت که کلاس‌های CSS مربوط به بخش‌های مختلف تکست‌اریا را شامل می‌شود.",
      },
      {
        name: "error",
        type: "string | React.ReactNode",
        description:
          "پیام خطا یا عنصر دلخواه که هنگام وجود خطا زیر تکست‌اریا نمایش داده می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "اگر true باشد، همه استایل‌های پیش‌فرض حذف می‌شوند و امکان شخصی‌سازی کامل وجود دارد.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر true باشد، تکست‌اریا غیر فعال شده و کاربر نمی‌تواند با آن تعامل داشته باشد.",
      },
      {
        name: "rootProps",
        type: "object",
        description:
          "پراپ‌های اضافی که به عنصر ریشه تکست‌اریا ارسال می‌شود.",
      },
      {
        name: "labelProps",
        type: "object",
        description: "پراپ‌های اضافی که به عنصر لیبل اعمال می‌شوند.",
      },
      {
        name: "id",
        type: "string",
        description:
          "شناسه‌ی (ID) عنصر تکست‌اریا که برای اتصال لیبل‌ها کاربرد دارد.",
      },
    ],
  },
];
