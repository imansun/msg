import { ElementType } from "react";
import { To } from "react-router";

import Creativedesign from "@/assets/illustrations/creativedesign-amber.svg?react";
import Performance from "@/assets/illustrations/performance-indigo.svg?react";
import Responsive from "@/assets/illustrations/responsive-rose.svg?react";

export interface Item {
  id: number;
  title: string;
  Image: ElementType;
  colorClasses: string;
  description: string;
  action: To;
  actionLabel: string;
}

export const items: Item[] = [
  {
    id: 1,
    title: "طراحی خلاقانه",
    Image: Creativedesign,
    colorClasses: "from-amber-400 to-orange-600",
    description:
      "با طراحی خلاقانه، پروژه‌های خود را به سطح جدیدی ببرید و تجربه‌ای منحصر به فرد خلق کنید.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
  {
    id: 2,
    title: "کاملاً واکنش‌گرا",
    Image: Responsive,
    colorClasses: "from-pink-500 to-rose-500",
    description:
      "اپلیکیشن شما در هر دستگاهی به زیبایی نمایش داده می‌شود و تجربه کاربری عالی ارائه می‌دهد.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
  {
    id: 3,
    title: "عملکرد بالا",
    Image: Performance,
    colorClasses: "from-purple-500 to-indigo-600",
    description:
      "با عملکرد سریع و بهینه، کاربران خود را راضی نگه دارید و بهترین نتیجه را کسب کنید.",
    action: "/",
    actionLabel: "شروع طراحی",
  },
];
