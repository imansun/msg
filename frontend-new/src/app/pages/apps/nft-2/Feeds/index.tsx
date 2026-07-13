// Local Imports
import { ItemCard, type Item } from "./ItemCard";

// ----------------------------------------------------------------------

const items: Item[] = [
  {
    uid: "1",
    cover: "/images/objects/object-12.jpg",
    name: "دونده شماره ۲۶۵",
    expirySeconds: 33153,
    highestBid: 1.49,
    isLiked: false,
    artist: {
      name: "تراویس فولر",
      avatar: "/images/avatar/avatar-20.jpg",
      itemsCount: 1259,
    },
  },
  {
    uid: "2",
    cover: "/images/objects/object-11.jpg",
    name: "پانکیبر شماره ۰۱۵",
    expirySeconds: 10098,
    highestBid: 11.06,
    isLiked: true,
    artist: {
      name: "کاترینا وست",
      avatar: "/images/avatar/avatar-11.jpg",
      itemsCount: 965,
    },
  },
  {
    uid: "3",
    cover: "/images/objects/object-19.jpg",
    name: "فروشگاه مکعب شماره ۰۱۵",
    expirySeconds: 108960,
    highestBid: 7.23,
    isLiked: false,
    artist: {
      name: "رائول بردلی",
      avatar: "/images/avatar/avatar-19.jpg",
      itemsCount: 1269,
    },
  },
  {
    uid: "4",
    cover: "/images/objects/object-17.jpg",
    name: "ابسترکتو شماره ۶۹۹",
    expirySeconds: 190320,
    highestBid: 3.09,
    isLiked: false,
    artist: {
      name: "هنری کرتیس",
      avatar: "/images/avatar/avatar-19.jpg",
      itemsCount: 163,
    },
  },
  {
    uid: "5",
    cover: "/images/objects/object-13.jpg",
    name: "کهکشان شماره ۲۳۶",
    expirySeconds: 363780,
    highestBid: 1.17,
    isLiked: true,
    artist: {
      name: "M.Taghipoor",
      avatar: undefined,
      itemsCount: 533,
    },
  },
  {
    uid: "6",
    cover: "/images/objects/object-2.jpg",
    name: "اورنگ شماره ۹۶۵",
    expirySeconds: 526260,
    highestBid: 23.67,
    isLiked: false,
    artist: {
      name: "هنری کرتیس",
      avatar: "/images/avatar/avatar-12.jpg",
      itemsCount: 669,
    },
  },
];

export function Feeds() {
  return (
    <div>
      <div className="flex min-w-0 items-center justify-between">
        <h3 className="dark:text-dark-50 min-w-0 text-xl font-medium text-gray-800">
          فید
        </h3>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {items.map((item) => (
          <ItemCard key={item.uid} {...item} />
        ))}
      </div>
    </div>
  );
}
