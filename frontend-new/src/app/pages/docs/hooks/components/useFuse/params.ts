import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "list",
    type: "array",
    description: "آرایه‌ای از آیتم‌ها که جستجو بر روی آن انجام می‌شود.",
  },
  {
    name: "options",
    type: "object",
    description:
      "یک شیء تنظیمات که گزینه‌های مربوط به نمونه‌ی جستجوی fuse.js را شامل می‌شود.",
  },
];
