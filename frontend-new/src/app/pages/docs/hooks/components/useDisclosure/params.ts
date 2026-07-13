import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "initialState",
    default: false,
    type: "boolean",
    description:
      "تعیین می‌کند که افشاساز به طور پیش‌فرض باز باشد یا نه. با مقدار `true`، افشاساز به صورت اولیه باز خواهد بود.",
  },
  {
    name: "options",
    type: "object",
    description: "یک شی شامل گزینه‌ها برای کامپوننت افشاساز.",
  },
  {
    name: "options.onOpen",
    type: "function",
    description:
      "یک تابع callback که هنگام باز شدن افشاساز فراخوانی می‌شود.",
  },
  {
    name: "options.onClose",
    type: "function",
    description:
      "یک تابع callback که هنگام بسته شدن افشاساز فراخوانی می‌شود.",
  },
];
