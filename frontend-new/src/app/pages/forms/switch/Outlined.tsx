import { Switch } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Switch defaultChecked variant="outlined" label="اصلی" />
        <Switch
          color="secondary"
          defaultChecked
          variant="outlined"
          label="ثانویه"
        />
        <Switch color="info" defaultChecked variant="outlined" label="اطلاعاتی" />
        <Switch
          color="success"
          defaultChecked
          variant="outlined"
          label="موفق"
        />
        <Switch
          color="warning"
          defaultChecked
          variant="outlined"
          label="هشدار"
        />
        <Switch color="error" defaultChecked variant="outlined" label="خطا" />
      </div>
    </div>
  );
};

export { Outlined };
