// Types for Blog Card 5
import { ComponentType } from "react";
import {
  CpuChipIcon,
  CurrencyDollarIcon,
  HomeIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

export interface Post {
  uid: string;
  cover: string;
  category: string;
  CategoryIcon: ComponentType<any>;
  title: string;
  created_at: string;
}

export const posts: Post[] = [
  {
    uid: "1",
    cover: "/images/objects/object-2.jpg",
    category: "تکنولوژی",
    CategoryIcon: CpuChipIcon,
    title: "۱۰ نکته برای بهتر کردن یک دوربین خوب",
    created_at: "۴۸ دقیقه پیش",
  },
  {
    uid: "2",
    cover: "/images/objects/object-3.jpg",
    category: "موسیقی",
    CategoryIcon: MusicalNoteIcon,
    title: "چطور به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توییت‌ها",
    created_at: "یک ساعت پیش",
  },
  {
    uid: "3",
    cover: "/images/objects/object-4.jpg",
    category: "کسب‌وکار",
    CategoryIcon: CurrencyDollarIcon,
    title: "۱۲ نوع بدترین حساب‌های کسب‌وکار که در توییتر دنبال می‌کنید",
    created_at: "یک روز پیش",
  },
  {
    uid: "4",
    cover: "/images/objects/object-9.jpg",
    category: "خانه",
    CategoryIcon: HomeIcon,
    title: "۲۵ حقیقت شگفت‌انگیز درباره صندلی",
    created_at: "۳ روز پیش",
  },
  {
    uid: "5",
    cover: "/images/objects/object-8.jpg",
    category: "خانه",
    CategoryIcon: HomeIcon,
    title: "۱۰ گردهمایی درباره غذا که باید شرکت کنید",
    created_at: "۵ روز پیش",
  },
  {
    uid: "6",
    cover: "/images/objects/object-7.jpg",
    category: "خانه",
    CategoryIcon: HomeIcon,
    title: "غذا: یک تعریف ساده",
    created_at: "۸ روز پیش",
  },
  {
    uid: "7",
    cover: "/images/objects/object-19.jpg",
    category: "تکنولوژی",
    CategoryIcon: CpuChipIcon,
    title: "۱۰ نکته برای بهتر کردن یک دوربین خوب",
    created_at: "۴۸ دقیقه پیش",
  },
  {
    uid: "8",
    cover: "/images/objects/object-15.jpg",
    category: "موسیقی",
    CategoryIcon: MusicalNoteIcon,
    title: "چطور به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توییت‌ها",
    created_at: "یک ساعت پیش",
  },
  {
    uid: "9",
    cover: "/images/objects/object-16.jpg",
    category: "کسب‌وکار",
    CategoryIcon: CurrencyDollarIcon,
    title: "۱۲ نوع بدترین حساب‌های کسب‌وکار که در توییتر دنبال می‌کنید",
    created_at: "یک روز پیش",
  },
];
