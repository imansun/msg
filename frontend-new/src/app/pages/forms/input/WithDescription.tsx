import { Input } from "@/components/ui";

const WithDescription = () => {
  return (
    <div className="max-w-xl">
      <Input placeholder="نام کاربری را وارد کنید" description="این یک متن راهنما است" />
    </div>
  );
};

export { WithDescription };
