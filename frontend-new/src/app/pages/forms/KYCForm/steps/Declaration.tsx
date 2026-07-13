// Import Dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useState } from "react";
import { Controller, Resolver, useForm } from "react-hook-form";

// Local Imports
import { ContextualHelp } from "@/components/shared/ContextualHelp";
import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";
import { PreviewImg } from "@/components/shared/PreviewImg";
import {
  Button,
  Checkbox,
  GhostSpinner,
  Input,
  InputErrorMsg,
} from "@/components/ui";
import { countries } from "@/constants/countries";
import { useKYCFormContext } from "../KYCFormContext";
import { AddressDetails, declarationSchema, DeclarationType } from "../schema";

// ----------------------------------------------------------------------

export function Declaration({
  setCurrentStep,
  setFinished,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const kycFormCtx = useKYCFormContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DeclarationType>({
    resolver: yupResolver(declarationSchema) as Resolver<DeclarationType>,
    defaultValues: kycFormCtx.state.formData.declaration,
  });

  const onSubmit = (data: DeclarationType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      kycFormCtx.dispatch({
        type: "SET_FORM_DATA",
        payload: { declaration: { ...data } },
      });
      kycFormCtx.dispatch({
        type: "SET_STEP_STATUS",
        payload: { declaration: { isDone: true } },
      });
      setFinished(true);
    }, 2000);
  };

  const personalInfo = kycFormCtx.state.formData.personalInfo;
  const addressInfo = kycFormCtx.state.formData.addressInfo;
  const identifyDocument = kycFormCtx.state.formData.identifyDocument;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="max-w-3xl"
      dir="rtl"
    >
      <h6 className="dark:border-dark-500 dark:text-dark-200 mt-8 border-b border-gray-200 pb-2 text-base font-semibold text-gray-700">
        اطلاعات شخصی:
      </h6>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            نام:
          </p>
          <p>{personalInfo.firstName}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            نام میانی:
          </p>
          <p>{personalInfo.middleName || "---"}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            نام خانوادگی:
          </p>
          <p>{personalInfo.lastName}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            ایمیل:
          </p>
          <p>{personalInfo.email}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            شماره تماس:
          </p>
          <p>
            {personalInfo.dialCode} {personalInfo.phone}
          </p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            جنسیت:
          </p>
          <p>{personalInfo.gender}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            وضعیت تأهل:
          </p>
          <p>{personalInfo.matrialStatus}</p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            ملیت:
          </p>
          <p>
            {countries.find((c) => c.code === personalInfo.nationality)?.name}
          </p>
        </div>
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            تاریخ تولد:
          </p>
          <p>{dayjs(personalInfo.dateOfBirth).format("YYYY/MM/DD")}</p>
        </div>
      </div>

      <h6 className="dark:border-dark-500 dark:text-dark-200 mt-8 border-b border-gray-200 pb-2 text-base font-semibold text-gray-700">
        نشانی محل سکونت دائم:
      </h6>

      {getAddressNode(addressInfo.permanentAddress)}

      <h6 className="dark:border-dark-500 dark:text-dark-200 mt-8 border-b border-gray-200 pb-2 text-base font-semibold text-gray-700">
        نشانی مکاتبه‌ای:
      </h6>

      {addressInfo.isSameCorrespondenceAddress &&
        addressInfo.correspondenceAddress &&
        getAddressNode(
          addressInfo.isSameCorrespondenceAddress
            ? addressInfo.permanentAddress
            : addressInfo.correspondenceAddress,
        )}

      <h6 className="dark:border-dark-500 dark:text-dark-200 mt-8 border-b border-gray-200 pb-2 text-base font-semibold text-gray-700">
        احراز هویت:
      </h6>

      <div className="mt-4">
        <div>
          <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
            نوع مدرک شناسایی:
          </p>
          <p>
            {identifyDocument.type === "passport"
              ? "گذرنامه"
              : identifyDocument.type === "driverLicense"
              ? "کارت ملی"
              : identifyDocument.type}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <div>
            <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
              {identifyDocument.type === "passport"
                ? "جلد گذرنامه:"
                : "تصویر روی کارت:"}
            </p>
            <div className="dark:border-dark-500 mt-2 h-64 rounded-md border p-2">
              <PreviewImg
                file={identifyDocument.imageFront}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div>
            <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
              {identifyDocument.type === "passport"
                ? "صفحه گذرنامه:"
                : "تصویر پشت کارت:"}
            </p>
            <div className="dark:border-dark-500 mt-2 h-64 rounded-md border پ-2">
              <PreviewImg
                file={
                  identifyDocument.type === "passport"
                    ? identifyDocument.passportPage
                    : identifyDocument.imageBack
                }
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex flex-col">
            <Checkbox
              {...register("agreed")}
              label={
                <>
                  من{" "}
                  <a
                    href="##"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    شرایط و مقررات
                  </a>{" "}
                  را می‌پذیرم
                </>
              }
            />
            <InputErrorMsg when={!!errors?.agreed}>
              {errors?.agreed?.message}
            </InputErrorMsg>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              {...register("fullName")}
              label="امضا"
              placeholder="نام و نام خانوادگی کامل خود را وارد کنید"
              error={errors?.fullName?.message}
              suffix={
                <ContextualHelp
                  title="نکته مهم!"
                  content={
                    <p>
                      با وارد کردن نام و نام خانوادگی کامل خود، امضای دیجیتال خود را ثبت می‌کنید که از نظر قانونی به اندازه امضای فیزیکی اعتبار دارد. لطفاً توجه داشته باشید که امضای شما باید دقیقاً با نام و نام خانوادگی وارد شده در بالای این فرم مطابقت داشته باشد تا ثبت نهایی شما موفقیت‌آمیز باشد.
                    </p>
                  }
                />
              }
            />

            <div className="flex flex-col">
              <Controller
                render={({ field: { onChange, value, ...rest } }) => (
                  <DatePicker
                    onChange={onChange}
                    value={value || ""}
                    label="تاریخ امضا"
                    error={errors?.dateSigned?.message}
                    options={{ disableMobile: true }}
                    placeholder="تاریخ را انتخاب کنید..."
                    {...rest}
                  />
                )}
                control={control}
                name="dateSigned"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-3">
        <Button className="min-w-[7rem]" onClick={() => setCurrentStep(2)}>
          بازگشت
        </Button>
        <Button
          type="submit"
          className="min-w-[7rem] space-x-2"
          color="primary"
          disabled={loading}
        >
          {loading && <GhostSpinner className="size-4 border-2" />}

          <span>ثبت نهایی</span>
        </Button>
      </div>
    </form>
  );
}

function getAddressNode(address: AddressDetails) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          کشور:
        </p>
        <p>{countries.find((c) => c.code === address.country)?.name}</p>
      </div>
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          شهر:
        </p>
        <p>{address.city}</p>
      </div>
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          استان:
        </p>
        <p>{address.state}</p>
      </div>
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          کد پستی:
        </p>
        <p>{address.zipCode}</p>
      </div>
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          نشانی خط ۱:
        </p>
        <p>{address.addressLine1}</p>
      </div>
      <div>
        <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
          نشانی خط ۲:
        </p>
        <p>{address.addressLine2 || "---"}</p>
      </div>
    </div>
  );
}
