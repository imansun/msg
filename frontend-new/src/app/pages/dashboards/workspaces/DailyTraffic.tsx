// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function DailyTraffic() {
  return (
    <Card className="flex overflow-hidden">
      <div className="this:primary bg-this dark:bg-this-light h-full w-1 shrink-0"></div>
      <div className="p-4">
        <div className="flex items-baseline gap-x-2">
          <p className="dark:text-dark-100 text-2xl font-semibold text-gray-800">
            4.54
          </p>
          <p className="text-xs">/۱۲ گیگابایت</p>
        </div>
        <p className="text-xs">ترافیک روزانه</p>
      </div>
    </Card>
  );
}
