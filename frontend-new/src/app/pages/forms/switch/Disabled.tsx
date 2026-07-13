import { Switch } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Switch disabled defaultChecked label="غیرفعال" />
      <Switch disabled label="غیرفعال" />
    </div>
  );
};

export { Disabled };
