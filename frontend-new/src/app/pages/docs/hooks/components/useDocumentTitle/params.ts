import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "title",
    type: "string",
    description: "عنوان سند که باید تنظیم شود.",
  },
  {
    name: "options",
    type: "object",
    description: "گزینه‌های پیکربندی برای هوک.",
    default: "{}",
  },
  {
    name: "options.preserveTitleOnUnmount",
    type: "boolean",
    description:
      "تعیین می‌کند که آیا پس از خروج کامپوننت، عنوان سند حفظ شود یا خیر.",
    default: "true",
  },
];
