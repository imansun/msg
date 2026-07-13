// Import Dependencies
import * as Yup from "yup";

// Local Imports
import { isDeltaNotEmpty } from "@/utils/quillUtils";

// ----------------------------------------------------------------------

export const generalSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, "عنوان محصول خیلی کوتاه است!")
    .max(50, "عنوان محصول خیلی بلند است!")
    .required("عنوان محصول الزامی است"),
  sku: Yup.string()
    .trim()
    .matches(/^[A-Z0-9]+$/, "شناسه SKU نامعتبر است")
    .required("شناسه SKU محصول الزامی است"),
  price: Yup.number()
    .transform((val) => (isNaN(val) ? null : val))
    .positive("قیمت باید مثبت باشد")
    .required("قیمت محصول الزامی است"),
  category_id: Yup.string().required("لطفاً دسته‌بندی محصول را انتخاب کنید"),
  brand_id: Yup.string().required("لطفاً برند محصول را انتخاب کنید"),
  selling_type: Yup.string().required("لطفاً نوع فروش را انتخاب کنید"),
  inStock: Yup.boolean().required("موجودی الزامی است"),
});

export const descriptionSchema = Yup.object().shape({
  short_description: Yup.string()
    .trim()
    .max(128, "توضیح کوتاه محصول خیلی بلند است!")
    .required("توضیح کوتاه محصول الزامی است"),
  description: Yup.object()
    .required("توضیح محصول الزامی است")
    .test("notEmpty", "محتوا نمی‌تواند خالی باشد", isDeltaNotEmpty),
  meta_title: Yup.string()
    .trim()
    .max(60, "عنوان متا خیلی بلند است!")
    .required("عنوان متا الزامی است"),
  meta_description: Yup.string()
    .trim()
    .max(160, "توضیح متا خیلی بلند است!")
    .required("توضیح متا الزامی است"),
  meta_keywords: Yup.array()
    .of(Yup.string())
    .min(1, "حداقل یک کلیدواژه متا الزامی است")
    .max(10, "حداکثر ۱۰ کلیدواژه متا مجاز است")
    .required("کلیدواژه‌های متا الزامی هستند"),
});

export const imageSchema = Yup.object().shape({
  cover: Yup.mixed()
    .nullable()
    .required("باید یک فایل انتخاب کنید")
    .test(
      "fileSize",
      "حداکثر حجم فایل باید ۴ مگابایت باشد",
      (value: any) => value && value.size <= 4194304,
    ),
  gallery: Yup.array().of(Yup.mixed().nullable()).max(10, "حداکثر ۱۰ تصویر مجاز است"),
});

export type GeneralType = Yup.InferType<typeof generalSchema>;
export type DescriptionType = Yup.InferType<typeof descriptionSchema>;
export type ImageType = Yup.InferType<typeof imageSchema>;
