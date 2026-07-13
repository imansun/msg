import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "ref",
    type: "RefObject",
    description: "ارجاع به عنصر DOM که زیر نظر قرار گرفته است.",
  },
  {
    name: "left",
    type: "number",
    description:
      "مقدار فاصله افقی عنصر از لبه سمت چپ نمای صفحه (برحسب پیکسل).",
  },
  {
    name: "top",
    type: "number",
    description:
      "مقدار فاصله عمودی عنصر از لبه بالای نمای صفحه (برحسب پیکسل).",
  },
];
