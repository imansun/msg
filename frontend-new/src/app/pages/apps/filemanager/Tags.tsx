// Import Dependencies
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  PhotoIcon,
  RectangleGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment } from "react";

// Local Imports
import { Avatar, Button, Card } from "@/components/ui";
import { ColorType } from "@/constants/app";

// ----------------------------------------------------------------------

interface Tag {
  uid: string;
  Icon: React.ElementType;
  color: ColorType;
  tagname: string;
  fileCount: string;
  totalSize: string;
}

const tags: Tag[] = [
  {
    uid: "1",
    Icon: PhotoIcon,
    color: "primary",
    tagname: "تصویر",
    fileCount: "۶۵۴",
    totalSize: "۱.۵ گیگابایت",
  },
  {
    uid: "2",
    Icon: VideoCameraIcon,
    color: "secondary",
    tagname: "ویدیو",
    fileCount: "۱۳۵",
    totalSize: "۱۴ گیگابایت",
  },
  {
    uid: "3",
    Icon: DocumentTextIcon,
    color: "info",
    tagname: "اسناد",
    fileCount: "۵۴۷۷",
    totalSize: "۱.۲ گیگابایت",
  },
  {
    uid: "4",
    Icon: ChartBarIcon,
    color: "success",
    tagname: "مدیریت",
    fileCount: "۱۲۰",
    totalSize: "۱۶۶ مگابایت",
  },
  {
    uid: "5",
    Icon: ChatBubbleLeftEllipsisIcon,
    color: "warning",
    tagname: "گفتگو",
    fileCount: "۱۴",
    totalSize: "۶۹ مگابایت",
  },
  {
    uid: "6",
    Icon: RectangleGroupIcon,
    color: "error",
    tagname: "رابط کاربری",
    fileCount: "۱۳۶",
    totalSize: "۲.۶ مگابایت",
  },
  {
    uid: "7",
    Icon: PhotoIcon,
    color: "primary",
    tagname: "تصویر",
    fileCount: "۶۵۴",
    totalSize: "۱.۵ گیگابایت",
  },
  {
    uid: "8",
    Icon: VideoCameraIcon,
    color: "secondary",
    tagname: "ویدیو",
    fileCount: "۱۳۵",
    totalSize: "۱۴ گیگابایت",
  },
  {
    uid: "9",
    Icon: DocumentTextIcon,
    color: "info",
    tagname: "اسناد",
    fileCount: "۵۴۷۷",
    totalSize: "۱.۲ گیگابایت",
  },
  {
    uid: "10",
    Icon: ChartBarIcon,
    color: "success",
    tagname: "مدیریت",
    fileCount: "۱۲۰",
    totalSize: "۱۶۶ مگابایت",
  },
  {
    uid: "11",
    Icon: RectangleGroupIcon,
    color: "error",
    tagname: "رابط کاربری",
    fileCount: "۱۳۶",
    totalSize: "۲.۶ مگابایت",
  },
];

export function Tags() {
  return (
    <div className="col-span-12 lg:col-span-4 xl:col-span-3">
      <div className="flex min-w-0 items-center justify-between">
        <h2 className="dark:text-dark-100 truncate text-base font-medium tracking-wide text-gray-800">
          برچسب‌ها
        </h2>
        <ActionMenu />
      </div>
      <Card className="text-xs-plus mt-3 space-y-5 px-4 py-5">
        {tags.map((tag) => (
          <div key={tag.uid} className="flex items-center gap-3">
            <Avatar size={10} initialColor={tag.color}>
              <tag.Icon className="size-5" />
            </Avatar>
            <div>
              <a href="##" className="dark:text-dark-100 text-gray-800">
                #{tag.tagname}
              </a>
              <div className="dark:text-dark-300 mt-1 flex text-xs text-gray-400">
                <p>
                  {tag.fileCount} فایل
                </p>
                <div className="dark:bg-dark-500 mx-2 my-1 w-px bg-gray-200"></div>
                <p>{tag.totalSize}</p>
              </div>
            </div>
          </div>
        ))}
      </Card>
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
                  "flex h-9 و-full items-center px-3 tracking-wide outline-hidden transition-colors",
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
