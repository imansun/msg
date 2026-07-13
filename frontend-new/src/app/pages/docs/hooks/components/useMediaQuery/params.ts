import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "query",
    type: "string",
    description: "رشتهٔ کوئری مدیا که باید ارزیابی شود.",
  },
  {
    name: "options",
    type: "object",
    description:
      "تنظیمات اضافی برای ارزیابی کوئری مدیا.",
  },
  {
    name: "options.defaultValue",
    type: "boolean",
    default: "false",
    description:
      "مقدار پیش‌فرض برای نتیجه کوئری مدیا پیش از مقداردهی اولیه را مشخص می‌کند.",
  },
  {
    name: "options.initializeWithValue",
    type: "boolean",
    default: "true",
    description:
      "تعیین می‌کند که آیا state با مقدار فعلی نتیجه کوئری مدیا مقداردهی اولیه شود یا خیر.",
  },
];
