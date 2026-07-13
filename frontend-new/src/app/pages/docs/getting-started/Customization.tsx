import clsx from "clsx";

import { SyntaxHighlighter } from "@/components/shared/SyntaxHighlighter";
import { Button, Card } from "@/components/ui";
import { useToggle } from "@/hooks";
import { ColorKey, setThisClass } from "@/utils/setThisClass";

export function Customization() {
  return (
    <section>
      <h3
        id="customization"
        className="dark:border-dark-500 mt-10 scroll-mt-20 border-b border-gray-200 pb-1 text-lg font-semibold lg:text-2xl"
        data-heading="سفارشی‌سازی"
        data-order="2"
      >
        <a href="#customization">سفارشی‌سازی</a>
      </h3>
      <div className="text-sm-plus mt-5 space-y-4">
        <p>
          Tailux دارای معماری ماژولار است که به شما این امکان را می‌دهد تا تنظیمات مختلفی از جمله: تم، اپلیکیشن، رنگ‌ها، چیدمان و غیره را شخصی‌سازی کنید.
        </p>
        <p className="inline-code">
          برای سفارشی‌سازی مقادیر ثابت تم و اپلیکیشن به{" "}
          <code>src/constants</code> و <code>src/configs</code> مراجعه کنید.
        </p>

        <p className="inline-code">
          اگر می‌خواهید رنگ‌ها را سفارشی‌سازی کنید، می‌توانید فایل‌های
          <code>src/constants/colors.ts</code> و{" "}
          <code>src/styles/colors.css</code> را تغییر دهید.
        </p>

        <div className="inline-code">
          کلاس <code>this</code> برای اشاره به رنگ جاری استفاده می‌شود.
          برای مثال، <code>this:primary</code> رنگ <code>this</code> را به
          رنگ اصلی تنظیم می‌کند. این مورد می‌تواند همراه با Tailwind CSS جهت استایل‌دهی استفاده شود، مانند <code>bg-this dark:bg-this-darker</code>
        </div>
        <Card className="p-4">
          <ThisExample />
        </Card>
        <div className="text-sm">
          <SyntaxHighlighter language="tsx">
            {`import { Button } from "@/components/ui";
import { useToggle } from "@/hooks";
import { setThisClass, type ColorKey } from "@/utils/setThisClass";

function ThisExample() {
  const [value, toggle] = useToggle<ColorKey>([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]);

  return (
    <div>
      <div
        className={clsx(
          setThisClass(value),
          "size-16 rounded-lg bg-this dark:bg-this-light",
        )}
      />

      <Button className="mt-4" onClick={toggle}>
        Toggle
      </Button>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}

function ThisExample() {
  const [value, toggle] = useToggle<ColorKey>([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]);

  return (
    <div>
      <div
        className={clsx(
          setThisClass(value),
          "bg-this dark:bg-this-light size-16 rounded-lg",
        )}
      />

      <Button className="mt-4" onClick={() => toggle()}>
        تغییر وضعیت
      </Button>
    </div>
  );
}
