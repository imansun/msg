// Import Dependencies
import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

// Local Imports
import { Button } from "@/components/ui";
import { CourseCard, type Course } from "./CourseCard";

// ----------------------------------------------------------------------

const courses: Course[] = [
  {
    id: "1",
    name: "آموزش تست واحد جاوااسکریپت",
    cover: "/images/technology/testing-sm.jpg",
    author: "کانر گوزمان",
    time: "۱۰ ساعت و ۳۲ دقیقه",
    studentsCount: "۱۲۴",
  },
  {
    id: "2",
    name: "مبانی بازاریابی دیجیتال",
    cover: "/images/technology/man-tablet.jpg",
    author: "آلفردو الیوت",
    time: "۱۶ ساعت و ۱۴ دقیقه",
    studentsCount: "۷۶۵",
  },
  {
    id: "3",
    name: "دوره کامل تحلیل پیشرفته فروش",
    cover: "/images/technology/sales-presentation-sm.jpg",
    author: "تراویس فولر",
    time: "۴ ساعت و ۴۷ دقیقه",
    studentsCount: "۶۲۳",
  },
  {
    id: "4",
    name: "آموزش طراحی UI/UX",
    cover: "/images/technology/design-sm.jpg",
    author: "هنری کرتیس",
    time: "۷ ساعت و ۵۶ دقیقه",
    studentsCount: "۳۱۳",
  },
];

export function CompletedCourses() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className="dark:text-dark-100 font-medium tracking-wide text-gray-800">
          دوره‌های تکمیل‌شده
        </h2>
        <ActionMenu />
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

function ActionMenu() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left ltr:-mr-1.5 rtl:-ml-1.5"
    >
      <MenuButton
        as={Button}
        variant="flat"
        isIcon
        className="size-8 rounded-full"
      >
        <EllipsisHorizontalIcon className="size-5" />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <MenuItems className="dark:border-dark-500 dark:bg-dark-700 absolute z-100 mt-1.5 min-w-[10rem] rounded-lg border border-gray-300 bg-white py-1 shadow-lg shadow-gray-200/50 outline-hidden focus-visible:outline-hidden ltr:right-0 rtl:left-0 dark:shadow-none">
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-hidden transition-colors",
                  focus &&
                    "dark:bg-dark-600 dark:text-dark-100 bg-gray-100 text-gray-800",
                )}
              >
                <span>عملیات</span>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-hidden transition-colors",
                  focus &&
                    "dark:bg-dark-600 dark:text-dark-100 bg-gray-100 text-gray-800",
                )}
              >
                <span>عملیات دیگر</span>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-hidden transition-colors",
                  focus &&
                    "dark:bg-dark-600 dark:text-dark-100 bg-gray-100 text-gray-800",
                )}
              >
                <span>عملیات متفاوت</span>
              </button>
            )}
          </MenuItem>

          <hr className="border-gray-150 dark:border-dark-500 mx-3 my-1.5 h-px" />

          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-hidden transition-colors",
                  focus &&
                    "dark:bg-dark-600 dark:text-dark-100 bg-gray-100 text-gray-800",
                )}
              >
                <span>عملیات جداگانه</span>
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
