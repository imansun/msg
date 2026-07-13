// Import Dependencies
import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Card, Select } from "@/components/ui";

// ----------------------------------------------------------------------

// Types
interface PageType {
  uid: string;
  name: string;
  visits: string;
  impression: number;
}

const pages: PageType[] = [
  {
    uid: "6",
    name: "چگونه به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توئیت‌ها",
    visits: "4.1k",
    impression: 0.19,
  },
  {
    uid: "7",
    name: "10 نکته برای بهتر کردن یک دوربین خوب",
    visits: "2.6k",
    impression: 0.01,
  },
  {
    uid: "8",
    name: "غذا: یک تعریف ساده",
    visits: "1.5k",
    impression: 0.08,
  },
  {
    uid: "9",
    name: "10 نکته برای بهتر کردن یک دوربین خوب",
    visits: "651",
    impression: -0.21,
  },
  {
    uid: "10",
    name: "25 حقیقت شگفت‌انگیز درباره صندلی",
    visits: "322",
    impression: 0.06,
  },
];

export function Comments() {
  return (
    <Card className="px-4 pb-4">
      <div className="flex min-w-0 items-center justify-between gap-3 py-3">
        <h2 className="truncate font-medium tracking-wide text-gray-800 dark:text-dark-100">
          نظرات
        </h2>
        <Select className="h-8 text-xs">
          <option value="last_week">هفته گذشته</option>
          <option value="last_month">ماه گذشته</option>
          <option value="last_year">سال گذشته</option>
        </Select>
      </div>
      <p>
        <span className="text-3xl font-medium text-gray-800 dark:text-dark-100">
          16.6k
        </span>{" "}
        <span className="text-xs text-success dark:text-success-lighter">
          +4.3%
        </span>
      </p>
      <p className="mt-0.5 text-xs-plus text-gray-400 dark:text-dark-300">
        کل نظرات
      </p>
      <div className="mt-4 flex justify-between">
        <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
          صفحه
        </p>
        <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
          نظر
        </p>
      </div>
      <div className="mt-2 space-y-2.5">
        {pages.map((page) => (
          <div key={page.uid} className="flex min-w-0 justify-between gap-4">
            <a href="##" className="truncate hover:underline hover:opacity-80">
              {page.name}
            </a>
            <div className="flex items-center gap-1.5">
              <p className="text-sm-plus text-gray-800 dark:text-dark-100">
                {page.visits}
              </p>
              {page.impression > 0 ? (
                <ArrowUpIcon className="this:success size-3 stroke-2 text-this dark:text-this-lighter" />
              ) : (
                <ArrowDownIcon className="this:error size-3 stroke-2 text-this dark:text-this-lighter" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
