// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export function Position() {
  const { setNotificationPosition } = useThemeContext();

  return (
    <div className="inline-space max-w-xl">
      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("top-left");
        }}
      >
        بالا چپ
      </Button>
      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("top-center");
        }}
      >
        بالا وسط
      </Button>
      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("top-right");
        }}
      >
        بالا راست
      </Button>
      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("bottom-left");
        }}
      >
        پایین چپ
      </Button>

      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("bottom-center");
        }}
      >
        پایین وسط
      </Button>

      <Button
        onClick={() => {
          toast("این یک پیام ساده اعلان است");
          setNotificationPosition("bottom-right");
        }}
      >
        پایین راست
      </Button>
    </div>
  );
}
