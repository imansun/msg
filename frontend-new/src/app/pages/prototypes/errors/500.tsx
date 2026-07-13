// Imports Dependencies
import { CSSProperties } from "react";

// Local Imports
import RepairServer from "@/assets/illustrations/repair-server.svg?react";
import { Page } from "@/components/shared/Page";
import { useThemeContext } from "@/app/contexts/theme/context";

// ----------------------------------------------------------------------

export default function Error500() {
  const {
    primaryColorScheme: primary,
    lightColorScheme: light,
    darkColorScheme: dark,
    isDark,
  } = useThemeContext();

  return (
    <Page title="خطای ۵۰۰">
      <main className="min-h-100vh relative grid w-full grow grid-cols-1 place-items-center p-4">
        <div className="w-full max-w-[26rem] text-center">
          <RepairServer
            className="w-full"
            style={
              {
                "--primary": primary[500],
                "--dark-400": isDark ? dark[400] : light[500],
                "--dark-600": isDark ? dark[600] : light[700],
              } as CSSProperties
            }
          />
          <p className="text-primary-600 dark:text-primary-500 pt-8 text-7xl font-bold">
            ۵۰۰
          </p>
          <p className="dark:text-dark-50 pt-4 text-xl font-semibold text-gray-800">
            خطای داخلی سرور
          </p>
          <p className="dark:text-dark-200 pt-2 text-balance text-gray-500">
            سرور برای مدتی بدون پاسخ بوده است. لطفاً شکیبا باشید یا بعداً دوباره تلاش کنید.
          </p>
        </div>
      </main>
    </Page>
  );
}
