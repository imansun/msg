// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Left } from "./Left";
import { Right } from "./Right";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "کشو" },
];

const markdownPath = "components/drawer";

const demos: Demo[] = [
  {
    title: "کشوی سمت چپ (Left Drawer)",
    description:
      "<code>Drawer</code> مشابه مودال است، با این تفاوت که موقعیت قرارگیری آن متفاوت است. برای جزئیات استفاده کد را بررسی کنید.",
    Component: Left,
    markdownName: "Left",
  },
  {
    title: "کشوی سمت راست (Right Drawer)",
    description:
      "نمونه‌ای از <code>Drawer</code> با موقعیت راست. برای مشاهده جزئیات استفاده، کد را مشاهده کنید.",
    Component: Right,
    markdownName: "Right",
  },
  {
    title: "کشوی بالا (Top Drawer)",
    description:
      "نمونه‌ای از <code>Drawer</code> با موقعیت بالا. برای مشاهده نحوه استفاده، کد را ببینید.",
    Component: Top,
    markdownName: "Top",
  },
  {
    title: "کشوی پایین (Bottom Drawer)",
    description:
      "نمونه‌ای از <code>Drawer</code> با موقعیت پایین. برای اطلاعات بیشتر، کد استفاده را بررسی کنید.",
    Component: Bottom,
    markdownName: "Bottom",
  },
];

export default function Drawer() {
  return (
    <DemoLayout
      title="کشو"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
