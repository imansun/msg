// Local Imports
import { BreadcrumbItem, Breadcrumbs } from "@/components/shared/Breadcrumbs";

const breadcrumbs: BreadcrumbItem[] = [
  { title: "مستندات", path: "/docs" },
  { title: "کامپوننت‌های مشترک", path: "/docs/shared-components" },
  { title: "ناوبری مسیر" },
];

export const Basic = () => {
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
};
