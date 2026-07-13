import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

const ROOT_APPS = "/apps";
const path = (root: string, item: string) => `${root}${item}`;

export const apps: NavigationTree = {
  ...baseNavigationObj["chat"],
  type: "root",
  childs: [
    {
      id: "apps.chat",
      path: path(ROOT_APPS, "/chat"),
      type: "item",
      title: "چت عمومی",
      transKey: "nav.apps.chat",
      icon: "apps.chat",
    },
  ],
};
