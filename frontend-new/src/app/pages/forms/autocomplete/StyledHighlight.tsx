// Import Dependencies
import { useState } from "react";

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

export function StyledHighlight() {
  const [selected, setSelected] = useState<Person>(people[0]);

  const handleChange = (value: unknown) => {
    setSelected(value as Person);
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
        highlight
      />
    </div>
  );
}
