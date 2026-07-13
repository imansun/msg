import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "copy",
    type: "function",
    description: "تابعی برای کپی‌کردن متن داده‌شده در کلیپ‌بورد.",
  },
  {
    name: "reset",
    type: "function",
    description: "تابعی برای بازنشانی وضعیت هوک به مقادیر اولیه آن.",
  },
  {
    name: "error",
    type: "string",
    description: "یک پیام خطا، در صورتی که هنگام فرآیند کپی خطایی رخ دهد.",
  },
  {
    name: "copied",
    type: "boolean",
    description:
      "یک مقدار بولی که مشخص می‌کند آیا متن با موفقیت کپی شده است یا خیر.",
  },
];
