import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "ContextualHelp",
    desc: "یک کامپوننت برای ارائه راهنمای متنی درجا همراه با آیکن، عنوان و محتوا.",
    props: [
      {
        name: "Icon",
        type: "React.ElementType",
        default: "QuestionMarkCircleIcon",
        description: "آیکنی که برای نمایش و فعالسازی راهنمای متنی استفاده می‌شود.",
      },
      {
        name: "title",
        type: "string | React.ReactNode",
        description: "عنوان یا تیتر محتوای راهنمای متنی.",
      },
      {
        name: "content",
        type: "string | React.ReactNode",
        description: "محتوای اصلی یا توضیحات راهنمای متنی.",
      },
      {
        name: "anchor",
        type: "PopoverPanelProps['anchor']",
        default: "{ to: 'bottom start', gap: 8 }",
        description: `محل قرارگیری و فاصله‌ی پاپ‌آپ راهنمای متنی را مشخص می‌کند.
                - to: موقعیت پاپ‌آپ نسبت به آیکن را تعیین می‌کند (مثلاً 'bottom start' یا 'top end').
                - gap: فاصله بین آیکن و پاپ‌آپ بر حسب پیکسل.`,
      },
    ],
  },
];
