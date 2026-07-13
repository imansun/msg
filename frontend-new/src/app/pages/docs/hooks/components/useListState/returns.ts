import { ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "state",
    type: "Array",
    description: "وضعیت فعلی لیست.",
  },
  {
    name: "handlers",
    type: "Object",
    description:
      "یک شی که شامل متدهای مختلف برای مدیریت وضعیت لیست است.",
  },
  {
    name: "handlers.setState",
    type: "function",
    description: "به‌روزرسانی کل وضعیت لیست با یک آرایه جدید.",
  },
  {
    name: "handlers.append",
    type: "function",
    description: "افزودن یک یا چند آیتم به انتهای لیست.",
  },
  {
    name: "handlers.prepend",
    type: "function",
    description: "افزودن یک یا چند آیتم به ابتدای لیست.",
  },
  {
    name: "handlers.insert",
    type: "function",
    description: "درج یک یا چند آیتم در ایندکسی مشخص از لیست.",
  },
  {
    name: "handlers.pop",
    type: "function",
    description: "حذف و بازگرداندن آخرین آیتم لیست.",
  },
  {
    name: "handlers.shift",
    type: "function",
    description: "حذف و بازگرداندن اولین آیتم لیست.",
  },
  {
    name: "handlers.apply",
    type: "function",
    description:
      "اعمال یک تابع بر روی تمام آیتم‌های لیست و بازگرداندن لیست جدید.",
  },
  {
    name: "handlers.applyWhere",
    type: "function",
    description:
      "اعمال یک تابع بر روی آیتم‌هایی که یک شرط خاص دارند و بازگرداندن لیست جدید.",
  },
  {
    name: "handlers.remove",
    type: "function",
    description: "حذف آیتم‌ها از لیست بر اساس یک شرط.",
  },
  {
    name: "handlers.removeWhere",
    type: "function",
    description: "حذف آیتم‌ها از لیست بر اساس یک شرط.",
  },
  {
    name: "handlers.reorder",
    type: "function",
    description: "تغییر ترتیب آیتم‌های لیست بر اساس یک شرط.",
  },
  {
    name: "handlers.setItem",
    type: "function",
    description: "به‌روزرسانی یک آیتم در ایندکس مشخص از لیست.",
  },
  {
    name: "handlers.setItemProp",
    type: "function",
    description:
      "به‌روزرسانی یک ویژگی از آیتمی مشخص در لیست.",
  },
  {
    name: "handlers.setItemPropWhere",
    type: "function",
    description:
      "به‌روزرسانی یک ویژگی از آیتم‌هایی که یک شرط خاص دارند در لیست.",
  },
  {
    name: "handlers.filter",
    type: "function",
    description:
      "فیلتر کردن لیست براساس یک شرط خاص و بازگرداندن لیست جدید.",
  },
];
