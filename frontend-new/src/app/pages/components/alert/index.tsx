// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { Dismissible } from "./Dismissible";
import { Extended } from "./Extended";
import { Loop } from "./Loop";
import { Outlined } from "./Outlined";
import { SoftColor } from "./SoftColor";
import { WithIcon } from "./WithIcon";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "هشدار" },
];

const markdownPath = "components/alert";

const demos: Demo[] = [
  {
    title: "هشدار ساده (Basic Alert)",
    description:
      "کامپوننت هشدار برای انتقال اطلاعات مهم به کاربر از طریق نوع‌های متنی، آیکون و رنگ‌های مختلف استفاده می‌شود.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "هشدار با رنگ ملایم (Soft Color Alert)",
    description:
      "هشدارها می‌توانند رنگ‌های ملایم داشته باشند. برای این کار باید از مقدار شفافیت استفاده کنید. توضیحات نحوهٔ استفاده را در کد مشاهده نمایید.",
    Component: SoftColor,
    markdownName: "SoftColor",
  },
  {
    title: "هشدار حاشیه‌دار (Outlined Alert)",
    description:
      "هشدارها می‌توانند به صورت حاشیه‌دار نمایش داده شوند. توضیحات بیشتر را در کد ببینید.",
    Component: Outlined,
    markdownName: "Outlined",
  },
  {
    title: "هشدار با آیکون (Alert With Icon)",
    description:
      "می‌توانید آیکون‌ها را نیز به هشدار اضافه کنید. برای مشاهدهٔ نحوهٔ استفاده به کد مراجعه کنید.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "هشدار توسعه یافته (Extended Alert)",
    description:
      "نمونه‌های هشدار توسعه یافته (Callout). برای مشاهدهٔ جزئیات به کد مراجعه نمایید.",
    Component: Extended,
    markdownName: "Extended",
  },
  {
    title: "هشدار قابل بستن (Dismissible Alert)",
    description:
      "هشدارها می‌توانند قابل بستن باشند. توضیحات بیشتر در کد موجود است.",
    Component: Dismissible,
    markdownName: "Dismissible",
  },
  {
    title: "هشدار با متن متحرک (Loop Text Alert)",
    description:
      "نمایش بنر متحرک با استفاده از <a href='https://npmjs.com/package/react-fast-marquee' class='text-primary-600 dark:text-primary-400 hover:underline'>react-fast-marquee</a>. توضیحات بیشتر را در کد ببینید.",
    Component: Loop,
    markdownName: "Loop",
  },
];

export default function Alert() {
  return (
    <DemoLayout
      title="هشدار"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
