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
      "تِیلویند CSS یک فریم‌ورک محبوب برای طراحی رابط کاربری است که به توسعه‌دهندگان اجازه می‌دهد به راحتی و با سرعت بالا، رابط‌های کاربری زیبا و واکنش‌گرا بسازند.",
    author: {
      uid: "1",
      avatar: "/images/avatar/avatar-10.jpg",
      name: "جان دو",
      username: "@johndoe",
    },
    tags: ["PHP", "ReactJS", "NextJS"],
    viewCount: 237,
    created_at: "۳۷ دقیقه پیش",
  },
  {
    uid: "2",
    cover: "/images/objects/object-3.jpg",
    category: "فریم‌ورک‌ها",
    title: "نمونه کارت Tailwind CSS",
    description:
      "در این مقاله یک نمونه کارت با استفاده از Tailwind CSS پیاده‌سازی شده است. این کارت برای نمایش اطلاعات مختلف در رابط کاربری کاربرد دارد.",
    author: {
      uid: "2",
      avatar: "/images/avatar/avatar-2.jpg",
      name: "کانر گوزمان",
      username: "@konnorguzman",
    },
    tags: ["TailwindCSS", "RemixJS", "AlpineJS"],
    viewCount: 479,
    created_at: "۲ ساعت پیش",
  },
  {
    uid: "3",
    cover: "/images/objects/object-4.jpg",
    category: "زبان برنامه‌نویسی",
    title: "PHP چیست؟",
    description:
      "PHP یکی از زبان‌های برنامه‌نویسی محبوب برای توسعه وب است که به دلیل سادگی و قدرت بالا، توسط بسیاری از توسعه‌دهندگان استفاده می‌شود.",
    author: {
      uid: "3",
      avatar: "/images/avatar/avatar-1.jpg",
      name: "تراویس فولر",
      username: "@travisfuller",
    },
    tags: ["OOP", "Laravel", "NextJS"],
    viewCount: 665,
    created_at: "۲ روز پیش",
  },
  {
    uid: "4",
    cover: "/images/objects/object-7.jpg",
    category: "رابط کاربری/تجربه کاربری",
    title: "برترین سیستم‌های طراحی",
    description:
      "سیستم‌های طراحی به تیم‌ها کمک می‌کنند تا رابط‌های کاربری منسجم و حرفه‌ای ایجاد کنند. در این مقاله با بهترین سیستم‌های طراحی آشنا می‌شوید.",
    author: {
      uid: "4",
      avatar: "/images/avatar/avatar-20.jpg",
      name: "آلفردو الیوت",
      username: "@alfredorlliott",
    },
    tags: ["DesignSystem", "MaterialUI", "FluentDesign"],
    viewCount: 742,
    created_at: "۳ روز پیش",
  },
  {
    uid: "5",
    cover: "/images/objects/object-5.jpg",
    category: "رابط کاربری/تجربه کاربری",
    title: "۳۱۳ ایده الگو و رنگ",
    description:
      "در این مقاله با بیش از ۳۰۰ ایده برای الگوها و ترکیب رنگ‌ها آشنا می‌شوید که می‌تواند الهام‌بخش طراحی‌های شما باشد.",
    author: {
      uid: "5",
      avatar: "/images/avatar/avatar-19.jpg",
      name: "دریک سیمونز",
      username: "@derricksimmons",
    },
    tags: ["colors", "spectrum", "warmcolors"],
    viewCount: 23,
    created_at: "۶ روز پیش",
  },
  {
    uid: "6",
    cover: "/images/objects/object-5.jpg",
    category: "زبان برنامه‌نویسی",
    title: "الگوهای طراحی در NodeJS",
    description:
      "در این مقاله با الگوهای طراحی رایج در NodeJS آشنا می‌شوید که به بهبود ساختار و کارایی برنامه‌های شما کمک می‌کند.",
    author: {
      uid: "6",
      avatar: "/images/avatar/avatar-11.jpg",
      name: "کاترینا وست",
      username: "@katrinawest",
    },
    tags: ["PHP", "NodeJS", "Javascript"],
    viewCount: 237,
    created_at: "۱۴ روز پیش",
  },
];
