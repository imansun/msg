import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "eventName",
    type: "string",
    description: "نام رویدادی که باید به آن متصل شود.",
  },
  {
    name: "handler",
    type: "function",
    description: "تابعی که هنگام وقوع رویداد اجرا می‌شود.",
  },
  {
    name: "element",
    type: "RefObject",
    description:
      "عنصر DOM که شنونده رویداد به آن افزوده می‌شود.",
  },
  {
    name: "options",
    type: "object",
    description: "یک شیء پیکربندی اختیاری برای شنونده رویداد.",
  },
];
