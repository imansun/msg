import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Spinner",
    desc: "یک کامپوننت نمایش وضعیت بارگذاری با قابلیت شخصی‌سازی استایل و انیمیشن.",
    props: [
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که برای شخصی‌سازی کامپوننت اسپینر اعمال می‌شوند.",
      },
      {
        name: "animate",
        type: "boolean",
        default: true,
        description: "اگر true باشد، انیمیشن چرخش برای اسپینر فعال می‌شود.",
      },
      {
        name: "isElastic",
        type: "boolean",
        description:
          "اگر true باشد، یک استایل الاستیک به انیمیشن اسپینر اعمال می‌شود که جلوه متفاوتی ایجاد می‌کند.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر true باشد، انیمیشن اسپینر غیر فعال شده و اسپینر به صورت ایستا نمایش داده می‌شود.",
      },
      {
        name: "variant",
        type: "'default' | 'soft' | 'innerDot'",
        default: "default",
        description: "نوع استایل اسپینر را تعیین می‌کند.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description: "رنگ اسپینر را بر اساس رنگ‌های تم مشخص می‌کند.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "اگر true باشد، تمام استایل‌های پیش‌فرض حذف شده و امکان شخصی‌سازی کامل وجود دارد.",
      },
    ],
  },
  {
    componentName: "GhostSpinner",
    desc: "اسپینر بارگذاری با امکان شخصی‌سازی انیمیشن و استایل.",
    props: [
      {
        name: "animate",
        type: "boolean",
        description:
          "اگر true باشد، انیمیشن چرخش برای گوست اسپینر فعال می‌شود.",
      },
      {
        name: "isElastic",
        type: "boolean",
        description:
          "اگر true باشد، استایل الاستیک به انیمیشن اسپینر اعمال می‌شود و جلوه متفاوتی می‌دهد.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر true باشد، انیمیشن اسپینر غیر فعال شده و حالت ایستا نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که برای شخصی‌سازی گوست اسپینر استفاده می‌شوند.",
      },
      {
        name: "variant",
        type: "'default' | 'soft' | 'innerDot'",
        description: "نوع استایل گوست اسپینر را تعیین می‌کند.",
      },
    ],
  },
];
