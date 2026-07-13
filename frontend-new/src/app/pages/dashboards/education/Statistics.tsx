// Import Dependencies
import {
  ArrowUpCircleIcon,
  ChartBarSquareIcon,
  CheckBadgeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function Statistics() {
  return (
    <div className="order-first col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:order-none lg:col-span-6 lg:gap-6">
      <Card className="flex flex-col justify-between p-5">
        <p className="font-medium">دوره‌های در حال پیشرفت</p>
        <div className="flex items-center justify-between pt-4">
          <p className="text-3xl font-semibold text-gray-800 dark:text-dark-100">
            ۳۲
          </p>
          <ChartBarSquareIcon className="this:primary size-10 text-this dark:text-this-light" />
        </div>
      </Card>
      <Card className="flex flex-col justify-between p-5">
        <p className="font-medium">دوره‌های تکمیل‌شده</p>
        <div className="flex items-center justify-between pt-4">
          <p className="text-3xl font-semibold text-gray-800 dark:text-dark-100">
            ۱۴
          </p>
          <CheckBadgeIcon className="this:primary size-10 text-this dark:text-this-light" />
        </div>
      </Card>
      <Card className="flex flex-col justify-between p-5">
        <p className="font-medium">زمان تماشا</p>
        <div className="flex items-center justify-between pt-4">
          <p className="text-gray-800 dark:text-dark-100">
            <span className="text-3xl font-semibold">۲۱۴س</span>
            <span className="text-xl font-medium">۲۱د</span>
          </p>
          <VideoCameraIcon className="this:primary size-10 text-this dark:text-this-light" />
        </div>
      </Card>
      <Card className="flex flex-col justify-between p-5">
        <p className="font-medium">امتیاز کسب‌شده</p>
        <div className="flex items-center justify-between pt-4">
          <p className="text-3xl font-semibold text-gray-800 dark:text-dark-100">
            ۸
          </p>
          <ArrowUpCircleIcon className="this:primary size-10 text-this dark:text-this-light" />
        </div>
      </Card>
    </div>
  );
}
