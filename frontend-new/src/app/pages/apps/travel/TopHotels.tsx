// Import Dependencies
import { MapPinIcon, StarIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface Hotel {
  uid: string;
  image: string;
  name: string;
  location: string;
  rating: string;
  price: string;
}

const hotels: Hotel[] = [
  {
    uid: "1",
    image: "/images/travel/hotel-3.jpg",
    name: "کرون پلازا",
    location: "فرانسه",
    rating: "۴.۹",
    price: "۱۰۰دلار",
  },
  {
    uid: "2",
    image: "/images/travel/hotel-5.jpg",
    name: "امِرالد بِی این",
    location: "ایتالیا",
    rating: "۴.۶",
    price: "۸۰دلار",
  },
  {
    uid: "3",
    image: "/images/travel/hotel-7.jpg",
    name: "هتل بلیس",
    location: "اتاق",
    rating: "۴.۴",
    price: "۱۲۰دلار",
  },
  {
    uid: "4",
    image: "/images/travel/hotel-4.jpg",
    name: "سانست لاج",
    location: "سیدنی",
    rating: "۴.۷",
    price: "۱۸۰دلار",
  },
  {
    uid: "5",
    image: "/images/travel/hotel-2.jpg",
    name: "هتل الیت",
    location: "نیویورک",
    rating: "۴.۵",
    price: "۲۲۰دلار",
  },
];

export function TopHotels() {
  return (
    <Card className="px-4 pb-5 sm:px-5">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className="font-medium tracking-wide text-gray-800 dark:text-dark-100">
          بهترین هتل‌ها
        </h2>
        <a
          href="##"
          className="border-b border-dotted border-current pb-0.5 text-xs-plus font-medium text-primary-600 outline-hidden transition-colors duration-300 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70"
        >
          مشاهده همه
        </a>
      </div>
      <div className="space-y-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.uid}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-4">
              <img
                className="mask is-squircle size-12 object-cover object-center"
                src={hotel.image}
                alt={hotel.name}
              />
              <div className="min-w-0 space-y-1">
                <div className="truncate">
                  <a
                    href="##"
                    className="font-medium text-gray-700 hover:text-primary-600 focus:text-primary-600 dark:text-dark-100 dark:hover:text-primary-400 dark:focus:text-primary-400"
                  >
                    {hotel.name}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <p className="flex min-w-0 items-center gap-1">
                    <MapPinIcon className="size-3.5 shrink-0 text-gray-400 dark:text-dark-300" />
                    <span className="truncate">{hotel.location}</span>
                  </p>
                  <p className="flex shrink-0 items-center gap-1">
                    <StarIcon className="size-3.5 text-gray-400 dark:text-dark-300" />
                    <span>{hotel.rating}</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="shrink-0">
              <span className="text-base font-medium text-gray-800 dark:text-dark-100">
                {hotel.price}
              </span>
              <span className="text-xs text-gray-400 dark:text-dark-300">
                /روز
              </span>
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
