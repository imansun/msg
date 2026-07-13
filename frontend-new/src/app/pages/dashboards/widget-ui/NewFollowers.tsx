// Local Imports
import { Avatar, Card } from "@/components/ui";

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
    name: "Amir",
    avatar: undefined,
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
  },
  {
    uid: "10",
    name: "Ahmad",
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

export function NewFollowers() {
  return (
    <Card>
      <div className="flex h-14 items-center justify-between px-4 py-3">
        <h2 className="text-sm-plus dark:text-dark-100 truncate font-medium tracking-wide text-gray-800">
          دنبال‌کنندگان جدید
        </h2>
      </div>
      <div className="flex gap-x-4 overflow-x-auto px-4 pb-4 text-center">
        {users.map((user) => (
          <div className="text-center" key={user.uid}>
            <Avatar
              size={10}
              src={user.avatar}
              name={user.name}
              color="auto"
              className="align-middle"
            />

            <p className="dark:text-dark-100 mt-1.5 w-12 truncate text-xs text-gray-800">
              {user.name}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
