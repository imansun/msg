import { Checkbox } from "@/components/ui";

const CheckboxSizes = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Checkbox defaultChecked label="خیلی کوچک" className="size-3.5" />
        <Checkbox defaultChecked label="کوچک" className="size-4" />
        <Checkbox defaultChecked label="پیش‌فرض" />
        <Checkbox defaultChecked label="متوسط" className="size-6" />
        <Checkbox defaultChecked label="بزرگ" className="size-7" />
      </div>
    </div>
  );
};

export { CheckboxSizes };
