// Imports Dependencies
import { CSSProperties } from "react";

// Local Imports
import WindowCrash from "@/assets/illustrations/window-crash.svg?react";
import { Page } from "@/components/shared/Page";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export default function Error429() {
  const {
    primaryColorScheme: primary,
    lightColorScheme: light,
    darkColorScheme: dark,
    isDark,
  } = useThemeContext();

  return (
    <Page title="خطای ۴۲۹">
      <main className="min-h-100vh relative grid w-full grow grid-cols-1 place-items-center p-4">
        <div className="w-full max-w-[26rem] text-center">
          <WindowCrash
            className="w-full"
            style={
              {
                "--primary": primary[500],
                "--dark-700": isDark ? dark[700] : light[100],
                "--dark-800": isDark ? dark[800] : light[300],
              } as CSSProperties
            }
          />
          <p className="text-primary-600 dark:text-primary-500 pt-6 text-7xl font-bold">
            ۴۲۹
          </p>
          <p className="dark:text-dark-50 pt-4 text-xl font-semibold text-gray-800">
            درخواست‌های بیش از حد
          </p>
          <p className="dark:text-dark-200 pt-2 text-balance text-gray-500">
            شما در مدت زمان کوتاهی درخواست‌های زیادی ارسال کرده‌اید.
            لطفاً کمی صبر کنید و دوباره تلاش کنید.
          </p>
        </div>
      </main>
    </Page>
  );
}
