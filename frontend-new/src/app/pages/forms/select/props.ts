import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Select",
    desc: "یک کامپوننت لیست کشویی قابل سفارشی‌سازی با پشتیبانی از برچسب، پیشوند، پسوند و وضعیت خطا.",
    props: [
      {
        name: "label",
        type: "string | React.ReactNode",
        description: "برچسبی که بالای کامپوننت یا در ارتباط با آن نمایش داده می‌شود.",
      },
      {
        name: "prefix",
        type: "React.ReactNode",
        description: "محتوایی که قبل از لیست کشویی (مانند آیکون) نمایش داده می‌شود.",
      },
      {
        name: "suffix",
        type: "React.ReactNode",
        default: "<ChevronDownIcon className='w-2/3' />",
        description: "محتوایی که بعد از لیست کشویی، معمولاً به عنوان آیکون، نمایش داده می‌شود.",
      },
      {
        name: "description",
        type: "string | React.ReactNode",
        description: "توضیحات تکمیلی که زیر کامپوننت انتخاب نمایش داده می‌شود.",
      },
      {
        name: "classNames",
        type: "object",
        description: "یک شی حاوی کلاس‌های CSS برای بخش‌های مختلف کامپوننت.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های CSS اضافه برای عنصر والد اصلی.",
      },
      {
        name: "error",
        type: "string | React.ReactNode",
        description: "پیغام یا المانی که هنگام وجود خطا زیر کامپوننت نمایش داده می‌شود.",
      },
      {
        name: "multiple",
        type: "boolean",
        description: "اگر مقدار true باشد، امکان انتخاب چندگانه فراهم می‌شود.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description: "اگر مقدار true باشد، تمام استایل‌های پیش‌فرض حذف می‌شوند و امکان سفارشی‌سازی کامل وجود دارد.",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "اگر مقدار true باشد، امکان تعامل با لیست کشویی غیرفعال می‌شود.",
      },
      {
        name: "rootProps",
        type: "object",
        description: "پراپزهای اضافی برای ارسال به عنصر والد کامپوننت.",
      },
      {
        name: "labelProps",
        type: "object",
        description: "پراپزهای اضافی برای المان برچسب.",
      },
      {
        name: "id",
        type: "string",
        description: "شناسه (ID) المنت انتخاب، برای اتصال به برچسب‌ها مفید است.",
      },
      {
        name: "data",
        type: "Array<{ label: string; value: any; key: any; disabled: boolean; }>",
        description: "آرایه‌ای از گزینه‌ها برای پرکردن لیست کشویی. هر گزینه باید دارای `label` و `value` باشد.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "محتوا یا المان‌های سفارشی که درون لیست کشویی رندر می‌شوند.",
      },
    ],
  },
];
