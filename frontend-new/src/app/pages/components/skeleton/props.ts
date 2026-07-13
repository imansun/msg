import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Skeleton",
    desc: "یک کامپوننت جایگزین برای نمایش بارگذاری محتوا که از انیمیشن جهت ارائه بازخورد بصری بهتر پشتیبانی می‌کند.",
    props: [
      {
        name: "animate",
        type: "boolean",
        default: true,
        description:
          "اگر true باشد، یک انیمیشن چشمک‌زن به منظور نمایش وضعیت بارگذاری اعمال می‌کند.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که برای شخصی‌سازی کامپوننت Skeleton اعمال می‌شوند.",
      },
    ],
  },
];

