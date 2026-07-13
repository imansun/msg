import { Switch } from "@/components/ui";

const Basic = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Switch defaultChecked label="اصلی" />
        <Switch color="secondary" defaultChecked label="ثانویه" />
        <Switch color="info" defaultChecked label="اطلاعاتی" />
        <Switch color="success" defaultChecked label="موفق" />
        <Switch color="warning" defaultChecked label="هشدار" />
        <Switch color="error" defaultChecked label="خطا" />
      </div>
    </div>
  );
};

export { Basic };
