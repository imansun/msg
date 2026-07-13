// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function WithDescription() {
  return (
    <div className="max-w-xl">
      <Button
        onClick={() =>
          toast("این یک پیام ساده اعلان است", {
            description: "این یک توضیح است",
            descriptionClassName:
              "text-gray-600 dark:text-dark-200 text-xs mt-0.5",
          })
        }
      >
        پیش‌فرض
      </Button>
    </div>
  );
}
