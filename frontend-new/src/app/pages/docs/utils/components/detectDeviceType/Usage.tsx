import { detectDeviceType } from "@/utils/dom/detectDeviceType";

const device = detectDeviceType();

export function Usage() {
  return (
    <div>
      دستگاه شما: <span className="font-bold">{device}</span>
    </div>
  );
}
