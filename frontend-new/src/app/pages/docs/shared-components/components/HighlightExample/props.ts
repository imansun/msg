export const componentProps = [
  {
    componentName: "Highlight",
    desc: "یک کامپوننت برای برجسته‌سازی متن خاصی درون یک محتوای داده‌شده.",
    props: [
      {
        name: "query",
        type: "string",
        description:
          "متن یا الگوی موردنظر برای برجسته‌سازی درون محتوا.",
      },
      {
        name: "unstyled",
        type: "boolean",
        description:
          "تعیین می‌کند که متن برجسته‌شده دارای استایل پیش‌فرض باشد یا استایل سفارشی.",
      },
      {
        name: "highlightClass",
        type: "string",
        description:
          "کلاس CSS که به بخش برجسته‌شده‌ی متن اعمال می‌شود.",
      },
    ],
  },
];
