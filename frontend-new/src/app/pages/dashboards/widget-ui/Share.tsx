// Import Dependencies
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Avatar, Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface User {
  uid: string;
  name: string;
  avatar?: string;
}

const users: User[] = [
  {
    uid: "5",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
  },
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
  },
  {
    uid: "8",
    name: "Ahmad",
    avatar: undefined,
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
  },
  {
    uid: "10",
    name: "Mohammad",
    avatar: undefined,
  },
  {
    uid: "11",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-1.jpg",
  },
  {
    uid: "12",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-2.jpg",
  },
];

export function Share() {
  return (
    <Card className="px-4 pb-4">
      <div className="flex h-14 items-center justify-between py-3">
        <h2 className="text-sm-plus dark:text-dark-100 truncate font-medium tracking-wide text-gray-800">
          اشتراک‌گذاری
        </h2>
        <Button
          className="size-8 rounded-full ltr:-mr-1 rtl:-ml-1"
          isIcon
          variant="flat"
        >
          <ArrowTopRightOnSquareIcon className="size-4.5" />
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {users.map((user) => (
          <div className="text-center" key={user.uid}>
            <Avatar
              size={10}
              className="align-middle"
              src={user.avatar}
              name={user.name}
              initialColor="auto"
            />

            <p className="text-xs-plus dark:text-dark-100 mt-1.5 line-clamp-1 font-medium text-gray-800">
              {user.name}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
