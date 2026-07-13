// Import Dependencies
import MagicUrl from "quill-magic-url";

// Local Imports
import { TextEditor, Quill } from "@/components/shared/form/TextEditor/TextEditor";

// ----------------------------------------------------------------------

Quill.register("modules/magicUrl", MagicUrl);

const ExternalModule = () => {
  return (
    <div className="max-w-xl">
      <TextEditor
        placeholder="محتوای خود را اینجا وارد کنید..."
        modules={{ magicUrl: true }}
      />
    </div>
  );
};

export { ExternalModule };
