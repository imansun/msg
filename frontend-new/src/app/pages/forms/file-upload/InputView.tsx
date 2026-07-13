// Import Dependencies
import { useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";

// Local Imports
import { Upload, Button, Input } from "@/components/ui";
import invariant from "tiny-invariant";

// ----------------------------------------------------------------------

const InputView = () => {
  const [files, setFiles] = useState<File[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null);

  const filesList =
    files.length > 0
      ? files.map((file) => file.name).join("، ")
      : "فایل‌ها را انتخاب کنید";

  const reset = () => {
    invariant(uploadRef?.current, "امکان دسترسی به ورودی فایل وجود ندارد");
    uploadRef.current.value = "";
    setFiles([]);
  };

  return (
    <div className="max-w-xl">
      <Upload name="file" onChange={setFiles} multiple ref={uploadRef}>
        {({ ...props }) => (
          <>
            <Input
              component="button"
              prefix={<PaperClipIcon className="size-5" />}
              suffix={
                files.length > 0 && (
                  <Button
                    variant="flat"
                    className="pointer-events-auto size-5 shrink-0 rounded-full p-0"
                    onClick={reset}
                  >
                    <XMarkIcon className="size-4" />
                  </Button>
                )
              }
              title={filesList}
              className="cursor-pointer truncate text-start"
              {...props}
            >
              {filesList}
            </Input>
          </>
        )}
      </Upload>
    </div>
  );
};

export { InputView };
