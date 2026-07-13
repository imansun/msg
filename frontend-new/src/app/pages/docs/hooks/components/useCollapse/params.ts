import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "transitionDuration",
    type: "number",
    description:
      "مدت زمان انتقال (transition) بر حسب میلی‌ثانیه. به طور پیش‌فرض، به ارتفاع المنت بستگی دارد و حداقل مقدار آن ۵۰۰ میلی‌ثانیه است.",
  },
  {
    name: "transitionTimingFunction",
    type: "string",
    default: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    description: "تابع تایمینگ برای انیمیشن انتقال.",
  },
  {
    name: "onTransitionEnd",
    type: "function",
    description: "تابع callback که پس از پایان انتقال (transition) اجرا می‌شود.",
  },
  {
    name: "opened",
    type: "boolean",
    description: "نشان می‌دهد که کلاپس باز است یا بسته.",
  },
  {
    name: "min",
    type: "string",
    default: "0px",
    description: "حداقل ارتفاع برای المنت جمع‌شونده (collapsible).",
  },
];
