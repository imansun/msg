// Import Dependencies
import { PlusIcon } from "@heroicons/react/20/solid";

// Local Imports
import { Avatar } from "@/components/ui";

// ----------------------------------------------------------------------

interface Author {
  id: string;
  name: string;
  avatar?: string;
}

const featuredAuthors: Author[] = [
  {
    id: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    id: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
  },
  {
    id: "8",
    name: "Amir Fadaei",
    avatar: undefined,
  },
  {
    id: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
  },
];

export function Header() {
  return (
    <div className="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-start">
      <div>
        <h3 className="dark:text-dark-100 text-xl font-semibold text-gray-800">
          بلاگ‌بورد
        </h3>
        <p className="mt-1 hidden sm:block">مدیریت مقالات و نویسندگان</p>
      </div>

      <div>
        <p className="dark:text-dark-100 font-medium text-gray-800">
          نویسندگان منتخب
        </p>
        <div className="mt-2 flex space-x-2">
          {featuredAuthors.map((author) => (
            <Avatar
              key={author.id}
              size={8}
              name={author.name}
              src={author.avatar}
              initialColor="auto"
              classNames={{
                display: "mask is-squircle text-xs-plus rounded-none",
              }}
            />
          ))}
          <Avatar
            size={8}
            component="button"
            color="primary"
            title="افزودن نویسنده"
            classNames={{
              display: "mask is-squircle text-xs-plus rounded-none",
            }}
          >
            <PlusIcon className="size-4" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
