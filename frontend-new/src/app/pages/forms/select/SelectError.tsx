import { Select } from "@/components/ui";

const SelectError = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب محصول"
        defaultValue="سیب‌زمینی"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
        error="این یک پیام خطا است"
      />
    </div>
  );
};

export { SelectError };
