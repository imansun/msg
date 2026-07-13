import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function Starter() {
  return (
    <section>
      <h3
        id="starter"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="شروع‌کننده"
        data-order="2"
      >
        <a href="#starter">شروع‌کننده</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <p>مراحل افزودن یک صفحه جدید:</p>
        <ul className="list-outside list-disc space-y-5">
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>نام صفحه خود را تعیین کنید</strong>
            <div className="inline-code mt-2">
              یک نام برای صفحه‌تان انتخاب کنید. برای مثال: <code>Example</code>
            </div>
          </li>
          <li className="ltr:ml-4 rtl:mr-4">
            <strong>فایل صفحه را ایجاد کنید</strong>
            <ul className="mt-5 list-outside list-disc space-y-4">
              <li className="ltr:ml-4 rtl:mr-4">
                <div>
                  به مسیر <code>src/app/pages/dashboards</code> بروید
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <div className="inline-code">
                  پوشه و فایل صفحه‌تان را ایجاد کنید. مانند:{" "}
                  <code>example/index.tsx</code>
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <div>
                  داخل فایل، تابعی با همان نام صفحه‌تان تعریف کنید:
                </div>
                <div className="text-sm">
                  <SyntaxHighlighter language="jsx">{`import { Page } from "@/components/shared/Page";

export default function Home() {
  return (
    <Page title="Example">
      <div className="transition-content w-full px-(--margin-x) pt-5 lg:pt-6">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50">
            Example Page
          </h2>
        </div>
      </div>
    </Page>
  );
}`}</SyntaxHighlighter>
                </div>
              </li>
            </ul>
          </li>

          <li className="ltr:ml-4 rtl:mr-4">
            <strong>صفحه را به نویگیشن اضافه کنید</strong>
            <ul className="mt-5 list-outside list-disc space-y-4">
              <li className="ltr:ml-4 rtl:mr-4">
                <div className="inline-code">
                  فایل <code>src/app/navigation/dashboards.ts</code> را باز کنید.
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <div>یک شیء برای صفحه خود اضافه کنید:</div>
                <div className="text-sm">
                  <SyntaxHighlighter language="js">
                    {`export const dashboards = {
    // ...
    childs: [
        // ...
        {
            id: 'dashboards.example', // Unique identifier
            path: 'dashboards/example', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'Example', // Title
            transKey: 'nav.dashboards.example', // Translation key (optional)
            Icon: ExampleIcon, // Icon component (optional)
        },
    ],
};`}
                  </SyntaxHighlighter>
                </div>
              </li>
            </ul>
          </li>

          <li className="ltr:ml-4 rtl:mr-4">
            <strong>صفحه را به روتر اضافه کنید</strong>
            <ul className="mt-5 list-outside list-disc space-y-4">
              <li className="ltr:ml-4 rtl:mr-4">
                <div>
                  تصمیم بگیرید که صفحه شما عمومی (public)، محافظت شده (protected)، یا شبح (ghost) باشد.
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <div className="inline-code">
                  به فایل روتری مرتبط بروید، مثلا
                  <code>src/app/router/protected.tsx.</code>
                </div>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <div>مسیری برای صفحه خود اضافه کنید:</div>
                <div className="text-sm">
                  <SyntaxHighlighter language="jsx">
                    {`const protectedRoutes = {
  id: "protected",
  Component: AuthGuard,
  children: [
    {
      Component: DynamicLayout,
      children: [
        {
          path: "dashboards",
          children: [
            // ...
            {
              path: "example",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/example")).default,
              }),
            },
          ],
        },
      ],
    },
  ],
};

export { protectedRoutes };`}
                  </SyntaxHighlighter>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          تبریک می‌گوییم! شما با موفقیت یک صفحه جدید اضافه کردید. اکنون می‌توانید این صفحه را مطابق نیاز خود بررسی و سفارشی‌سازی کنید.
        </p>
      </div>
    </section>
  );
}
