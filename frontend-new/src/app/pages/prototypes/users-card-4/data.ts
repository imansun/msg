export interface User {
  uid: string;
  name: string;
  avatar?: string | null;
  position: string;
}

export const users: User[] = [
  {
    uid: "1",
    name: "کانر گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "توسعه‌دهنده ارشد",
  },
  {
    uid: "2",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "توسعه‌دهنده وب",
  },
  {
    uid: "3",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-18.jpg",
    position: "طراح UI/UX",
  },
  {
    uid: "4",
    name: "Amir Fadaei",
    avatar: null,
    position: "توسعه‌دهنده React",
  },
  {
    uid: "5",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
    position: "توسعه‌دهنده اندروید",
  },
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "توسعه‌دهنده فول‌استک",
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "توسعه‌دهنده لاراول",
  },
  {
    uid: "8",
    name: "Mohammad Taghipoor",
    avatar: null,
    position: "توسعه‌دهنده بک‌اند",
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "توسعه‌دهنده فرانت‌اند",
  },
  {
    uid: "10",
    name: "Mehdi Hashemi",
    avatar: null,
    position: "توسعه‌دهنده NodeJS",
  },
  {
    uid: "11",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "طراح UI/UX",
  },
  {
    uid: "12",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-2.jpg",
    position: "توسعه‌دهنده بک‌اند",
  },
];
