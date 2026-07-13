import { Radio } from "@/components/ui";

const RadioSizes = () => {
  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Radio
          name="size"
          defaultChecked
          label="خیلی کوچک"
          className="size-3.5"
        />
        <Radio name="size" label="کوچک" className="size-4" />
        <Radio name="size" label="عادی" />
        <Radio name="size" label="متوسط" className="size-6" />
        <Radio name="size" label="بزرگ" className="size-7" />
      </div>
    </div>
  );
};

export { RadioSizes };
