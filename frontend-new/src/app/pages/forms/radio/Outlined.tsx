import { Radio } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Radio
          defaultChecked
          label="اصلی"
          variant="outlined"
          name="outlined"
        />
        <Radio
          color="secondary"
          label="ثانویه"
          variant="outlined"
          name="outlined"
        />
        <Radio color="info" label="اطلاعاتی" variant="outlined" name="outlined" />
        <Radio
          color="warning"
          label="هشدار"
          variant="outlined"
          name="outlined"
        />
        <Radio
          color="success"
          label="موفق"
          variant="outlined"
          name="outlined"
        />
        <Radio color="error" label="خطا" variant="outlined" name="outlined" />
      </div>
    </div>
  );
};

export { Outlined };
