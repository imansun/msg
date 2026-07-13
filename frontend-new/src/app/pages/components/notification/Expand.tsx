// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export function Expand() {
  const { setNotificationExpand } = useThemeContext();

  return (
    <div className="inline-space max-w-xl">
      <Button
        onClick={() => {
          toast("این یک پیام ساده است");
          setNotificationExpand(true);
        }}
      >
        گسترش‌یافته
      </Button>
      <Button
        onClick={() => {
          toast("این یک پیام ساده است");
          setNotificationExpand(false);
        }}
      >
        روی هم چیده‌شده
      </Button>
    </div>
  );
}
