import { type ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "bytes",
    type: "number",
    description: "تعداد بایت‌هایی که باید قالب‌بندی شوند.",
  },
  {
    name: "base",
    type: "number",
    default: "1000",
    description:
      "مقدار پایه برای تبدیل واحد (مثلاً 1000 برای ده‌دهی، 1024 برای دودویی).",
  },
  {
    name: "precision",
    type: "number",
    default: "2",
    description:
      "تعداد رقم‌های اعشاری که باید در خروجی قالب‌بندی شده نمایش داده شود.",
  },
];
