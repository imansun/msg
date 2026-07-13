// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Basic } from "./Basic";
import { CustomIcon } from "./CustomIcon";
import { WithInput } from "./WithInput";
import { componentProps } from "./props";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "راهنمای متنی" },
];

const markdownPath = "components/contextual-help";

const demos: Demo[] = [
  {
    title: "ساده (Basic)",
    description:
      "کامپوننت <code>ContextualHelp</code> به کاربر اطلاعات بیشتری درباره وضعیت کامپوننت مجاور یا به صورت کلی نمایش می‌دهد. برای جزئیات بیشتر به کد مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
  {
    title: "آیکن سفارشی (Custom Icon)",
    description:
      "آیکن راهنمای <code>ContextualHelp</code> به صورت سفارشی. برای مشاهده جزئیات استفاده به کد مراجعه کنید.",
    Component: CustomIcon,
    markdownName: "CustomIcon",
  },
  {
    title: "با ورودی (With Input)",
    description:
      "ادغام کامپوننت ورودی (Input) با <code>ContextualHelp</code>. برای مشاهده جزئیات استفاده به کد مراجعه کنید.",
    Component: WithInput,
    markdownName: "WithInput",
  },
];

export default function ContextualHelp() {
  return (
    <DemoLayout
      title="راهنمای متنی"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
      componentProps={componentProps}
    />
  );
}
