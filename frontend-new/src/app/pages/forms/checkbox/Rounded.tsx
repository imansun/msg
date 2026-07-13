import { Checkbox } from "@/components/ui";

const Rounded = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Checkbox defaultChecked label="اصلی" className="rounded-full" />
        <Checkbox
          color="secondary"
          defaultChecked
          label="ثانویه"
          className="rounded-full"
        />
        <Checkbox
          color="info"
          defaultChecked
          label="اطلاعاتی"
          className="rounded-full"
        />
        <Checkbox
          color="warning"
          defaultChecked
          label="هشدار"
          className="rounded-full"
        />
        <Checkbox
          color="success"
          defaultChecked
          label="موفق"
          className="rounded-full"
        />
        <Checkbox
          color="error"
          defaultChecked
          label="خطا"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export { Rounded };
