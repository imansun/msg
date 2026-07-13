import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Accordion",
    desc: "یک کامپوننت کانتینر برای سازمان‌دهی پنل‌های محتوایی قابل جمع شدن.",
    props: [
      {
        name: "id",
        type: "string",
        description: "شناسه یکتا برای نمونه آکاردئون.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوا (معمولاً کامپوننت‌های `AccordionItem`) که در آکاردئون رندر می‌شوند.",
      },
      {
        name: "multiple",
        type: "boolean",
        default: false,
        description:
          "اگر true باشد، اجازه می‌دهد چند آیتم آکاردئون به طور همزمان باز شوند.",
      },
      {
        name: "value",
        type: "string | string[]",
        description:
          "مقدار(های) کنترل‌شده آیتم(های) باز شده‌ی آکاردئون.",
      },
      {
        name: "defaultValue",
        type: "string | string[]",
        description:
          "آیتم(های) ابتدایی باز برای آکاردئون کنترل‌نشده.",
      },
      {
        name: "onChange",
        type: "(value: string | string[]) => void",
        description:
          "تابعی که هنگام تغییر آیتم(های) باز صدا زده می‌شود.",
      },
      {
        name: "transitionDuration",
        type: "number",
        description:
          "مدت زمان انیمیشن باز/بسته شدن (بر حسب میلی‌ثانیه).",
      },
      {
        name: "loop",
        type: "boolean",
        default: false,
        description:
          "اگر true باشد، ناوبری بین آیتم‌ها به صورت حلقه‌ای از آخر به اول ادامه پیدا می‌کند.",
      },
    ],
  },
  {
    componentName: "AccordionItem",
    desc: "یک کانتینر برای هر پنل آکاردئون و دکمه مرتبط با آن.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که در آیتم آکاردئون رندر می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که روی آیتم آکاردئون اعمال می‌شود.",
      },
      {
        name: "value",
        type: "string",
        description: "مقدار یکتای مرتبط با این آیتم آکاردئون.",
      },
    ],
  },
  {
    componentName: "AccordionButton",
    desc: "دکمه‌ای برای باز/بسته کردن پنل مربوطه آکاردئون.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که داخل دکمه نمایش داده می‌شود.",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "در صورت true بودن، دکمه غیرفعال می‌شود و کاربر نمی‌تواند با آن تعامل کند.",
      },
      {
        name: "component",
        type: "string | React.ElementType",
        description:
          "کامپوننت یا المنت HTML سفارشی برای رندر به عنوان دکمه.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی که روی دکمه اعمال می‌شود.",
      },
    ],
  },
  {
    componentName: "AccordionPanel",
    desc: "پنل قابل جمع شدن که هنگام باز شدن محتوای بیشتری را نمایش می‌دهد.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که داخل پنل نمایش داده می‌شود.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافی که روی پنل اعمال می‌شود.",
      },
      {
        name: "collapseProps",
        type: "object",
        description:
          "پراپزهای اضافی برای کامپوننت Collpase پایه که انیمیشن پنل را مدیریت می‌کند.",
      },
    ],
  },
];
