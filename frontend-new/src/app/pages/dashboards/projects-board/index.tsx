// Import Dependencies
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Page } from "@/components/shared/Page";
import { Avatar, Badge, Box, Button, Progress } from "@/components/ui";

// ----------------------------------------------------------------------

export default function ProjectsBoard() {
  return (
    <Page title="تابلوی پروژه‌ها">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <div className="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-start">
          <div>
            <h3 className="dark:text-dark-100 text-xl font-semibold text-gray-800">
              تابلوی پروژه‌ها
            </h3>
            <p className="mt-1 hidden sm:block">
              لیست پروژه‌های در حال انجام شما
            </p>
          </div>
          <Button
            color="primary"
            isGlow
            className="h-10 space-x-2 whitespace-nowrap"
          >
            <PlusIcon className="size-4.5 shrink-0" />
            <span>پروژه جدید</span>
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="bg-warning flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/hand-write-laptop.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus text-white/90">۱۱ اردیبهشت ۱۴۰۰</p>
                </div>
                <h3 className="mt-3 line-clamp-2 font-medium text-white">
                  اپلیکیشن موبایل
                </h3>
                <p className="text-xs-plus text-white/90">نمونه‌سازی</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus text-white">پیشرفت</p>
                  <Progress
                    value={78}
                    unstyled
                    classNames={{
                      root: "my-2 h-1.5 bg-white/30",
                      bar: "bg-white",
                    }}
                  />
                  <p className="text-xs-plus text-end font-medium text-white">
                    ۷۸٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: "text-xs-plus ring-warning ring-3",
                    }}
                    src="/images/avatar/avatar-1.jpg"
                  />

                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: "text-xs-plus ring-warning ring-3",
                    }}
                    name="جان دو"
                    initialColor="info"
                  />

                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-18.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display: "text-xs-plus ring-warning ring-3",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    unstyled
                    className="badge text-xs-plus h-5.5 rounded-full bg-black/20 px-2 text-white"
                  >
                    ۱ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    unstyled
                    className="size-8 rounded-full text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/25 ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:info bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/design-sm.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۱۴ خرداد ۱۴۰۰</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  طراحی سیستم مدیریت یادگیری
                </h3>
                <p className="text-xs-plus">طراحی UI/UX</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={32}
                    color="info"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۳۲٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-1.jpg"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    name="جان دو"
                    initialColor="info"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-18.jpg"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="info"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۲ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:secondary bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/man-tablet.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۵ آبان ۱۴۰۰</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  اپلیکیشن چت موبایل
                </h3>
                <p className="text-xs-plus">نمونه‌سازی</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={64}
                    color="secondary"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۶۴٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-6.jpg"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    name="امیلی کلارک"
                    initialColor="secondary"
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-20.jpg"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="secondary"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۶ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:success bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/dashboard.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۲۵ شهریور ۱۴۰۰</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  داشبورد فروشگاه
                </h3>
                <p className="text-xs-plus">طراحی UI/UX</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={45}
                    color="success"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۴۵٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-6.jpg"
                  />
                  <Avatar
                    size={7}
                    className="origin-bottom transition-transform hover:z-10 hover:scale-125"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    name="سلنا گومز"
                    initialColor="success"
                  />

                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    src="/images/avatar/avatar-11.jpg"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="success"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۳ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:error bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/ai-technology-brain.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۱۴ دی ۱۳۹۹</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  اپلیکیشن بازار NFT
                </h3>
                <p className="text-xs-plus">نمونه‌سازی</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={69}
                    color="error"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۶۹٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-3.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    initialColor="error"
                    name="لئو کلارک"
                  />
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-17.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="error"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۴ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:primary bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/mobile-social.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۱۹ اردیبهشت ۱۴۰۰</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  اپلیکیشن موبایل
                </h3>
                <p className="text-xs-plus">نمونه‌سازی</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={56}
                    color="primary"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۵۶٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-15.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                  <Avatar
                    size={7}
                    color="primary"
                    name="لئو کلارک"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />

                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-13.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="primary"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۲ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:warning bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/man-tablet.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۱۴ دی ۱۳۹۹</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  طراحی اپلیکیشن LMS
                </h3>
                <p className="text-xs-plus">طراحی UI/UX</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={78}
                    color="warning"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۷۸٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-20.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    name="جان دو"
                    initialColor="warning"
                  />
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-20.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="warning"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۲ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>

          <Box className="dark:bg-dark-700 flex flex-col rounded-lg bg-white">
            <Box className="this:info bg-this/[.15] flex flex-1 flex-col justify-between rounded-lg p-4 sm:p-5 dark:bg-transparent">
              <div>
                <div className="flex items-start justify-between">
                  <img
                    className="size-12 rounded-lg object-cover object-center"
                    src="/images/technology/design-sm.jpg"
                    alt="کاور"
                  />
                  <p className="text-xs-plus">۱۴ خرداد ۱۴۰۰</p>
                </div>
                <h3 className="dark:text-dark-100 mt-3 line-clamp-2 font-medium text-gray-800">
                  طراحی سیستم مدیریت یادگیری
                </h3>
                <p className="text-xs-plus">طراحی UI/UX</p>
              </div>
              <div>
                <div className="mt-4">
                  <p className="text-xs-plus dark:text-dark-100 text-gray-800">
                    پیشرفت
                  </p>
                  <Progress
                    value={25}
                    color="info"
                    classNames={{
                      root: "my-2 h-1.5",
                    }}
                  />
                  <p className="text-xs-plus text-this dark:text-this-lighter text-end font-medium">
                    ۲۵٪
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap -space-x-2">
                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-3.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />

                  <Avatar
                    size={7}
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                    name="جان دو"
                    initialColor="info"
                  />

                  <Avatar
                    size={7}
                    src="/images/avatar/avatar-17.jpg"
                    classNames={{
                      root: "origin-bottom transition-transform hover:z-10 hover:scale-125",
                      display:
                        "text-xs-plus dark:ring-dark-700 ring-3 ring-white",
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <Badge
                    color="info"
                    className="text-xs-plus h-5.5 rounded-full px-2"
                  >
                    ۱ هفته باقی مانده
                  </Badge>
                  <Button
                    isIcon
                    variant="flat"
                    className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                  >
                    <Cog6ToothIcon className="size-5" />
                  </Button>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </Page>
  );
}
