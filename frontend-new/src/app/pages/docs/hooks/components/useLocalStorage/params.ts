import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "key",
    type: "string",
    description: "کلیدی که برای ذخیره وضعیت در LocalStorage استفاده می‌شود.",
  },
  {
    name: "initialValue",
    type: "any",
    description:
      "مقدار اولیه‌ای که اگر مقدار قبلی در LocalStorage وجود نداشته باشد، ذخیره می‌شود.",
  },
  {
    name: "options",
    type: "object",
    description: "تنظیمات مربوط به مدیریت وضعیت LocalStorage.",
  },
  {
    name: "options.initializeWithValue",
    type: "boolean",
    default: "true",
    description:
      "مشخص می‌کند که آیا وضعیت با مقدار موجود در LocalStorage مقداردهی اولیه شود یا خیر.",
  },
  {
    name: "options.serializer",
    type: "function",
    description:
      "تابع سفارشی اختیاری برای سریالایز (تبدیل به رشته) مقدار وضعیت پیش از ذخیره در LocalStorage.",
  },
  {
    name: "options.deserializer",
    type: "function",
    description:
      "تابع سفارشی اختیاری برای دسریالایز (تبدیل به مقدار اصلی) داده‌ای که از LocalStorage خوانده می‌شود.",
  },
];
