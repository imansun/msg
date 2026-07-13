import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Swap",
    desc: "یک کامپوننت برای جابجایی بین دو وضعیت با افکت انتقال.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوا یا المنت‌هایی که درون کامپوننت نمایش داده می‌شوند. معمولاً شامل دو گره فرزند است که وضعیت‌های قابل جابجایی را نمایش می‌دهند.",
      },
      {
        name: "component",
        type: "string | React.ElementType",
        default: "div",
        description: "عنصر HTML یا کامپوننت ریشه‌ای که باید رندر شود را مشخص می‌کند.",
      },
      {
        name: "effect",
        type: "'fade' | 'flip' | 'rotate'",
        default: "fade",
        description:
          "افکت انتقالی که هنگام جابجایی بین وضعیت‌ها اعمال می‌شود را تعیین می‌کند.",
      },
      {
        name: "value",
        type: "'on' | 'off'",
        description:
          "مقدار فعلی که وضعیت فعال را تعیین می‌کند. معمولاً بین دو مقدار جابجا می‌شود.",
      },
      {
        name: "defaultValue",
        type: "'on' | 'off'",
        description:
          "مقدار اولیه وضعیت فعال زمانی که کامپوننت کنترل‌نشده است.",
      },
      {
        name: "onChange",
        type: "(value: 'on' | 'off') => void",
        description:
          "تابع کال‌بک که هنگام تغییر وضعیت فعال فراخوانی می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس CSS اضافی برای اعمال به جزء Swap.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر مقدار true داشته باشد، تعامل را غیرفعال کرده و از تغییر وضعیت جلوگیری می‌کند.",
      },
    ],
  },
  {
    componentName: "SwapOn",
    desc: "محتوایی که زمانی که وضعیت 'on' در Swap فعال است، نمایش داده می‌شود.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که هنگام فعال بودن وضعیت 'on' نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس CSS اضافی برای عنصر ریشه.",
      },
      {
        name: "component",
        type: "string | React.ElementType",
        default: "div",
        description: "عنصر HTML یا کامپوننت ریشه‌ای که باید رندر شود.",
      },
    ],
  },
  {
    componentName: "SwapOff",
    desc: "محتوایی که زمانی که وضعیت 'off' در Swap فعال است، نمایش داده می‌شود.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که هنگام فعال بودن وضعیت 'off' نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس CSS اضافی برای عنصر ریشه.",
      },
      {
        name: "component",
        default: "div",
        type: "string | React.ElementType",
        description: "عنصر HTML یا کامپوننت ریشه‌ای که باید رندر شود.",
      },
    ],
  },
];
