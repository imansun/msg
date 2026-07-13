// Import Dependencies
import { useState } from "react";

// Local Imports
import { Button } from "@/components/ui";
import { Tooltip } from "@/components/shared/Tooltip";

// ----------------------------------------------------------------------

const Controlled = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setShow(!show)}
        data-tooltip-id="controlled-tooltip"
      >
        پیش‌فرض
      </Button>

      <Tooltip id="controlled-tooltip" content="سلام دنیا!" isOpen={show} />
    </div>
  );
};

export { Controlled };
