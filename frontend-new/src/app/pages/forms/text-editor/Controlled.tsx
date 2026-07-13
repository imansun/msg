// Import Dependencies
import { useState } from "react";

// Local Imports
import { Delta, TextEditor } from "@/components/shared/form/TextEditor/TextEditor";

// ----------------------------------------------------------------------

const defaultValue = new Delta();

const Controlled = () => {
  const [content, setContent] = useState(defaultValue);

  return (
    <div className="max-w-xl">
      <TextEditor
        value={content}
        onChange={(val) => setContent(val)}
        placeholder="محتوای خود را اینجا وارد کنید..."
      />
    </div>
  );
};

export { Controlled };
