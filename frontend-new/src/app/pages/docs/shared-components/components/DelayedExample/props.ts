import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Delayed",
    desc: "یک کامپوننت که نمایش محتوای فرزند خود را برای مدت زمان مشخصی به تأخیر می‌اندازد.",
    props: [
      {
        name: "wait",
        type: "number",
        description:
          "مدت زمان تأخیر بر حسب میلی‌ثانیه پیش از نمایش دادن کامپوننت فرزند.",
      },
    ],
  },
];
