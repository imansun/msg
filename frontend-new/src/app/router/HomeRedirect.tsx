import { Navigate } from "react-router";
import { useAuthContext } from "@/app/contexts/auth/context";

export default function HomeRedirect() {
  const { user } = useAuthContext();

  if (user?.isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to="/apps/chat" replace />;
}
