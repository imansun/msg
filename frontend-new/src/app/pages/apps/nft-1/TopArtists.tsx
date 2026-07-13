// Local Imports
import { Avatar, Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface Artist {
  uid: string;
  name: string;
  avatar?: string;
  itemsCount: string;
}

const artists: Artist[] = [
  {
    uid: "1",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-20.jpg",
    itemsCount: "۱,۶۴۹",
  },
  {
    uid: "2",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
    itemsCount: "۶۹۱",
  },
  {
    uid: "3",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-19.jpg",
    itemsCount: "۳۲۹",
  },
  {
    uid: "4",
    name: "Amir Fadaei",
    avatar: undefined,
    itemsCount: "۷۶۲",
  },
  {
    uid: "5",
    name: "مورِس کلارک",
    avatar: "/images/avatar/avatar-5.jpg",
    itemsCount: "۶۹۵",
  },
];

export function TopArtists() {
  return (
    <Card className="px-4 pb-4">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className="dark:text-dark-100 font-medium tracking-wide text-gray-800">
          هنرمندان برتر
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="space-y-4">
        {artists.map((artist) => (
          <div
            key={artist.uid}
            className="flex min-w-0 items-center justify-between gap-2"
          >
            <div className="flex min-w-0 items-center gap-2">
              <Avatar
                size={10}
                src={artist.avatar}
                name={artist.name}
                initialColor="auto"
              />
              <div className="flex min-w-0 flex-col">
                <span className="dark:text-dark-100 truncate text-sm font-medium text-gray-800">
                  {artist.name}
                </span>
                <span className="dark:text-dark-300 mt-0.5 truncate text-xs text-gray-400">
                  {artist.itemsCount} آیتم
                </span>
              </div>
            </div>
            <Button color="primary" className="h-7 rounded-full px-2.5 text-xs">
              دنبال کردن
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
