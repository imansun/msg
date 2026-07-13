// Import Dependencies
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Local Imports
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Tag,
} from "@/components/ui";

// ----------------------------------------------------------------------

const Primary = () => {
  return (
    <div className="max-w-xl">
      <Accordion
        defaultValue="item-1"
        className="flex flex-col divide-y divide-primary-400 overflow-hidden rounded-lg border border-primary-600 dark:border-primary-500"
      >
        <AccordionItem value="item-1">
          <AccordionButton className="flex w-full cursor-pointer items-center justify-between bg-primary-600 p-4 text-base font-medium text-white outline-hidden focus-visible:opacity-90 dark:bg-primary-500 sm:px-5">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۱</p>
                <div
                  className={clsx(
                    "text-sm font-normal leading-none text-primary-50 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-3 !space-x-2 rtl:space-x-reverse">
              <Tag href="#">برچسب ۱</Tag>
              <Tag href="#">برچسب ۲</Tag>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionButton className="flex w-full cursor-pointer items-center justify-between bg-primary-600 p-4 text-base font-medium text-white outline-hidden focus-visible:opacity-90 dark:bg-primary-500 sm:px-5">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۲</p>
                <div
                  className={clsx(
                    "text-sm font-normal leading-none text-primary-50 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-3 !space-x-2 rtl:space-x-reverse">
              <Tag href="#">برچسب ۱</Tag>
              <Tag href="#">برچسب ۲</Tag>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionButton className="flex w-full cursor-pointer items-center justify-between bg-primary-600 p-4 text-base font-medium text-white outline-hidden focus-visible:opacity-90 dark:bg-primary-500 sm:px-5">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۳</p>
                <div
                  className={clsx(
                    "text-sm font-normal leading-none text-primary-50 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="p-4 sm:px-5">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کمودی ائاروم مگنی افیسیس پاسیوس رپلندوس. آکوزانتیوم آدیپیسی آلیکویت پرازنتیوم کوئارت وولپتاته.
            </p>
            <div className="mt-3 !space-x-2 rtl:space-x-reverse">
              <Tag href="#">برچسب ۱</Tag>
              <Tag href="#">برچسب ۲</Tag>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export { Primary };
