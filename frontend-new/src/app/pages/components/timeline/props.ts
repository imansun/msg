import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Timeline",
    desc: "یک کامپوننت تایم‌لاین عمودی برای نمایش رویدادها یا نقاط عطف به صورت متوالی.",
    props: [
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی برای اعمال به کانتینر تایم‌لاین.",
      },
      {
        name: "pointSize",
        type: "string",
        default: "0.75rem",
        description: "اندازه نقاط شاخص هر آیتم تایم‌لاین.",
      },
      {
        name: "lineWidth",
        type: "string",
        default: "1px",
        description: "ضخامت خط متصل‌کننده بین آیتم‌های تایم‌لاین.",
      },
      {
        name: "variant",
        type: '"filled" | "outlined"',
        default: "filled",
        description: "استایل تایم‌لاین (پر شده یا حاشیه‌دار) را مشخص می‌کند.",
      },
      {
        name: "lineSpace",
        type: "string | number",
        description: "فاصله بین خط تایم‌لاین و نقطه.",
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "استایل‌های خطی (inline) که به کانتینر تایم‌لاین اعمال می‌شوند.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "آیتم‌های تایم‌لاین که داخل این کامپوننت نمایش داده می‌شوند.",
      },
    ],
  },
  {
    componentName: "TimelineItem",
    desc: "یک آیتم داخل تایم‌لاین که نمایانگر یک رویداد یا نقطه عطف مشخص است.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوا یا توضیحات مربوط به آیتم تایم‌لاین.",
      },
      {
        name: "title",
        type: "string | React.ReactNode",
        description: "عنوان یا سرخط آیتم تایم‌لاین.",
      },
      {
        name: "time",
        type: "string | React.ReactNode",
        description: "زمان یا تاریخ مربوط به آیتم تایم‌لاین.",
      },
      {
        name: "point",
        type: "React.ReactNode",
        description: "محتوای سفارشی برای نقطه شاخص تایم‌لاین.",
      },
      {
        name: "color",
        type: "ColorType",
        default: "neutral",
        description: "رنگ نقطه و خط تایم‌لاین برای این آیتم.",
      },
      {
        name: "variant",
        type: '"filled" | "outlined"',
        default: "filled",
        description: "استایل آیتم تایم‌لاین (پر شده یا حاشیه‌دار) را مشخص می‌کند.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی برای اعمال به کانتینر آیتم تایم‌لاین.",
      },
      {
        name: "classNames",
        type: "object",
        description: "آبجکتی شامل کلاس‌های سفارشی برای بخش‌های مختلف آیتم تایم‌لاین.",
      },
      {
        name: "isPing",
        type: "boolean",
        default: "false",
        description: "در صورت true بودن انیمیشن پینگ روی نقطه آیتم اعمال می‌شود.",
      },
    ],
  },
];
