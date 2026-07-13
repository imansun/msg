export interface Post {
  uid: string;
  cover: string;
  title: string;
  readTime: string;
  author: {
    name: string;
    avatar?: string | null;
  };
}

export const posts: Post[] = [
  {
    uid: "1",
    cover: "/images/objects/object-2.jpg",
    title: "Tailwind CSS چیست؟",
    readTime: "۲ دقیقه مطالعه",
    author: {
      name: "جان د.",
      avatar: "/images/avatar/avatar-20.jpg",
    },
  },
  {
    uid: "2",
    cover: "/images/objects/object-1.jpg",
    title: "نمونه کارت Tailwind CSS",
    readTime: "۵ دقیقه مطالعه",
    author: {
      name: "تراویس ف.",
      avatar: "/images/avatar/avatar-19.jpg",
    },
  },
  {
    uid: "3",
    cover: "/images/objects/object-3.jpg",
    title: "۱۰ نکته برای بهتر کردن یک دوربین خوب",
    readTime: "۴ دقیقه مطالعه",
    author: {
      name: "آلفردو ا.",
      avatar: "/images/avatar/avatar-18.jpg",
    },
  },
  {
    uid: "4",
    cover: "/images/objects/object-4.jpg",
    title: "برترین سیستم‌های طراحی",
    readTime: "۱ دقیقه مطالعه",
    author: {
      name: "کاترینا و.",
      avatar: "/images/avatar/avatar-11.jpg",
    },
  },
  {
    uid: "5",
    cover: "/images/objects/object-5.jpg",
    title: "الگوهای طراحی NodeJS",
    readTime: "۶ دقیقه مطالعه",
    author: {
      name: "A",
      avatar: null,
    },
  },
  {
    uid: "6",
    cover: "/images/objects/object-6.jpg",
    title: "۳۱۳ ایده الگو و رنگ",
    readTime: "۳ دقیقه مطالعه",
    author: {
      name: "دریک اس.",
      avatar: "/images/avatar/avatar-5.jpg",
    },
  },
  {
    uid: "7",
    cover: "/images/objects/object-7.jpg",
    title: "۱۰ نکته برای بهتر کردن یک دوربین خوب",
    readTime: "۱ دقیقه مطالعه",
    author: {
      name: "B",
      avatar: null,
    },
  },
  {
    uid: "8",
    cover: "/images/objects/object-8.jpg",
    title: "۱۲ نوع بدترین حساب‌های تجاری که در توییتر دنبال می‌کنید",
    readTime: "۷ دقیقه مطالعه",
    author: {
      name: "سامانتا اس.",
      avatar: "/images/avatar/avatar-20.jpg",
    },
  },
  {
    uid: "9",
    cover: "/images/objects/object-9.jpg",
    title: "۲۵ حقیقت شگفت‌انگیز درباره صندلی",
    readTime: "۲ دقیقه مطالعه",
    author: {
      name: "تراویس ف.",
      avatar: "/images/avatar/avatar-19.jpg",
    },
  },
  {
    uid: "10",
    cover: "/images/objects/object-14.jpg",
    title: "Tailwind CSS چیست؟",
    readTime: "۲ دقیقه مطالعه",
    author: {
      name: "جان د.",
      avatar: "/images/avatar/avatar-20.jpg",
    },
  },
  {
    uid: "11",
    cover: "/images/objects/object-10.jpg",
    title: "نمونه کارت Tailwind CSS",
    readTime: "۵ دقیقه مطالعه",
    author: {
      name: "تراویس ف.",
      avatar: "/images/avatar/avatar-19.jpg",
    },
  },
  {
    uid: "12",
    cover: "/images/objects/object-12.jpg",
    title: "۱۰ نکته برای بهتر کردن یک دوربین خوب",
    readTime: "۴ دقیقه مطالعه",
    author: {
      name: "آلفردو ا.",
      avatar: "/images/avatar/avatar-18.jpg",
    },
  },
];
