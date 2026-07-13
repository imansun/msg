// Import Dependencies
import { useState } from "react";

// Local Imports
import { Input } from "@/components/ui";

// ----------------------------------------------------------------------

const Controlled = () => {
  const [value, setValue] = useState("متن");

  return (
    <div className="max-w-xl">
      <Input
        placeholder="نام کاربری را وارد کنید"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="mt-1">{value}</p>
    </div>
  );
};

export { Controlled };
