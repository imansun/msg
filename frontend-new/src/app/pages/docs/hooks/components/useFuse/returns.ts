import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "result",
    type: "array",
    description: "آرایه‌ای شامل نتایج جستجو.",
  },
  {
    name: "query",
    type: "string",
    description: "رشته‌ای که کوئری جستجوی فعلی را نشان می‌دهد.",
  },
  {
    name: "setQuery",
    type: "function",
    description: "تابعی برای بروزرسانی رشته جستجو.",
  },
];
