import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Checkbox",
    desc: "یک کامپوننت چک‌باکس قابل سفارشی‌سازی با پشتیبانی از برچسب، استایل و حالت‌های مختلف.",
    props: [
      {
        name: "variant",
        type: "'basic' | 'outlined'",
        default: "basic",
        description: "مشخص می‌کند که چک‌باکس با کدام نوع ظاهر (استایل) نمایش داده شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "در صورت true بودن، همه‌ی استایل‌های پیش‌فرض حذف شده و امکان سفارشی‌سازی کامل فراهم می‌شود.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "primary",
        description:
          "رنگ چک‌باکس را بر اساس تم یا مقادیر دلخواه مشخص می‌کند.",
      },
      {
        name: "type",
        type: "string",
        default: "checkbox",
        description:
          "نوع ورودی را مشخص می‌کند که به طور پیش‌فرض روی 'checkbox' قرار دارد.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی برای اعمال روی المان ریشه.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک آبجکت شامل کلاس‌های سفارشی برای بخش‌های مختلف چک‌باکس.",
      },
      {
        name: "label",
        type: "string | React.ReactNode",
        description:
          "متن یا عنصر برچسبی که کنار چک‌باکس نمایش داده می‌شود.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "در صورت true بودن، چک‌باکس غیرفعال شده و امکان تعامل کاربر وجود ندارد.",
      },
      {
        name: "indeterminate",
        type: "boolean",
        description:
          "در صورت true بودن، چک‌باکس به حالت نامعین درمی‌آید که معمولاً برای گزینه‌های بخشی انتخاب شده استفاده می‌شود.",
      },
      {
        name: "labelProps",
        type: "object",
        description: "پراپ‌های اضافی برای اِلمان برچسب.",
      },
    ],
  },
];
