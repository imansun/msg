import { Select, SelectOption } from "@/components/ui";
import { randomId } from "@/utils/randomId";

const items: (SelectOption & { key: string })[] = [
  {
    key: randomId(),
    value: "1",
    label: "سیب",
    disabled: false,
  },
  {
    key: randomId(),
    value: "2",
    label: "پرتقال",
    disabled: false,
  },
  {
    key: randomId(),
    value: "3",
    label: "سیب‌زمینی",
    disabled: true,
  },
  {
    key: randomId(),
    value: "4",
    label: "گوجه‌فرنگی",
    disabled: false,
  },
];

const DataProp = () => {
  return (
    <div className="max-w-xl">
      <Select
        defaultValue="سیب‌زمینی"
        data={["سیب", "پرتقال", "سیب‌زمینی", "گوجه‌فرنگی"]}
      />
      <Select data={items} classNames={{ root: "mt-4" }} />
    </div>
  );
};

export { DataProp };
