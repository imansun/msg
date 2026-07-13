import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "ایجاد Context ایمن" },
];

const demos: Demo[] = [
  {
    title: "استفاده (Usage)",
    description:
      "تابع <code>createSafeContext</code> یک ابزار برای ایجاد کانتکس در React است که دسترسی ایمن به مقدار آن را تضمین می‌کند. این تابع ایجاد کانتکس را ساده می‌کند و اطمینان می‌دهد که مقدار کانتکس تنها زمانی که Provider مربوطه در درخت کامپوننت‌ها وجود دارد، مورد دسترسی قرار گیرد.",
    Component: Usage,
  },
];


export default function CreateSafeContext() {
  return (
    <DemoLayout
      title="ایجاد Context ایمن"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
