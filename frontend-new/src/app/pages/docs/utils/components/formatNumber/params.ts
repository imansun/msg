import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "num",
    type: "number",
    description: "عددی که باید قالب‌بندی شود.",
  },
  {
    name: "base",
    type: "number",
    default: "1000",
    description: "مقدار پایه برای تبدیل عدد (مثلاً 1000 یا 1024).",
  },
  {
    name: "precision",
    type: "number",
    default: "2",
    description: "تعداد رقم‌های اعشاری که باید در خروجی قالب‌بندی شده نمایش داده شود.",
  },
];

