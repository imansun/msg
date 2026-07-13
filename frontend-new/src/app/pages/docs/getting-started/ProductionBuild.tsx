import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function ProductionBuild() {
  return (
    <section>
      <h3
        id="production-build"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="ساخت نسخه نهایی"
        data-order="2"
      >
        <a href="#production-build">ساخت نسخه نهایی</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <div>
          <p>برای آماده‌سازی پروژه خود برای محیط تولید، مراحل زیر را دنبال کنید:</p>
          <ul className="mt-5 list-outside list-disc space-y-5">
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>ساخت پروژه:</strong>
              <p className="mt-1">
                برای تولید نسخه نهایی پروژه، دستور زیر را اجرا کنید:
              </p>
              <div className="mt-4 text-sm">
                <SyntaxHighlighter language="bash">
                  yarn build
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>پوشه خروجی:</strong>
              <p className="inline-code mt-1">
                فایل‌های بهینه‌شده پروژه در پوشه{" "}
                <code>dist/</code>
                قرار می‌گیرند. این پوشه شامل فایل‌های کم‌حجم شده و آماده بارگذاری روی سرور تولید است.
              </p>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>پیش‌نمایش نسخه نهایی:</strong>
              <p className="mt-1">
                برای بررسی نسخه تولیدی به صورت محلی، دستور زیر را اجرا کنید:
              </p>
              <div className="mt-4 text-sm">
                <SyntaxHighlighter language="bash">
                  yarn preview
                </SyntaxHighlighter>
              </div>
            </li>
            <li className="ltr:ml-4 rtl:mr-4">
              <strong>دیپلوی (استقرار):</strong>
              <p className="inline-code mt-1">
                محتوای پوشه <code>dist/</code> را روی سرویس میزبانی مورد نظر خود مثل Vercel، Netlify یا هر پلتفرم استاتیک دیگر قرار دهید.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
