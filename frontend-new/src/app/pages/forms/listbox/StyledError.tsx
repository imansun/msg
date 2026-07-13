// Import Dependencies
import { useState } from "react";

// Local Imports
import { Listbox } from "@/components/shared/form/StyledListbox";

// ----------------------------------------------------------------------

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "دورواد رینولدز" },
  { id: 2, name: "کنتون تاون" },
  { id: 3, name: "ترز وونش" },
  { id: 4, name: "بندیکت کسسلر" },
  { id: 5, name: "کیتلین روهان" },
];

const StyledError = () => {
  const [selected, setSelected] = useState<Person>(people[0]);

  return (
    <div className="max-w-xl">
      <Listbox
        data={people}
        value={selected}
        placeholder="افراد را انتخاب کنید"
        onChange={setSelected}
        error="مشکلی پیش آمد"
        label="افراد"
        displayField="name"
      />
    </div>
  );
};

export { StyledError };
