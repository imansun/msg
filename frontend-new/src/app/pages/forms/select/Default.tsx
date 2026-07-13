import { Select } from "@/components/ui";

const Default = () => {
  return (
    <div className="max-w-xl">
      <Select defaultValue="2">
        <option value="1">سیب</option>
        <option value="2">پرتقال</option>
        <option value="3" disabled>
          سیب‌زمینی
        </option>
        <option value="4">گوجه‌فرنگی</option>
      </Select>
    </div>
  );
};

export { Default };
