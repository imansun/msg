import { TextEditor } from "@/components/shared/form/TextEditor/TextEditor";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { header: 1 },
      { background: [] },
    ],
  ],
};

const Minimal = () => {
  return (
    <div className="max-w-xl">
      <TextEditor placeholder="محتوای خود را اینجا وارد کنید..." modules={modules} />
    </div>
  );
};

export { Minimal };
