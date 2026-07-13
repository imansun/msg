import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "value",
    type: "any",
    description: "مقدار state کنترل‌شده.",
  },
  {
    name: "defaultValue",
    type: "any",
    description: "مقدار اولیه برای state کنترل‌نشده.",
  },
  {
    name: "finalValue",
    type: "any",
    description: "مقدار پشتیبان برای state کنترل‌نشده.",
  },
  {
    name: "onChange",
    type: "function",
    description: "تابع هندلر برای تغییرات state کنترل‌شده.",
  },
];
