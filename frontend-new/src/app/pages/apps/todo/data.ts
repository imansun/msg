import { ColorType } from "@/constants/app";

const now = new Date();

export interface User {
  uid: string;
  name: string;
  avatar?: string;
}

export interface Label {
  id: string;
  color: ColorType;
  text: string;
}

export interface Todo {
  id: string;
  title: string;
  slug: string;
  isImportant: boolean;
  isDone: boolean;
  description: string;
  dueDate: Date | null;
  assignedTo: User[];
  labels: Label[];
}

export const fakeTodos: Todo[] = [
  {
    id: "1",
    title: "تست واحد",
    slug: "unit-testing",
    isImportant: false,
    isDone: true,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 1,
      4,
      0,
    ),
    assignedTo: [
      {
        uid: "1",
        name: "Amir Fadaei",
        avatar: undefined,
      },
      {
        uid: "2",
        name: "امیلیا کلارک",
        avatar: "/images/avatar/avatar-11.jpg",
      },
      {
        uid: "5",
        name: "Abol",
        avatar: undefined,
      },
      {
        uid: "6",
        name: "لنس تاکر",
        avatar: "/images/avatar/avatar-18.jpg",
      },
    ],
    labels: [
      {
        id: "2",
        color: "success",
        text: "کم",
      },
    ],
  },
  {
    id: "2",
    title: "قطعه برنامه چت",
    slug: "chat-app-fragment",
    isImportant: true,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 1,
      11,
      30,
    ),
    assignedTo: [
      {
        uid: "2",
        name: "امیلیا کلارک",
        avatar: "/images/avatar/avatar-11.jpg",
      },
    ],
    labels: [
      {
        id: "3",
        color: "warning",
        text: "متوسط",
      },
      {
        id: "5",
        color: "info",
        text: "بروزرسانی",
      },
    ],
  },
  {
    id: "3",
    title: "طراحی رابط کاربری",
    slug: "design-ui",
    isImportant: false,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: null,
    assignedTo: [
      {
        uid: "3",
        name: "Reaz A",
        avatar: undefined,
      },
    ],
    labels: [
      {
        id: "2",
        color: "success",
        text: "کم",
      },
    ],
  },
  {
    id: "4",
    title: "راه‌اندازی صفحه اصلی جدید",
    slug: "launch-new-homepage",
    isImportant: false,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 2,
      12,
      0,
    ),
    assignedTo: [
      {
        uid: "4",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-4.jpg",
      },
    ],
    labels: [
      {
        id: "5",
        color: "info",
        text: "بروزرسانی",
      },
    ],
  },
  {
    id: "5",
    title: "بررسی وبلاگ اطلاعیه",
    slug: "review-announcement-blog",
    isImportant: true,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 2,
      8,
      0,
    ),
    assignedTo: [
      {
        uid: "5",
        name: "M A",
        avatar: undefined,
      },
    ],
    labels: [
      {
        id: "3",
        color: "warning",
        text: "متوسط",
      },
    ],
  },
  {
    id: "6",
    title: "همگام‌سازی با گوگل آنالیتیکس",
    slug: "sync-with-google-analytics",
    isImportant: false,
    isDone: true,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDay(), 9, 0),
    assignedTo: [
      {
        uid: "6",
        name: "لنس تاکر",
        avatar: "/images/avatar/avatar-18.jpg",
      },
    ],
    labels: [],
  },
  {
    id: "7",
    title: "تبدیل فیگما به ری‌اکت",
    slug: "convert-figma-to-react",
    isImportant: false,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 9,
      9,
      0,
    ),
    assignedTo: [],
    labels: [
      {
        id: "2",
        color: "success",
        text: "کم",
      },
    ],
  },
  {
    id: "8",
    title: "طراحی صفحه تنظیمات",
    slug: "design-setting-page",
    isImportant: false,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 4,
      8,
      0,
    ),
    assignedTo: [
      {
        uid: "2",
        name: "امیلیا کلارک",
        avatar: "/images/avatar/avatar-11.jpg",
      },
    ],
    labels: [
      {
        id: "4",
        color: "error",
        text: "زیاد",
      },
    ],
  },
  {
    id: "9",
    title: "پشتیبان‌گیری تنظیمات",
    slug: "backup-settings",
    isImportant: true,
    isDone: true,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDay(), 16, 0),
    assignedTo: [
      {
        uid: "4",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-4.jpg",
      },
    ],
    labels: [
      {
        id: "1",
        color: "primary",
        text: "روزانه",
      },
      {
        id: "4",
        color: "error",
        text: "زیاد",
      },
    ],
  },
  {
    id: "10",
    title: "ایجاد ماژول انبارداری",
    slug: "create-inventory-module",
    isImportant: false,
    isDone: false,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. بدنه کار ما را تحت تأثیر قرار می‌دهد.",
    dueDate: new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay() + 2,
      16,
      0,
    ),
    assignedTo: [
      {
        uid: "6",
        name: "لنس تاکر",
        avatar: "/images/avatar/avatar-18.jpg",
      },
    ],
    labels: [
      {
        id: "2",
        color: "success",
        text: "کم",
      },
    ],
  },
];

export const allUsers: User[] = [
  {
    uid: "1",
    name: "M.Taghipoor",
    avatar: undefined,
  },
  {
    uid: "2",
    name: "امیلیا کلارک",
    avatar: "/images/avatar/avatar-11.jpg",
  },
  {
    uid: "3",
    name: "تراویس فولر",
    avatar: 'M.amoei',
  },
  {
    uid: "4",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    uid: "5",
    name: "هنری کرتیس",
    avatar: 'M.Hashemi',
  },
  {
    uid: "6",
    name: "لنس تاکر",
    avatar: "/images/avatar/avatar-18.jpg",
  },
  {
    uid: "7",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
  },
];

export const labels: Label[] = [
  {
    id: "1",
    color: "primary",
    text: "روزانه",
  },
  {
    id: "2",
    color: "success",
    text: "کم",
  },
  {
    id: "3",
    color: "warning",
    text: "متوسط",
  },
  {
    id: "4",
    color: "error",
    text: "زیاد",
  },
  {
    id: "5",
    color: "info",
    text: "بروزرسانی",
  },
];
