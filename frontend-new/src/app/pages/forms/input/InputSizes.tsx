import { Input } from "@/components/ui";

const InputSizes = () => {
  return (
    <div className="max-w-xl space-y-4">
      <Input placeholder="سایز کوچک" className="h-8 py-1 text-xs" />
      <Input placeholder="سایز استاندارد" />
      <Input placeholder="سایز بزرگ" className="h-12 text-base" />
    </div>
  );
};

export { InputSizes };
