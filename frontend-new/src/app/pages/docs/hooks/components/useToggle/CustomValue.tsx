import { Button } from "@/components/ui";
import { COLORS } from "@/constants/app";
import { useToggle } from "@/hooks";

export function CustomValue() {
  const [value, toggle] = useToggle(COLORS);

  return (
    <div>
      <div>مقدار فعلی: {value}</div>

      <Button className="mt-2" onClick={() => toggle()} color={value}>
        تغییر وضعیت
      </Button>
    </div>
  );
}
