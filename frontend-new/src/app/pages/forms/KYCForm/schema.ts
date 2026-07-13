// Import Dependencies
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import * as Yup from "yup";

// ----------------------------------------------------------------------

dayjs.extend(isBetween);

export type DocumentType = "passport" | "driverLicense" | "nationalID";

export const personalInfoSchema = Yup.object().shape({
  // اطلاعات شخصی
  firstName: Yup.string().trim().required("وارد کردن نام الزامی است"),
  lastName: Yup.string().trim().required("وارد کردن نام خانوادگی الزامی است"),
  middleName: Yup.string().trim(),
  email: Yup.string().trim().email("ایمیل نامعتبر است").required("وارد کردن ایمیل الزامی است"),
  dialCode: Yup.string().trim().required("کد کشور را انتخاب کنید"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9\-s]+$/, "فرمت شماره تلفن صحیح نیست")
    .required("وارد کردن شماره تلفن الزامی است"),
  gender: Yup.string().trim().required("انتخاب جنسیت الزامی است"),
  dateOfBirth: Yup.date()
    .test("valid-age", "سن شما باید حداقل ۱۸ سال باشد", (value) => {
      return dayjs().diff(dayjs(value), "year") >= 18;
    })
    .required("تاریخ تولد خود را وارد کنید"),
  matrialStatus: Yup.string().trim().required("وضعیت تأهل را انتخاب کنید"),
  nationality: Yup.string().trim().required("ملیت خود را انتخاب کنید"),
});

export const addressInfoSchema = Yup.object().shape({
  permanentAddress: Yup.object().shape({
    country: Yup.string().required("کشور را انتخاب کنید"),
    city: Yup.string().required("وارد کردن شهر الزامی است"),
    state: Yup.string().required("وارد کردن استان الزامی است"),
    zipCode: Yup.string().required("وارد کردن کد پستی الزامی است"),
    addressLine1: Yup.string().required("وارد کردن آدرس الزامی است"),
    addressLine2: Yup.string(),
  }),
  isSameCorrespondenceAddress: Yup.bool(),
  correspondenceAddress: Yup.object().when("isSameCorrespondenceAddress", {
    is: false,
    then: (schema) =>
      schema.shape({
        country: Yup.string().required("کشور را انتخاب کنید"),
        city: Yup.string().required("وارد کردن شهر الزامی است"),
        state: Yup.string().required("وارد کردن استان الزامی است"),
        zipCode: Yup.string().required("وارد کردن کد پستی الزامی است"),
        addressLine1: Yup.string().required("وارد کردن آدرس الزامی است"),
        addressLine2: Yup.string(),
      }),
    otherwise: (schema) => schema.optional().nullable(),
  }),
});

export const identifyDocumentSchema = Yup.object().shape({
  type: Yup.string()
    .oneOf(["passport", "driverLicense", "nationalID"] as const)
    .required("نوع مدرک شناسایی را انتخاب کنید"),
  imageFront: Yup.mixed()
    .nullable()
    .required("آپلود فایل الزامی است")
    .test(
      "fileSize",
      "حجم فایل باید حداکثر ۴ مگابایت باشد",
      (value: any) => !value || (value && (value as File).size <= 4194304),
    ),
  imageBack: Yup.mixed()
    .nullable()
    .when("type", {
      is: (type: DocumentType) => type !== "passport",
      then: () =>
        Yup.mixed()
          .required("آپلود فایل الزامی است")
          .test(
            "fileSize",
            "حجم فایل باید حداکثر ۴ مگابایت باشد",
            (value: any) =>
              !value || (value && (value as File).size <= 4194304),
          ),
      otherwise: (schema) => schema,
    }),
  passportPage: Yup.mixed()
    .nullable()
    .when("type", {
      is: "passport" as const,
      then: () =>
        Yup.mixed()
          .required("آپلود فایل الزامی است")
          .test(
            "fileSize",
            "حجم فایل باید حداکثر ۴ مگابایت باشد",
            (value: any) =>
              !value || (value && (value as File).size <= 4194304),
          ),
      otherwise: (schema) => schema,
    }),
});

export const declarationSchema = Yup.object().shape({
  agreed: Yup.boolean()
    .oneOf(
      [true],
      "برای استفاده از سرویس، لازم است با شرایط و قوانین موافقت کنید.",
    )
    .required("تأیید الزامی است"),
  fullName: Yup.string().required("نام کامل الزامی است"),
  dateSigned: Yup.date()
    .test(
      "valid-date-signed",
      "تاریخ امضاء باید حداکثر در هفت روز گذشته باشد",
      (value) => {
        return dayjs(value).isBetween(dayjs(), dayjs().subtract(7, "day"));
      },
    )
    .max(new Date())
    .required("تاریخ امضاء الزامی است"),
});

export type PersonalInfoType = {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  dialCode: string;
  phone: string;
  gender: string;
  dateOfBirth: Date | null;
  matrialStatus: string;
  nationality: string;
};

export type AddressDetails = {
  country: string;
  city: string;
  state: string;
  zipCode: string;
  addressLine1: string;
  addressLine2?: string;
};

export type AddressInfoType = {
  permanentAddress: AddressDetails;
  isSameCorrespondenceAddress?: boolean;
  correspondenceAddress?: AddressDetails; 
};

export type IdentifyDocumentType = {
  type: DocumentType;
  imageFront: File | null;
  imageBack?: File | null; 
  passportPage?: File | null; 
};

export type DeclarationType = {
  agreed: boolean;
  fullName: string;
  dateSigned: Date | null;
};
