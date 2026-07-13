// Local Imports
import { Avatar, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface Payment {
  uid: string;
  name: string;
  avatar?: string;
  time: string;
  amount: string;
}

const payments: Payment[] = [
  {
    uid: "1",
    name: "کنور گوزمن",
    avatar: "/images/avatar/avatar-20.jpg",
    time: "۳۰ آذر ۱۴۰۰ - ۰۸:۰۵",
    amount: "۳۳,۰۱۱,۰۰۰ تومان",
  },
  {
    uid: "2",
    name: "هنری کورتیس",
    avatar: "/images/avatar/avatar-18.jpg",
    time: "۲۸ آذر ۱۴۰۰ - ۱۱:۵۵",
    amount: "۱,۶۸۱,۵۰۰ تومان",
  },
  {
    uid: "3",
    name: "A.Hosseini",
    avatar: undefined,
    time: "۲۵ آذر ۱۴۰۰ - ۱۴:۴۵",
    amount: "۳۳,۷۳۱,۵۰۰ تومان",
  },
  {
    uid: "4",
    name: "کاتارینا وست",
    avatar: "/images/avatar/avatar-5.jpg",
    time: "۲۲ آذر ۱۴۰۰ - ۱۱:۳۰",
    amount: "۲۷,۳۸۱,۵۰۰ تومان",
  },
  {
    uid: "5",
    name: "سامانتا شلتون",
    avatar: "/images/avatar/avatar-11.jpg",
    time: "۱۹ آذر ۱۴۰۰ - ۰۹:۴۱",
    amount: "۳۶,۸۱۲,۰۰۰ تومان",
  },
  {
    uid: "6",
    name: "M.Amoei",
    avatar: undefined,
    time: "۱۵ آذر ۱۴۰۰ - ۱۱:۴۱",
    amount: "۱۸,۴۸۰,۰۰۰ تومان",
  },
  {
    uid: "7",
    name: "جان پارکر",
    avatar: "/images/avatar/avatar-2.jpg",
    time: "۱۸ آذر ۱۴۰۰ - ۲۳:۲۰",
    amount: "۱۱,۵۵۰,۰۰۰ تومان",
  },
];

export function RecentPayments() {
  return (
    <Card className="px-4 pb-4 sm:px-5">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className="font-medium tracking-wide text-gray-800 dark:text-dark-100">
          پرداخت‌های اخیر
        </h2>
        <a
          href="##"
          className="border-b border-dotted border-current pb-0.5 text-xs-plus font-medium text-primary-600 outline-hidden transition-colors duration-300 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70"
        >
          مشاهده همه
        </a>
      </div>
      <div className="space-y-3.5">
        {payments.map((payment) => (
          <div
            key={payment.uid}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <Avatar
                size={10}
                name={payment.name}
                initialColor="auto"
                src={payment.avatar}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 dark:text-dark-100">
                  {payment.name}
                </span>
                <span className="text-xs text-gray-400 dark:text-dark-300">
                  {payment.time}
                </span>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-800 dark:text-dark-100">
              {payment.amount}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
