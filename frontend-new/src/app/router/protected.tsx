import { RouteObject } from "react-router";
import AuthGuard from "@/middleware/AuthGuard";
import AdminGuard from "@/middleware/AdminGuard";
import { DynamicLayout } from "../layouts/DynamicLayout";
import { AppLayout } from "../layouts/AppLayout";
import HomeRedirect from "./HomeRedirect";

const protectedRoutes: RouteObject = {
  id: "protected",
  Component: AuthGuard,
  children: [
    {
      path: "/admin",
      Component: AdminGuard,
      children: [
        {
          Component: DynamicLayout,
          children: [
            {
              index: true,
              element: <HomeRedirect />,
            },
            {
              path: "dashboard",
              lazy: async () => ({
                Component: (await import("@/app/pages/admin/dashboard")).default,
              }),
            },
            {
              path: "users",
              lazy: async () => ({
                Component: (await import("@/app/pages/admin/users")).default,
              }),
            },
            {
              path: "departments",
              lazy: async () => ({
                Component: (await import("@/app/pages/admin/departments")).default,
              }),
            },
            {
              path: "settings",
              lazy: async () => ({
                Component: (await import("@/app/pages/admin/settings")).default,
              }),
            },
          ],
        },
      ],
    },
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <HomeRedirect />,
        },
      ],
    },
    {
      Component: AppLayout,
      children: [
        {
          path: "/apps/chat",
          lazy: async () => ({
            Component: (await import("@/app/pages/messenger")).default,
          }),
        },
      ],
    },
  ],
};

export { protectedRoutes };
