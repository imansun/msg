// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "هایلایتر کد" },
];

const markdownPath = "docs/shared-components/SyntaxHightlighterExample";

const demos: Demo[] = [
  {
    title: "نمونه ساده هایلایتر کد (Syntax Highlighter)",
    description:
      "کامپوننت هایلایتر کد برای برجسته‌سازی کدها استفاده می‌شود. برای مشاهده نحوه استفاده، به کد نمونه مراجعه کنید.",
    Component: Basic,
    markdownName: "Basic",
  },
];

const SyntaxHightlighterExample = () => {
  return (
    <DemoLayout
      title="هایلایتر کد"
      breadcrumbs={breadcrumbs}
      demos={demos}
      markdownPath={markdownPath}
      hasPadding={false}
    />
  );
};

export default SyntaxHightlighterExample;
