// Import Dependencies
import clsx from "clsx";

// Local Imports
import { Avatar } from "@/components/ui";
import { formatDollarToToman } from "@/utils";

// ----------------------------------------------------------------------

interface Transaction {
  uid: string;
  name: string;
  avatar?: string;
  time: string;
  amount: number;
}

const payments: Transaction[] = [
  {
    uid: "1",
    name: "کانر گوزمن",
    avatar: "/images/avatar/avatar-20.jpg",
    time: "۳۰ آذر ۱۴۰۰ - ۰۸:۰۵",
    amount: 660.22,
  },
  {
    uid: "2",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-18.jpg",
    time: "۲۸ آذر ۱۴۰۰ - ۱۱:۵۵",
    amount: -33.63,
  },
  {
    uid: "3",
    name: "Amir Fadaei",
    avatar: undefined,
    time: "۲۵ آذر ۱۴۰۰ - ۱۴:۴۵",
    amount: 674.63,
  },
  {
    uid: "4",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-5.jpg",
    time: "۲۲ آذر ۱۴۰۰ - ۱۱:۳۰",
    amount: 547.63,
  },
  {
    uid: "5",
    name: "سامانتا شلتون",
    avatar: "/images/avatar/avatar-11.jpg",
    time: "۱۹ آذر ۱۴۰۰ - ۰۹:۴۱",
    amount: -73,
  },
  {
    uid: "6",
    name: "M Taghipoor",
    avatar: undefined,
    time: "۱۸ آذر ۱۴۰۰ - ۱۹:۳۶",
    amount: 369.6,
  },
];

export function Transactions() {
  return (
    <div className="dark:bg-surface-3 col-span-12 space-y-4 rounded-lg bg-gray-50 p-3 sm:col-span-6 xl:col-span-5">
      {payments.map((payment) => (
        <div
          key={payment.uid}
          className="flex items-center justify-between gap-3"
        >
          <div className="flex min-w-0 items-center gap-3">
            <Avatar
              size={10}
              name={payment.name}
              src={payment.avatar}
              initialColor="auto"
            />
            <div className="flex min-w-0 flex-col">
              <span className="dark:text-dark-100 truncate text-sm font-medium text-gray-800">
                {payment.name}
              </span>
              <span className="dark:text-dark-300 truncate text-xs text-gray-400">
                {payment.time}
              </span>
            </div>
          </div>
          <span
            className={clsx(
              `this:${payment.amount > 0 ? "success" : "error"}`,
              "text-this dark:text-this-lighter text-sm font-medium",
            )}
          >
            {formatDollarToToman(payment?.amount)}
          </span>
        </div>
      ))}
    </div>
  );
}
