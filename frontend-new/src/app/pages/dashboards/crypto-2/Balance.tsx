// Import Dependencies
import { FaBtc, FaEthereum } from "react-icons/fa";
import { FaLitecoinSign } from "react-icons/fa6";
import { TbCurrencyDogecoin } from "react-icons/tb";

// ----------------------------------------------------------------------

export function Balance() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
      <div className="this:primary bg-this shadow-this/50 dark:bg-this-light dark:shadow-this-light/50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/90">
          <FaBtc className="text-this dark:text-this-light size-5" />
        </div>
        <p className="mt-3 text-base font-medium text-white">بیت کوین</p>
        <div className="mt-8">
          <p className="mt-3 text-xl font-medium text-white">۱۶۲,۶۲۷,۰۰۰ تومان</p>
          <p className="mt-1 text-white/90">۰.۸۴۶۶۱۶ بیت کوین</p>
        </div>
      </div>
      <div className="this:warning bg-this shadow-this/50 dark:bg-this-light dark:shadow-this-light/50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/90">
          <FaLitecoinSign className="text-this dark:text-this-light size-5" />
        </div>
        <p className="mt-3 text-base font-medium text-white">لایت کوین</p>
        <div className="mt-8">
          <p className="mt-3 text-xl font-medium text-white">۳۴۷,۷۹۴,۵۰۰ تومان</p>
          <p className="mt-1 text-white/90">۱۶.۵۵۶۲ لایت کوین</p>
        </div>
      </div>
      <div className="this:info bg-this shadow-this/50 dark:bg-this-light dark:shadow-this-light/50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/90">
          <FaEthereum className="text-this dark:text-this-light size-5" />
        </div>
        <p className="mt-3 text-base font-medium text-white">اتریوم</p>
        <div className="mt-8">
          <p className="mt-3 text-xl font-medium text-white">۳۸۲,۷۱۳,۰۰۰ تومان</p>
          <p className="mt-1 text-white/90">۱۱.۷۹۴۶ اتریوم</p>
        </div>
      </div>
      <div className="this:secondary bg-this shadow-this/50 dark:bg-this-light dark:shadow-this-light/50 rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/90">
          <TbCurrencyDogecoin className="text-this dark:text-this-light size-6" />
        </div>
        <p className="mt-3 text-base font-medium text-white">دوج کوین</p>
        <div className="mt-8">
          <p className="mt-3 text-xl font-medium text-white">۳,۲۹۸,۵۰۰ تومان</p>
          <p className="mt-1 text-white/90">۸۰۶.۷۴ دوج کوین</p>
        </div>
      </div>
    </div>
  );
}
