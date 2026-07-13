import { Checkbox } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="inline-space max-w-xl">
      <Checkbox disabled label="غیرفعال" />
      <Checkbox disabled indeterminate label="نامعین" />
      <Checkbox disabled defaultChecked label="انتخاب‌شده" />
    </div>
  );
};

export { Disabled };
