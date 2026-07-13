import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Input",
    desc: "یک کامپوننت ورودی همه‌کاره با پشتیبانی از برچسب، پیشوند، پسوند و هندلینگ خطا.",
    props: [
      {
        name: "component",
        type: "string | React.ElementType",
        description:
          "کامپوننت سفارشی یا المنت HTML برای رندر کردن فیلد ورودی.",
      },
      {
        name: "label",
        type: "string | React.ReactNode",
        description:
          "متن یا المنت برچسب که کنار فیلد ورودی نمایش داده می‌شود.",
      },
      {
        name: "prefix",
        type: "string | React.ReactNode",
        description:
          "یک المنت اختیاری که پیش از فیلد ورودی نمایش داده می‌شود.",
      },
      {
        name: "suffix",
        type: "string | React.ReactNode",
        description:
          "یک المنت اختیاری که بعد از فیلد ورودی نمایش داده می‌شود.",
      },
      {
        name: "description",
        type: "string",
        description:
          "متن توضیحی اضافی که زیر فیلد ورودی نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس CSS اضافی برای اعمال روی المنت ورودی.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک شی با کلاس‌های سفارشی برای بخش‌های مختلف کامپوننت ورودی.",
      },
      {
        name: "error",
        type: "string | React.ReactNode",
        description:
          "پیام یا المنت خطا که هنگام نامعتبر بودن مقدار نمایش داده می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "در صورت true بودن، تمام استایل‌های پیش‌فرض حذف می‌شود و امکان سفارشی‌سازی کامل فراهم می‌شود.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "در صورت true بودن، فیلد غیرقابل استفاده می‌شود و کاربر نمی‌تواند با آن تعامل داشته باشد.",
      },
      {
        name: "type",
        type: "string",
        default: "text",
        description:
          "نوع فیلد ورودی را مشخص می‌کند (مانند 'text'، 'password'، 'email' و غیره).",
      },
      {
        name: "rootProps",
        type: "object",
        description:
          "پراپ‌های اضافی برای ریشه‌ی کامپوننت ورودی.",
      },
      {
        name: "labelProps",
        type: "object",
        description: "پراپ‌های اضافی برای المنت برچسب.",
      },
      {
        name: "id",
        type: "string",
        description:
          "شناسه یکتای فیلد ورودی، مناسب کاربردهای فرم و دسترسی‌پذیری.",
      },
    ],
  },
];
