import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "onResize",
    type: "function",
    description:
      "تابع callback که هنگام تغییر اندازه عنصر مشاهده‌شده اجرا می‌شود.",
  },
  {
    name: "ref",
    type: "RefObject",
    description:
      "یک مرجع به عنصر DOM که برای تغییرات اندازه مشاهده می‌شود.",
  },
  {
    name: "box",
    type: "string",
    default: "content-box",
    description:
      "مشخص می‌کند کدام مدل جعبه (box model) برای مشاهده انتخاب شده است. گزینه‌ها: 'content-box' (پیش‌فرض) یا 'border-box'.",
  },
];
