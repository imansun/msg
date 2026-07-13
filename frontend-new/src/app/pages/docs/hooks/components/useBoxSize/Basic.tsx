// Import Dependencies
import { useRef } from "react";

// Local Imports
import { useBoxSize } from "@/hooks";

// ----------------------------------------------------------------------

export function Basic() {
  const boxRef = useRef<HTMLDivElement>(null);
  const { width, height } = useBoxSize({ ref: boxRef });

  return (
    <div>
      <div
        ref={boxRef}
        className="bg-primary-500 size-16 resize overflow-auto rounded-sm"
      ></div>
      <div className="mt-4">
        <div className="text-sm">عرض: {width}</div>
        <div className="text-sm">ارتفاع: {height}</div>
      </div>
    </div>
  );
}
