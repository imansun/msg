import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

export const adminNav: NavigationTree = {
  ...baseNavigationObj["admin"],
  type: "root",
  childs: [
    {
      id: "admin.dashboard",
      path: "/admin/dashboard",
      type: "item",
      title: "داشبورد",
      transKey: "nav.admin.dashboard",
      icon: "dashboards.sales",
    },
    {
      id: "admin.users",
      path: "/admin/users",
      type: "item",
      title: "کاربران",
      transKey: "nav.admin.users",
      icon: "dashboards.employees",
    },
    {
      id: "admin.departments",
      path: "/admin/departments",
      type: "item",
      title: "دپارتمان‌ها",
      transKey: "nav.admin.departments",
      icon: "dashboards.workspaces",
    },
    {
      id: "admin.settings",
      path: "/admin/settings",
      type: "item",
      title: "تنظیمات فایل",
      transKey: "nav.admin.settings",
      icon: "settings",
    },
  ],
};
