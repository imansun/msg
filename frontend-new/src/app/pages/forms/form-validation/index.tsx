// Local Imports
import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { Yup } from "./Yup";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "اعتبارسنجی فرم" },
];

const markdownPath = "forms/form-validation";

const demos: Demo[] = [
  {
    title: "فرم واک (React Hook Form)",
    description:
      "<a href='https://react-hook-form.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>React Hook Form</a> یک کتابخانه عالی برای اعتبارسنجی فرم‌ها در ری‌اکت است. این کتابخانه کم‌حجم بوده و وابستگی اضافی ندارد. علاوه بر عملکرد مناسب، استفاده از آن نیز بسیار ساده است و توسعه‌دهندگان می‌توانند با تعداد خطوط کد کمتر نسبت به دیگر کتابخانه‌ها، اعتبارسنجی فرم را پیاده‌سازی کنند.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "نمونه یاپ (Yup Example)",
    description:
      "<a href='https://github.com/jquense/yup' class='text-primary-600 dark:text-primary-400 hover:underline'>Yup</a> یک کتابخانه قدرتمند برای ساخت شماتیک اعتبارسنجی و تجزیه ارزش‌ها در زمان اجرا است. این کتابخانه به شما اجازه می‌دهد تا یک شماتیک تعریف کرده، داده‌ها را به شکل مورد انتظار تبدیل کنید و شکل ساختاری داده‌ها را تضمین نمایید.",
    Component: Yup,
    markdownName: "Yup",
  },
];

export default function FormValidation() {
  return (
    <DemoLayout
      title="اعتبارسنجی فرم"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
