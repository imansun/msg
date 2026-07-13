import { NavigationTree } from "@/@types/navigation";

export const baseNavigationObj: Record<string, NavigationTree> = {
  admin: {
    id: "admin",
    type: "item",
    path: "/admin",
    title: "مدیریت",
    transKey: "nav.admin",
    icon: "dashboards",
  },
  chat: {
    id: "chat",
    type: "item",
    path: "/apps",
    title: "مسنجر",
    transKey: "nav.chat",
    icon: "apps",
  },
};

export const baseNavigation: NavigationTree[] = Array.from(
  Object.values(baseNavigationObj),
);
