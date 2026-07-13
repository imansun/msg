import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function Layouts() {
  return (
    <section>
      <h3
        id="layouts"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="چیدمان‌ها"
        data-order="2"
      >
        <a href="#layouts">چیدمان‌ها</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-3">
        <p className="inline-code">
          Tailux دو نوع چیدمان متفاوت را ارائه می‌کند: <code>main-layout</code> و <code>sideblock</code>.
        </p>
        <ul className="mt-5 list-outside list-disc space-y-8">
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>چیدمان اصلی (Main Layout)</strong>
            <div className="mt-2">
              <code>main-layout</code> چیدمان اصلی قالب است و استفاده از آن برای بیشتر پروژه‌ها توصیه می‌شود. این چیدمان ساختاری منظم، انعطاف‌پذیر و مناسب صفحات تنظیمات و اپلیکیشن‌های آماده فراهم می‌کند.
            </div>
            <ul className="mt-5 list-outside list-disc space-y-5">
              <li className="ltr:ml-4 rtl:mr-4">
                <strong>سایدبار اصلی (Main Sidebar)</strong>
                <div className="mt-2">
                  به‌عنوان مرکز اصلی ناوبری عمل می‌کند.
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <strong>سایدبار پنل (Panel Sidebar)</strong>
                <div className="mt-2">
                  بسته به انتخاب شما در سایدبار اصلی، گزینه‌ها یا جزئیات مرتبط را نمایش می‌دهد.
                </div>
              </li>
            </ul>
          </li>
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>چیدمان سایدبلاک (Sideblock Layout)</strong>
            <div className="inline-code mt-2">
              چیدمان <code>sideblock</code> برای اپلیکیشن‌های ساده‌تر، داشبوردها و پنل‌های مدیریت طراحی شده است.
            </div>
            <ul className="mt-5 list-outside list-disc space-y-5">
              <li className="ltr:ml-4 rtl:mr-4">
                <strong>سایدبار (Sidebar)</strong>
                <div className="mt-2">
                  تنها دارای یک سایدبار است و برای پروژه‌هایی که ناوبری ساده‌تر نیاز دارند، کاملاً مناسب می‌باشد.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <p className="inline-code">
          برای اپلیکیشن‌های قدرتمند و دارای امکانات زیاد، <code>main-layout</code> به دلیل انعطاف و سیستم ناوبری کامل، بهترین گزینه است. چیدمان <code>sideblock</code> برای پروژه‌های سبک و ساده که تمرکز بر سادگی و کارایی دارند، انتخاب مناسبی محسوب می‌شود.
        </p>
        <div>
          <p className="inline-code">
            برای تغییر نوع چیدمان می‌توانید مقدار <code>themeLayout</code> را در فایل <code>src/confings/theme.ts</code> ویرایش نمایید.
          </p>
          <div className="mt-4 text-sm">
            <SyntaxHighlighter language="js">
              {`export const defaultTheme = {
    /// ...
    themeLayout: "main-layout",
    /// ...
};`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
