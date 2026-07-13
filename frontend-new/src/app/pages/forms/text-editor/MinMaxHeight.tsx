import { TextEditor } from "@/components/shared/form/TextEditor/TextEditor";

const MinMaxHeight = () => {
  return (
    <div className="max-w-xl">
      <TextEditor
        placeholder="محتوای خود را اینجا وارد کنید..."
        className="[&_.ql-editor]:max-h-80 [&_.ql-editor]:min-h-[12rem]"
      />
    </div>
  );
};

export { MinMaxHeight };
