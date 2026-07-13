// Import Dependencies
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment } from "react";

// Local Imports
import { Avatar, Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface Article {
  uid: string;
  cover: string;
  category: string;
  title: string;
  description: string;
  author: {
    avatar: string;
    name: string;
  };
  created_at: string;
}

const articles: Article[] = [
  {
    uid: "1",
    cover: "/images/objects/object-6.jpg",
    category: "فریم‌ورک‌ها",
    title: "Tailwind CSS چیست؟",
    description:
      "Tailwind CSS یک فریم‌ورک CSS کاربردی است که به شما اجازه می‌دهد به سرعت رابط‌های کاربری مدرن و واکنش‌گرا بسازید.",
    author: {
      avatar: "/images/avatar/avatar-10.jpg",
      name: "جان دو",
    },
    created_at: "۲ تیر ۱۴۰۰",
  },
  {
    uid: "2",
    cover: "/images/objects/object-3.jpg",
    category: "فریم‌ورک‌ها",
    title: "نمونه کارت با Tailwind CSS",
    description:
      "در این مقاله با نحوه ساخت کارت‌های زیبا و واکنش‌گرا با استفاده از Tailwind CSS آشنا می‌شوید.",
    author: {
      avatar: "/images/avatar/avatar-2.jpg",
      name: "کانر گوزمان",
    },
    created_at: "۴ خرداد ۱۴۰۰",
  },
  {
    uid: "3",
    cover: "/images/objects/object-4.jpg",
    category: "زبان‌های برنامه‌نویسی",
    title: "PHP چیست؟",
    description:
      "PHP یک زبان برنامه‌نویسی سمت سرور است که برای توسعه وب و ساخت سایت‌های پویا استفاده می‌شود.",
    author: {
      avatar: "/images/avatar/avatar-1.jpg",
      name: "تراویس فولر",
    },
    created_at: "۲۳ اسفند ۱۴۰۰",
  },
  {
    uid: "4",
    cover: "/images/objects/object-7.jpg",
    category: "رابط کاربری/تجربه کاربری",
    title: "برترین سیستم‌های طراحی",
    description:
      "در این مطلب با بهترین سیستم‌های طراحی و مزایای استفاده از آن‌ها در پروژه‌های بزرگ آشنا می‌شوید.",
    author: {
      avatar: "/images/avatar/avatar-20.jpg",
      name: "آلفردو الیوت",
    },
    created_at: "۳۰ خرداد ۱۴۰۱",
  },
];

export function RecentArticles() {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <p className="dark:text-dark-100 text-lg font-medium text-gray-800">
          مقالات اخیر
        </p>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:gap-6">
        {articles.map((article) => (
          <PostCard
            key={article.uid}
            uid={article.uid}
            cover={article.cover}
            category={article.category}
            title={article.title}
            description={article.description}
            author={article.author}
            created_at={article.created_at}
          />
        ))}
      </div>
    </div>
  );
}

function PostCard({
  cover,
  category,
  title,
  description,
  author,
  created_at,
}: Article) {
  return (
    <Card className="flex flex-col lg:flex-row">
      <div className="relative h-48 w-full shrink-0 lg:h-auto lg:w-48">
        <img
          className="h-48 w-full rounded-t-lg object-cover object-center lg:h-full lg:ltr:rounded-l-lg lg:ltr:rounded-tr-none lg:rtl:rounded-tl-none lg:rtl:rounded-r-lg"
          src={cover}
          alt={title}
        />
        <a href="##" className="absolute inset-0 opacity-0">
          {title}
        </a>
      </div>
      <div className="flex w-full grow flex-col p-4 sm:px-5">
        <div className="-mt-2 flex items-center justify-between ltr:-mr-1.5 rtl:-ml-1.5">
          <a
            className="text-xs-plus text-info dark:text-info-lighter"
            href="##"
          >
            {category}
          </a>
          <div className="-mr-1.5 flex space-x-1">
            <Button variant="flat" isIcon className="size-7 rounded-full">
              <BookmarkIcon className="size-4.5" />
            </Button>
            <ActionMenu />
          </div>
        </div>
        <div>
          <a
            href="##"
            className="hover:text-primary-600 focus:text-primary-600 dark:text-dark-100 dark:hover:text-primary-400 dark:focus:text-primary-400 text-lg font-medium text-gray-700"
          >
            {title}
          </a>
        </div>
        <p className="mt-1 line-clamp-3">{description}</p>
        <div className="mt-4 grow">
          <div className="flex items-center text-xs">
            <a
              href="##"
              className="dark:hover:text-dark-100 flex min-w-0 items-center space-x-2 hover:text-gray-800"
            >
              <Avatar
                size={6}
                name={author.name}
                src={author.avatar}
                initialColor="auto"
              />
              <span className="truncate">{author.name}</span>
            </a>
            <div className="dark:bg-dark-500 mx-3 my-1 w-px self-stretch bg-gray-200"></div>
            <span className="dark:text-dark-300 shrink-0 text-gray-400">
              {created_at}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ActionMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        as={Button}
        variant="flat"
        isIcon
        className="size-7 rounded-full"
      >
        <EllipsisVerticalIcon className="size-4.5" />
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
