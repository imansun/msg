import { Checkbox } from "@/components/ui";

const Basic = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Checkbox defaultChecked label="ابتدایی" />
        <Checkbox color="secondary" defaultChecked label="ثانویه" />
        <Checkbox color="info" defaultChecked label="اطلاعاتی" />
        <Checkbox color="warning" defaultChecked label="هشدار" />
        <Checkbox color="success" defaultChecked label="موفق" />
        <Checkbox color="error" defaultChecked label="خطا" />
      </div>
    </div>
  );
};

export { Basic };
