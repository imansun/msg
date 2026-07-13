import { Select } from "@/components/ui";

const WithLabel = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب محصول"
        defaultValue="سیب‌زمینی"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
    </div>
  );
};

export { WithLabel };
