import { TextEditor } from "@/components/shared/form/TextEditor/TextEditor";

const WithLabel = () => {
  return (
    <div className="max-w-xl">
      <TextEditor
        label="محتوا را وارد کنید"
        placeholder="محتوای خود را اینجا وارد کنید..."
      />
    </div>
  );
};

export { WithLabel };
