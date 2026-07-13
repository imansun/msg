import { ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "isEnabled",
    type: "boolean",
    description:
      "مشخص می‌کند که بررسی سرریزی فعال یا غیرفعال است.",
  },
  {
    name: "overflowCheck",
    type: "'vertical' | 'horizontal' | 'both'",
    description:
      "سمت(ها)ی بررسی سرریز را مشخص می‌کند: 'vertical' (عمودی)، 'horizontal' (افقی)، یا 'both' (هردو).",
  },
  {
    name: "offset",
    type: "number",
    description: "مقدار آفست استفاده شده هنگام بررسی سرریز.",
  },
];
