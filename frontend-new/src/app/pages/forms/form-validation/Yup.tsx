// Import Dependencies
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Local Imports
import { Input, Button } from "@/components/ui";

// ----------------------------------------------------------------------

const schema = yup.object({
  name: yup.string().required("وارد کردن نام الزامی است"),
  age: yup
    .number()
    .required("وارد کردن سن الزامی است")
    .positive("سن باید یک عدد مثبت باشد")
    .integer("سن باید عدد صحیح باشد")
    .max(99, "مقدار باید بین ۱۸ تا ۹۹ باشد")
    .min(18, "مقدار باید بین ۱۸ تا ۹۹ باشد"),
  email: yup
    .string()
    .email("ایمیل معتبر نیست"),
  website: yup
    .string()
    .url("آدرس وب‌سایت معتبر نیست")
    .nullable(),
});

type ValidationSchema = yup.InferType<typeof schema>;

export function Yup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ValidationSchema) => console.log(data);

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="نام خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          {...register("name")}
          error={errors?.name?.message}
        />

        <Input
          placeholder="سن خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          {...register("age")}
          error={errors?.age?.message}
        />

        <Input
          placeholder="ایمیل خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          {...register("email")}
          error={errors?.email?.message}
        />

        <Input
          placeholder="آدرس وب‌سایت خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          {...register("website")}
          error={errors?.website?.message}
        />

        <Button className="mt-4" color="primary" type="submit">
          ارسال فرم
        </Button>
      </form>
    </div>
  );
}
