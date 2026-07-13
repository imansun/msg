import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Usage } from "./Usage";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "اجرای فلش پس از حرکت" },
];

const demos: Demo[] = [
  {
    title: "نحوه استفاده (Usage)",
    description: "افزودن جلوه‌های بصری به تجربه‌ی کشیدن و رها کردن.",
    Component: Usage,
  },
];

export default function TriggerPostMoveFlash() {
  return (
    <DemoLayout
      title="اجرای فلش پس از حرکت"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
    />
  );
}
