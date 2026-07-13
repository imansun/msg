// Local Imports
import { Page } from "@/components/shared/Page";
import { BreadcrumbItem, Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Search } from "./sections/Search";
import { Menu } from "./sections/Menu";
import { Content } from "./sections/Content";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "صفحات", path: "/pages" },
  { title: "راهنما", path: "/pages/help" },
  { title: "راهنمای نسخه ۱" },
];

export default function Help1() {
  return (
    <Page title="راهنمای نسخه ۱">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <div className="flex items-center space-x-4 py-5 lg:py-6">
          <h2 className="dark:text-dark-50 text-xl font-medium tracking-wide text-gray-800 lg:text-2xl">
            راهنمای نسخه ۱
          </h2>
          <div className="hidden self-stretch py-1 sm:flex">
            <div className="dark:bg-dark-600 h-full w-px bg-gray-300"></div>
          </div>
          <Breadcrumbs items={breadcrumbs} className="max-sm:hidden" />
        </div>
        <Search />

        <div className="mt-20 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          <Menu />
          <Content />
        </div>
      </div>
    </Page>
  );
}
