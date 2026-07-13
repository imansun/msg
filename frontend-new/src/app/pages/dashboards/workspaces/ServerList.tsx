// Import Dependencies
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { Fragment } from "react";

// Local Imports
import { CollapsibleSearch } from "@/components/shared/CollapsibleSearch";
import { ServerCard, ServerData } from "./ServerCard";
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

const servers: ServerData[] = [
  {
    id: "5988745",
    status: {
      isActive: true,
      time: "۷ ساعت",
    },
    countries: [
      {
        uid: 1,
        name: "ایالات متحده",
        flag: "/images/flags/svg/rounded/usa.svg",
        traffic: "۴.۵ گیگابایت",
        memory: "۱۴ گیگابایت",
      },
      {
        uid: 2,
        name: "روسیه",
        flag: "/images/flags/svg/rounded/russia.svg",
        traffic: "۶.۱ گیگابایت",
        memory: "۱۲ گیگابایت",
      },
    ],
    uptime: "۹۶.۴٪",
    response: "۳.۴ ثانیه",
    memory: "۱۴ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
  {
    id: "6518869",
    status: {
      isActive: true,
      time: "۲ ساعت",
    },
    countries: [
      {
        uid: 1,
        name: "استرالیا",
        flag: "/images/flags/svg/rounded/australia.svg",
        traffic: "۳.۷۶ گیگابایت",
        memory: "۵ گیگابایت",
      },
      {
        uid: 2,
        name: "انگلیس",
        flag: "/images/flags/svg/rounded/united-kingdom.svg",
        traffic: "۶.۶۵ گیگابایت",
        memory: "۱۰ گیگابایت",
      },
    ],
    uptime: "۹۸.۲٪",
    response: "۴.۲ ثانیه",
    memory: "۲۲ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
  {
    id: "3591458",
    status: {
      isActive: false,
      time: "۲۲ دقیقه",
    },
    countries: [
      {
        uid: 1,
        name: "برزیل",
        flag: "/images/flags/svg/rounded/brazil.svg",
        traffic: "۶.۱ گیگابایت",
        memory: "۲۴ گیگابایت",
      },
      {
        uid: 2,
        name: "اسپانیا",
        flag: "/images/flags/svg/rounded/spain.svg",
        traffic: "۵.۰۲ گیگابایت",
        memory: "۱۰ گیگابایت",
      },
    ],
    uptime: "۹۵.۷٪",
    response: "۲.۱ ثانیه",
    memory: "۱۳ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
  {
    id: "9462157",
    status: {
      isActive: true,
      time: "۴۸ ساعت",
    },
    countries: [
      {
        uid: 1,
        name: "هند",
        flag: "/images/flags/svg/rounded/india.svg",
        traffic: "۴.۵ گیگابایت",
        memory: "۱۲ گیگابایت",
      },
      {
        uid: 2,
        name: "روسیه",
        flag: "/images/flags/svg/rounded/russia.svg",
        traffic: "۶.۲ گیگابایت",
        memory: "۸ گیگابایت",
      },
    ],
    uptime: "۹۸.۷٪",
    response: "۱.۷ ثانیه",
    memory: "۹ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
  {
    id: "6517997",
    status: {
      isActive: false,
      time: "۶ دقیقه",
    },
    countries: [
      {
        uid: 1,
        name: "چین",
        flag: "/images/flags/svg/rounded/china.svg",
        traffic: "۶.۶ گیگابایت",
        memory: "۱۰ گیگابایت",
      },
      {
        uid: 2,
        name: "ایالات متحده",
        flag: "/images/flags/svg/rounded/usa.svg",
        traffic: "۹.۱ گیگابایت",
        memory: "۱۶ گیگابایت",
      },
    ],
    uptime: "۹۵.۴۳٪",
    response: "۴.۶۵ ثانیه",
    memory: "۱۶ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
  {
    id: "7958652",
    status: {
      isActive: true,
      time: "۲ ساعت",
    },
    countries: [
      {
        uid: 1,
        name: "ایتالیا",
        flag: "/images/flags/svg/rounded/italy.svg",
        traffic: "۱۶.۱ گیگابایت",
        memory: "۲۴ گیگابایت",
      },
      {
        uid: 2,
        name: "سوئیس",
        flag: "/images/flags/svg/rounded/switzerland.svg",
        traffic: "۳.۸ گیگابایت",
        memory: "۱۸ گیگابایت",
      },
    ],
    uptime: "۹۷.۲۷٪",
    response: "۳.۸۸ ثانیه",
    memory: "۱۰ گیگابایت",
    ipList: ["۱۹۵.۱۶۱.۶۶.۲۵", "۲۱۵.۱۲۲.۱۲۷.۱۵۵"],
  },
];

export function ServerList() {
  return (
    <div className="mt-4 sm:mt-5 lg:mt-6">
      <div className="flex min-w-0 items-center justify-between gap-2">
        <h2 className="dark:text-dark-100 truncate text-base font-medium tracking-wide text-gray-800">
          فضای کاری مانیتورینگ
        </h2>
        <div className="flex">
          <CollapsibleSearch placeholder="اینجا جستجو کنید..." />
          <ActionMenu />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {servers.map((server) => (
          <ServerCard key={server.id} {...server} />
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
        <EllipsisVerticalIcon className="size-5" />
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
}
