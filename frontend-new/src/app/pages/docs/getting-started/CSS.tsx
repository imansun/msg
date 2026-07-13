import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function CSS() {
  return (
    <section>
      <h3
        id="css"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="استایل"
        data-order="2"
      >
        <a href="#css">استایل</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <p>
          Tailux از فریمورک Tailwind CSS برای استایل‌دهی به کامپوننت‌های خود استفاده می‌کند و بدین واسطه یک سیستم طراحی مدرن و یکپارچه را تضمین می‌کند. همچنین شامل کلاس‌های CSS سفارشی‌شده‌ای برای اجزای خاص و کتابخانه‌های شخص ثالث است.
        </p>
        <p className="inline-code">
          تمامی کلاس‌های CSS به خوبی مستندسازی شده و برای سهولت استفاده طراحی شده‌اند و پیاده‌سازی و شخصی‌سازی استایل‌ها را بسیار ساده می‌کنند. استایل‌های سفارشی با استفاده از قابلیت <code>@apply</code> در Tailwind نوشته شده‌اند که رویکردی تمیز و قابل نگهداری برای استایل‌دهی فراهم می‌کند.
        </p>
        <div className="text-sm">
          <SyntaxHighlighter>
            {`├── styles                     
|   ├── app         
|   |   ├── components             # Styling for core UI components  
|   |   |   └── ...              
|   |   ├── forms                  # Styling for form elements
|   |   |   └── ...              
|   |   ├── vendors                # Styling for third-party library integrations
|   |   |   └── ...              
|   |   └── index.css              # Combines styles from components, forms, and vendors
|   ├── base.css                   # Foundational theme styles
|   ├── index.css                  # Primary CSS entry point 
|   ├── colors.css                 # Theme Colors 
|   ├── layout.css                 # Layout-specific styles (e.g., main-layout, sideblock)
|   └── variants.css               # Styles for color themes and variants`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}
