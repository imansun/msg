import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Progress",
    desc: "یک کامپوننت برای نمایش نوار پیشرفت، پشتیبان حالت معین و نامعین.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوای سفارشی یا المنت‌های اضافی که داخل نوار پیشرفت نمایش داده می‌شوند.",
      },
      {
        name: "value",
        type: "number",
        default: "0",
        description:
          "مقدار فعلی نوار پیشرفت در حالت معین. باید بین ۰ تا ۱۰۰ باشد.",
      },
      {
        name: "showRail",
        type: "boolean",
        default: "true",
        description:
          "آیا پس‌زمینه یا ریل نوار پیشرفت نمایش داده شود یا خیر.",
      },
      {
        name: "isActive",
        type: "boolean",
        default: "false",
        description:
          "در صورت true بودن، انیمیشن یا استایل فعال روی نوار پیشرفت اعمال می‌شود.",
      },
      {
        name: "isIndeterminate",
        type: "boolean",
        default: "false",
        description:
          "در صورت true بودن، نوار پیشرفت به صورت نامعین و با انیمیشن چرخشی نمایش داده می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        default: "false",
        description: "در صورت true بودن، شخصی‌سازی کامل ظاهری را ممکن می‌کند.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description:
          "رنگ نوار پیشرفت را تعیین می‌کند. امکان استفاده از رنگ‌های تم وجود دارد.",
      },
      {
        name: "variant",
        type: "'soft' | 'default'",
        default: "default",
        description: "نوع استایل یا واریانت نوار پیشرفت را مشخص می‌کند.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی برای ریشه نوار پیشرفت.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک شی که کلاس‌های CSS مخصوص بخش‌های مختلف نوار پیشرفت مثل ریل یا ایندیکیتور را تعیین می‌کند.",
      },
      {
        name: "animationDuration",
        type: "string",
        default: "1500ms",
        description: "مدت زمان انیمیشن پیشرفت نوار.",
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "استایل‌های اینلاین برای عنصر اصلی نوار پیشرفت.",
      },
      {
        name: "rootProps",
        type: "object",
        description:
          "پراپ‌های اضافی جهت ارسال به عنصر ریشه‌ای نوار پیشرفت.",
      },
    ],
  },
];
