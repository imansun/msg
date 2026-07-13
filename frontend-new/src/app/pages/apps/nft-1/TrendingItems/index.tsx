// Import Dependencies
import { Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

// Local Imports
import { Box } from "@/components/ui";
import { NftCard, type NftItem } from "./NftCard";

// ----------------------------------------------------------------------

interface Category {
  uid: string;
  label: string;
}

const categories: Category[] = [
  {
    uid: "1",
    label: "🔥 همه",
  },
  {
    uid: "2",
    label: "🎨 هنر",
  },
  {
    uid: "3",
    label: "🎵 موسیقی",
  },
  {
    uid: "4",
    label: "🎯 بازی",
  },
  {
    uid: "5",
    label: "👗 مد",
  },
  {
    uid: "6",
    label: "📸 عکاسی",
  },
  {
    uid: "7",
    label: "🤽‍♂️ ورزش",
  },
];

const items: NftItem[] = [
  {
    uid: "1",
    image: "/images/objects/object-11.jpg",
    time: "۲ روز باقی‌مانده",
    name: "دونده #۲۶۵",
    artist: "کانر گوزمان",
    likes: "۱۶۴",
    currentBid: "۵.۰۱",
  },
  {
    uid: "2",
    image: "/images/objects/object-12.jpg",
    time: "۳ روز باقی‌مانده",
    name: "پانکیبر #۰۱۵",
    artist: "کاترینا وست",
    likes: "۶۱۴",
    currentBid: "۹.۵۲",
  },
  {
    uid: "3",
    image: "/images/objects/object-13.jpg",
    time: "۵ روز باقی‌مانده",
    name: "فروشگاه مکعب #۰۱۵",
    artist: "تراویس فولر",
    likes: "۲۳۳",
    currentBid: "۴.۲۷",
  },
];

export function TrendingItems() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <Box>
      <div className="flex min-w-0 items-center justify-between py-5">
        <h3 className="dark:text-dark-50 truncate text-xl font-medium text-gray-800">
          NFTهای ترند
        </h3>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <RadioGroup
        value={selectedCategory}
        onChange={setSelectedCategory}
        as="div"
        className="is-scrollbar-hidden overflow-x-auto"
      >
        <Label className="sr-only">انتخاب دسته‌بندی</Label>

        <div className="flex w-max gap-3 whitespace-nowrap">
          {categories.map((category) => (
            <Radio
              key={category.uid}
              as="button"
              value={category}
              className={({ checked }) =>
                clsx(
                  "tag-base tag rounded-full outline-hidden",
                  checked
                    ? "this:primary bg-this text-white"
                    : "bg-gray-150 dark:bg-dark-600 dark:text-dark-100 dark:hover:bg-dark-450 dark:focus:bg-dark-450 dark:active:bg-dark-450/90 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200/80",
                )
              }
            >
              {category.label}
            </Radio>
          ))}
        </div>
      </RadioGroup>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {items.map((item) => (
          <NftCard key={item.uid} {...item} />
        ))}
      </div>
    </Box>
  );
}
