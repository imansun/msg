import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function Internationalization() {
  return (
    <section>
      <h3
        id="internationalization"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="بین‌المللی‌سازی"
        data-order="2"
      >
        <a href="#internationalization">بین‌المللی‌سازی</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <p className="inline-code">
          Tailux از برنامه‌های چندزبانه پشتیبانی می‌کند و اجازه می‌دهد تنظیمات بین‌المللی‌سازی از طریق فایل <code>src/i18n/config.ta</code> سفارشی‌سازی شوند.
          فایل‌های ترجمه را می‌توانید در پوشه <code>src/i18n/locales/</code> اضافه یا به‌روزرسانی کنید. همچنین لازم است فایل <code>src/i18n/langs.ts</code> را برای افزودن یا حذف پیکربندی‌های انتخابگر تاریخ، قالب‌بندی تاریخ، پرچم‌ها و فایل‌های ترجمه ویرایش نمایید.
        </p>
        <div className="text-sm">
          <SyntaxHighlighter language="javascript">
            {`export const locales = {
    en: {
        label: "English",
        dayjs: () => import('dayjs/locale/en'),
        flatpickr: null,
        i18n: () => import("./locales/en/translations.json"),
        flag: 'united-kingdom'
    },
    // ...
}`}
          </SyntaxHighlighter>
        </div>
        <p className="inline-code">
          برای تغییر زبان، از هوک <code>useLocaleContext</code> در کامپوننت‌های خود استفاده کنید. همچنین می‌توانید از هوک <code>useTranslation</code> برای دسترسی به رشته‌های ترجمه استفاده نمایید.
        </p>
      </div>
    </section>
  );
}
