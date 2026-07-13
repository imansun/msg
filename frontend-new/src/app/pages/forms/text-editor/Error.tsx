import { TextEditor } from "@/components/shared/form/TextEditor/TextEditor";

const Error = () => {
  return (
    <div className="max-w-xl">
      <TextEditor
        placeholder="محتوای خود را اینجا وارد کنید..."
        error="مشکلی پیش آمده است"
      />
    </div>
  );
};

export { Error };
