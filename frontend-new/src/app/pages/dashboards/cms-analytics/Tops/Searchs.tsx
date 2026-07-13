// Import Dependencies
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Card, Select } from "@/components/ui";

// ----------------------------------------------------------------------

interface Term {
  uid: string;
  text: string;
  search: string;
  impression: number;
}

const terms: Term[] = [
  {
    uid: "2",
    text: "ایده‌های رنگ",
    search: "23.1k",
    impression: 0.01,
  },
  {
    uid: "4",
    text: "تیل‌ویند CSS",
    search: "12.2k",
    impression: -0.21,
  },
  {
    uid: "6",
    text: "ویت",
    search: "4.1k",
    impression: 0.19,
  },
  {
    uid: "8",
    text: "نکست جی‌اس",
    search: "1.5k",
    impression: 0.08,
  },
  {
    uid: "10",
    text: "تایپ‌اسکریپت",
    search: "322",
    impression: 0.06,
  },
];

export function Searchs() {
  return (
    <Card className="px-4 pb-4">
      <div className="flex min-w-0 items-center justify-between gap-3 py-3">
        <h2 className="dark:text-dark-100 truncate font-medium tracking-wide text-gray-800">
          جستجوها
        </h2>
        <Select className="h-8 text-xs">
          <option value="last_week">هفته گذشته</option>
          <option value="last_month">ماه گذشته</option>
          <option value="last_year">سال گذشته</option>
        </Select>
      </div>
      <p>
        <span className="dark:text-dark-100 text-3xl font-medium text-gray-800">
          7.4k
        </span>{" "}
        <span className="text-success dark:text-success-lighter text-xs">
          +4.3%
        </span>
      </p>
      <p className="text-xs-plus dark:text-dark-300 mt-0.5 text-gray-400">
        کل جستجوها
      </p>
      <div className="mt-4 flex justify-between">
        <p className="dark:text-dark-300 text-xs text-gray-400 uppercase">
          عبارت
        </p>
        <p className="dark:text-dark-300 text-xs text-gray-400 uppercase">
          جستجوها
        </p>
      </div>
      <div className="mt-2 space-y-2.5">
        {terms.map((term) => (
          <div key={term.uid} className="flex min-w-0 justify-between gap-4">
            <a href="##" className="truncate hover:underline hover:opacity-80">
              {term.text}
            </a>
            <div className="flex items-center gap-1.5">
              <p className="text-sm-plus dark:text-dark-100 text-gray-800">
                {term.search}
              </p>
              {term.impression > 0 ? (
                <ArrowUpIcon className="this:success text-this dark:text-this-lighter size-3 stroke-2" />
              ) : (
                <ArrowDownIcon className="this:error text-this dark:text-this-lighter size-3 stroke-2" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
