// Local Imports
import { DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Styled } from "./Styled";
import { StyledHighlight } from "./StyledHighlight";
import { StyledError } from "./StyledError";
import { StyledMultiple } from "./StyledMultiple";
import { WithIcon } from "./WithIcon";
import { SelectUsers } from "./SelectUsers";

// ----------------------------------------------------------------------

const breadcrumbs = [
  { title: "فرم‌ها", path: "/forms" },
  { title: "تکمیل خودکار" },
];

const markdownPath = "forms/autocomplete";

const demos = [
  {
    title: "نمونه استایل شده (Styled Example)",
    description:
      "با استفاده از نمونه استایل شده، می‌توانید کمبوباکس‌ها را سریع‌تر و آسان‌تر ایجاد کنید.",
    Component: Styled,
    markdownName: "Styled",
  },
  {
    title: "انتخاب چندتایی (Styled Multiple)",
    description:
      "با نمونه انتخاب چندتایی، می‌توانید مقادیر <code>multiple</code> را در تکمیل خودکار خود انتخاب کنید.",
    Component: StyledMultiple,  
    markdownName: "StyledMultiple",
  },
  {
    title: "حالت خطا (Styled Error)",
    description:
      "می‌توانید با استفاده از prop <code>error</code>، حالت خطا را برای تکمیل خودکار خود تعیین کنید.",
    Component: StyledError,
    markdownName: "StyledError",
  },
  {
    title: "برجسته‌کردن کوئری (Styled Highlight Query)",
    description:
      "می‌توانید کوئری را در منوی کشویی تکمیل خودکار خود با prop <code>highlight</code> برجسته کنید.",
    Component: StyledHighlight,
    markdownName: "StyledHighlight",
  },
  {
    title: "با آیکون (With Icon)",
    description: "می‌توانید برای خواناتر شدن یک آیکون به تکمیل خودکار اضافه کنید.",
    Component: WithIcon,
    markdownName: "WithIcon",
  },
  {
    title: "انتخاب کاربران (Select Users)",
    description:
      "برای فعال‌سازی انتخاب چند مقدار در تکمیل خودکار، از prop <code>multiple</code> استفاده کنید و به‌جای یک گزینه منفرد یک آرایه به value بدهید.",
    Component: SelectUsers, 
    markdownName: "SelectUsers",
  },
];

export default function Autocomplete() {
  return (
    <DemoLayout
      title="تکمیل خودکار"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
