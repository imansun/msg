import { PlacesType } from "react-tooltip";
import { Button } from "@/components/ui";

const places: { key: PlacesType; label: string }[] = [
  { key: "top", label: "بالا" },
  { key: "top-start", label: "بالا-شروع" },
  { key: "top-end", label: "بالا-پایان" },
  { key: "right", label: "راست" },
  { key: "right-start", label: "راست-شروع" },
  { key: "right-end", label: "راست-پایان" },
  { key: "bottom", label: "پایین" },
  { key: "bottom-start", label: "پایین-شروع" },
  { key: "bottom-end", label: "پایین-پایان" },
  { key: "left", label: "چپ" },
  { key: "left-start", label: "چپ-شروع" },
  { key: "left-end", label: "چپ-پایان" }
];

const Placement = () => {
  return (
    <div className="grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {places.map(({ key, label }) => (
        <Button
          key={key}
          data-tooltip
          data-tooltip-content="من یک تولتیپ هستم"
          data-tooltip-place={key}
          className="capitalize"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export { Placement };
