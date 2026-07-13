// Import Dependencies
import clsx from "clsx";
import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

// Local Imports
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Button,
} from "@/components/ui";

// ----------------------------------------------------------------------

const Advanced = () => {
  return (
    <div className="max-w-xl">
      <Accordion
        defaultValue="item-1"
        className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-6"
      >
        <AccordionItem
          value="item-1"
          className="overflow-hidden rounded-lg border border-gray-150 dark:border-dark-500"
        >
          <div className="flex items-center justify-between bg-gray-150 p-4 dark:bg-dark-500 sm:px-5">
            <div className="mr-2 flex min-w-0 items-center space-x-3 tracking-wide outline-hidden rtl:space-x-reverse">
              <Avatar size={10} src="/images/avatar/avatar-20.jpg" />
              <div className="min-w-0">
                <p className="truncate text-gray-800 dark:text-dark-50">
                  سایمون تادز
                </p>
                <p className="mt-1 truncate text-xs text-gray-500 dark:text-dark-200">
                  توسعه‌دهنده وب
                </p>
              </div>
            </div>
            <AccordionButton
              component={Button}
              variant="flat"
              className="-mr-1 size-8 shrink-0 rounded-full p-0"
            >
              {({ open }) => (
                <div
                  className={clsx(
                    "text-sm font-normal leading-none transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              )}
            </AccordionButton>
          </div>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-4 flex justify-between space-x-2 rtl:space-x-reverse">
              <div className="flex flex-wrap -space-x-1.5 rtl:space-x-reverse">
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  initialColor="info"
                  name="John Doe"
                  classNames={{
                    root: "origin-bottom text-xs transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />

                <Avatar
                  size={7}
                  src="/images/avatar/avatar-18.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-19.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
              </div>
              <Button className="size-7 shrink-0 rounded-full پ-0">
                <ArrowUpRightIcon className="size-4.5" />
              </Button>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="overflow-hidden rounded-lg border border-gray-150 dark:border-dark-500"
        >
          <div className="flex items-center justify-between bg-gray-150 p-4 dark:bg-dark-500 sm:px-5">
            <div className="mr-2 flex min-w-0 items-center space-x-3 tracking-wide outline-hidden rtl:space-x-reverse">
              <Avatar size={10} src="/images/avatar/avatar-5.jpg" />
              <div className="min-w-0">
                <p className="truncate text-gray-800 dark:text-dark-50">
                  کنور گوزمان
                </p>
                <p className="mt-1 truncate text-xs text-gray-500 dark:text-dark-200">
                  توسعه‌دهنده فرانت‌اند
                </p>
              </div>
            </div>
            <AccordionButton
              component={Button}
              variant="flat"
              className="-mr-1 size-8 shrink-0 rounded-full p-0"
            >
              {({ open }) => (
                <div
                  className={clsx(
                    "text-sm font-normal leading-none transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              )}
            </AccordionButton>
          </div>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-4 flex justify-between space-x-2 rtl:space-x-reverse">
              <div className="flex flex-wrap -space-x-1.5 rtl:space-x-reverse">
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  initialColor="info"
                  name="John Doe"
                  classNames={{
                    root: "origin-bottom text-xs transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />

                <Avatar
                  size={7}
                  src="/images/avatar/avatar-18.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-19.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
              </div>
              <Button className="size-7 shrink-0 rounded-full پ-0">
                <ArrowUpRightIcon className="size-4.5" />
              </Button>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="overflow-hidden rounded-lg border border-gray-150 dark:border-dark-500"
        >
          <div className="flex items-center justify-between bg-gray-150 p-4 dark:bg-dark-500 sm:px-5">
            <div className="mr-2 flex min-w-0 items-center space-x-3 tracking-wide outline-hidden rtl:space-x-reverse">
              <Avatar size={10} src="/images/avatar/avatar-19.jpg" />
              <div className="min-w-0">
                <p className="truncate text-gray-800 dark:text-dark-50">
                  دریک سیمونز
                </p>
                <p className="mt-1 truncate text-xs text-gray-500 dark:text-dark-200">
                  طراح UI/UX
                </p>
              </div>
            </div>
            <AccordionButton
              component={Button}
              variant="flat"
              className="-mr-1 size-8 shrink-0 rounded-full p-0"
            >
              {({ open }) => (
                <div
                  className={clsx(
                    "text-sm font-normal leading-none transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              )}
            </AccordionButton>
          </div>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-4 flex justify-between space-x-2 rtl:space-x-reverse">
              <div className="flex flex-wrap -space-x-1.5 rtl:space-x-reverse">
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-5.jpg"
                  initialColor="info"
                  name="John Doe"
                  classNames={{
                    root: "origin-bottom text-xs transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />

                <Avatar
                  size={7}
                  src="/images/avatar/avatar-18.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
                <Avatar
                  size={7}
                  src="/images/avatar/avatar-19.jpg"
                  classNames={{
                    root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                    display: "ring-3 ring-white dark:ring-dark-700",
                  }}
                />
              </div>
              <Button className="size-7 shrink-0 rounded-full پ-0">
                <ArrowUpRightIcon className="size-4.5" />
              </Button>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { Advanced };
