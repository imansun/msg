import { Select } from "@/components/ui";

const WithDescription = () => {
  return (
    <div className="max-w-xl">
      <Select
        description="این یک متن راهنما است"
        defaultValue="سیب‌زمینی"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
    </div>
  );
};

export { WithDescription };
