import { Textarea } from "@/components/ui";

const WithDescription = () => {
  return (
    <div className="max-w-xl">
      <Textarea
        placeholder="متن خود را وارد کنید"
        label="برچسب تکست اریا"
        description="این یک متن راهنما است"
        rows={5}
      />
    </div>
  );
};

export { WithDescription };
