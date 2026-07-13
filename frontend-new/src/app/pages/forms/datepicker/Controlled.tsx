// Import Dependencies
import { useState } from "react";

// Local Imports
import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";
import { Button } from "@/components/ui";
import { type DateOption } from "@/components/shared/form/Flatpickr";
import moment from "jalali-moment";

// ----------------------------------------------------------------------

const Controlled = () => {
  const [date, setDate] = useState<DateOption | DateOption[] | "">("");

  return (
    <div className="max-w-xl">
      <DatePicker
        options={{
          dateFormat: "Y/m/d",
        }}
        value={date}
        onChange={(date) => setDate(date)}
        placeholder="تاریخ را انتخاب کنید..."
        label="تاریخ"
      />

      <Button className="mt-4" onClick={() => setDate(moment().format("jYYYY/jMM/jDD"))}>
        امروز را تنظیم کن
      </Button>
    </div>
  );
};

export { Controlled };
