// Types for Blog Card 8
export interface Post {
  uid: string;
  cover: string;
  created_at: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export const posts: Post[] = [
  {
    uid: "1",
    cover: "/images/objects/object-2.jpg",
    created_at: "۴ خرداد ۱۴۰۱",
    title: "غذا: یک تعریف ساده",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. آیا نیاز به دفع حملات ضروری است؟",
    author: {
      name: "جان دو",
      avatar: "/images/avatar/avatar-10.jpg",
    },
  },
  {
    uid: "2",
    cover: "/images/objects/object-1.jpg",
    created_at: "۹ خرداد ۱۴۰۱",
    title: "نمونه کارت Tailwind CSS",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم. لورم ایپسوم متن ساختگی.",
    author: {
      name: "کانر گوزمان",
      avatar: "/images/avatar/avatar-16.jpg",
    },
  },
  {
    uid: "3",
    cover: "/images/objects/object-3.jpg",
    created_at: "۲۰ خرداد ۱۴۰۱",
    title: "PHP چیست؟",
    description:
      "چگونه به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توییت‌ها روایت می‌شود.",
    author: {
      name: "تراویس فولر",
      avatar: "/images/avatar/avatar-20.jpg",
    },
  },
  {
    uid: "4",
    cover: "/images/objects/object-4.jpg",
    created_at: "۲۹ خرداد ۱۴۰۱",
    title: "برترین سیستم‌های طراحی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. معمار مسئول.",
    author: {
      name: "Amir",
      avatar: undefined,
    },
  },
  {
    uid: "5",
    cover: "/images/objects/object-5.jpg",
    created_at: "۵ تیر ۱۴۰۱",
    title: "برترین سیستم‌های طراحی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. معمار مسئول.",
    author: {
      name: "کاترینا وست",
      avatar: "/images/avatar/avatar-11.jpg",
    },
  },
  {
    uid: "6",
    cover: "/images/objects/object-6.jpg",
    created_at: "۲۲ خرداد ۱۴۰۱",
    title: "چگونه به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توییت‌ها روایت می‌شود.",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: {
      name: "هنری کرتیس",
      avatar: "/images/avatar/avatar-13.jpg",
    },
  },
  {
    uid: "7",
    cover: "/images/objects/object-7.jpg",
    created_at: "۹ تیر ۱۴۰۱",
    title: "الگوهای طراحی NodeJS",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: {
      name: "Reza",
      avatar: undefined,
    },
  },
  {
    uid: "8",
    cover: "/images/objects/object-8.jpg",
    created_at: "۱۲ تیر ۱۴۰۱",
    title: "۳۱۳ ایده الگو و رنگ",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: {
      name: "کانر گوزمان",
      avatar: "/images/avatar/avatar-1.jpg",
    },
  },
  {
    uid: "9",
    cover: "/images/objects/object-9.jpg",
    created_at: "۱۷ تیر ۱۴۰۱",
    title: "۲۵ حقیقت شگفت‌انگیز درباره صندلی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.",
    author: {
      name: "سلنا گومز",
      avatar: "/images/avatar/avatar-11.jpg",
    },
  },
  {
    uid: "10",
    cover: "/images/objects/object-10.jpg",
    created_at: "۲۰ خرداد ۱۴۰۱",
    title: "PHP چیست؟",
    description:
      "چگونه به اینجا رسیدیم؟ تاریخچه موسیقی از طریق توییت‌ها روایت می‌شود.",
    author: {
      name: "تراویس فولر",
      avatar: "/images/avatar/avatar-19.jpg",
    },
  },
  {
    uid: "11",
    cover: "/images/objects/object-11.jpg",
    created_at: "۲۰ شهریور ۱۴۰۱",
    title: "غذا: یک تعریف ساده",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. آیا نیاز به دفع حملات ضروری است؟",
    author: {
      name: "جان دو",
      avatar: "/images/avatar/avatar-10.jpg",
    },
  },
  {
    uid: "12",
    cover: "/images/objects/object-12.jpg",
    created_at: "۴ خرداد ۱۴۰۱",
    title: "نمونه کارت Tailwind CSS",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم. لورم ایپسوم متن ساختگی.",
    author: {
      name: "کانر گوزمان",
      avatar: "/images/avatar/avatar-20.jpg",
    },
  },
];
