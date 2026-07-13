import { ElementType } from "react";
import { To } from "react-router";

import BoyDashboard from "@/assets/illustrations/boy-dashboard.svg?react";
import GirlDesigning from "@/assets/illustrations/girl-designing.svg?react";
import ResponsiveDevicesGirl from "@/assets/illustrations/responsive-devices-girl.svg?react";

export interface Item {
  id: number;
  title: string;
  Image: ElementType;
  description: string;
  action: To;
  actionLabel: string;
}

export const items: Item[] = [
  {
    id: 1,
    title: "طراحی خلاقانه",
    Image: BoyDashboard,
    description:
      "با طراحی خلاقانه، پروژه‌های خود را به سطح جدیدی ببرید و تجربه‌ای منحصر به فرد خلق کنید.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
  {
    id: 2,
    title: "کاملاً واکنش‌گرا",
    Image: GirlDesigning,
    description:
      "اپلیکیشن شما در هر دستگاهی به زیبایی نمایش داده می‌شود و تجربه کاربری عالی ارائه می‌دهد.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
  {
    id: 3,
    title: "عملکرد بالا",
    Image: ResponsiveDevicesGirl,
    description:
      "با عملکرد سریع و بهینه، کاربران خود را راضی نگه دارید و بهترین نتیجه را کسب کنید.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
];
