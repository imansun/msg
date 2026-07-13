import { Checkbox } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Checkbox defaultChecked variant="outlined" label="اصلی" />
        <Checkbox
          color="secondary"
          defaultChecked
          variant="outlined"
          label="ثانویه"
        />
        <Checkbox color="info" defaultChecked variant="outlined" label="اطلاعاتی" />
        <Checkbox
          color="warning"
          defaultChecked
          variant="outlined"
          label="هشدار"
        />
        <Checkbox
          color="success"
          defaultChecked
          variant="outlined"
          label="موفق"
        />
        <Checkbox
          color="error"
          defaultChecked
          variant="outlined"
          label="خطا"
        />
      </div>
    </div>
  );
};

export { Outlined };
