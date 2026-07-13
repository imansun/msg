import { useRef } from "react";
import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";
import { type FlatpickrRef } from "@/components/shared/form/Flatpickr";
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

const Instance = () => {
  const ref = useRef<FlatpickrRef>(null);

  return (
    <div className="max-w-xl">
      <DatePicker ref={ref} placeholder="تاریخ را انتخاب کنید..." />

      <Button className="mt-4" onClick={() => ref.current?._flatpickr?.open()}>
        باز کردن
      </Button>
    </div>
  );
};

export { Instance };
