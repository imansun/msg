// Local Imports
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

// Import Dependencies
import Logo from "@/assets/appLogo.svg?react";
import DashboardMeet from "@/assets/illustrations/dashboard-meet.svg?react";
import { Button, Checkbox, Input } from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";
import { CSSProperties } from "react";

// ----------------------------------------------------------------------

export default function SignUpV2() {
  const {
    primaryColorScheme: primary,
    lightColorScheme: light,
    darkColorScheme: dark,
    isDark,
  } = useThemeContext();

  return (
    <main className="min-h-100vh flex">
      <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
        <div className="flex items-center gap-2">
          <Logo className="size-12" />
          <p className="dark:text-dark-100 text-xl font-semibold text-gray-800 uppercase">
            تلویکس
          </p>
        </div>
      </div>
      <div className="hidden w-full place-items-center lg:grid">
        <div className="w-full max-w-lg p-6">
          <DashboardMeet
            style={
              {
                "--primary": primary[500],
                "--dark-600": isDark ? dark[600] : light[700],
                "--dark-450": dark[450],
              } as CSSProperties
            }
            className="w-full"
          />
        </div>
      </div>
      <div className="border-gray-150 dark:bg-dark-700 flex w-full flex-col items-center bg-white lg:max-w-md ltr:border-l rtl:border-r dark:border-transparent">
        <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
          <div className="text-center">
            <Logo className="mx-auto size-16 lg:hidden" />
            <div className="mt-4 lg:mt-0">
              <h2 className="dark:text-dark-100 text-2xl font-semibold text-gray-600">
                به تلویکس خوش آمدید
              </h2>
              <p className="dark:text-dark-300 text-gray-400">
                لطفاً برای ادامه ثبت‌نام کنید
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4">
            <Button className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/logos/google.svg"
                alt="logo"
              />
              <span>گوگل</span>
            </Button>
            <Button className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/logos/github.svg"
                alt="logo"
              />
              <span>گیت‌هاب</span>
            </Button>
          </div>
          <div className="text-tiny-plus my-7 flex items-center">
            <div className="dark:bg-dark-500 h-px flex-1 bg-gray-200"></div>
            <p className="mx-3">یا با ایمیل ثبت‌نام کنید</p>
            <div className="dark:bg-dark-500 h-px flex-1 bg-gray-200"></div>
          </div>
          <form className="mt-2">
            <div className="space-y-4">
              <Input
                unstyled
                placeholder="نام کاربری"
                className="bg-gray-150 focus:ring-primary-500/50 dark:bg-dark-900 dark:placeholder:text-dark-200/70 rounded-lg px-3 py-2 transition-colors placeholder:text-gray-400 focus:ring-3"
                prefix={
                  <UserIcon
                    className="size-5 transition-colors duration-200"
                    strokeWidth="1"
                  />
                }
              />
              <Input
                unstyled
                placeholder="ایمیل"
                type="email"
                className="bg-gray-150 focus:ring-primary-500/50 dark:bg-dark-900 dark:placeholder:text-dark-200/70 rounded-lg px-3 py-2 transition-colors placeholder:text-gray-400 focus:ring-3"
                prefix={
                  <EnvelopeIcon
                    className="size-5 transition-colors duration-200"
                    strokeWidth="1"
                  />
                }
              />
              <Input
                unstyled
                type="password"
                placeholder="رمز عبور"
                className="bg-gray-150 focus:ring-primary-500/50 dark:bg-dark-900 dark:placeholder:text-dark-200/70 rounded-lg px-3 py-2 transition-colors placeholder:text-gray-400 focus:ring-3"
                prefix={
                  <LockClosedIcon
                    className="size-5 transition-colors duration-200"
                    strokeWidth="1"
                  />
                }
              />
              <Input
                unstyled
                type="password"
                placeholder="تکرار رمز عبور"
                className="bg-gray-150 focus:ring-primary-500/50 dark:bg-dark-900 dark:placeholder:text-dark-200/70 rounded-lg px-3 py-2 transition-colors placeholder:text-gray-400 focus:ring-3"
                prefix={
                  <LockClosedIcon
                    className="size-5 transition-colors duration-200"
                    strokeWidth="1"
                  />
                }
              />
              <div className="flex gap-1">
                <Checkbox label="با" />
                <a
                  href="##"
                  className="dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100 text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800"
                >
                  سیاست حفظ حریم خصوصی
                </a>
                <span>موافقم</span>
              </div>
            </div>
            <Button color="primary" className="mt-8 h-10 w-full">
              ثبت‌نام
            </Button>
          </form>
          <div className="text-xs-plus mt-4 text-center">
            <p className="line-clamp-1">
              <span>قبلاً حساب کاربری دارید؟</span>{" "}
              <Link
                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600 transition-colors"
                to="/pages/sign-in-v2"
              >
                ورود
              </Link>
            </p>
          </div>
        </div>

        <div className="dark:text-dark-300 mb-3 flex justify-center text-xs text-gray-400">
          <a href="##">سیاست حفظ حریم خصوصی</a>
          <div className="dark:bg-dark-500 mx-2.5 my-0.5 w-px bg-gray-200"></div>
          <a href="##">شرایط استفاده</a>
        </div>
      </div>
    </main>
  );
}
