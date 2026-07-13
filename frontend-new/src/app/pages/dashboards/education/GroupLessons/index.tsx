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
import { LessonCard, type Lesson } from "./LessonCard";

// ----------------------------------------------------------------------

const lessons: Lesson[] = [
  {
    id: "1",
    name: "بازاریابی شبکه‌های اجتماعی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    date: "۴ خرداد ۱۴۰۱",
    students: [
      {
        uid: "5",
        name: "کاترینا وست",
        avatar: "/images/avatar/avatar-11.jpg",
      },
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-4.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-5.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "فیگما: ساخت سیستم طراحی",
    description: "متن ساختگی با تولید سادگی نامفهوم.",
    date: "۲۲ خرداد ۱۴۰۱",
    students: [
      {
        uid: "8",
        name: "Amir Fadaei",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-6.jpg",
      },
      {
        uid: "10",
        name: "A.Hosseini",
        avatar: undefined,
      },
    ],
  },
  {
    id: "3",
    name: "شروع کار با ویو",
    description: "آیا می‌خواهید با ویو شروع کنید؟",
    date: "۱۶ شهریور ۱۴۰۳",
    students: [
      {
        uid: "8",
        name: "M.taghipoor",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-6.jpg",
      },
      {
        uid: "10",
        name: "A.Amoei",
        avatar: undefined,
      },
    ],
  },
];

export function GroupLessons() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="flex items-center justify-between">
        <h2 className="dark:text-dark-100 font-medium tracking-wide text-gray-800">
          درس‌های گروهی
        </h2>
        <ActionMenu />
      </div>
      <div className="mt-3 flex flex-col justify-between space-y-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson} />
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
