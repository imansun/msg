// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Advanced } from "./Advanced";
import { Styled } from "./Styled";
import { StyledError } from "./StyledError";
import { StyledMultiple } from "./StyledMultiple";
import { WithIcon } from "./WithIcon";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "لیست‌باکس" },
];

const markdownPath = "forms/listbox";

const demos: Demo[] = [
  {
    title: "مثال استایل‌دهی شده (Styled Example)",
    description:
      "با استفاده از لیست‌باکس استایل‌دهی شده، می‌توانید کامپوننت انتخاب را سریع‌تر و آسان‌تر بسازید.",
    Component: Styled,
    markdownName: "Styled",
  },
  {
    title: "انتخاب چندگانه استایل‌دهی شده (Styled Multiple)",
    description:
      "با استفاده از لیست‌باکس استایل‌دهی شده، می‌توانید کامپوننت انتخاب را سریع‌تر و آسان‌تر بسازید.",
    Component: StyledMultiple,
    markdownName: "StyledMultiple",
  },
  {
    title: "حالت خطا در استایل‌دهی (Styled Error State)",
    description:
      "با استفاده از لیست‌باکس استایل‌دهی شده، می‌توانید کامپوننت انتخاب را سریع‌تر و آسان‌تر بسازید.",
    Component: StyledError,
    markdownName: "StyledError",
  },
  {
    title: "همراه با آیکون (With Icon)",
    description:
      "می‌توانید یک آیکون به لیست‌باکس اضافه کنید تا خوانایی بیش‌تری داشته باشد.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "مثال پیشرفته (Advanced Example)",
    description: "یک مثال پیشرفته و پیچیده‌تر.",
    Component: Advanced,
    markdownName: "Advanced",
  },
];

export default function Listbox() {
  return (
    <DemoLayout
      title="لیست‌باکس"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
