import { Radio } from "@/components/ui";

const Square = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Radio
          defaultChecked
          label="اصلی"
          name="basic-square"
          className="rounded-md"
        />
        <Radio
          color="secondary"
          label="ثانویه"
          name="basic-square"
          className="rounded-md"
        />
        <Radio
          color="info"
          label="اطلاعاتی"
          name="basic-square"
          className="rounded-md"
        />
        <Radio
          color="warning"
          label="هشدار"
          name="basic-square"
          className="rounded-md"
        />
        <Radio
          color="success"
          label="موفق"
          name="basic-square"
          className="rounded-md"
        />
        <Radio
          color="error"
          label="خطا"
          name="basic-square"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export { Square };
