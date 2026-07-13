import { Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { Basic } from "./Basic";
import { returns } from "./returns";
import { params } from "./params";
import { MergeRefs } from "./MergeRefs";
import { AssignRef } from "./AssignRef";

import { BreadcrumbItem } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "هوک‌ها", path: "/docs/hooks" },
  { title: "هوک ارجاع ترکیبی" },
];

const demos: Demo[] = [
  {
    title: "مثال پایه (Basic)",
    description:
      "<code>useMergedRef</code> می‌تواند هر تعداد ref را بپذیرد و تابعی را بازمی‌گرداند که باید به prop مربوط به ref ارسال شود.",
    Component: Basic,
  },
  {
    title: "ادغام ارجاع‌ها (mergeRefs)",
    description:
      "تابع <code>mergeRefs</code> دقیقاً مشابه <code>useMergedRef</code> عمل می‌کند با این تفاوت که به صورت داخلی از هوک‌ها استفاده نمی‌کند. فقط زمانی استفاده کنید که امکان استفاده از <code>useMergedRef</code> را ندارید.",
    Component: MergeRefs,
  },
  {
    title: "ارجاع دهی دستی (assignRef)",
    description:
      "از تابع <code>assignRef</code> می‌توان برای مقداردهی refهایی که با useCallback مموی نشده‌اند استفاده کرد. معمولاً برای ارجاع به مقادیری غیر از عناصر (elements) کاربرد دارد.",
    Component: AssignRef,
  },
];

export default function UseMergedRef() {
  return (
    <DemoLayout
      title="هوک ارجاع ترکیبی"
      breadcrumbs={breadcrumbs}
      demos={demos}
      hasPadding={false}
      returns={returns}
      params={params}
    />
  );
}
