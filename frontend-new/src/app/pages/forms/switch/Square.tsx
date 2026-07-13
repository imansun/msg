import { Switch } from "@/components/ui";

const Square = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Switch
          defaultChecked
          label="اصلی"
          className="rounded-lg before:rounded-md"
        />
        <Switch
          color="secondary"
          defaultChecked
          label="ثانویه"
          className="rounded-lg before:rounded-md"
        />
        <Switch
          color="info"
          defaultChecked
          label="اطلاعاتی"
          className="rounded-lg before:rounded-md"
        />
        <Switch
          color="success"
          defaultChecked
          label="موفق"
          className="rounded-lg before:rounded-md"
        />
        <Switch
          color="warning"
          defaultChecked
          label="هشدار"
          className="rounded-lg before:rounded-md"
        />
        <Switch
          color="error"
          defaultChecked
          label="خطا"
          className="rounded-lg before:rounded-md"
        />
      </div>
    </div>
  );
};

export { Square };
