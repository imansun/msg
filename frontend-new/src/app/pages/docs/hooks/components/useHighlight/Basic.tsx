// Import Dependencies
import clsx from "clsx";
import { useState } from "react";

// Local Imports
import { Input } from "@/components/ui";
import { useHighlight } from "@/hooks";

// ----------------------------------------------------------------------

export function Basic() {
  const [query, setQuery] = useState("");
  const text =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.";

  const result = useHighlight({
    text: text,
    query: query,
  });

  console.log(result);

  return (
    <div>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="عبارت مورد جستجو را وارد کنید"
      />

      <div className="mt-2">
        {result.map((part, index) => (
          <span
            key={index}
            className={clsx(part.match && "bg-secondary text-white")}
          >
            {part.text}
          </span>
        ))}
      </div>
    </div>
  );
}
