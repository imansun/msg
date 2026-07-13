import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function Installation() {
  return (
    <section>
      <h3
        id="installation"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="نصب"
        data-order="2"
      >
        <a href="#installation">نصب</a>
      </h3>
      <div className="text-sm-plus mt-5">
        <p>
          لطفاً جدیدترین نسخه Tailux را از وبسایت رسمی{" "}
          <a
            href="#"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            ThemeForest
          </a>{" "}
          دانلود کرده و فایل zip را در پوشه پروژه خود استخراج نمایید. پس از استخراج، دو پوشه (درون پوشه‌های js و ts) مشاهده خواهید کرد:
        </p>
        <ul className="mt-5 list-outside list-disc space-y-5">
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>Demo</strong>
            <div className="mt-2">
              این پوشه شامل صفحات نمایشی (دمو) قالب Tailux است. توصیه نمی‌شود از این پوشه در پروژه اصلی خود استفاده کنید، زیرا صرفاً جهت مشاهده و مراجـعـه است.
            </div>
          </li>
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>Starter</strong>
            <div className="mt-2">
              بسته آغازین (Starter) شامل تمام فایل‌های مورد نیاز برای شروع کار با Tailux است. برای توسعه اپلیکیشن خود از این پوشه استفاده کنید.
            </div>
          </li>
        </ul>
        <div>
          <div className="mt-5">
            <p className="inline-code">
              به پوشه <code>starter</code> (که فایل{" "}
              <code>package.json</code> در آن قرار دارد) بروید و برای نصب وابستگی‌ها، دستور زیر را اجرا کنید:
            </p>
            <div className="text-sm">
              <SyntaxHighlighter language="bash">yarn</SyntaxHighlighter>
            </div>
            <p>
              با این کار یک پوشه <code>node_modules</code> در پروژه شما ساخته می‌شود که شامل تمامی وابستگی‌های نصب‌شده است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
