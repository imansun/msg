import { Radio } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="inline-space max-w-xl">
      <Radio disabled defaultChecked label="انتخاب‌شده" />
      <Radio disabled label="انتخاب‌نشده" />
    </div>
  );
};

export { Disabled };
