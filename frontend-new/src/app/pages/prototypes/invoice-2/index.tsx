// Import Dependencies
import { useReactToPrint } from "react-to-print";
import { Cog8ToothIcon, PrinterIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

// Local Imports
import { Page } from "@/components/shared/Page";
import { Button, Card } from "@/components/ui";
import { ItemsTable } from "./ItemsTable";

// ----------------------------------------------------------------------

export default function Invoice2() {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
  });

  return (
    <Page title="نسخه ۲ فاکتور">
      <div
        className="transition-content grid w-full px-(--margin-x) pb-8"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <div className="flex items-center justify-between py-5 lg:py-6">
          <h2 className="dark:text-dark-50 truncate text-xl font-medium text-gray-700 lg:text-2xl">
            فاکتور
          </h2>

          <div className="flex">
            <Button
              onClick={() => handlePrint()}
              className="size-8 rounded-full"
              variant="flat"
              isIcon
            >
              <PrinterIcon className="size-5" />
            </Button>
            <Button className="size-8 rounded-full" variant="flat" isIcon>
              <Cog8ToothIcon className="size-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <Card
            className="flex h-full flex-col px-5 py-12 sm:px-12"
            ref={invoiceRef}
          >
            <div>
              <div className="text-center sm:text-right">
                <h2 className="text-primary-600 dark:text-primary-400 text-2xl font-semibold uppercase">
                  تلویکس
                </h2>
                <div className="space-y-1 pt-2">
                  <p>اسپارک‌سوییت، شرکت</p>
                  <p>خیابان سانی شماره ۱۲۳۴۵</p>
                  <p>سانی‌ویل، کالیفرنیا ۱۲۳۴۵</p>
                </div>
              </div>
            </div>

            <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

            <div className="flex flex-col justify-between sm:flex-row">
              <div className="text-center sm:text-right">
                <h2 className="dark:text-dark-100 text-2xl font-semibold text-gray-600 uppercase">
                  فاکتور
                </h2>
                <div className="space-y-1 pt-2">
                  <p>
                    شماره فاکتور: <span className="font-semibold">۱۲۳</span>
                  </p>
                  <p>
                    تاریخ صدور:{" "}
                    <span className="font-semibold">۲ تیر ۱۴۰۰</span>
                  </p>
                  <p>
                    سررسید: <span className="font-semibold">۱ مرداد ۱۴۰۰</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:text-right">
                <p className="dark:text-dark-100 text-lg font-medium text-gray-600">
                  صادر شده برای:
                </p>
                <div className="space-y-1 pt-2">
                  <p className="font-semibold">جان دو</p>
                  <p>johndoe@example.com</p>
                  <p>خیابان استورم غربی ۲۶۰، نیویورک، نیویورک ۱۰۰۲۵</p>
                </div>
              </div>
            </div>

            <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

            <ItemsTable />

            <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

            <div className="grow"></div>

            <div className="flex flex-col justify-between sm:flex-row">
              <div className="text-center sm:text-right">
                <p className="dark:text-dark-100 text-lg font-medium text-gray-600">
                  روش پرداخت:
                </p>
                <div className="space-y-1 pt-2">
                  <p className="font-medium">ویزا **** **** ۱۲۳۴</p>
                </div>
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:text-right">
                <p className="dark:text-dark-100 text-lg font-medium text-gray-600">
                  جمع کل:
                </p>
                <div className="space-y-1 pt-2">
                  <p>
                    جمع جزء : <span className="font-medium">۷,۳۲۰,۰۰۰ تومان</span>
                  </p>
                  <p>
                    تخفیف : <span className="font-medium">۲۰,۰۰۰ تومان</span>
                  </p>
                  <p>
                    مالیات : <span className="font-medium">۲۰٪</span>
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-lg">
                    جمع کل: <span className="font-medium">۸,۷۸۰,۰۰۰ تومان</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
}
