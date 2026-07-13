import { useMediaQuery } from "@/hooks";

export function Basic() {
  const isMatch = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {`نمایشگر شما ${isMatch ? "حداقل" : "کمتر از"} ۷۶۸ پیکسل عرض دارد`}
    </div>
  );
}

