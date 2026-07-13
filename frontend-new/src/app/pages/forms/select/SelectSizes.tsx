import { Select } from "@/components/ui";

const SelectSizes = () => {
  return (
    <div className="max-w-xl space-y-4">
      <Select
        label="انتخاب محصول"
        defaultValue="سیب‌زمینی"
        className="h-8 py-1 text-xs"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
      <Select
        label="انتخاب محصول"
        defaultValue="سیب‌زمینی"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
      <Select
        label="انتخاب محصول"
        defaultValue="سیب‌زمینی"
        className="h-12 text-base"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
    </div>
  );
};

export { SelectSizes };
