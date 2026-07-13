import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Collapse",
    desc: "یک کامپوننت که با انیمیت کردن ارتفاع محتوا، نمایش یا پنهان شدن آن را مدیریت می‌کند.",
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوایی که قرار است در ناحیه جمع‌شونده نمایش داده شود.",
      },
      {
        name: "in",
        type: "boolean",
        description:
          "وضعیت نمایش یا پنهان بودن محتوا را کنترل می‌کند. اگر true باشد، محتوا نمایش داده می‌شود.",
      },
      {
        name: "transitionDuration",
        type: "number | string",
        description:
          "مدت زمان انتقال را (بر حسب میلی‌ثانیه یا فرمت CSS time) تعیین می‌کند.",
      },
      {
        name: "transitionTimingFunction",
        type: "string",
        description:
          "تابع زمان‌بندی انیمیشن CSS را برای انتقال مشخص می‌کند.",
      },
      {
        name: "min",
        type: "string | number",
        description:
          "حداقل ارتفاع ناحیه جمع‌شونده زمانی که بسته است.",
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "استایل‌های داخلی که روی کانتینر جمع‌شونده اعمال می‌شود.",
      },
      {
        name: "onTransitionEnd",
        type: "(event: TransitionEvent) => void",
        description:
          "تابعی که پس از اتمام انتقال (Transition) فراخوانی می‌شود.",
      },
    ],
  },
];
