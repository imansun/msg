// Import Dependencies
import { Fragment, useRef } from "react";
import Cleave from "cleave.js/react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Cog6ToothIcon,
  PlusIcon,
  XMarkIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Badge, Button, Circlebar, Input } from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { ContextualHelp } from "@/components/shared/ContextualHelp";
import { InvoiceTable } from "../components/InvoiceTable";

// ----------------------------------------------------------------------

export default function Billing() {
  return (
    <div className="w-full 2xl:max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        صورتحساب و پرداخت‌ها
      </h5>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        مدیریت صورتحساب‌ها و پرداخت‌های خود را از اینجا انجام دهید. همچنین می‌توانید روش‌های پرداخت خود را از این بخش مدیریت کنید.
      </p>

      <MemberPlan />

      <PaymentMethods />

      <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

      <InvoiceSection />
    </div>
  );
}

function MemberPlan() {
  return (
    <div className="dark:bg-dark-800 mt-5 rounded-lg bg-gray-100 p-4">
      <div className="flex flex-col items-start justify-between sm:flex-row">
        <div>
          <p className="dark:text-dark-100 text-lg font-medium text-gray-800">
            پلن ویژه
          </p>
          <div className="mt-2 flex items-center gap-2">
            <Circlebar
              size={5}
              strokeWidth={12}
              variant="soft"
              value={60}
              color="primary"
              className="flex"
            />
            <p>۱۳۶ / ۳۰۰ روز باقی‌مانده</p>
          </div>
        </div>
        <Button className="mt-6 sm:mt-0" color="primary">
          ارتقاء
        </Button>
      </div>
    </div>
  );
}

function PaymentMethods() {
  const [isOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <p className="dark:text-dark-100 text-base font-medium text-gray-800">
              روش‌های پرداخت
            </p>
            <p className="mt-0.5 text-balance">
              روش‌های پرداخت خود را از این بخش مدیریت کنید.
            </p>
          </div>
          <Button
            onClick={open}
            className="h-8 space-x-2 px-2.5 text-xs whitespace-nowrap"
          >
            <PlusIcon className="size-4" />
            <span>افزودن روش جدید</span>
          </Button>
        </div>
      </div>

      <div className="hide-scrollbar -mx-4 mt-4 flex items-start gap-3 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
        <div className="w-72 shrink-0 rounded-lg bg-linear-to-br from-amber-400 to-orange-600 p-[3px]">
          <div className="dark:bg-dark-700 rounded-lg bg-white p-4 pb-3">
            <div className="flex items-start justify-between">
              <div>
                <img
                  src="/images/payments/cc-visa.svg"
                  className="h-5"
                  alt="logo"
                />
                <div className="mt-2">
                  <p className="dark:text-dark-100 font-medium text-gray-800">
                    تراویس فولر
                  </p>
                  <p className="mt-0.5 text-xs">•••• ۶۹۸۸</p>
                </div>
              </div>
              <Badge
                className="text-tiny-plus h-5 rounded-full uppercase"
                color="primary"
              >
                اصلی
              </Badge>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-xs">منقضی شده ۰۲.۰۶.۲۰۲۴</p>

              <Button
                className="-mr-1 -mb-1 size-6 rounded-full"
                variant="flat"
                isIcon
              >
                <Cog6ToothIcon className="size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="from-info to-info-darker w-72 shrink-0 rounded-lg bg-linear-to-br p-[3px]">
          <div className="dark:bg-dark-700 rounded-lg bg-white p-4 pb-3">
            <div className="flex items-start justify-between">
              <div>
                <img
                  src="/images/payments/cc-mastercard.svg"
                  className="h-5"
                  alt="logo"
                />
                <div className="mt-2">
                  <p className="dark:text-dark-100 font-medium text-gray-800">
                    سامانتا شلتون
                  </p>
                  <p className="mt-0.5 text-xs">•••• ۶۹۸۸</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-xs">منقضی شده ۰۲.۰۶.۲۰۲۴</p>

              <Button
                className="-mr-1 -mb-1 size-6 rounded-full"
                variant="flat"
                isIcon
              >
                <Cog6ToothIcon className="size-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-72 shrink-0 rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 p-[3px]">
          <div className="dark:bg-dark-700 rounded-lg bg-white p-4 pb-3">
            <div className="flex items-start justify-between">
              <div>
                <img
                  src="/images/payments/paypal.svg"
                  className="h-5"
                  alt="logo"
                />
                <div className="mt-2">
                  <p className="dark:text-dark-100 font-medium text-gray-800">
                    جان دو
                  </p>
                  <p className="mt-0.5 text-xs">John@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-xs">منقضی شده ۰۲.۰۶.۲۰۲۴</p>

              <Button
                className="-mr-1 -mb-1 size-6 rounded-full"
                variant="flat"
                isIcon
              >
                <Cog6ToothIcon className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AddPaymentModal isOpen={isOpen} onClose={close} />
    </>
  );
}

