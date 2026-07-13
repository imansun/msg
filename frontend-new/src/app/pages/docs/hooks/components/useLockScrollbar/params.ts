import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "value",
    type: "boolean",
    description: "مشخص می‌کند که آیا اسکرول‌بار باید قفل شود یا خیر.",
  },
  {
    name: "options",
    type: "object",
    description: "تنظیمات مربوط به قفل کردن اسکرول‌بار.",
  },
  {
    name: "options.disableBodyPadding",
    type: "boolean",
    default: "false",
    description:
      "تعیین می‌کند هنگام قفل بودن اسکرول‌بار، پدینگ بدنه (body) غیرفعال باشد یا خیر.",
  },
];
