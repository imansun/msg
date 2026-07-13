// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Horizontal } from "./Horizontal";
import { HorizontalWithoutText } from "./HorizontalWithoutText";
import { Vertical } from "./Vertical";
import { VerticalWithoutText } from "./VerticalWithoutText";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "جداکننده" },
];

const markdownPath = "components/divider";

const demos: Demo[] = [
  {
    title: "جداکننده عمودی (Vertical Divider)",
    Component: Vertical,
    markdownName: "Vertical",
  },
  {
    title: "جداکننده عمودی بدون متن (Vertical Divider Without Text)",
    Component: VerticalWithoutText,
    markdownName: "VerticalWithoutText",
  },
  {
    title: "جداکننده افقی (Horizontal Divider)",
    Component: Horizontal,
    markdownName: "Horizontal",
  },
  {
    title: "جداکننده افقی بدون متن (Horizontal Divider Without Text)",
    Component: HorizontalWithoutText,
    markdownName: "HorizontalWithoutText",
  },
];

export default function Divider() {
  return (
    <DemoLayout
      title="جداکننده"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
