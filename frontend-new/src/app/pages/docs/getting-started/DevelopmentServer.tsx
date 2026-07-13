import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function DevelopmentServer() {
  return (
    <section>
      <h3
        id="development-server"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="سرور توسعه"
        data-order="2"
      >
        <a href="#development-server">سرور توسعه</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <p>
          پس از نصب تمام وابستگی‌های موردنیاز، می‌توانید سرور توسعه را با اجرای دستور زیر در ترمینال خود راه‌اندازی کنید:
        </p>
        <div className="text-sm">
          <SyntaxHighlighter language="bash">yarn dev</SyntaxHighlighter>
        </div>
        <p>
          پس از اجرای سرور، مرورگر خود را باز کنید و به آدرس{" "}
          <a
            href="http://localhost:5173/"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            http://localhost:5173/
          </a>{" "}
          مراجعه نمایید. با هر تغییری که در فایل‌های پروژه ایجاد کنید، برنامه به‌صورت خودکار بروزرسانی شده و تجربه توسعه روانی برای شما فراهم می‌شود.
        </p>
      </div>
    </section>
  );
}
