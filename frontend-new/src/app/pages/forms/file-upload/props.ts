import { ComponentPropsItem } from "@/components/docs/demo/DemoLayout/ComponentProps";

export const componentProps: ComponentPropsItem[] = [
  {
    componentName: "Upload",
    desc: "یک کامپوننت آپلود فایل چندمنظوره که از انتخاب چند فایل، ویژگی‌های سفارشی ورودی و قابلیت‌های دسترس‌پذیری پشتیبانی می‌کند.",
    props: [
      {
        name: "onChange",
        type: "(file: File[]) => void",
        description:
          "تابعی که هنگام انتخاب یا تغییر فایل فراخوانی می‌شود.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "محتوا یا عناصر سفارشی برای نمایش داخل کامپوننت آپلود، مانند دکمه یا برچسب.",
      },
      {
        name: "multiple",
        type: "boolean",
        description: "در صورت true بودن، اجازه انتخاب چند فایل را می‌دهد.",
      },
      {
        name: "accept",
        type: "string",
        description:
          "نوع فایل‌هایی که ورودی مجاز به پذیرش آن‌هاست را مشخص می‌کند (مثلاً '.jpg, .png, .pdf').",
      },
      {
        name: "name",
        type: "string",
        description:
          "مشخص‌کننده ویژگی name برای عنصر ورودی، کاربردی برای فرم‌ها.",
      },
      {
        name: "form",
        type: "string",
        description: "شناسه فرمی که ورودی به آن تعلق دارد را مشخص می‌کند.",
      },
      {
        name: "disabled",
        type: "boolean",
        description:
          "اگر true باشد، کامپوننت آپلود غیرفعال می‌شود و انتخاب فایل ممکن نیست.",
      },
      {
        name: "capture",
        type: "string | boolean",
        description:
          "در صورت مقداردهی، نوع دستگاه ورودی برای دریافت فایل را مشخص می‌کند (مثلاً 'camera').",
      },
      {
        name: "inputProps",
        type: "object",
        description:
          "ویژگی‌های اضافی که به عنصر «input» زیرین اضافه می‌شوند.",
      },
    ],
  },
];
