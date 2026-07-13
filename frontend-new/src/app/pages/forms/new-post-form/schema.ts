// Import Dependencies
import * as Yup from "yup";

// Local Imports
import { isDeltaNotEmpty } from "@/utils/quillUtils";

// ----------------------------------------------------------------------

export const schema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, "عنوان بلاگ خیلی کوتاه است!")
    .max(50, "عنوان بلاگ خیلی بلند است!")
    .required("وارد کردن عنوان بلاگ الزامی است"),
  // .matches(/^[A-Z0-9]+$/, 'عنوان بلاگ نامعتبر است'),
  caption: Yup.string()
    .trim()
    .min(2, "کپشن بلاگ خیلی کوتاه است!")
    .max(50, "کپشن بلاگ خیلی بلند است!")
    .required("وارد کردن کپشن بلاگ الزامی است"),
  content: Yup.object()
    .required("توضیحات بلاگ الزامی است")
    .test("notEmpty", "محتوا نمی‌تواند خالی باشد", isDeltaNotEmpty),
  cover: Yup.mixed()
    .nullable()
    .required("باید یک فایل انتخاب کنید")
    .test(
      "fileSize",
      "حداکثر حجم فایل باید ۴ مگابایت باشد",
      (value: any) => value && value.size <= 4194304,
    ),
  author_id: Yup.string().required("لطفا نویسنده را انتخاب کنید"),
  category_id: Yup.string().required("لطفا دسته بندی را انتخاب کنید"),
  tags: Yup.array().of(Yup.string().nullable()).max(10),
  publish_date: Yup.date().required("وارد کردن تاریخ انتشار الزامی است"),
  meta: Yup.object().shape({
    title: Yup.string().trim().max(60, "عنوان متا خیلی بلند است!"),
    description: Yup.string().trim().max(160, "توضیحات متا خیلی بلند است!"),
    keywords: Yup.array()
      .of(Yup.string())
      .min(0)
      .max(10)
      .required("کلمات کلیدی متا الزامی است"),
  }),
});

export type SchemaType = Yup.InferType<typeof schema>;
