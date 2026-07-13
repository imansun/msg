export const componentProps = [
  {
    componentName: "TextEditor",
    description:
      "یک کامپوننت ویرایشگر متن غنی مبتنی بر Quill که امکان فرمت‌بندی پیشرفته و سفارشی‌سازی را فراهم می‌کند.",
    props: [
      {
        name: "readOnly",
        type: "boolean",
        description:
          "اگر مقدار این گزینه true باشد، ویرایشگر در حالت فقط خواندنی قرار می‌گیرد و امکان تغییر متن وجود ندارد.",
      },
      {
        name: "value",
        type: "Delta",
        description:
          "مقدار فعلی ویرایشگر. از این گزینه برای حالت‌های کنترل‌شده استفاده کنید.",
      },
      {
        name: "defaultValue",
        type: "Delta",
        description:
          "مقدار پیش‌فرض ویرایشگر هنگام اولین بار رندر شدن کامپوننت.",
      },
      {
        name: "onTextChange",
        type: "(delta: Delta, delta: Delta) => void",
        description:
          "تابعی که هنگام تغییر محتوای متنی ویرایشگر فراخوانی می‌شود. محتوای جدید و delta را ارسال می‌کند.",
      },
      {
        name: "onSelectionChange",
        type: "(range: Range, oldRange: Range, source: string) => void",
        description:
          "تابعی که هنگام تغییر انتخاب متن در ویرایشگر فراخوانی می‌شود و محدوده انتخاب جدید را ارائه می‌دهد.",
      },
      {
        name: "onChange",
        type: "(content: string, delta: Delta, source: string) => void",
        description:
          "یک هندلر عمومی تغییر که هر بار محتوای ویرایشگر تغییر کند، مانند `onTextChange` فراخوانی می‌شود.",
      },
      {
        name: "placeholder",
        type: "string",
        description:
          "متن راهنمایی که هنگام خالی بودن ویرایشگر نمایش داده می‌شود.",
      },
      {
        name: "modules",
        type: "object",
        description:
          "ماژول‌های سفارشی برای پیکربندی نوار ابزار ویرایشگر Quill، فرمت‌ها و سایر رفتارها.",
      },
      {
        name: "className",
        type: "string",
        description:
          "کلاس‌های CSS اضافی که به عنصر ریشه ویرایشگر اضافه می‌شوند.",
      },
      {
        name: "error",
        type: "string",
        description:
          "پیام خطایی که در صورت وجود خطا در ویرایشگر نمایش داده می‌شود (اختیاری).",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک شیء برای تعریف کلاس‌های CSS خاص برای بخش‌های مختلف کامپوننت (مانند editor، toolbar و غیره).",
      },
      {
        name: "label",
        type: "string",
        description:
          "برچسبی که معمولاً بالای ویرایشگر - مثلاً در فرم‌ها - نمایش داده می‌شود.",
      },
    ],
  },
];
