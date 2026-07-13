import { useBoxPosition } from "@/hooks";

export function Basic() {
  const { ref, left, top } = useBoxPosition<HTMLDivElement>();
  
  return (
    <div>
      <div ref={ref} className="size-16 rounded-sm bg-primary-500"></div>
      <div className="mt-2">
        <div className="text-sm">چپ: {left}</div>
        <div className="text-sm">بالا: {top}</div>
      </div>
    </div>
  );
}
