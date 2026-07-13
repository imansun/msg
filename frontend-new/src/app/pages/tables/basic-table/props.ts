import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Table",
    desc: "Table برای نمایش لیستی از داده‌ها در قالب جدول قابل استفاده است.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوایی که داخل جدول نمایش داده می‌شود، معمولاً شامل سطرها و ستون‌ها.",
      },
      {
        name: "component",
        type: "string | React.ElementType",
        default: "table",
        description: "اجزای سفارشی یا المنت HTML دلخواه برای تعیین نوع جدول.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی برای اعمال به المنت جدول.",
      },
      {
        name: "hoverable",
        type: "boolean",
        description:
          "افزودن افکت هاور بر روی سطرها جهت بهبود تجربه کاربری.",
      },
      {
        name: "zebra",
        type: "boolean",
        description:
          "اعمال رنگ‌های متناوب (راه‌راه زیبرا) برای افزایش خوانایی سطرها.",
      },
      {
        name: "dense",
        type: "boolean",
        description:
          "کاهش فاصله خطوط و تراکم بیشتر جدول برای نمایش فشرده‌تر.",
      },
      {
        name: "sticky",
        type: "boolean",
        description:
          "ثابت نگه‌داشتن هدر یا برخی ستون‌های جدول هنگام اسکرول.",
      },
    ],
  },
];
