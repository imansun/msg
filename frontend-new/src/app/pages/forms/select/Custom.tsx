import { Select } from "@/components/ui";

const Custom = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب موقعیت"
        data={["کانادا", "آمریکا", "آلمان", "ژاپن"]}
        className="rounded-full"
      />
      <Select
        classNames={{
          root: "mt-4",
          select:
            "rounded-lg bg-gray-150 px-3 py-2 ring-primary-500/50 focus:ring-3 dark:bg-dark-900",
        }}
        label="انتخاب موقعیت"
        data={["کانادا", "آمریکا", "آلمان", "ژاپن"]}
        unstyled
      />
    </div>
  );
};

export { Custom };
