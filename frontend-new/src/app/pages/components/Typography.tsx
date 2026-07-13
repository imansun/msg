// Local Imports
import { Card } from "@/components/ui";
import { Page } from "@/components/shared/Page";
import { type BreadcrumbItem, Breadcrumbs } from "@/components/shared/Breadcrumbs";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "تایپوگرافی" },
];

const Typography = () => {
  return (
    <Page title="تایپوگرافی">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <div className="flex items-center !space-x-4 py-5 lg:py-6 rtl:space-x-reverse">
          <h2 className="text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 lg:text-2xl">
            تایپوگرافی
          </h2>
          <div className="hidden self-stretch py-1 sm:flex">
            <div className="h-full w-px bg-gray-300 dark:bg-dark-600"></div>
          </div>
          <Breadcrumbs items={breadcrumbs} className="max-sm:hidden" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          <Card className="p-4 sm:px-5">
            <div className="space-y-4">
              <h1 className="text-3xl">سرتیتر H1</h1>
              <h2 className="text-2xl">سرتیتر H2</h2>
              <h3 className="text-xl">سرتیتر H3</h3>
              <h4 className="text-lg">سرتیتر H4</h4>
              <h5 className="text-base">سرتیتر H5</h5>
              <h6 className="text-sm">سرتیتر H6</h6>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="space-y-4">
              <h1 className="text-3xl font-light">سرتیتر H1</h1>
              <h2 className="text-2xl font-light">سرتیتر H2</h2>
              <h3 className="text-xl font-light">سرتیتر H3</h3>
              <h4 className="text-lg font-light">سرتیتر H4</h4>
              <h5 className="text-base font-light">سرتیتر H5</h5>
              <h6 className="text-sm font-light">سرتیتر H6</h6>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold">سرتیتر H1</h1>
              <h2 className="text-2xl font-semibold">سرتیتر H2</h2>
              <h3 className="text-xl font-semibold">سرتیتر H3</h3>
              <h4 className="text-lg font-semibold">سرتیتر H4</h4>
              <h5 className="text-base font-semibold">سرتیتر H5</h5>
              <h6 className="text-sm font-semibold">سرتیتر H6</h6>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="mt-5 space-y-4">
              <h1 className="text-3xl text-primary-600 dark:text-primary-400">
                سرتیتر H1
              </h1>
              <h2 className="text-2xl text-secondary dark:text-secondary-lighter">
                سرتیتر H2
              </h2>
              <h3 className="text-xl text-info dark:text-info-lighter">
                سرتیتر H3
              </h3>
              <h4 className="text-lg text-success dark:text-success-lighter">
                سرتیتر H4
              </h4>
              <h5 className="text-base text-warning dark:text-warning-lighter">
                سرتیتر H5
              </h5>
              <h6 className="text-sm text-error dark:text-error-lighter">
                سرتیتر H6
              </h6>
            </div>
          </Card>
          <Card className="p-4 sm:px-5 lg:col-span-2">
            <div className="space-y-6">
              <h1 className="text-8xl">نمایش ۱</h1>
              <h1 className="text-7xl">نمایش ۲</h1>
              <h1 className="text-6xl">نمایش ۳</h1>
              <h1 className="text-5xl">نمایش ۴</h1>
              <h1 className="text-4xl">نمایش ۵</h1>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="space-y-3">
              <p>
                <span className="bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-lg font-semibold text-transparent">
                  روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
                </span>
              </p>
              <p>
                <span className="bg-linear-to-r from-green-400 to-fuchsia-400 bg-clip-text text-lg font-semibold text-transparent">
                  روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
                </span>
              </p>
              <p>
                <span className="bg-linear-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-lg font-semibold text-transparent">
                  روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
                </span>
              </p>
              <p>
                <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-lg font-semibold text-transparent">
                  روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
                </span>
              </p>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="space-y-3">
              <p className="text-lg underline">
                روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
              </p>
              <p className="text-lg overline">
                روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
              </p>
              <p className="text-lg line-through">
                روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
              </p>
              <p className="text-lg no-underline">
                روباه قهوه‌ای سریع از روی سگ تنبل می‌پرد.
              </p>
            </div>
          </Card>
          <Card className="p-4 sm:px-5">
            <div className="mt-5">
              <p className="text-sm leading-6">
                من درک هستم، یک مهندس-نجوم مستقر در تتوئین. من دوست دارم سفینه ایکس-وینگ بسازم در
                <a
                  href="https://tailux.piniastudio.com/"
                  className="font-semibold underline decoration-info decoration-2"
                >
                  شرکت من
                </a>
                . خارج از کار، دوست دارم
                <a
                  href="https://tailux.piniastudio.com/"
                  className="font-semibold underline decoration-secondary decoration-2"
                >
                  مسابقه پاد تماشا کنم
                </a>
                و
                <a
                  href="https://tailux.piniastudio.com/"
                  className="decoration-primary font-semibold underline decoration-2"
                >
                  مبارزه با شمشیر نوری
                </a>
                داشته باشم.
              </p>
            </div>
          </Card>

          <Card className="p-4 sm:px-5">
            <div className="mt-5">
              <p className="text-sm leading-6">
                من درک هستم، یک مهندس-نجوم مستقر در
                <a
                  href="https://tailux.piniastudio.com/"
                  className="font-semibold underline decoration-info decoration-wavy decoration-2"
                >
                  تتوئین
                </a>
                . من دوست دارم سفینه ایکس-وینگ بسازم در
                <a
                  href="https://tailux.piniastudio.com/"
                  className="font-semibold underline decoration-info decoration-double decoration-2"
                >
                  شرکت من
                </a>
                . خارج از کار، دوست دارم
                <a
                  href="https://tailux.piniastudio.com/"
                  className="font-semibold underline decoration-secondary decoration-dotted decoration-2"
                >
                  مسابقه پاد تماشا کنم
                </a>
                و
                <a
                  href="https://tailux.piniastudio.com/"
                  className="decoration-primary font-semibold underline decoration-dashed decoration-2"
                >
                  مبارزه با شمشیر نوری
                </a>
                داشته باشم.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Typography;
