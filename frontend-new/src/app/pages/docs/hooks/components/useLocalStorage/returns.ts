import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "state",
    type: "any",
    description:
      "مقدار وضعیت جاری که از LocalStorage بازیابی یا در آن ذخیره شده است.",
  },
  {
    name: "setState",
    type: "function",
    description:
      "تابعی برای به‌روزرسانی و ذخیره مقدار وضعیت در LocalStorage.",
  },
  {
    name: "removeState",
    type: "function",
    description:
      "تابعی برای حذف مقدار وضعیت از LocalStorage.",
  },
];
