// Import Dependencies
import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { register, SwiperContainer } from "swiper/element/bundle";
import { Label, Radio, RadioGroup } from "@headlessui/react";
import { clsx } from "clsx";
import invariant from "tiny-invariant";

// Local Imports
import { Button } from "@/components/ui";
import { useLocaleContext } from "@/app/contexts/locale/context";
import { FolderCard } from "./FolderCard";
import { ColorKey } from "@/utils/setThisClass";

// ----------------------------------------------------------------------

export interface Folder {
  uid: string;
  name: string;
  color: ColorKey;
  size: string;
  filesCount: string;
}

type FolderTab = "recent" | "pinned";

const folders: Record<FolderTab, Folder[]> = {
  recent: [
    {
      uid: "1",
      name: "شات‌های دریبل",
      color: "primary",
      size: "۴۵۵ مگابایت",
      filesCount: "۲۲",
    },
    {
      uid: "2",
      name: "طراحی",
      color: "warning",
      size: "۲.۲ گیگابایت",
      filesCount: "۱۳۵",
    },
    {
      uid: "3",
      name: "نمونه‌کار من",
      color: "info",
      size: "۴۵۹ مگابایت",
      filesCount: "۱۴",
    },
    {
      uid: "4",
      name: "فایل‌های بیهانس",
      color: "secondary",
      size: "۹۵۸ مگابایت",
      filesCount: "۱۸",
    },
    {
      uid: "5",
      name: "فایل‌های پشتیبان",
      color: "success",
      size: "۶۵ گیگابایت",
      filesCount: "۹۵۹",
    },
    {
      uid: "6",
      name: "فایل‌های گرافیکی",
      color: "error",
      size: "۸۹۳ گیگابایت",
      filesCount: "۴۹۷",
    },
  ],

  pinned: [
    {
      uid: "1",
      name: "فایل‌های گرافیکی",
      color: "error",
      size: "۸۹۳ گیگابایت",
      filesCount: "۴۹۷",
    },
    {
      uid: "2",
      name: "طراحی",
      color: "warning",
      size: "۲.۲ گیگابایت",
      filesCount: "۱۳۵",
    },
    {
      uid: "3",
      name: "شات‌های دریبل",
      color: "primary",
      size: "۴۵۵ مگابایت",
      filesCount: "۲۲",
    },
  ],
};

register();

export function RecentFolders() {
  const { direction } = useLocaleContext();

  const [activeTab, setActiveTab] = useState<FolderTab>("recent");
  const activeFolders = folders[activeTab];

  const folderCarouselRef = useRef<SwiperContainer>(null);

  useLayoutEffect(() => {
    invariant(folderCarouselRef.current, "folderCarouselRef is not defined");

    const params = {
      injectStyles: [
        `
        :host(.folder-carousel) .swiper {
          padding-left: var(--margin-x);
          padding-right: var(--margin-x);
          transition-duration: .25s;
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
          transition-property: width,padding-left,padding-right,margin-left,margin-right;
        }

        `,
      ],
    };

    Object.assign(folderCarouselRef.current, params);

    folderCarouselRef.current?.initialize();
  }, [activeFolders]);

  return (
    <div className="mt-4 flex flex-col">
      <RadioGroup
        value={activeTab}
        onChange={setActiveTab}
        as="div"
        className="transition-content flex gap-2 px-(--margin-x)"
      >
        <Label className="sr-only">انتخاب تب</Label>
        <Radio as={Fragment} value="recent">
          {({ checked }) => (
            <Button
              isIcon
              unstyled
              className={clsx(
                "text-xs-plus h-8 rounded-full px-4",
                checked
                  ? "bg-gray-150 dark:bg-dark-600 dark:text-dark-50 text-gray-900"
                  : "dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 text-gray-700 hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25",
              )}
            >
              اخیر
            </Button>
          )}
        </Radio>
        <Radio as={Fragment} value="pinned">
          {({ checked }) => (
            <Button
              isIcon
              unstyled
              className={clsx(
                "text-xs-plus h-8 rounded-full px-4",
                checked
                  ? "bg-gray-150 dark:bg-dark-600 dark:text-dark-50 text-gray-900"
                  : "dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 text-gray-700 hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25",
              )}
            >
              سنجاق‌شده
            </Button>
          )}
        </Radio>
      </RadioGroup>

      <div className="pt-4">
        {/* @ts-expect-error - Swiper web components */}
        <swiper-container
          ref={folderCarouselRef}
          init="false"
          slides-per-view="auto"
          dir={direction}
          class="folder-carousel flex"
          space-between="20"
        >
          {activeFolders.map((folder: Folder) => (
            <Fragment key={folder.uid}>
              {/* @ts-expect-error - Swiper web components */}
              <swiper-slide class="w-56">
                <FolderCard {...folder} />
                {/* @ts-expect-error - Swiper web components */}
              </swiper-slide>
            </Fragment>
          ))}
          {/* @ts-expect-error - Swiper web components */}
        </swiper-container>
      </div>
    </div>
  );
}
