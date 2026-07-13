import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "CollapsibleSearch",
    desc: "کامپوننتی برای ورودی جستجویی که می‌تواند باز و بسته شود.",
    props: [
      {
        name: "defaultState",
        type: "boolean",
        description:
          "مشخص می‌کند که دکمه جستجو به صورت پیش‌فرض باز باشد یا بسته.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس CSS که به عنصر ورودی اضافه می‌شود.",
      },
      {
        name: "buttonProps",
        type: "object",
        description:
          "یک شی که خصوصیات مربوط به رفتار و ظاهر دکمه را سفارشی‌سازی می‌کند.",
      },
    ],
  },
];
