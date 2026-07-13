import { Textarea } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="max-w-xl">
      <Textarea
        placeholder="متن را وارد کنید"
        label="تکست اریای غیرفعال"
        rows={5}
        disabled
      />
    </div>
  );
};

export { Disabled };
