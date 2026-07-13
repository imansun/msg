// Import Dependencies
import { toast } from "sonner";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

interface PromiseData {
  name: string;
}

const promise = () =>
  new Promise<PromiseData>((resolve) =>
    setTimeout(() => resolve({ name: "Todo" }), 2000),
  );

export function PromiseExample() {
  return (
    <div className="max-w-xl">
      <Button
        onClick={() =>
          toast.promise(promise, {
            loading: "در حال بارگذاری...",
            success: (data) => {
              return `اعلان ${data.name} اضافه شد`;
            },
            error: "خطا",
            className: "soft-color",
          })
        }
      >
        پیش‌فرض
      </Button>
    </div>
  );
}
