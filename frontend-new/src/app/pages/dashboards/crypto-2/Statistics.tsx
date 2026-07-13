// Import Dependencies
import { ChartBarIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

// ----------------------------------------------------------------------

export function Statistics() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:order-first sm:grid-cols-4 sm:gap-5 lg:gap-6">
      <div className="dark:border-dark-600 rounded-lg border border-gray-200 p-3">
        <div className="flex justify-between gap-1">
          <p className="dark:text-dark-100 text-xl font-semibold text-gray-800">
            ۵۶,۷۹۰,۰۰۰ تومان
          </p>
          <CpuChipIcon className="this:primary text-this dark:text-this-light size-5 shrink-0" />
        </div>
        <p className="text-xs-plus mt-1 truncate">کل استخراج</p>
      </div>
      <div className="dark:border-dark-600 rounded-lg border border-gray-200 p-3">
        <div className="flex justify-between gap-1">
          <p className="dark:text-dark-100 text-xl font-semibold text-gray-800">
            ۱۲۶,۰۰۰,۰۰۰ تومان
          </p>
          <ChartBarIcon className="this:success text-this dark:text-this-light size-5 shrink-0" />
        </div>
        <p className="text-xs-plus mt-1 truncate">کل دارایی</p>
      </div>
      <div className="dark:border-dark-600 rounded-lg border border-gray-200 p-3">
        <div className="flex justify-between gap-1">
          <p className="dark:text-dark-100 text-xl font-semibold text-gray-800">
            ۱۰۳,۰۰۰,۰۰۰ تومان
          </p>
          <CurrencyDollarIcon className="this:warning text-this dark:text-this-light size-5 shrink-0" />
        </div>
        <p className="text-xs-plus mt-1 truncate">درآمد</p>
      </div>
      <div className="dark:border-dark-600 rounded-lg border border-gray-200 p-3">
        <div className="flex justify-between gap-1">
          <p className="dark:text-dark-100 text-xl font-semibold text-gray-800">
            ۶۵۱
          </p>
          <ArrowPathIcon className="this:info text-this dark:text-this-light size-5 shrink-0" />
        </div>
        <p className="text-xs-plus mt-1 truncate">زیان‌های برداشت شده</p>
      </div>
    </div>
  );
}
