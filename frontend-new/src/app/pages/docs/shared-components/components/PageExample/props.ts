import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Page",
    desc: "یک کامپوننت پوششی برای ساختاربندی محتوای صفحه که شامل عنوان و محتوای اصلی می‌شود.",
    props: [
      {
        name: "title",
        type: "string",
        description:
          "عنوانی که در زبانه مرورگر برای این سند نمایش داده می‌شود.",
      },
      {
        name: "component",
        default: "Fragment",
        type: "React.ElementType",
        description:
          "کامپوننت یا عنصر React که به‌عنوان محتوای اصلی صفحه رندر می‌شود.",
      },
    ],
  },
];
