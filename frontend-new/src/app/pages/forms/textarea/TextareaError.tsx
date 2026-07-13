import { Textarea } from "@/components/ui";

const TextareaError = () => {
  return (
    <div className="max-w-xl">
      <Textarea
        placeholder="متن را وارد کنید"
        label="با خطا"
        error="این یک پیام خطا است"
        rows={5}
      />
    </div>
  );
};

export { TextareaError };
