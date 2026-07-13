export interface Post {
  uid: string;
  cover: string;
  category: string;
  title: string;
  description: string;
  author: {
    uid: string;
    avatar?: string;
    name: string;
    username: string;
  };
  tags: string[];
  viewCount: number;
  created_at: string;
}

export const posts: Post[] = [
  {
    uid: "1",
    cover: "/images/objects/object-6.jpg",
    category: "فریم‌ورک‌ها",
    title: "Tailwind CSS چیست؟",
    description:
      "Tailwind CSS یک فریم‌ورک CSS کاربردی است که به شما اجازه می‌دهد به سرعت رابط‌های کاربری مدرن و واکنش‌گرا بسازید. این فریم‌ورک با استفاده از کلاس‌های آماده، توسعه رابط کاربری را ساده‌تر و سریع‌تر می‌کند.",
    author: {
      uid: "1",
      avatar: "/images/avatar/avatar-10.jpg",
      name: "جان دو",
      username: "@johndoe",
    },
    tags: ["پی‌اچ‌پی", "ری‌اکت‌جی‌اس", "نکست‌جی‌اس"],
    viewCount: 237,
    created_at: "۳۷ دقیقه پیش",
  },
  {
    uid: "2",
    cover: "/images/objects/object-3.jpg",
    category: "فریم‌ورک‌ها",
    title: "نمونه کارت Tailwind CSS",
    description:
      "در این مثال، نحوه ساخت یک کارت زیبا با استفاده از Tailwind CSS را مشاهده می‌کنید. این کارت‌ها برای نمایش پست‌ها یا محصولات بسیار مناسب هستند.",
    author: {
      uid: "2",
      avatar: "/images/avatar/avatar-2.jpg",
      name: "کانر گوزمان",
      username: "@konnorguzman",
    },
    tags: ["تیلوایندسی‌اس‌اس", "رمیکس‌جی‌اس", "آلپاین‌جی‌اس"],
    viewCount: 479,
    created_at: "۲ ساعت پیش",
  },
  {
    uid: "3",
    cover: "/images/objects/object-4.jpg",
    category: "زبان برنامه‌نویسی",
    title: "PHP چیست؟",
    description:
      "پی‌اچ‌پی یک زبان برنامه‌نویسی سمت سرور است که برای توسعه وب استفاده می‌شود. این زبان به دلیل سادگی و انعطاف‌پذیری، محبوبیت زیادی در بین توسعه‌دهندگان دارد.",
    author: {
      uid: "3",
      avatar: "/images/avatar/avatar-1.jpg",
      name: "تراویس فولر",
      username: "@travisfuller",
    },
    tags: ["برنامه‌نویسی شی‌گرا", "لاراول", "نکست‌جی‌اس"],
    viewCount: 665,
    created_at: "۲ روز پیش",
  },
  {
    uid: "4",
    cover: "/images/objects/object-7.jpg",
    category: "رابط کاربری/تجربه کاربری",
    title: "برترین سیستم‌های طراحی",
    description:
      "سیستم‌های طراحی به تیم‌ها کمک می‌کنند تا رابط‌های کاربری منسجم و قابل نگهداری بسازند. در این مطلب با چند سیستم طراحی محبوب آشنا می‌شوید.",
    author: {
      uid: "4",
      avatar: "/images/avatar/avatar-20.jpg",
      name: "آلفردو الیوت",
      username: "@alfredorlliott",
    },
    tags: ["سیستم‌طراحی", "متریال‌یوآی", "فلوئنت‌دیزاین"],
    viewCount: 742,
    created_at: "۳ روز پیش",
  },
  {
    uid: "5",
    cover: "/images/objects/object-5.jpg",
    category: "رابط کاربری/تجربه کاربری",
    title: "۳۱۳ ایده الگو و رنگ",
    description:
      "در این مقاله با بیش از ۳۰۰ ایده برای ترکیب رنگ و الگو آشنا می‌شوید که می‌تواند به طراحی‌های شما الهام ببخشد.",
    author: {
      uid: "5",
      avatar: "/images/avatar/avatar-19.jpg",
      name: "دریک سیمونز",
      username: "@derricksimmons",
    },
    tags: ["رنگ‌ها", "طیف", "رنگ‌های گرم"],
    viewCount: 23,
    created_at: "۶ روز پیش",
  },
  {
    uid: "6",
    cover: "/images/objects/object-5.jpg",
    category: "زبان برنامه‌نویسی",
    title: "الگوهای طراحی در NodeJS",
    description:
      "در این مطلب با الگوهای طراحی رایج در NodeJS آشنا می‌شوید که به شما کمک می‌کند کدهای ساختارمندتر و قابل نگهداری‌تری بنویسید.",
    author: {
      uid: "6",
      avatar: "/images/avatar/avatar-11.jpg",
      name: "کاترینا وست",
      username: "@katrinawest",
    },
    tags: ["پی‌اچ‌پی", "نود‌جی‌اس", "جاوااسکریپت"],
    viewCount: 237,
    created_at: "۱۴ روز پیش",
  },
];
