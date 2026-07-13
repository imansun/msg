import { detectTouch } from "@/utils/dom/detectTouch";

const isTouchable = detectTouch();

export function Usage() {
  return (
    <div>
      دستگاه شما
      <span className="font-bold">
        {isTouchable ? "لمسی" : "غیر لمسی"}
      </span>
    </div>
  );
}
