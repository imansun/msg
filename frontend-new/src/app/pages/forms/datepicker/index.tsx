// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Disabled } from "./Disabled";
import { Multiple } from "./Multiple";
import { Range } from "./Range";
import { Datetimepicker } from "./Datetimepicker";
import { Timepicker } from "./Timepicker";
import { Calendar } from "./Calendar";
import { Controlled } from "./Controlled";
import { Instance } from "./Instance";
import { Error } from "./Error";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/datepicker" },
  { title: "تاریخ‌نگار" },
];

const markdownPath = "forms/datepicker";

const demos: Demo[] = [
  {
    title: "تاریخ‌نگار ساده (Basic Datepicker)",
    description:
      "<a href='https://flatpickr.js.org/' class='text-primary-600 dark:text-primary-400 hover:underline'>flatpickr</a> یک ابزار سبک و قدرتمند برای انتخاب تاریخ و زمان است. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "تاریخ غیرفعال (Disabled Date)",
    description: `<div class="space-y-2">
      <p>اگر می‌خواهید برخی تاریخ‌ها برای انتخاب غیرفعال باشند، روش‌های مختلفی وجود دارد.</p>
      <p class="font-medium">غیرفعالسازی یک تاریخ خاص</p>
      <p class="font-medium">غیرفعالسازی بازه‌ای از تاریخ‌ها</p>
      <p class="font-medium">غیرفعالسازی تاریخ‌ها با استفاده از تابع</p>
      <p>همه این موارد با گزینه disable قابل انجام است.</p>
      </div>`,
    Component: Disabled,
    markdownName: "Disabled",
  },
  {
    title: "انتخاب چند تاریخ (Multiple Date)",
    description:
      "امکان انتخاب چند تاریخ وجود دارد. برای نحوه استفاده، کد را مشاهده کنید.",
    Component: Multiple,
    markdownName: "Multiple",
  },
  {
    title: "بازه تاریخ (Range)",
    description:
      "با استفاده از تقویم بازه، بازه‌ای از تاریخ‌ها را انتخاب کنید. برای جزئیات بیشتر، کد را بررسی کنید.",
    Component: Range,
    markdownName: "Range",
  },
  {
    title: "تاریخ و زمان‌نگار (Date and Timepicker)",
    description:
      "با فعال کردن قابلیت زمان، می‌توانید تاریخ و زمان را انتخاب کنید. برای جزئیات، کد را مشاهده کنید.",
    Component: Datetimepicker,
    markdownName: "Datetimepicker",
  },
  {
    title: "زمان‌نگار (Timepicker)",
    description: "امکان انتخاب فقط زمان. برای مشاهده جزئیات استفاده، کد را بررسی کنید.",
    Component: Timepicker,
    markdownName: "Timepicker",
  },
  {
    title: "تاریخ‌نگار کنترل‌شده (Controlled Datepicker)",
    description: "تاریخ‌نگار کنترل‌شده. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "نمونه (Instance)",
    description: "نمونه‌ای از تاریخ‌نگار. برای مشاهده جزئیات کد را بررسی کنید.",
    Component: Instance,
    markdownName: "Instance",
  },
  {
    title: "حالت خطا (Error)",
    description: "تاریخ‌نگار با حالت خطا. برای مشاهده جزئیات، کد را بررسی کنید.",
    Component: Error,
    markdownName: "Error",
  },
  {
    title: "حالت تقویم (Calendar)",
    description:
      "حالت تقویم، با تنظیم prop <code>isCalendar={true}</code> فعال می‌شود. برای مشاهده جزئیات، کد را ببینید.",
    Component: Calendar,
    markdownName: "Calendar",
  },
];

export default function Datepicker() {
  return (
    <DemoLayout
      title="تاریخ‌نگار"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
