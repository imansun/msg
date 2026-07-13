import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Pagination",
    desc: "یک کامپوننت برای پیمایش در میان صفحات مختلف محتوا.",
    props: [
      {
        name: "total",
        type: "number",
        description: "تعداد کل صفحات.",
      },
      {
        name: "value",
        type: "number",
        description: "صفحه فعلی در حالت کنترل‌شده.",
      },
      {
        name: "defaultValue",
        type: "number",
        description: "شماره صفحه اولیه در حالت غیرکنترل‌شده.",
      },
      {
        name: "onChange",
        type: "(value: number) => void",
        description: "تابعی که هنگام تغییر صفحه فراخوانی می‌شود.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "کل کامپوننت صفحه‌بندی را غیرفعال می‌کند.",
      },
      {
        name: "getItemProps",
        type: "(page: number) => object",
        description: "تابع برای سفارشی‌سازی خصوصیات هر آیتم صفحه.",
      },
      {
        name: "className",
        type: "string",
        description: "کلاس‌های سی‌اس‌اس اضافی برای کامپوننت صفحه‌بندی.",
      },
      {
        name: "classNames",
        type: "object",
        description:
          "یک آبجکت شامل کلاس‌های سی‌اس‌اس برای بخش‌های مختلف کامپوننت.",
      },
      {
        name: "siblings",
        type: "number",
        default: "1",
        description:
          "تعداد صفحات همسایه که در هر طرف صفحه فعلی نمایش داده می‌شوند.",
      },
      {
        name: "boundaries",
        type: "number",
        default: "1",
        description:
          "تعداد صفحات مرزی که در ابتدا و انتهای صفحه‌بندی نمایش داده می‌شوند.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوای سفارشی که درون ظرف صفحه‌بندی نمایش داده می‌شود.",
      },
      {
        name: "onNextPage",
        type: "() => void",
        description:
          "تابعی که هنگام جابه‌جایی به صفحه بعد فراخوانی می‌شود.",
      },
      {
        name: "onPreviousPage",
        type: "() => void",
        description:
          "تابعی که هنگام جابه‌جایی به صفحه قبل فراخوانی می‌شود.",
      },
      {
        name: "onFirstPage",
        type: "() => void",
        description:
          "تابعی که هنگام جابه‌جایی به اولین صفحه فراخوانی می‌شود.",
      },
      {
        name: "onLastPage",
        type: "() => void",
        description:
          "تابعی که هنگام جابه‌جایی به آخرین صفحه فراخوانی می‌شود.",
      },
    ],
  },
  {
    componentName: "PaginationFirst",
    desc: "دکمه‌ای برای رفتن به اولین صفحه در صفحه‌بندی.",
    props: [
      {
        name: "Icon",
        type: "React.ElementType",
        description: "آیکونی که داخل دکمه نمایش داده می‌شود.",
      },
    ],
  },
  {
    componentName: "PaginationLast",
    desc: "دکمه‌ای برای رفتن به آخرین صفحه در صفحه‌بندی.",
    props: [
      {
        name: "Icon",
        type: "React.ElementType",
        description: "آیکونی که داخل دکمه نمایش داده می‌شود.",
      },
    ],
  },
  {
    componentName: "PaginationNext",
    desc: "دکمه‌ای برای رفتن به صفحه بعد در صفحه‌بندی.",
    props: [
      {
        name: "Icon",
        type: "React.ElementType",
        description: "آیکونی که داخل دکمه نمایش داده می‌شود.",
      },
    ],
  },
  {
    componentName: "PaginationPrevious",
    desc: "دکمه‌ای برای رفتن به صفحه قبل در صفحه‌بندی.",
    props: [
      {
        name: "Icon",
        type: "React.ElementType",
        description: "آیکونی که داخل دکمه نمایش داده می‌شود.",
      },
    ],
  },
];
