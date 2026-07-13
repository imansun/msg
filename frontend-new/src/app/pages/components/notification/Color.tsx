// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function Color() {
  return (
    <div className="inline-space max-w-xl">
      <Button onClick={() => toast.success("تسک ایجاد شد")}>
        موفقیت
      </Button>
      <Button onClick={() => toast.error("اوه... مشکلی پیش اومد")}>
        خطا
      </Button>
      <Button
        onClick={() =>
          toast.success("تسک ایجاد شد", {
            className: "soft-color",
          })
        }
      >
        موفقیت ملایم
      </Button>
      <Button
        onClick={() =>
          toast.error("اوه... مشکلی پیش اومد", {
            className: "soft-color",
          })
        }
      >
        خطای ملایم
      </Button>
    </div>
  );
}
