import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "value",
    type: "any",
    description: "مقدار فعلی وضعیت.",
  },
  {
    name: "onChange",
    type: "function",
    description: "تابعی برای به‌روزرسانی مقدار وضعیت.",
  },
  {
    name: "indicateIsControlled",
    type: "boolean",
    description: "نشان می‌دهد که ورودی کنترل‌شده است یا کنترل‌نشده.",
  },
];
