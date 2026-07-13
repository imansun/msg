import { Button } from "@/components/ui";
import { useToggle } from "@/hooks";

export function Basic() {
  const [value, toggle] = useToggle();

  return (
    <div>
      <div>مقدار فعلی: {value.toString()}</div>
      <Button className="mt-2" onClick={() => toggle()}>
        تغییر وضعیت
      </Button>
    </div>
  );
}
