// Local Imports
import { Card } from "@/components/ui";
import Logo from "@/assets/appLogo.svg?react";
import LogoType from "@/assets/logotype.svg?react";
import TailwindIcon from "@/assets/tailwind.svg?react";
import ReactIcon from "@/assets/react.svg?react";
import HeadlessIcon from "@/assets/headlessui.svg?react";
import ReactRouterIcon from "@/assets/react-router-dom.svg?react";

// ----------------------------------------------------------------------

interface Technology {
  Logo: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const technologies: Technology[] = [
  {
    Logo: TailwindIcon,
    label: "تِیلویند سی‌اس‌اس",
    href: "https://tailwindcss.com/",
  },
  {
    Logo: ReactIcon,
    label: "ری‌اکت",
    href: "https://react.dev/",
  },
  {
    Logo: HeadlessIcon,
    label: "هدلس یوآی",
    href: "https://headlessui.com/",
  },
  {
    Logo: ReactRouterIcon,
    label: "ری‌اکت روتر",
    href: "https://reactrouter.com/",
  },
];

export function Hero() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card className="p-4 text-sm text-balance sm:p-5">
        <div className="flex items-center gap-3">
          <Logo className="text-primary-600 dark:text-primary-400 size-10" />
          <LogoType className="dark:text-dark-50 h-5 w-auto text-gray-800" />
        </div>
        <p className="mt-4">
          Tailux یک کیت رابط کاربری (UI Kit) قدرتمند و چندمنظوره برای پنل ادمین و وب‌اپ پایه ری‌اکت (جاوااسکریپت و تایپ‌اسکریپت) و فریم‌ورک TailwindCSS است. این کیت شامل مجموعه گسترده‌ای از کامپوننت‌های قابل استفاده مجدد، لایه‌بندی‌ها، فرم‌ها، داشبردها، دیتاتیبل‌های کاملاً کاربردی، و قالب‌های وب‌اپ می‌باشد. Tailux یک UI Kit مدرن، منعطف، بسیار واکنش‌گرا و قدرتمند است که برای ساخت برنامه‌های وب پیشرفته طراحی شده است. چه قصد توسعه پلتفرم SaaS، پنل مدیریت اختصاصی، داشبرد، CRM، CMS، سیستم مدیریت آموزش (LMS)، اپلیکیشن‌های مبتنی بر هوش مصنوعی، ابزارهای ارز دیجیتال، راهکارهای بانکی یا پلتفرم‌های فروشگاهی را داشته باشید، Tailux انتخاب مناسبی است.
        </p>
      </Card>
      <div className="grid grid-cols-2 gap-5">
        {technologies.map(({ Logo, label, href }) => (
          <Card
            key={label}
            className="relative flex flex-col justify-center overflow-hidden p-4"
          >
            <div>
              <Logo className="mx-auto h-8" />
            </div>
            <p className="mt-3 text-center text-base font-medium">{label}</p>
            <a href={href} className="absolute inset-0 hover:bg-white/5"></a>
          </Card>
        ))}
      </div>
    </div>
  );
}
