// Local Imports
import { TransactionCard, type Transaction } from "./TransactionCard";

// ----------------------------------------------------------------------

const payments: Transaction[] = [
  {
    id: "1",
    name: "کنور گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
    time: "30 آذر 1400 - 08:05",
    amount: 66022,
  },
  {
    id: "2",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-18.jpg",
    time: "28 آذر 1400 - 11:55",
    amount: 3363,
  },
  {
    id: "3",
    name: "Mamad Taghipoor",
    avatar: undefined,
    time: "25 آذر 1400 - 14:45",
    amount: -67463,
  },
  {
    id: "4",
    name: "کارتینا وست",
    avatar: "/images/avatar/avatar-5.jpg",
    time: "22 آذر 1400 - 11:30",
    amount: 54763,
  },
  {
    id: "5",
    name: "سامانتا شلتون",
    avatar: "/images/avatar/avatar-11.jpg",
    time: "19 آذر 1400 - 09:41",
    amount: 73624,
  },
  {
    id: "6",
    name: "Amir Fadaei",
    avatar: undefined,
    time: "15 آذر 1400 - 11:41",
    amount: -3696,
  },
  {
    id: "7",
    name: "جو پرکینز",
    avatar: "/images/avatar/avatar-2.jpg",
    time: "18 آذر 1400 - 23:20",
    amount: 2310,
  },
];


export function Transactions() {
  return (
    <div className="col-span-12 flex flex-col sm:col-span-6 lg:col-span-4">
      <div className="flex min-w-0 items-center justify-between">
        <h2 className="dark:text-dark-100 font-medium tracking-wide text-gray-800">
          تراکنش‌ها
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-between space-y-4">
        {payments.map((payment) => (
          <TransactionCard key={payment.id} {...payment} />
        ))}
      </div>
    </div>
  );
}
