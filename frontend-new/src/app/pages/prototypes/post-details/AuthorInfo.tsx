// Import Dependencies
import {
  EllipsisHorizontalIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Avatar, Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function AuthorInfo() {
  return (
    <Card>
      <div className="bg-primary-500 h-24 rounded-t-lg">
        <img
          className="h-full w-full rounded-t-lg object-cover object-center"
          src="/images/objects/object-7.jpg"
          alt="نویسنده"
        />
      </div>
      <div className="px-4 pt-2 pb-5 sm:px-5">
        <Avatar
          size={20}
          classNames={{
            root: "-mt-12",
            display: "dark:border-dark-700 border-2 border-white",
          }}
          src="/images/avatar/avatar-19.jpg"
        />
        <h3 className="dark:text-dark-100 pt-2 text-lg font-medium text-gray-800">
          تراویس فولر
        </h3>
        <p className="text-xs-plus dark:text-dark-300 text-gray-400">
          ۱,۵۹۶ دنبال‌کننده
        </p>
        <p className="mt-3">
          طراح محصول حرفه‌ای و دوچرخه‌سوار آماتور ساکن نیویورک، آمریکا.
        </p>
        <div className="mt-5 flex gap-1">
          <Button className="text-xs-plus h-7 rounded-full px-3">دنبال کردن</Button>
          <Button
            className="size-7 rounded-full"
            isIcon
            aria-label="ارسال پیام"
          >
            <EnvelopeIcon className="size-4 stroke-2" />
          </Button>
          <Button
            className="size-7 rounded-full"
            isIcon
            aria-label="عملیات کاربر"
          >
            <EllipsisHorizontalIcon className="size-4 stroke-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
