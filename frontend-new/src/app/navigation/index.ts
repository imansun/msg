import { NavigationTree } from "@/@types/navigation";
import { useAuthContext } from "@/app/contexts/auth/context";
import { apps } from "./segments/apps";
import { adminNav } from "./segments/dashboards";

export function getNavigation(isAdmin?: boolean): NavigationTree[] {
  const items: NavigationTree[] = [];
  if (isAdmin) items.push(adminNav);
  items.push(apps);
  return items;
}

export function useNavigation(): NavigationTree[] {
  const { user } = useAuthContext();
  return getNavigation(user?.isAdmin);
}
