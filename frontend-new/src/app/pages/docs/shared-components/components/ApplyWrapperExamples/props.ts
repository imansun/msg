import { type ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "ApplyWrapper",
    desc: "به‌صورت شرطی یک المنت را با یک کامپوننت رَپِر مشخص‌شده می‌پوشاند.",
    props: [
      {
        name: "when",
        type: "boolean",
        description: "مشخص می‌کند که آیا رپِر باید اعمال شود یا نه.",
      },
      {
        name: "wrapper",
        type: "function",
        description:
          "تابعی که یک نود رپِر بازمی‌گرداند و children را به‌عنوان prop دریافت می‌کند.",
      },
    ],
  },
];
