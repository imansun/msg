// Local Imports
import { Card, Select } from "@/components/ui";
import { Statistics } from "./Statistics";
import { ViewChart } from "./ViewChart";

// ----------------------------------------------------------------------

export function PageViews() {
  return (
    <Card className="pb-4 overflow-hidden">
      <div className="flex min-w-0 items-center justify-between px-4 pt-3 sm:px-5">
        <h2 className="text-sm-plus font-medium tracking-wide text-gray-800 dark:text-dark-100">
          بازدیدهای صفحه
        </h2>
        <div className="flex items-center gap-4">
          <div className="hidden cursor-pointer items-center gap-2 sm:flex">
            <div
              className="size-3 rounded-full"
              style={{
                backgroundColor: "#4C4EE7",
              }}
            ></div>
            <p>دوره فعلی</p>
          </div>
          <div className="hidden cursor-pointer items-center gap-2 sm:flex">
            <div
              className="size-3 rounded-full"
              style={{
                backgroundColor: "#FF9800",
              }}
            ></div>
            <p>دوره قبلی</p>
          </div>
          <Select className="h-8 rounded-full text-xs">
            <option value="last_week">هفته گذشته</option>
            <option value="last_month">ماه گذشته</option>
            <option value="last_year">سال گذشته</option>
          </Select>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-12">
        <Statistics />
        <ViewChart />
      </div>
    </Card>
  );
}
