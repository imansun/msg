// Import Dependencies
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";

// Local Imports
import { Button, Tag } from "@/components/ui";

// ----------------------------------------------------------------------

export function Basic() {
  return (
    <div className="max-w-xl">
      <Popover className="relative w-full">
        <PopoverButton as={Button}>پاپ‌اور</PopoverButton>
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
            className="z-100 w-80 rounded-md border border-gray-300 bg-white p-4 shadow-lg shadow-gray-200/50 outline-hidden ring-primary-500/50 focus-visible:outline-hidden focus-visible:ring-3 dark:border-dark-500 dark:bg-dark-750 dark:shadow-none"
          >
            <h3 className="text-base font-medium tracking-wide text-gray-800 dark:text-dark-100">
              طراحی رابط کاربری و تجربه کاربری
            </h3>
            <p className="mt-2">
              این یک متن نمونه است که به عنوان محتوای پنل پاپ‌اور نمایش داده می‌شود.
            </p>
            <div className="mt-3 flex gap-2">
              <Tag href="#">برچسب ۱</Tag>
              <Tag href="#">برچسب ۲</Tag>
              <Tag href="#">برچسب ۳</Tag>
            </div>
            <p className="mt-3 text-xs text-gray-400 dark:text-dark-300">
              این یک زیرمتن نمونه برای تکمیل نمایش است.
            </p>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}
