import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "state",
    type: "boolean",
    description:
      "وضعیت فعلی دیسکلوزر (true برای باز، false برای بسته).",
  },
  {
    name: "handlers",
    type: "object",
    description:
      "یک شیء شامل توابعی برای مدیریت وضعیت دیسکلوزر.",
  },
  {
    name: "handlers.open",
    type: "function",
    description: "تابعی برای باز کردن دیسکلوزر.",
  },
  {
    name: "handlers.close",
    type: "function",
    description: "تابعی برای بستن دیسکلوزر.",
  },
  {
    name: "handlers.toggle",
    type: "function",
    description:
      "تابعی برای تغییر وضعیت دیسکلوزر بین باز و بسته.",
  },
];
