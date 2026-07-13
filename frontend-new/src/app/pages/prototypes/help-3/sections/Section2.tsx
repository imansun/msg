// Import Dependencies
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CSSProperties } from "react";

// Local Imports
import MobileApp from "@/assets/illustrations/mobile-app.svg?react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Tag,
} from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export function Section2() {
  const { primaryColorScheme: primary } = useThemeContext();

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2">
      <div className="flex justify-center lg:order-last">
        <MobileApp
          className="w-full max-w-xs"
          style={{ "--primary": primary[500] } as CSSProperties}
        />
      </div>
      <div className="w-full">
        <h4 className="dark:text-dark-100 text-lg font-medium text-gray-800">
          اپلیکیشن موبایل
        </h4>
        <Accordion
          defaultValue="item-1"
          className="divide-primary-400 border-primary-600 dark:border-primary-500 mt-3 flex flex-col divide-y overflow-hidden rounded-lg border"
        >
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <AccordionItem key={i} value={"item-" + (i + 1)}>
                <AccordionButton className="bg-primary-600 dark:bg-primary-500 flex w-full cursor-pointer items-center justify-between p-4 text-base font-medium text-white outline-hidden focus-visible:opacity-90 sm:px-5">
                  {({ open }) => (
                    <>
                      <p>سؤال {i + 1}</p>
                      <div
                        className={clsx(
                          "text-primary-50 text-sm leading-none font-normal transition-transform duration-300",
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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. این متن صرفاً جهت نمایش نمونه پاسخ می‌باشد.
                  </p>
                  <div className="mt-3 gap-2">
                    <Tag href="#">برچسب ۱</Tag>
                    <Tag href="#">برچسب ۲</Tag>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
