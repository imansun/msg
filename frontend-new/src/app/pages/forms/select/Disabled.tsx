import { Select } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب موقعیت"
        data={["کانادا", "آمریکا", "آلمان", "ژاپن"]}
        disabled
      />
    </div>
  );
};

export { Disabled };
