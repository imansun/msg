import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "AnimatedTick",
    desc: "نشانه تیک جذاب بصری با افکت‌های انیمیشنی.",
    props: [
      {
        name: "animate",
        default: "true",
        type: "boolean",
        description: "مشخص می‌کند آیا انیمیشن فعال باشد یا خیر.",
      },
      {
        name: "strokeWidth",
        default: "10",
        type: "number",
        description: "ضخامت خط علامت تیک را تعیین می‌کند.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس CSS برای المنت SVG اعمال می‌شود.",
      },
    ],
  },
];
