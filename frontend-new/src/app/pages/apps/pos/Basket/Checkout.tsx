// Import Dependencies
import {
  CreditCardIcon,
  QrCodeIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function Checkout() {
  return (
    <div>
      <div className="my-4 h-px bg-gray-200 dark:bg-dark-500"></div>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-800 dark:text-dark-100">
          <p>جمع جزء</p>
          <p className="font-medium tracking-wide">۵۵٬۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between text-xs-plus">
          <p>مالیات</p>
          <p className="font-medium tracking-wide">۵٬۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between text-base font-medium text-primary-600 dark:text-primary-400">
          <p>جمع کل</p>
          <p>۶۰٬۰۰۰ تومان</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4 text-center">
        <Button variant="outlined" className="flex-col py-3">
          <WalletIcon className="size-10 stroke-1 opacity-80" />
          <span className="mt-1 text-primary-600 dark:text-primary-400">
            نقدی
          </span>
        </Button>
        <Button variant="outlined" className="flex-col py-3">
          <CreditCardIcon className="size-10 stroke-1 opacity-80" />
          <span className="mt-1 text-primary-600 dark:text-primary-400">
            کارت
          </span>
        </Button>
        <Button variant="outlined" className="flex-col py-3">
          <QrCodeIcon className="size-10 stroke-1 opacity-80" />
          <span className="mt-1 text-primary-600 dark:text-primary-400">
            اسکن
          </span>
        </Button>
      </div>
      <Button color="primary" className="mt-5 h-11 w-full justify-between">
        <span>تسویه</span>
        <span>۸۸٬۰۰۰ تومان</span>
      </Button>
    </div>
  );
}
