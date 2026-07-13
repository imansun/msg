// Import Dependencies
import { UserIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";

// Local Imports
import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";
import { Listbox } from "@/components/shared/form/StyledListbox";
import { Button, Input, InputErrorMsg } from "@/components/ui";
import { useKYCFormContext } from "../KYCFormContext";
import { CountrySelect } from "../components/CountrySelect";
import { PhoneDialCode } from "../components/PhoneDialCode";
import { personalInfoSchema, PersonalInfoType } from "../schema";

// ----------------------------------------------------------------------

const genders = [
  {
    label: "مرد",
    value: "male",
  },
  {
    label: "زن",
    value: "female",
  },
  {
    label: "سایر",
    value: "other",
  },
];

const maritalStatuses = [
  {
    label: "متاهل",
    value: "married",
  },
  {
    label: "بیوه",
    value: "widowed",
  },
  {
    label: "جدا شده",
    value: "separated",
  },
  {
    label: "طلاق گرفته",
    value: "divorced",
  },
  {
    label: "مجرد",
    value: "single",
  },
];

export function PersonalInfo({
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
  } = useForm({
    resolver: yupResolver(personalInfoSchema) as Resolver<PersonalInfoType>,
    defaultValues: kycFormCtx.state.formData.personalInfo,
  });

  const onSubmit = (data: PersonalInfoType) => {
    kycFormCtx.dispatch({
      type: "SET_FORM_DATA",
      payload: { personalInfo: { ...data } },
    });
    kycFormCtx.dispatch({
      type: "SET_STEP_STATUS",
      payload: { personalInfo: { isDone: true } },
    });
    setCurrentStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            {...register("firstName")}
            prefix={<UserIcon className="size-5" />}
            label="نام"
            error={errors?.firstName?.message}
            placeholder="نام را وارد کنید"
          />
          <Input
            {...register("lastName")}
            prefix={<UserIcon className="size-5" />}
            label="نام خانوادگی"
            error={errors?.lastName?.message}
            placeholder="نام خانوادگی را وارد کنید"
          />
        </div>

        <Input
          {...register("middleName")}
          prefix={<UserIcon className="size-5" />}
          label={
            <>
              نام میانی
              <span className="dark:text-dark-300 text-xs text-gray-400">
                (اختیاری)
              </span>
            </>
          }
          error={errors?.middleName?.message}
          placeholder="نام میانی را وارد کنید"
        />

        <Input
          {...register("email")}
          prefix={<EnvelopeIcon className="size-5" />}
          label="ایمیل"
          error={errors?.email?.message}
          placeholder="ایمیل را وارد کنید"
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Controller
            render={({ field }) => (
              <Listbox
                data={genders}
                value={
                  genders.find((gender) => gender.value === field.value) || null
                }
                onChange={(val) => field.onChange(val.value)}
                name={field.name}
                label="جنسیت"
                placeholder="جنسیت را انتخاب کنید"
                displayField="label"
                error={errors?.gender?.message}
              />
            )}
            control={control}
            name="gender"
          />

          <Controller
            render={({ field }) => (
              <Listbox
                data={maritalStatuses}
                onChange={(val) => field.onChange(val.value)}
                value={
                  maritalStatuses.find((stat) => stat.value === field.value) ||
                  null
                }
                name={field.name}
                label="وضعیت تأهل"
                placeholder="وضعیت تأهل را انتخاب کنید"
                displayField="label"
                error={errors?.matrialStatus?.message}
              />
            )}
            control={control}
            name="matrialStatus"
          />
        </div>

        <div className="flex flex-col">
          <span>شماره تلفن</span>
          <div className="mt-1.5 flex -space-x-px">
            <Controller
              render={({ field: { onChange, value, name } }) => (
                <PhoneDialCode
                  onChange={onChange}
                  value={value}
                  name={name}
                  error={Boolean(errors?.dialCode)}
                />
              )}
              control={control}
              name="dialCode"
            />
            <Input
              {...register("phone")}
              classNames={{
                root: "flex-1",
                input:
                  "hover:z-1 focus:z-1 ltr:rounded-l-none rtl:rounded-r-none",
              }}
              error={Boolean(errors?.phone)}
              placeholder="شماره تلفن"
            />
          </div>
          <InputErrorMsg when={!!(errors?.dialCode || errors?.phone)}>
            {errors?.dialCode?.message ?? errors?.phone?.message}
          </InputErrorMsg>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <CountrySelect
                  onChange={onChange}
                  value={value}
                  error={errors?.nationality?.message}
                  {...rest}
                />
              )}
              control={control}
              name="nationality"
            />
          </div>

          <div className="flex flex-col">
            <Controller
              render={({ field: { onChange, value, ...rest } }) => (
                <DatePicker
                  onChange={onChange}
                  value={value || ""}
                  label="تاریخ تولد"
                  lang="fa"
                  error={errors?.dateOfBirth?.message}
                  options={{ disableMobile: true }}
                  placeholder="تاریخ را انتخاب کنید..."
                  {...rest}
                />
              )}
              control={control}
              name="dateOfBirth"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end space-x-3">
        <Button className="min-w-[7rem]">انصراف</Button>
        <Button type="submit" className="min-w-[7rem]" color="primary">
          بعدی
        </Button>
      </div>
    </form>
  );
}
