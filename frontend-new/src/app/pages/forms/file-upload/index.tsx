// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Reset } from "./Reset";
import { InputView } from "./InputView";
import { Preview } from "./Preview";
import { Multiple } from "./Multiple";
import { Dropzone } from "./Dropzone";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "آپلود فایل" },
];

const markdownPath = "forms/file-upload";

const demos: Demo[] = [
  {
    title: "آپلود فایل ساده (Basic File Upload)",
    description:
      "کامپوننت <code>Upload</code> به شما اجازه می‌دهد تا فایل‌ها را از کاربر دریافت کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "ریست آپلود فایل (Reset File Upload)",
    description:
      "می‌توانید فایل‌های انتخاب‌شده را از کامپوننت آپلود پاک کنید. برای جزئیات بیشتر کد را مشاهده کنید.",
    Component: Reset,
    markdownName: "Reset",
  },
  {
    title: "آپلود فایل با ورودی (Input View Upload)",
    description:
      "می‌توانید کامپوننت <code>Input</code> را با کامپوننت <code>Upload</code> ترکیب کنید. برای جزئیات بیشتر کد را مشاهده کنید.",
    Component: InputView,
    markdownName: "InputView",
  },
  {
    title: "پیش‌نمایش فایل (File Preview)",
    description: "آپلود فایل با قابلیت نمایش پیش‌نمایش فایل.",
    Component: Preview,
    markdownName: "Preview",
  },
  {
    title: "آپلود چندگانه (Multiple Upload)",
    description: "آپلود و پیش‌نمایش چند فایل به صورت همزمان.",
    Component: Multiple,
    markdownName: "Multiple",
  },
  {
    title: "درگ اند دراپ (Dropzone)",
    description:
      "می‌توانید با استفاده از کامپوننت <code>Upload</code> و هوک <code>useDropzone</code> یک Dropzone ایجاد کنید.",
    Component: Dropzone,
    markdownName: "Dropzone",
  },
];

export default function FileUpload() {
  return (
    <DemoLayout
      title="آپلود فایل"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
