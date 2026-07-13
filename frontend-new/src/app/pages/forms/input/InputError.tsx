import { Input } from "@/components/ui";

const InputError = () => {
  return (
    <div className="max-w-xl">
      <Input placeholder="نام کاربری را وارد کنید" error="این یک پیام خطا است" />
    </div>
  );
};

export { InputError };
