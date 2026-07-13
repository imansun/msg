import { Textarea } from "@/components/ui";

const WithLabel = () => {
  return (
    <div className="max-w-xl">
      <Textarea placeholder="متن خود را وارد کنید" label="برچسب تکست اریا" rows={5} />
    </div>
  );
};

export { WithLabel };
