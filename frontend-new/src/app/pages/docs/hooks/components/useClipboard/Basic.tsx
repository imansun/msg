// Import Dependencies
import { useEffect } from "react";
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";
import { useClipboard } from "@/hooks";

// ----------------------------------------------------------------------

export function Basic() {
  const { copy, copied } = useClipboard();

  useEffect(() => {
    if (copied) {
      toast("کپی شد!");
    }
  }, [copied]);

  return (
    <div>
      <Button onClick={() => copy("کلیپ بورد را کپی کن")}>کلیپ بورد را کپی کن</Button>
    </div>
  );
}
