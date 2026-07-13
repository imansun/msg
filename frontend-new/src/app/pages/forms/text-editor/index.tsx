// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Controlled } from "./Controlled";
import { Modules } from "./Modules";
import { MinMaxHeight } from "./MinMaxHeight";
import { Error } from "./Error";
import { Instance } from "./Instance";
import { ConvertHtmlToDelta } from "./ConvertHtmlToDelta";
import { WithLabel } from "./WithLabel";
import { ExternalModule } from "./ExternalModule";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "ویرایشگر متن" },
];

const markdownPath = "forms/text-editor";

const demos: Demo[] = [
  {
    title: "ویرایشگر متنی پایه (Basic Texteditor)",
    description:
      "<a href='https://quilljs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Quill.js</a> یک ویرایشگر WYSIWYG رایگان و متن‌باز است که برای وب مدرن ساخته شده. این ویرایشگر متن غنی، جهت سازگاری و قابلیت گسترش طراحی شده است.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "ویرایشگر با برچسب (With Label Texteditor)",
    description:
      "می‌توانید با استفاده از پراپرتی <code>label</code> برای ویرایشگر متن برچسب قرار دهید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: WithLabel,
    markdownName: "WithLabel",
  },
  {
    title: "ویرایشگر کنترل‌شده (Controlled Texteditor)",
    description:
      "Quill تغییرات را به‌صورت داخلی مدیریت می‌کند و اجازه جلوگیری از ویرایش را نمی‌دهد. TextEditor رویکردی ترکیبی بین حالت کنترل‌شده و کنترل‌نشده دارد و در صورتی که مقدار با وضعیت فعلی متفاوت باشد، محتوا را مجدداً مقداردهی می‌کند. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Controlled,
    markdownName: "Controlled",
  },
  {
    title: "ماژول‌های سفارشی (Custom Modules)",
    description:
      "می‌توانید ماژول‌های موجود در نوار ابزار را با پراپرتی <code>modules</code> شخصی‌سازی کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Modules,
    markdownName: "Modules",
  },
  {
    title: "با حداکثر و حداقل ارتفاع (With Min & Max Height)",
    description:
      "می‌توانید با استفاده از کلاس‌های کاربردی Tailwind CSS، حداکثر و حداقل ارتفاع ویرایشگر را تعیین کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: MinMaxHeight,
    markdownName: "MinMaxHeight",
  },
  {
    title: "حالت خطا (Error State)",
    description:
      "برای نمایش حالت خطا کافی است پراپرتی <code>error</code> را تنظیم کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Error,
    markdownName: "Error",
  },
  {
    title: "دسترسی به شئ Quill (Access Quill Instance)",
    description:
      "می‌توانید نمونه Quill را با متد <code>getQuillInstance</code> از طریق رفرنـس دریافت کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Instance,
    markdownName: "Instance",
  },
  {
    title: "ماژول خارجی (External Module)",
    description:
      "امکان افزودن افزونه‌ها و ماژول‌های جانبی Quill وجود دارد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: ExternalModule,
    markdownName: "ExternalModule",
  },
  {
    title: "تبدیل HTML به دلتا کویل (Convert HTML to Quill Delta)",
    description:
      "با استفاده از <code>htmlToDelta</code> می‌توانید HTML را به شئ دلتا Quill تبدیل کنید. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: ConvertHtmlToDelta,
    markdownName: "ConvertHtmlToDelta",
  },
];

export default function TextEditor() {
  return (
    <DemoLayout
      title="ویرایشگر متن"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
