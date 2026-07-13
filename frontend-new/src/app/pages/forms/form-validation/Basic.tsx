// Import Dependencies
import { useForm } from "react-hook-form";

// Local Imports
import { Input, Button } from "@/components/ui";

// ----------------------------------------------------------------------

interface FormData {
  name: string;
  age: number;
  password: string;
}

export function Basic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  const formOption = {
    name: { required: "وارد کردن نام الزامی است" },
    age: {
      required: "وارد کردن سن الزامی است",
      min: {
        value: 18,
        message: "مقدار باید بین ۱۸ تا ۹۹ باشد",
      },
      max: {
        value: 99,
        message: "مقدار باید بین ۱۸ تا ۹۹ باشد",
      },
    },
    password: {
      required: "وارد کردن گذرواژه الزامی است",
      minLength: {
        value: 8,
        message: "گذرواژه باید حداقل ۸ کاراکتر داشته باشد",
      },
    },
  };

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="نام خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          {...register("name", formOption.name)}
          error={errors?.name && errors.name.message}
        />

        <Input
          placeholder="سن خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          type="number"
          {...register("age", formOption.age)}
          error={errors?.age && errors.age.message}
        />

        <Input
          placeholder="گذرواژه خود را وارد کنید"
          classNames={{
            root: "mt-4",
          }}
          type="password"
          {...register("password", formOption.password)}
          error={errors?.password && errors.password.message}
        />

        <Button className="mt-4" color="primary" type="submit">
          ارسال فرم
        </Button>
      </form>
    </div>
  );
}
