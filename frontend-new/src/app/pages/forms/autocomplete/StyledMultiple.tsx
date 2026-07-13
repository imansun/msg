// Import Dependencies
import { useState, KeyboardEvent } from "react";

// Local Imports
import { Combobox } from "@/components/shared/form/StyledCombobox";

// ----------------------------------------------------------------------

type Person = {
  id: number;
  name: string;
};

const people: Person[] = [
  { id: 1, name: "وید کوپر" },
  { id: 2, name: "آرلین مک‌کوی" },
  { id: 3, name: "دوون وب" },
  { id: 4, name: "تام کوک" },
  { id: 5, name: "تانیا فاکس" },
  { id: 6, name: "هلن اشمیت" },
];

export function StyledMultiple() {
  const [selected, setSelected] = useState<Person[]>([]);
  const handleChange = (value: unknown) => {
    setSelected(value as Person[]);
  };
  return (
    <div className="max-w-xl">
      <Combobox
        data={people}
        displayField="name"
        value={selected}
        onChange={handleChange}
        placeholder="لطفاً کاربر را انتخاب کنید"
        label="انتخاب کاربر"
        searchFields={["name"]}
        multiple
        // حذف آیتم با دکمه بک‌اسپیس
        inputProps={{
          onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
            if (
              selected.length > 0 &&
              event.key === "Backspace" &&
              (event.target as HTMLInputElement).value === ""
            ) {
              setSelected((current) => current.slice(0, -1));
            }
          },
        }}
      />
    </div>
  );
}
