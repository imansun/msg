// Import Dependencies
import { Fragment } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

// Local Imports
import { Button, Checkbox } from "@/components/ui";

// ----------------------------------------------------------------------

export function Forms() {
  return (
    <Popover className="relative w-full">
      {({ close }) => (
        <>
          <PopoverButton as={Button}>انتخاب ستون‌ها</PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <PopoverPanel
              anchor={{ to: "bottom start", gap: 8 }}
              className="z-100 w-64 rounded-md border border-gray-300 bg-white p-4 shadow-lg shadow-gray-200/50 outline-hidden ring-primary-500/50 focus-visible:outline-hidden focus-visible:ring-3 dark:border-dark-500 dark:bg-dark-750 dark:shadow-none"
            >
              <h3 className="text-base font-medium tracking-wide text-gray-700  dark:text-dark-100">
                انتخاب ستون‌ها
              </h3>
              <p className="mt-1 text-xs-plus">
                لطفا ستون‌هایی که می‌خواهید نمایش داده شوند را انتخاب کنید.
              </p>
              <div className="mt-4 flex flex-col space-y-4 text-gray-600 dark:text-dark-100">
                <Checkbox label="شناسه" defaultChecked />
                <Checkbox label="نام" defaultChecked />
                <Checkbox label="ایمیل" defaultChecked />
                <Checkbox label="آدرس" />
              </div>
              <hr className="my-4 border-gray-200 dark:border-dark-500" />
              <div className="flex flex-col space-y-4 text-gray-600 dark:text-dark-100">
                <Checkbox label="آخرین به‌روزرسانی" />
                <Checkbox label="تاریخ ایجاد" defaultChecked />
              </div>
              <Button
                color="primary"
                className="mt-4 h-8 w-full text-xs-plus"
                onClick={close}
              >
                اعمال
              </Button>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
