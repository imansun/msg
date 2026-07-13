import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "@/app/contexts/auth/context";

export default function AdminGuard() {
  const { user } = useAuthContext();

  if (!user?.isAdmin) {
    return <Navigate to="/apps/chat" replace />;
  }

  return <Outlet />;
}
