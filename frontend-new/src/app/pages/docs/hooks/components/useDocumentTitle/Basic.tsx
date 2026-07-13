// Import Dependencies
import { useState } from "react";

// Local Imports
import { Button } from "@/components/ui";
import { useDocumentTitle } from "@/hooks";
import { randomId } from "@/utils/randomId";

// ----------------------------------------------------------------------

export function Basic() {
  const [title, setTitle] = useState("عنوان سند");
  useDocumentTitle(title);

  return (
    <div>
      <Button onClick={() => setTitle(randomId())}>تنظیم عنوان تصادفی</Button>
    </div>
  );
}

