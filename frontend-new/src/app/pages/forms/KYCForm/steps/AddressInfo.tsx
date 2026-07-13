// Import Dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, Resolver } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

// Local Imports
import { ContextualHelp } from "@/components/shared/ContextualHelp";
import { Button, Checkbox, Collapse, Input, Textarea } from "@/components/ui";
import { useKYCFormContext } from "../KYCFormContext";
import { CountrySelect } from "../components/CountrySelect";
import { addressInfoSchema, AddressInfoType } from "../schema";

// ----------------------------------------------------------------------

export function AddressInfo({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const kycFormCtx = useKYCFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<AddressInfoType>({
    resolver: yupResolver(
      addressInfoSchema,
    ) as unknown as Resolver<AddressInfoType>,
    defaultValues: kycFormCtx.state.formData.addressInfo,
  });

  const showCorrespondenceAddressForm = !watch("isSameCorrespondenceAddress");

  const onSubmit = (data: AddressInfoType) => {
    kycFormCtx.dispatch({
      type: "SET_FORM_DATA",
      payload: { addressInfo: { ...data } },
    });
    kycFormCtx.dispatch({
      type: "SET_STEP_STATUS",
      payload: { addressInfo: { isDone: true } },
    });
    setCurrentStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h6 className="dark:text-dark-100 mt-6 flex space-x-1.5 text-base font-medium text-gray-800">
        <span>آدرس محل سکونت</span>
        <ContextualHelp
          title="آدرس محل سکونت"
          content={
            <p>
              آدرس محل سکونت، نشانی فیزیکی است که شما به صورت دائمی در آن زندگی یا اقامت قانونی دارید. این نشانی با نشانی پستی که صرفاً برای دریافت نامه و مرسوله استفاده می‌شود و می‌تواند با محل سکونت شما متفاوت باشد، تفاوت دارد.
            </p>
          }
        />
      </h6>
      <div className="mt-3 space-y-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <Controller
              render={({ field: { onChange, value, ...rest } }) => {
                return (
                  <CountrySelect
                    onChange={onChange}
                    value={value}
                    error={errors?.permanentAddress?.country?.message}
                    {...rest}
                  />
                );
              }}
              control={control}
              name="permanentAddress.country"
            />
          </div>

          <Input
            {...register("permanentAddress.city")}
            label="شهر"
            error={errors?.permanentAddress?.city?.message}
            placeholder="نام شهر را وارد کنید"
          />

          <Input
            {...register("permanentAddress.state")}
            label="استان"
            error={errors?.permanentAddress?.state?.message}
            placeholder="نام استان را وارد کنید"
          />

          <Input
            {...register("permanentAddress.zipCode")}
            label="کد پستی"
            error={errors?.permanentAddress?.zipCode?.message}
            placeholder="کد پستی را وارد کنید"
          />
        </div>

        <Textarea
          {...register("permanentAddress.addressLine1")}
          component={TextareaAutosize}
          minRows={3}
          label="نشانی خط ۱"
          error={errors?.permanentAddress?.addressLine1?.message}
          placeholder="نشانی خط اول را وارد کنید"
        />

        <Textarea
          {...register("permanentAddress.addressLine2")}
          component={TextareaAutosize}
          minRows={3}
          label={
            <>
              نشانی خط ۲{" "}
              <span className="dark:text-dark-300 text-xs text-gray-400">
                (اختیاری)
              </span>
            </>
          }
          error={errors?.permanentAddress?.addressLine2?.message}
          placeholder="نشانی خط دوم را (در صورت وجود) وارد کنید"
        />

        <Checkbox
          {...register("isSameCorrespondenceAddress")}
          label="نشانی مکاتباتی همان نشانی محل سکونت است."
        />
      </div>

      <Collapse in={showCorrespondenceAddressForm}>
        <hr className="dark:border-dark-500 mt-4 border-gray-200" />
        <h6 className="dark:text-dark-100 mt-3 flex space-x-1.5 text-base font-medium text-gray-800">
          <span>نشانی مکاتباتی</span>
          <ContextualHelp
            title="نشانی مکاتباتی"
            content={
              <p>
                نشانی مکاتباتی، نشانی است که می‌توان به طور رسمی با شما ارتباط برقرار کرد اما لزوماً در آن سکونت ندارید. این نشانی با آدرس محل سکونت که مکانی است که برای حداقل ۱۸۰ روز در سال به صورت حقیقی در آن حضور دارید، تفاوت دارد.
              </p>
            }
          />
        </h6>
        <div className="mt-3 space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col">
              <Controller
                render={({ field: { onChange, value, ...rest } }) => (
                  <CountrySelect
                    onChange={onChange}
                    value={value}
                    error={errors?.correspondenceAddress?.country?.message}
                    {...rest}
                  />
                )}
                control={control}
                name="correspondenceAddress.country"
              />
            </div>

            <Input
              {...register("correspondenceAddress.city")}
              label="شهر"
              error={errors?.correspondenceAddress?.city?.message}
              placeholder="نام شهر را وارد کنید"
            />

            <Input
              {...register("correspondenceAddress.state")}
              label="استان"
              error={errors?.correspondenceAddress?.state?.message}
              placeholder="نام استان را وارد کنید"
            />

            <Input
              {...register("correspondenceAddress.zipCode")}
              label="کد پستی"
              error={errors?.correspondenceAddress?.zipCode?.message}
              placeholder="کد پستی را وارد کنید"
            />
          </div>

          <Textarea
            {...register("correspondenceAddress.addressLine1")}
            component={TextareaAutosize}
            minRows={3}
            label="نشانی خط ۱"
            error={errors?.correspondenceAddress?.addressLine1?.message}
            placeholder="نشانی خط اول را وارد کنید"
          />

          <Textarea
            {...register("correspondenceAddress.addressLine2")}
            component={TextareaAutosize}
            minRows={3}
            label={
              <>
                نشانی خط ۲{" "}
                <span className="dark:text-dark-300 text-xs text-gray-400">
                  (اختیاری)
                </span>
              </>
            }
            error={errors?.correspondenceAddress?.addressLine2?.message}
            placeholder="نشانی خط دوم را (در صورت وجود) وارد کنید"
          />
        </div>
      </Collapse>

      <div className="mt-8 flex justify-end space-x-3">
        <Button className="min-w-[7rem]" onClick={() => setCurrentStep(0)}>
          بازگشت
        </Button>
        <Button type="submit" className="min-w-[7rem]" color="primary">
          مرحله بعدی
        </Button>
      </div>
    </form>
  );
}
