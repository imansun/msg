// Import Dependencies
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

// Local Imports
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Tag,
} from "@/components/ui";

// ----------------------------------------------------------------------

const Controlled = () => {
  const [active, setActive] = useState<string>("item-1");

  return (
    <div className="max-w-xl">
      <Accordion
        value={active}
        onChange={setActive}
        className="divide-gray-150 dark:divide-dark-500 flex flex-col divide-y"
      >
        <AccordionItem value="item-1">
          <AccordionButton className="ring-primary-500/50 dark:text-dark-100 dark:ring-offset-dark-700 flex w-full cursor-pointer items-center justify-between rounded-sm py-4 text-base font-medium text-gray-700 ring-offset-2 ring-offset-white outline-hidden focus-visible:ring-3">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۱</p>
                <div
                  className={clsx(
                    "dark:text-dark-300 text-sm leading-none font-normal text-gray-400 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="pb-4">
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
          <AccordionButton className="ring-primary-500/50 dark:text-dark-100 dark:ring-offset-dark-700 flex w-full cursor-pointer items-center justify-between rounded-sm py-4 text-base font-medium text-gray-700 ring-offset-2 ring-offset-white outline-hidden focus-visible:ring-3">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۲</p>
                <div
                  className={clsx(
                    "dark:text-dark-300 text-sm leading-none font-normal text-gray-400 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="pb-4">
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
          <AccordionButton className="ring-primary-500/50 dark:text-dark-100 dark:ring-offset-dark-700 flex w-full cursor-pointer items-center justify-between rounded-sm py-4 text-base font-medium text-gray-700 ring-offset-2 ring-offset-white outline-hidden focus-visible:ring-3">
            {({ open }) => (
              <>
                <p>آیتم آکاردئون ۳</p>
                <div
                  className={clsx(
                    "dark:text-dark-300 text-sm leading-none font-normal text-gray-400 transition-transform duration-300",
                    open && "-rotate-180",
                  )}
                >
                  <ChevronDownIcon className="size-6" />
                </div>
              </>
            )}
          </AccordionButton>
          <AccordionPanel className="pb-4">
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

export { Controlled };
