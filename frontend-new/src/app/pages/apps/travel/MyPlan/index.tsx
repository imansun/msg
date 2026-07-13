// Import Dependencies
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

// Local Imports
import { Box, Button } from "@/components/ui";
import { PlanCard, type Plan } from "./PlanCard";

// ----------------------------------------------------------------------

const plans: Plan[] = [
  {
    uid: "1",
    name: "پیک‌نیک در جنگل",
    image: "/images/travel/picnic-1.jpg",
    dateRange: "۱ خرداد - ۷ خرداد",
    members: [
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
    uid: "2",
    name: "پیک‌نیک خانوادگی",
    image: "/images/travel/picnic-2.jpg",
    dateRange: "۲۲ خرداد - ۲۶ خرداد",
    members: [
      {
        uid: "5",
        name: "کاترینا وست",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "6",
        name: "Amir Fadaei",
        avatar: undefined,
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-2.jpg",
      },
    ],
  },
  {
    uid: "3",
    name: "کمپ ترتاروگا",
    image: "/images/travel/picnic-3.jpg",
    dateRange: "۱۳ اسفند - ۱۵ اسفند",
    members: [
      {
        uid: "5",
        name: "Mohammad Amoei",
        avatar: undefined,
      },
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-19.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-6.jpg",
      },
    ],
  },
];

export const MyPlan = () => {
  return (
    <Box className="mt-4 lg:mt-5">
      <div className="flex min-w-0 items-center justify-between">
        <h2 className="dark:text-dark-100 truncate text-base font-medium tracking-wide text-gray-800">
          برنامه من
        </h2>
        <ActionMenu />
      </div>
      <div className="mt-3 space-y-4">
        {plans.map((plan) => (
          <PlanCard key={plan.uid} {...plan} />
        ))}
      </div>
    </Box>
  );
};

const ActionMenu = () => {
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
                <span>سایر عملیات</span>
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
};
