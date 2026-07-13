// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function Invert() {
  return (
    <div className="max-w-xl">
      <Button
        onClick={() =>
          toast("این یک پیام ساده اعلان است", {
            invert: true,
          })
        }
      >
        پیش‌فرض
      </Button>
    </div>
  );
}