function InvoiceSection() {
  return (
    <>
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          فاکتورها
        </p>
        <p className="mt-0.5 text-balance">
          لیست فاکتورها. می‌توانید آنها را مشاهده و دانلود کنید.
        </p>
      </div>
      <InvoiceTable />
    </>
  );
}

function AddPaymentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const searchRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        onClose={onClose}
        initialFocus={searchRef}
      >
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity dark:bg-black/30"
        />

        <TransitionChild
          as={DialogPanel}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="dark:bg-dark-700 relative flex w-full max-w-lg origin-bottom flex-col overflow-hidden rounded-lg bg-white transition-all duration-300"
        >
          <div className="dark:bg-dark-800 flex items-center justify-between rounded-t-lg bg-gray-200 px-4 py-3 sm:px-5">
            <DialogTitle
              as="h3"
              className="dark:text-dark-100 text-base font-medium text-gray-800"
            >
              افزودن کارت
            </DialogTitle>
            <Button
              onClick={onClose}
              variant="flat"
              isIcon
              className="size-7 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
            >
              <XMarkIcon className="size-4.5" />
            </Button>
          </div>
          <div className="p-4 sm:px-5">
            <div className="grid grid-cols-1 gap-5">
              <Input
                label="نام دارنده کارت:"
                placeholder="نام دارنده کارت را وارد کنید"
                type="text"
                ref={searchRef}
                prefix={<UserIcon className="size-4.5" />}
              />
              <Input
                label="شماره کارت:"
                placeholder="۴۴۴۴ ۴۴۴۴ ۴۴۴۴ ۴۴۴۴"
                component={Cleave}
                prefix={<CreditCardIcon className="size-4.5" />}
                options={{ creditCard: true }}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  component={Cleave}
                  label="تاریخ انقضاء:"
                  placeholder="ماه/سال"
                  type="text"
                  options={{ date: true, datePattern: ["m", "y"] }}
                />
                <Input
                  component={Cleave}
                  label="کد امنیتی (CVC):"
                  placeholder="***"
                  type="password"
                  maxLength={3}
                  options={{ numeral: true, numeralPositiveOnly: true }}
                  suffix={
                    <ContextualHelp
                      title="کد CVV/CVC"
                      anchor="top end"
                      content={
                        <p>
                          کد CVV (یا CVC) چیست؟ این یک معیار ضد تقلب است که توسط شرکت‌های کارت اعتباری در سراسر جهان استفاده می‌شود. این عدد سه یا چهار رقمی معمولاً روی محل امضا در پشت اکثر کارت‌های اعتباری قرار دارد.
                        </p>
                      }
                    />
                  }
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <Button onClick={onClose} className="min-w-[7rem]">
                انصراف
              </Button>
              <Button
                onClick={onClose}
                color="primary"
                className="min-w-[7rem]"
              >
                ذخیره
              </Button>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
