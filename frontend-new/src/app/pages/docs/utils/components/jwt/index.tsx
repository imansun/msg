import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { IsTokenValid } from "./IsTokenValid";
import { SetSession } from "./SetSession";
import { returns } from "./returns";
import { params } from "./params";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "توکن JWT" },
];

const demos: Demo[] = [
  {
    title: "تنظیم جلسه (Set session)",
    description: "یک توکن جلسه را در localStorage تنظیم می‌کند.",
    Component: SetSession,
  },
  {
    title: "اعتبار توکن (Is token valid)",
    description: "بررسی می‌کند که آیا توکن معتبر است یا خیر.",
    Component: IsTokenValid,
  },
];


export default function JWT() {
  return (
    <DemoLayout
      title="توکن JWT"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      params={params}
      returns={returns}
    />
  );
}
