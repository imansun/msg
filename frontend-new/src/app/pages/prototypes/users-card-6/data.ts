export interface User {
  uid: string;
  name: string;
  avatar?: string | null;
  position: string;
  team: { uid: string; name: string; avatar?: string | null }[];
}

export const users: User[] = [
  {
    uid: "1",
    name: "کنر گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
    position: "توسعه‌دهنده ارشد",
    team: [
      {
        uid: "1",
        name: "تراویس فولر",
        avatar: "/images/avatar/avatar-1.jpg",
      },
      {
        uid: "2",
        name: "Amir Fadaei",
        avatar: null,
      },
      {
        uid: "3",
        name: "کالب نولان",
        avatar: "/images/avatar/avatar-10.jpg",
      },
    ],
  },
  {
    uid: "2",
    name: "تراویس فولر",
    avatar: "/images/avatar/avatar-19.jpg",
    position: "توسعه‌دهنده وب",
    team: [
      {
        uid: "1",
        name: "Ali Heydari",
        avatar: null,
      },
      {
        uid: "2",
        name: "جان دو",
        avatar: "/images/avatar/avatar-13.jpg",
      },
      {
        uid: "3",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-10.jpg",
      },
    ],
  },
  {
    uid: "3",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-18.jpg",
    position: "طراح UI/UX",
    team: [
      {
        uid: "1",
        name: "مگان فاکس",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "2",
        name: "سلنا گومز",
        avatar: "/images/avatar/avatar-17.jpg",
      },
    ],
  },
  {
    uid: "4",
    name: "Mohammad Amoei",
    avatar: null,
    position: "توسعه‌دهنده React",
    team: [
      {
        uid: "1",
        name: "لئوناردو دی‌کاپریو",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "2",
        name: "Reza Alizadeh",
        avatar: null,
      },
      {
        uid: "3",
        name: "Mohammad Norbakhash",
        avatar: null,
      },
    ],
  },
  {
    uid: "5",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
    position: "توسعه‌دهنده اندروید",
    team: [
      {
        uid: "1",
        name: "باراک اوباما",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "2",
        name: "دونالد ترامپ",
        avatar: "/images/avatar/avatar-19.jpg",
      },
      {
        uid: "3",
        name: "Ali",
        avatar: null,
      },
    ],
  },
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
    position: "توسعه‌دهنده فول‌استک",
    team: [
      {
        uid: "1",
        name: "آدام سندلر",
        avatar: "/images/avatar/avatar-3.jpg",
      },
      {
        uid: "2",
        name: "امیلیا کلارک",
        avatar: "/images/avatar/avatar-19.jpg",
      },
    ],
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
    position: "توسعه‌دهنده لاراول",
    team: [
      {
        uid: "1",
        name: "تراویس فولر",
        avatar: "/images/avatar/avatar-1.jpg",
      },
      {
        uid: "2",
        name: "Reza",
        avatar: null,
      },
      {
        uid: "3",
        name: "کالب نولان",
        avatar: "/images/avatar/avatar-10.jpg",
      },
    ],
  },
  {
    uid: "8",
    name: "Hadhem",
    avatar: null,
    position: "توسعه‌دهنده بک‌اند",
    team: [
      {
        uid: "1",
        name: "Doctor",
        avatar: null,
      },
      {
        uid: "2",
        name: "جان دو",
        avatar: "/images/avatar/avatar-13.jpg",
      },
      {
        uid: "3",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-10.jpg",
      },
    ],
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
    position: "توسعه‌دهنده فرانت‌اند",
    team: [
      {
        uid: "1",
        name: "مگان فاکس",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "2",
        name: "سلنا گومز",
        avatar: "/images/avatar/avatar-17.jpg",
      },
    ],
  },
  {
    uid: "10",
    name: "Mohammad",
    avatar: null,
    position: "توسعه‌دهنده NodeJS",
    team: [
      {
        uid: "1",
        name: "لئوناردو دی‌کاپریو",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "2",
        name: "Leily",
        avatar: null,
      },
      {
        uid: "3",
        name: "Ali",
        avatar: null,
      },
    ],
  },
  {
    uid: "11",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-1.jpg",
    position: "طراح UI/UX",
    team: [
      {
        uid: "1",
        name: "باراک اوباما",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "2",
        name: "دونالد ترامپ",
        avatar: "/images/avatar/avatar-19.jpg",
      },
      {
        uid: "3",
        name: "Hossein",
        avatar: null,
      },
    ],
  },
  {
    uid: "12",
    name: "آنتونی جنسن",
    avatar: "/images/avatar/avatar-2.jpg",
    position: "توسعه‌دهنده بک‌اند",
    team: [
      {
        uid: "1",
        name: "آدام سندلر",
        avatar: "/images/avatar/avatar-3.jpg",
      },
      {
        uid: "2",
        name: "امیلیا کلارک",
        avatar: "/images/avatar/avatar-19.jpg",
      },
    ],
  },
];
