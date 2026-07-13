// Local Imports
import { MainPanel } from "@/app/layouts/MainLayout/Sidebar/MainPanel";
import { useNavigation } from "@/app/navigation";
import { SidebarPanel } from "./SidebarPanel";

// ----------------------------------------------------------------------

export function Sidebar() {
  const navigation = useNavigation();
  return (
    <>
      <MainPanel nav={navigation} activeSegmentPath="/apps" />
      <SidebarPanel />
    </>
  );
}
