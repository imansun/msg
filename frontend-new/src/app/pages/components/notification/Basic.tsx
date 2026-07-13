// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function Basic() {
  return (
    <div className="max-w-xl">
      <Button onClick={() => toast("این یک پیام ساده اعلان است")}>
        پیش‌فرض
      </Button>
    </div>
  );
}
