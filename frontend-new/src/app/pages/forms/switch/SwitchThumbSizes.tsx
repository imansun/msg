import { Switch } from "@/components/ui";

const SwitchThumbSizes = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Switch
        defaultChecked
        label="لبه شست ۶ پیکسل"
        style={{ "--thumb-border": "6px" } as React.CSSProperties}
      />
      <Switch
        defaultChecked
        label="لبه شست ۵ پیکسل"
        style={{ "--thumb-border": "5px" } as React.CSSProperties}
      />
      <Switch
        defaultChecked
        label="لبه شست ۴ پیکسل"
        style={{ "--thumb-border": "4px" } as React.CSSProperties}
      />
      <Switch
        defaultChecked
        label="لبه شست ۳ پیکسل"
        style={{ "--thumb-border": "3px" } as React.CSSProperties}
      />
      <Switch defaultChecked label="پیش‌فرض" />
    </div>
  );
};

export { SwitchThumbSizes };
