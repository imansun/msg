import { Radio } from "@/components/ui";

const Basic = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Radio defaultChecked label="اصلی" name="basic" />
        <Radio color="secondary" label="ثانویه" name="basic" />
        <Radio color="info" label="اطلاعاتی" name="basic" />
        <Radio color="warning" label="هشدار" name="basic" />
        <Radio color="success" label="موفق" name="basic" />
        <Radio color="error" label="خطا" name="basic" />
      </div>
    </div>
  );
};

export { Basic };
