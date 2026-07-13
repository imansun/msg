import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function ThemeConfig() {
  return (
    <section>
      <h3
        id="theme-config"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="پیکربندی تم"
        data-order="2"
      >
        <a href="#theme-config">پیکربندی تم</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <div>
          <p className="inline-code">
            فایل <code>src/configs/theme.ts</code> به شما این امکان را می‌دهد که جنبه‌های مختلف پیکربندی تم را شخصی‌سازی کنید، از جمله:
          </p>
          <ul className="mt-5 list-outside list-disc space-y-5">
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>themeMode</strong>
              <div className="mt-2">
                کنترل حالت تم (مثلاً: روشن، تیره یا بر اساس سیستم).
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>isMonochrome</strong>
              <div className="mt-2">فعال یا غیرفعال کردن حالت تک‌رنگ</div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>themeLayout</strong>
              <div className="mt-2">
                انتخاب نوع چیدمان (برای مثال: main-layout یا sideblock).
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>cardSkin</strong>
              <div className="mt-2">
                تنظیم ظاهر کارت‌ها (مثلاً: دارای کادر یا سایه‌دار).
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>darkColorScheme</strong>
              <div className="mt-2">تعیین طرح رنگ برای حالت تیره.</div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>lightColorScheme</strong>
              <div className="mt-2">
                تعیین طرح رنگ برای حالت روشن.
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>primaryColorScheme</strong>
              <div className="mt-2">انتخاب پالت رنگ اصلی.</div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>defaultLang</strong>
              <div className="mt-2">مشخص کردن زبان پیش‌فرض.</div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>fallbackLang</strong>
              <div className="mt-2">تعیین زبان جایگزین در صورت نیاز.</div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>notification</strong>
              <div className="mt-2">
                تنظیمات اعلان از جمله نمایش و موقعیت اعلان‌ها.
              </div>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <SyntaxHighlighter language="js">
            {`import { colors } from "@/constants/colors";  
import { colors } from "@/constants/colors";
import {
  DarkColor,
  LightColor,
  PrimaryColor,
  ThemeConfig,
} from "./@types/theme";

const DEFAULT_DARK_COLOR: DarkColor = "cinder";  
// Options: "cinder", "navy", "mirage", "black", "mint"  

const DEFAULT_LIGHT_COLOR: LightColor = "slate";  
// Options: "slate", "gray", "neutral"  

const DEFAULT_PRIMARY_COLOR: PrimaryColor = "blue";  
// Options: "indigo", "blue", "green", "amber", "purple", "rose"  

// Default theme configuration  
export const defaultTheme: ThemeConfig = {  
    themeMode: "system",  
    // Options: "light", "dark", "system"  
    isMonochrome: false,  
    // If true, the theme uses a monochrome color palette  

    themeLayout: "main-layout",  
    // Options: "main-layout", "sideblock"  
    cardSkin: "bordered",  
    // Options: "bordered", "shadow"  

    // Dark mode color scheme  
    darkColorScheme: {  
        name: DEFAULT_DARK_COLOR,  
        ...colors[DEFAULT_DARK_COLOR],  
    },  

    // Light mode color scheme  
    lightColorScheme: {  
        name: DEFAULT_LIGHT_COLOR,  
        ...colors[DEFAULT_LIGHT_COLOR],  
    },  

    // Primary color scheme  
    primaryColorScheme: {  
        name: DEFAULT_PRIMARY_COLOR,  
        ...colors[DEFAULT_PRIMARY_COLOR],  
    },  

    // Language settings  
    defaultLang: "en",
    fallbackLang: "en", 

    // Notification settings  
    notification: {  
        isExpanded: false,  
        position: "bottom-right",  
        visibleToasts: 4,  
    },  
};`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}
