import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "ScrollShadow",
    desc: "یک کامپوننت که افکت سایه را به لبه‌های محتوای قابل اسکرول اضافه می‌کند تا نواحی قابل اسکرول را نشان دهد.",
    props: [
      {
        name: "component",
        type: "string | React.ElementType",
        description:
          "کامپوننت سفارشی یا المنت HTML برای رندر کردن ریشه کامپوننت.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوایی که باید با سایه اسکرول احاطه شود و این افکت روی آن اعمال گردد.",
      },
      {
        name: "className",
        type: "string",
        description:
          "نام‌های کلاس CSS اضافی برای اعمال روی عنصر ریشه جهت استایل‌دهی.",
      },
      {
        name: "size",
        type: "number",
        default: "10",
        description: "اندازه افکت سایه.",
      },
      {
        name: "offset",
        type: "number",
        default: "0",
        description: "مقدار فاصله افکت سایه از لبه‌ها.",
      },
      {
        name: "isEnabled",
        type: "boolean",
        default: true,
        description:
          "اگر true باشد، افکت سایه فعال می‌شود. اگر false باشد، هیچ سایه‌ای اعمال نمی‌شود.",
      },
      {
        name: "orientation",
        type: "'vertical' | 'horizontal' | 'both'",
        default: "vertical",
        description:
          "جهت‌دهی سایه (عمودی، افقی یا هر دو).",
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "استایل‌های اینلاین برای اعمال روی عنصر.",
      },
    ],
  },
];
