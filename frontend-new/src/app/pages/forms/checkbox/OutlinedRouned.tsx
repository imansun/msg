import { Checkbox } from "@/components/ui";

const OutlinedRouned = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Checkbox
          defaultChecked
          variant="outlined"
          label="اصلی"
          className="rounded-full"
        />
        <Checkbox
          color="secondary"
          defaultChecked
          variant="outlined"
          label="ثانویه"
          className="rounded-full"
        />
        <Checkbox
          color="info"
          defaultChecked
          variant="outlined"
          label="اطلاعاتی"
          className="rounded-full"
        />
        <Checkbox
          color="warning"
          defaultChecked
          variant="outlined"
          label="هشدار"
          className="rounded-full"
        />
        <Checkbox
          color="success"
          defaultChecked
          variant="outlined"
          label="موفق"
          className="rounded-full"
        />
        <Checkbox
          color="error"
          defaultChecked
          variant="outlined"
          label="خطا"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export { OutlinedRouned };
