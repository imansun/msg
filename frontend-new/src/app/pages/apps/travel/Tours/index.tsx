// Local Imports
import { Header } from "./Header";
import { Tour, TourCard } from "./TourCard";

// ----------------------------------------------------------------------

const tours: Tour[] = [
  {
    uid: "1",
    cover: "/images/travel/travel-2.jpg",
    name: "جزیره جنوبی",
    location: "نیوزیلند",
    rating: "۵.۰",
    isLiked: false,
  },
  {
    uid: "2",
    cover: "/images/travel/travel-3.jpg",
    name: "بورا بورا",
    location: "فرانسه",
    rating: "۴.۹",
    isLiked: true,
  },
  {
    uid: "3",
    cover: "/images/travel/travel-5.jpg",
    name: "مائوئی",
    location: "هانا",
    rating: "۴.۸",
    isLiked: false,
  },
  {
    uid: "4",
    cover: "/images/travel/travel-11.jpg",
    name: "تاهیتی",
    location: "فرانسه",
    rating: "۴.۷",
    isLiked: false,
  },
  {
    uid: "5",
    cover: "/images/travel/travel-12.jpg",
    name: "پارک ملی یخچال",
    location: "ایالات متحده",
    rating: "۴.۵",
    isLiked: true,
  },
  {
    uid: "6",
    cover: "/images/travel/travel-7.jpg",
    name: "پاتاگونیا آرژانتین",
    location: "آرژانتین",
    rating: "۴.۴",
    isLiked: false,
  },
  {
    uid: "7",
    cover: "/images/travel/travel-9.jpg",
    name: "ساحل آمالفی",
    location: "ایتالیا",
    rating: "۴.۳",
    isLiked: false,
  },
  {
    uid: "8",
    cover: "/images/travel/travel-10.jpg",
    name: "آبشار نیاگارا",
    location: "نیاگارا",
    rating: "۴.۲",
    isLiked: false,
  },
  {
    uid: "9",
    cover: "/images/travel/travel-8.jpg",
    name: "صخره بزرگ مرجانی",
    location: "استرالیا",
    rating: "۴.۰",
    isLiked: true,
  },
];

export function Tours() {
  return (
    <div className="col-span-12 lg:col-span-8">
      <Header />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.uid} {...tour} />
        ))}
      </div>
    </div>
  );
}
