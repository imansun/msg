import { TextEditor } from "@/components/shared/form/TextEditor/TextEditor";
import { htmlToDelta } from "@/utils/quillUtils";

const html = `<p>فقط <em>ایتالیک</em> مجاز است. <strong>بولد</strong> مجاز نیست.</p>`;

const ConvertHtmlToDelta = () => {
  return (
    <div className="max-w-xl">
      <TextEditor
        defaultValue={htmlToDelta(html)}
        placeholder="محتوای خود را اینجا وارد کنید..."
      />
    </div>
  );
};

export { ConvertHtmlToDelta };
