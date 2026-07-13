// Local Imports
import { Card } from "@/components/ui";
import { ArtistCard, Artist } from "./ArtistCard";

// ----------------------------------------------------------------------

const artists: Artist[] = [
  {
    uid: "1",
    name: "کانر گوزمان",
    avatar: "/images/avatar/avatar-18.jpg",
    itemsCount: "۲۶۱۶",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/objects/object-16.jpg",
        name: "فروشگاه مکعب #۰۲۵",
        price: 5.03,
      },
      {
        uid: "2",
        cover: "/images/objects/object-14.jpg",
        name: "دونده #۰۴۵۶",
        price: 4.26,
      },
      {
        uid: "3",
        cover: "/images/objects/object-17.jpg",
        name: "پانکیبر #۵۷۶۴",
        price: 2.32,
      },
      {
        uid: "4",
        cover: "/images/objects/object-1.jpg",
        name: "کیبرپینک #۳۶۹۸",
        price: 15.26,
      },
    ],
  },
  {
    uid: "2",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-4.jpg",
    itemsCount: "۱۶۹۴",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/objects/object-13.jpg",
        name: "نقطه انتزاعی #۷۶۲",
        price: 6.69,
      },
      {
        uid: "2",
        cover: "/images/objects/object-19.jpg",
        name: "سوپردایموند #۱۶۹",
        price: 2.11,
      },
      {
        uid: "3",
        cover: "/images/objects/object-1.jpg",
        name: "سایبرپینک #۵۵۹",
        price: 1.62,
      },
    ],
  },
  {
    uid: "3",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-20.jpg",
    itemsCount: "۵۴۱",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/objects/object-12.jpg",
        name: "هنر دیجیتال #۶۸۲",
        price: 12.3,
      },
      {
        uid: "2",
        cover: "/images/objects/object-4.jpg",
        name: "هنر ژئوماترو #۳۲۹",
        price: 4.11,
      },
      {
        uid: "3",
        cover: "/images/objects/object-3.jpg",
        name: "هنر مکعب سه‌بعدی #۰۱۲",
        price: 7.26,
      },
      {
        uid: "4",
        cover: "/images/objects/object-2.jpg",
        name: "دونده #۸۶۳",
        price: 9.16,
      },
    ],
  },
];

export function FeaturedArtists() {
  return (
    <Card className="pb-4">
      <div className="flex h-14 min-w-0 items-center justify-between px-4 py-3">
        <h2 className="dark:text-dark-100 font-medium tracking-wide text-gray-800">
          هنرمندان ویژه
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="space-y-5.5">
        {artists.map((artist) => (
          <ArtistCard key={artist.uid} {...artist} />
        ))}
      </div>
    </Card>
  );
}
