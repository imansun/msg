// Import Dependencies
import { useState } from "react";

// Local Imports
import { Combobox } from "@/components/shared/form/StyledCombobox";

// ----------------------------------------------------------------------

// Types
interface Page {
  id: number;
  name: string;
}

const pages: Page[] = [
  { id: 1, name: "صفحه دوره‌ها" },
  { id: 2, name: "صفحه گرامر" },
  { id: 3, name: "صفحه مشاغل" },
  { id: 4, name: "صفحه وضعیت سرور" },
  { id: 5, name: "صفحه ورزشی" },
  { id: 6, name: "صفحه وبلاگ سفر" },
];


export function Statistics() {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <div className="col-span-12 px-4 sm:col-span-6 sm:px-5 lg:col-span-4">
      <Combobox
        data={pages}
        displayField="name"
        value={selectedPage}
        onChange={setSelectedPage as any}
        placeholder="لطفاً پست را انتخاب کنید"
        searchFields={["name"]}
      />

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8">
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            کل بازدیدها
          </p>
          <p className="mt-1 text-xl font-medium text-gray-800 dark:text-dark-100">
            695,454
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            افزایش ماهانه
          </p>
          <p className="mt-1">
            <span className="text-xl font-medium text-gray-800 dark:text-dark-100">
              16,146
            </span>{" "}
            <span className="text-xs text-success dark:text-success-lighter">
              3%+
            </span>
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            پست‌های ایجاد شده
          </p>
          <p className="mt-1 text-xl font-medium text-gray-800 dark:text-dark-100">
            469
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            میانگین بازدید پست
          </p>
          <p className="mt-1 text-xl font-medium text-gray-800 dark:text-dark-100">
            1,559
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            کل نظرات
          </p>
          <p className="mt-1 text-xl font-medium text-gray-800 dark:text-dark-100">
            198
          </p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-dark-300">
            پست‌های ارجاع شده
          </p>
          <p className="mt-1 text-xl font-medium text-gray-800 dark:text-dark-100">
            49
          </p>
        </div>
      </div>
    </div>
  );
}
