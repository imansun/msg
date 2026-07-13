// Local Imports
import {
  AppointmentsRequestsCard,
  type Request,
} from "./AppointmentsRequestsCard";

const requests: Request[] = [
  {
    id: "1",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-19.jpg",
    request: "معاینه",
    date: "پنجشنبه، ۲۶ اسفند",
    time: "۰۸:۰۰",
  },
  {
    id: "2",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-18.jpg",
    request: "جرم‌گیری",
    date: "دوشنبه، ۱۵ اسفند",
    time: "۰۹:۰۰",
  },
  {
    id: "3",
    name: "Amir Fadaei",
    avatar: undefined,
    request: "معاینه",
    date: "چهارشنبه، ۱۴ اسفند",
    time: "۱۱:۰۰",
  },
];

// ----------------------------------------------------------------------

export function AppointmentsRequestsList() {
  return (
    <div className="mt-4 sm:mt-5 lg:mt-6">
      <div className="flex h-8 items-center justify-between">
        <h2 className="dark:text-dark-100 text-base font-medium tracking-wide text-gray-800">
          درخواست‌های نوبت
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {requests.map((request) => (
          <AppointmentsRequestsCard key={request.id} {...request} />
        ))}
      </div>
    </div>
  );
}
