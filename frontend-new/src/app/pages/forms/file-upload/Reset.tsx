// Import Dependencies
import { useRef, useState } from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import invariant from "tiny-invariant";

// Local Imports
import { Upload, Button } from "@/components/ui";

// ----------------------------------------------------------------------

const Reset = () => {
  const [file, setFile] = useState<File[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    invariant(uploadRef?.current, "امکان دسترسی به ورودی فایل وجود ندارد");
    uploadRef.current.value = "";
    setFile([]);
  };

  return (
    <div className="max-w-xl">
      <div className="flex gap-2">
        <Upload onChange={setFile} ref={uploadRef}>
          {({ ...props }) => (
            <Button color="primary" {...props} className="gap-2">
              <CloudArrowUpIcon className="size-5" />
              <span>انتخاب فایل</span>
            </Button>
          )}
        </Upload>

        <Button disabled={!file} onClick={reset}>
          پاک کردن
        </Button>
      </div>
      {file && file.length > 0 && (
        <div>
          نام فایل : <span className="font-medium">{file[0].name}</span>
        </div>
      )}
    </div>
  );
};

export { Reset };
