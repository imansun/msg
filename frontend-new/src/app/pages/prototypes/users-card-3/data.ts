export interface User {
  uid: string;
  name: string;
  avatar?: string | null;
  tags: string[];
}

export const users: User[] = [
  {
    uid: "1",
    name: "کانر گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
    tags: ["پی‌اچ‌پی", "نود‌جی‌اس", "ری‌اکت‌جی‌اس"],
  },
  {
    uid: "2",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-19.jpg",
    tags: ["ری‌اکت", "لاراول"],
  },
  {
    uid: "3",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-18.jpg",
    tags: ["جاوااسکریپت", "سی‌اس‌اس", "ای‌اس۶"],
  },
  {
    uid: "4",
    name: "Amir Fadaei",
    avatar: null,
    tags: ["آلپاین‌جی‌اس", "تیلویند‌سی‌اس‌اس"],
  },
  {
    uid: "5",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
    tags: ["آیونیک", "ری‌اکت", "فلاتر"],
  },
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
    tags: ["ری‌اکت‌جی‌اس", "تایپ‌اسکریپت", "نست‌جی‌اس"],
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
    tags: ["ماریا‌دی‌بی", "لاراول"],
  },
  {
    uid: "8",
    name: "Mohammad Taghipoor",
    avatar: null,
    tags: ["ماریا‌دی‌بی", "لاراول"],
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
    tags: ["سالید‌جی‌اس", "ری‌اکت‌جی‌اس", "تایپ‌اسکریپت"],
  },
  {
    uid: "10",
    name: "Reza Alizadeh",
    avatar: null,
    tags: ["نست‌جی‌اس", "اکسپرس", "تایپ‌اسکریپت"],
  },
  {
    uid: "11",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-1.jpg",
    tags: ["فیگما", "ایلاستریتور", "اسکچ"],
  },
  {
    uid: "12",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-2.jpg",
    tags: ["نکست‌جی‌اس", "رمیکس", "تایپ‌اسکریپت"],
  },
];
