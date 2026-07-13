import { Select } from "@/components/ui";

const Multiple = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب موقعیت"
        defaultValue={["آمریکا"]}
        multiple
        data={["کانادا", "آمریکا", "آلمان", "ژاپن"]}
      />
    </div>
  );
};

export { Multiple };
