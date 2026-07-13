import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";

// const now = new Date();

const Basic = () => {
  return (
    <div className="max-w-xl">
      <DatePicker
        label="تاریخ را وارد کنید"
        // defaultValue={now}
        placeholder="تاریخ را انتخاب کنید..."
      />
    </div>
  );
};

export { Basic };
