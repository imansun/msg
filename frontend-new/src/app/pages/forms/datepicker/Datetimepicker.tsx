import { DatePicker } from "@/components/shared/form/Datepicker/Datepicker";

const Datetimepicker = () => {
  return (
    <div className="max-w-xl">
      <DatePicker
        options={{
          enableTime: true,
        }}
        placeholder="Choose date..."
      />
    </div>
  );
};

export { Datetimepicker };
