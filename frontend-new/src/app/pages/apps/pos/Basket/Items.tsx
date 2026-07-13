// Import Dependencies
import { PencilSquareIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

interface Item {
  uid: string;
  name: string;
  count: number;
  image: string;
  price: string;
  description: string;
}

const items: Item[] = [
  {
    uid: "1",
    name: "گوشت گاو بریان",
    count: 2,
    image: "/images/foods/food-4.jpg",
    price: "۶۰۰٬۰۰۰ تومان",
    description: "یک غذای خوشمزه و لذیذ.",
  },
  {
    uid: "2",
    name: "سالاد تن",
    count: 1,
    image: "/images/foods/food-5.jpg",
    price: "۷۰۰٬۰۰۰ تومان",
    description: "سالادی سالم و مقوی.",
  },
  {
    uid: "3",
    name: "سالمون",
    count: 3,
    image: "/images/foods/food-6.jpg",
    price: "۲٬۰۰۰٬۰۰۰ تومان",
    description: "ماهی سالمون تازه و خوشمزه.",
  },
  {
    uid: "4",
    name: "رول کالیفرنیا",
    count: 1,
    image: "/images/foods/food-7.jpg",
    price: "۱٬۱۰۰٬۰۰۰ تومان",
    description: "رول سوشی محبوب و پرطرفدار.",
  },
  {
    uid: "5",
    name: "کارپاچیو اردک",
    count: 2,
    image: "/images/foods/food-10.jpg",
    price: "۹۰۰٬۰۰۰ تومان",
    description: "کارپاچیو اردک با طعم خاص.",
  },
];

export function Items() {
  return (
    <div className="flex flex-col space-y-3.5">
      {items.map((item) => (
        <div
          key={item.uid}
          className="group flex items-center justify-between gap-3"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="relative flex shrink-0">
              <img
                src={item.image}
                className="mask is-star size-11 origin-center object-cover"
                alt={item.name}
              />

              <div className="absolute right-0 top-0 -m-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border border-white bg-gray-200 px-1 text-tiny-plus font-medium leading-none text-gray-800 dark:border-dark-700 dark:bg-dark-450 dark:text-white">
                {item.count}
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <p className="truncate font-medium text-gray-800 dark:text-dark-100">
                  {item.name}
                </p>
                <Button
                  isIcon
                  variant="flat"
                  className="size-6 rounded-full opacity-0 group-hover:opacity-100"
                >
                  <PencilSquareIcon className="size-4" />
                </Button>
              </div>
              <p className="truncate text-xs-plus text-gray-400 dark:text-dark-300">
                {item.description}
              </p>
            </div>
          </div>
          <p className="font-semibold">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
