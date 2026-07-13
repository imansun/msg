import { Switch } from "@/components/ui";

const SwitchSizes = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Switch defaultChecked label="کوچک" className="h-3.5 w-7" />
      <Switch defaultChecked label="متوسط" />
      <Switch defaultChecked label="بزرگ" className="h-7 w-14" />
    </div>
  );
};

export { SwitchSizes };
