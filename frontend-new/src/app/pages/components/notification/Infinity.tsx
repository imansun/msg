// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function InfinityExample() {
  return (
    <div className="max-w-xl">
      <Button
        onClick={() =>
          toast("این یک پیام ساده اعلان است", {
            duration: Infinity,
            action: {
              label: "برگرداندن",
              onClick: () => console.log("برگرداندن"),
            },
          })
        }
      >
        پیش‌فرض
      </Button>
    </div>
  );
}
