// Import Dependencies
import {
  HomeIcon,
  EnvelopeIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";

// Local Imports
import { Button, Tag } from "@/components/ui";
import { randomId } from "@/utils/randomId";

// ----------------------------------------------------------------------

const tabs = [
  {
    id: randomId(),
    title: "خانه",
    icon: HomeIcon,
    content: (
      <div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. این متن اغلب برای نمایش نمونه محتوای متنی استفاده می‌شود.
        </p>

        <div className="!space-x-2 pt-3 rtl:space-x-reverse">
          <Tag href="#">تگ ۱</Tag>
          <Tag href="#">تگ ۲</Tag>
        </div>
        <p className="pt-3 text-xs text-gray-400 dark:text-dark-300">
          لورم ایپسوم متن ساختگی با تولید سادگی از صنعت چاپ است. زمان درد غیر منتظره؟
        </p>
      </div>
    ),
  },
  {
    id: randomId(),
    title: "پروفایل",
    icon: UserIcon,
    content: (
      <div>
        <p>
          این یک متن ساختگی برای تب پروفایل است. شما می‌توانید اطلاعات مربوط به کاربر را اینجا نمایش دهید یا توضیحاتی درباره پروفایل بنویسید.
        </p>
        <div className="!space-x-2 pt-3 rtl:space-x-reverse">
          <Tag href="#">تگ ۱</Tag>
          <Tag href="#">تگ ۲</Tag>
        </div>
        <p className="pt-3 text-xs text-gray-400 dark:text-dark-300">
          این متن نمونه برای توضیحات بیشتر در پروفایل می‌باشد. زمان درد غیر منتظره؟
        </p>
      </div>
    ),
  },
  {
    id: randomId(),
    title: "پیام‌ها",
    icon: EnvelopeIcon,
    content: (
      <div>
        <p>
          این بخش پیام‌های شما را نمایش می‌دهد. می‌توانید پیام‌های دریافتی و ارسالی خود را در این قسمت مشاهده نمایید.
        </p>

        <div className="!space-x-2 pt-3 rtl:space-x-reverse">
          <Tag href="#">تگ ۱</Tag>
          <Tag href="#">تگ ۲</Tag>
        </div>
        <p className="pt-3 text-xs text-gray-400 dark:text-dark-300">
          این ناحیه مخصوص پیام‌های شماست. زمان درد غیر منتظره؟
        </p>
      </div>
    ),
  },
  {
    id: randomId(),
    title: "تنظیمات",
    icon: Cog6ToothIcon,
    content: (
      <div>
        <p>
          این قسمت مربوط به تنظیمات حساب کاربری شماست. می‌توانید گزینه‌های مختلف را بنا به نیاز خود تغییر دهید.
        </p>

        <div className="!space-x-2 pt-3 rtl:space-x-reverse">
          <Tag href="#">تگ ۱</Tag>
          <Tag href="#">تگ ۲</Tag>
        </div>
        <p className="pt-3 text-xs text-gray-400 dark:text-dark-300">
          در صورت نیاز، تنظیمات اضافی را از این بخش مدیریت کنید. زمان درد غیر منتظره؟
        </p>
      </div>
    ),
  },
];

const ShiftLeftAnimation = () => {
  return (
    <div className="max-w-xl">
      <TabGroup>
        <div className="hide-scrollbar overflow-x-auto">
          <div className="w-max min-w-full border-b-2 border-gray-150 dark:border-dark-500">
            <TabList className="-mb-0.5 flex">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }: { selected: boolean }) =>
                    clsx(
                      "shrink-0 !space-x-2 whitespace-nowrap border-b-2 px-3 py-2 font-medium rtl:space-x-reverse",
                      selected
                        ? "border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-400"
                        : "border-transparent hover:text-gray-800 focus:text-gray-800 dark:hover:text-dark-100 dark:focus:text-dark-100",
                    )
                  }
                  as={Button}
                  unstyled
                >
                  <tab.icon className="size-4.5" />
                  <span>{tab.title}</span>
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
        <TabPanels className="mt-3">
          {tabs.map((tab) => (
            <TabPanel key={tab.id}>
              {({ selected }) => (
                <Transition
                  appear
                  show={selected}
                  enter="transition-all duration-500 easy-in-out"
                  enterFrom="opacity-0 [transform:translate3d(1rem,0,0)]"
                  enterTo="opacity-100 [transform:translate3d(0,0,0)]"
                >
                  {tab.content}
                </Transition>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export { ShiftLeftAnimation };
