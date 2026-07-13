// Import Dependencies
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

// Local Imports
import { Listbox } from "@/components/shared/form/StyledListbox";
import { Button, Input, InputErrorMsg, Radio, Switch } from "@/components/ui";
import { useAddProductFormContext } from "../AddProductFormContext";
import { generalSchema } from "../schema";

// ----------------------------------------------------------------------

const categories = [
  {
    id: "1",
    label: "تبلت",
  },
  {
    id: "2",
    label: "کنسول بازی",
  },
  {
    id: "3",
    label: "گوشی هوشمند",
  },
  {
    id: "4",
    label: "پهپاد",
  },
  {
    id: "5",
    label: "دوربین",
  },
  {
    id: "6",
    label: "پرینتر",
  },
  {
    id: "7",
    label: "تلویزیون",
  },
];

const brands = [
  {
    id: "1",
    label: "سامسونگ",
  },
  {
    id: "2",
    label: "سونی",
  },
  {
    id: "3",
    label: "فیلیپس",
  },
  {
    id: "4",
    label: "ال‌جی",
  },
  {
    id: "5",
    label: "بوز",
  },
  {
    id: "6",
    label: "ایان",
  },
  {
    id: "7",
    label: "نکسا",
  },
  {
    id: "8",
    label: "ویوا",
  },
];

export function General({
  setCurrentStep,
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setFinished?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const addProductFormCtx = useAddProductFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(generalSchema),
    defaultValues: addProductFormCtx?.state?.formData?.general,
  });

  const onSubmit = (data: any) => {
    addProductFormCtx.dispatch({
      type: "SET_FORM_DATA",
      payload: { general: { ...data } },
    });
    addProductFormCtx.dispatch({
      type: "SET_STEP_STATUS",
      payload: { general: { isDone: true } },
    });
    setCurrentStep(1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex grow flex-col"
    >
      <div className="grow space-y-4">
        <Input
          {...register("title")}
          label="عنوان"
          error={errors?.title?.message}
          placeholder="عنوان محصول را وارد کنید"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            {...register("sku")}
            label="کد کالا (SKU)"
            error={errors?.sku?.message}
            placeholder="کد محصول را وارد کنید"
          />
          <Input
            {...register("price")}
            label="قیمت"
            type="number"
            error={errors?.price?.message}
            placeholder="قیمت محصول را وارد کنید"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Controller
            render={({ field: { value, onChange, ...rest } }) => (
              <Listbox
                data={categories}
                value={categories.find((cat) => cat.id === value) || null}
                onChange={(val) => onChange(val.id)}
                label="دسته‌بندی"
                placeholder="انتخاب دسته‌بندی"
                displayField="label"
                error={errors?.category_id?.message}
                {...rest}
              />
            )}
            control={control}
            name="category_id"
          />
          <Controller
            render={({ field: { value, onChange, ...rest } }) => (
              <Listbox
                data={brands}
                value={brands.find((brand) => brand.id === value) || null}
                onChange={(val) => onChange(val.id)}
                label="برند"
                placeholder="انتخاب برند"
                displayField="label"
                error={errors?.brand_id?.message}
                {...rest}
              />
            )}
            control={control}
            name="brand_id"
          />
        </div>

        <div className="flex flex-col">
          <span>نوع فروش</span>
          <div
            className={clsx(
              "mt-1.5 flex flex-col space-y-4 rounded-lg border px-3 py-4",
              errors?.selling_type
                ? "border-error dark:border-error-lighter"
                : "dark:border-dark-450 border-gray-300",
            )}
          >
            <Radio
              label="فقط فروش حضوری"
              {...register("selling_type")}
              value="online-sell"
            />
            <Radio
              label="فقط فروش اینترنتی"
              {...register("selling_type")}
              value="in-store-sell"
            />
            <Radio
              label="فروش حضوری و اینترنتی"
              {...register("selling_type")}
              value="online-in-store-sell"
            />
          </div>
          <InputErrorMsg when={!!errors?.selling_type}>
            {errors?.selling_type?.message}
          </InputErrorMsg>
        </div>

        <Switch label="موجود در انبار" {...register("inStock")} />
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <Button className="min-w-[7rem]">انصراف</Button>
        <Button type="submit" className="min-w-[7rem]" color="primary">
          بعدی
        </Button>
      </div>
    </form>
  );
}
