// Import Dependencies
import { FaAndroid, FaApple } from "react-icons/fa";
import { TbDeviceLaptop } from "react-icons/tb";
import { IconType } from "react-icons/lib";

// Local Imports
import { Avatar, Button, Input } from "@/components/ui";

// ----------------------------------------------------------------------

interface Session {
  id: string;
  name: string;
  browser: string;
  location: string;
  lastView: string;
  icon: IconType;
}

const sessions: Session[] = [
  {
    id: "1",
    name: "آیفون X",
    browser: "سافاری ۱۲",
    location: "لندن، انگلستان",
    lastView: "۱۴۰۲/۲/۲۲",
    icon: FaApple,
  },
  {
    id: "2",
    name: "شیائومی ردمی نوت ۹",
    browser: "گوگل کروم ۱۱۰",
    location: "لندن، انگلستان",
    lastView: "۱۴۰۲/۱/۳۱",
    icon: FaAndroid,
  },
  {
    id: "3",
    name: "سامسونگ گلکسی S22",
    browser: "گوگل کروم ۱۱۰",
    location: "لندن، انگلستان",
    lastView: "۱۴۰۲/۱/۳۰",
    icon: FaAndroid,
  },
  {
    id: "4",
    name: "سامسونگ گلکسی S22",
    browser: "موزیلا فایرفاکس ۸۸",
    location: "لندن، انگلستان",
    lastView: "۱۴۰۱/۸/۱۹",
    icon: FaAndroid,
  },
];

export default function Sessions() {
  return (
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        جلسات فعال و گذرواژه
      </h5>
      <p className="mt-0.5 text-sm text-balance">
        بخش جلسات فعال و تغییر گذرواژه. می‌توانید با کلیک روی دکمه حذف، آن‌ها را خاتمه دهید.
      </p>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />

      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          تغییر گذرواژه
        </p>
        <p className="mt-0.5 text-sm text-balance">
          گذرواژه خود را در اینجا به‌روزرسانی کنید. گذرواژه کنونی و جدید را وارد نمایید.
        </p>
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">گذرواژه فعلی:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">گذرواژه جدید:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">تایید گذرواژه:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
        </div>
        <div className="mt-4 text-end">
          <Button>به‌روزرسانی گذرواژه</Button>
        </div>
      </div>

      <div className="dark:bg-dark-500 my-6 h-px bg-gray-200" />

      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          جلسات فعال
        </p>
        <p className="mt-0.5 text-sm text-balance">
          لیست جلسات فعال. می‌توانید با کلیک روی دکمه حذف، آن‌ها را خاتمه دهید.
        </p>
        <p className="mt-4 font-medium">جلسه فعلی</p>
        <div className="dark:border-dark-500 mt-2 flex items-start gap-3 rounded-lg border-gray-200 sm:border sm:p-4">
          <Avatar size={12} initialColor="primary">
            <TbDeviceLaptop className="size-6" />
          </Avatar>
          <div>
            <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
              مک‌بوک پرو ۱۵ رتینا (M1)
            </p>
            <p>گوگل کروم ۱۱۶</p>
            <div className="dark:text-dark-300 mt-1 flex text-xs text-gray-400">
              <p>نیویورک، آمریکا</p>
              <div className="dark:bg-dark-500 mx-2 my-0.5 w-px bg-gray-200"></div>
              <p>آنلاین</p>
            </div>
          </div>
        </div>
        <p className="mt-6 font-medium">سایر جلسات فعال</p>
        <div className="dark:divide-dark-500 flex flex-col space-y-4 divide-y divide-gray-200">
          {sessions.map((session) => (
            <div
              className="flex items-start justify-between pt-4"
              key={session.id}
            >
              <div className="flex items-start gap-3">
                <Avatar size={12}>
                  <session.icon className="size-6" />
                </Avatar>
                <div>
                  <p className="dark:text-dark-100 text-sm font-medium text-gray-800">
                    {session.name}
                  </p>
                  <p>{session.browser}</p>
                  <div className="dark:text-dark-300 mt-1 flex text-xs text-gray-400">
                    <p>{session.location}</p>
                    <div className="dark:bg-dark-500 mx-2 my-0.5 w-px bg-gray-200"></div>
                    <p>{session.lastView}</p>
                  </div>
                </div>
              </div>
              <button className="text-error dark:text-error-light hover:opacity-90">
                خاتمه
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
