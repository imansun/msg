import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";

export function Prerequisite() {
  return (
    <section>
      <h3
        id="prerequisite"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="پیش‌نیازها"
        data-order="2"
      >
        <a href="#prerequisite">پیش‌نیازها</a>
      </h3>
      <div className="text-sm-plus mt-5">
        <div className="space-y-3">
          <p>
            Tailux بر پایه <strong>ری‌اکت‌جی‌اس (ReactJS)</strong> و <strong>تِیلویند سی‌اس‌اس (Tailwind CSS)</strong> ساخته شده است. برای کار مؤثر با Tailux لازم است که با این فناوری‌ها آشنایی ابتدایی داشته باشید. ری‌اکت به شما امکان توسعه اپلیکیشن‌های وب پویا و تعاملی را می‌دهد و تِیلویند سی‌اس‌اس نیز اجازه استایل‌دهی سریع و مدرن را با استفاده از کلاس‌های کاربردی فراهم می‌کند.
          </p>
          <p>
            علاوه بر ری‌اکت و تِیلویند، دانش اولیه در زمینه HTML، CSS و جاوااسکریپت نیز به شدت توصیه می‌شود. این مهارت‌های پایه توسعه وب به شما کمک می‌کنند تا ساختار، طراحی و تعاملات Tailux را بهتر درک و شخصی‌سازی کنید.
          </p>
          <p>
            برای توسعه، استفاده از یک ویرایشگر کد یا محیط توسعه یکپارچه (IDE) معتبر مانند <strong>ویژوال استودیو کد (Visual Studio Code)</strong> یا <strong>وب‌استورم (WebStorm)</strong> جهت تجربه بهتر کدنویسی توصیه می‌شود.
          </p>
          <p>
            برای شروع، مطمئن شوید <strong>Node.js</strong> بر روی سیستم شما نصب است. پیشنهاد می‌شود از نسخه LTS نود جی‌اس استفاده نمایید. همچنین به یک مدیر وابستگی مانند npm یا yarn نیاز خواهید داشت که <strong>yarn</strong> گزینه پیشنهادی برای Tailux است.
          </p>
        </div>
        <div className="mt-8">
          <p>برای اطمینان از نصب Node.js، دستور زیر را اجرا کنید:</p>
          <SyntaxHighlighter language="bash">node -v</SyntaxHighlighter>
        </div>
        <div className="mt-8">
          <p>برای اطمینان از نصب yarn، دستور زیر را اجرا کنید:</p>
          <SyntaxHighlighter language="bash">yarn -v</SyntaxHighlighter>
        </div>
        <div className="mt-8 space-y-3">
          <p>
            برای استفاده از جدیدترین امکانات، رفع باگ‌ها و به‌روزرسانی‌های امنیتی، مهم است که همیشه changelog (تاریخچه تغییرات) و نسخه‌های جدید فناوری‌های اصلی استفاده‌شده در Tailux را دنبال کنید:
          </p>
          <ul className="space-y-3">
            <li>
              <strong>ری‌اکت‌جی‌اس (ReactJS):</strong> برای اطلاع از ویژگی‌ها و تغییرات جدید، <a href="https://react.dev/blog" className="text-primary-600 dark:text-primary-400 hover:underline">بلاگ ری‌اکت</a> را بررسی کنید.
            </li>
            <li>
              <strong>تِیلویند سی‌اس‌اس (Tailwind CSS):</strong> برای مشاهده آخرین تغییرات در کلاس‌ها، تنظیمات و افزونه‌ها، <a href="https://tailwindcss.com/blog" className="text-primary-600 dark:text-primary-400 hover:underline">بلاگ تِیلویند</a> را دنبال کنید.
            </li>
            <li>
              <strong>Tailux:</strong> برای اطلاع از قابلیت‌ها و راهکارهای جدید مخصوص این فریم‌ورک، <a href="/docs/changelogs" className="text-primary-600 dark:text-primary-400 hover:underline">تاریخچه تغییرات Tailux</a> را مطالعه کنید.
            </li>
          </ul>
          <p>
            دنبال‌کردن این به‌روزرسانی‌ها موجب می‌شود از آخرین امکانات بهره‌مند شوید و روند توسعه شما روان و کارآمد باقی بماند.
          </p>
        </div>
      </div>
    </section>
  );
}
