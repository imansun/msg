// Import Dependencies
import { COLORS, ColorType } from "@/constants/app";
import {
  FaMicroscope,
  FaCheckDouble,
  FaRegClock,
  FaSpinner,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

// ----------------------------------------------------------------------

export interface Member {
  uid: string;
  name: string;
  avatar?: string;
}

export interface Label {
  id: string;
  text: string;
  color: ColorType;
}

export interface Task {
  id: string;
  title: string;
  slug: string;
  description?: string;
  cover?: string;
  status?: string;
  color?: ColorType;
  labels?: Label[];
  members?: Member[];
  attachmentsCount?: number;
  commentsCount?: number;
  dueDate?: Date;
}

export interface Column {
  id: string;
  name: string;
  slug: string;
  color: ColorType;
  Icon?: IconType;
  tasks: string[];
}

export interface Board {
  id: string;
  name: string;
  slug: string;
  isPrivate: boolean;
  columns: Column[];
  tasks: Task[];
}

// ----------------------------------------------------------------------

const year = new Date().getFullYear();

export const fakeBoards: Board[] = [
  {
    id: "1",
    name: "اپلیکیشن فروشگاه اینترنتی",
    slug: "ecommerce-app",
    isPrivate: true,
    columns: [
      {
        id: "1",
        name: "در حال انجام",
        slug: "in-progress",
        color: "info",
        Icon: FaSpinner,
        tasks: ["task-1", "task-2", "task-3", "task-4"],
      },
      {
        id: "2",
        name: "در انتظار",
        slug: "pending",
        color: "warning",
        Icon: FaRegClock,
        tasks: ["task-5", "task-6", "task-7", "task-8", "task-9"],
      },
      {
        id: "3",
        name: "در حال بازبینی",
        slug: "in-review",
        color: "secondary",
        Icon: FaMicroscope,
        tasks: [
          "task-10",
          "task-11",
          "task-12",
          "task-13",
          "task-14",
          "task-15",
          "task-16",
        ],
      },
      {
        id: "4",
        name: "انجام شده",
        slug: "done",
        color: "success",
        Icon: FaCheckDouble,
        tasks: ["task-17", "task-18"],
      },
    ],
    tasks: [
      {
        id: "task-1",
        title: "به‌روزرسانی طراحی",
        slug: "update-design",
        description: "به‌روزرسانی طراحی اپلیکیشن فروشگاه اینترنتی",
        cover: "/images/objects/object-11.jpg",
        status: "in-progress",
        color: "neutral",
        labels: [
          {
            id: "1",
            text: "به‌روزرسانی",
            color: "secondary",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Amir",
            avatar: undefined,
          },
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        attachmentsCount: 1,
        commentsCount: 3,
        dueDate: new Date(year, 5, 6),
      },
      {
        id: "task-2",
        title: "همگام‌سازی با گوگل آنالیتیکس",
        slug: "sync-with-google-analytics",
        description: "همگام‌سازی با گوگل آنالیتیکس",
        cover: undefined,
        status: "in-progress",
        color: "neutral",
        labels: [
          {
            id: "9",
            text: "روزانه",
            color: "info",
          },
        ],
        members: [
          {
            uid: "4",
            name: "Reza",
            avatar: undefined,
          },
        ],
        commentsCount: 4,
        attachmentsCount: 0,
        dueDate: new Date(year, 5, 12),
      },
      {
        id: "task-3",
        title: "افزودن محصول جدید",
        slug: "add-new-product",
        description: "افزودن محصول جدید به سیستم",
        cover: "/images/objects/object-5.jpg",
        status: "in-progress",
        color: "neutral",
        labels: [
          {
            id: "2",
            text: "ایجاد",
            color: "primary",
          },
          {
            id: "3",
            text: "بهبود",
            color: "success",
          },
        ],
        members: [
          {
            uid: "5",
            name: "آلفردو الیوت",
            avatar: "/images/avatar/avatar-4.jpg",
          },
          {
            uid: "6",
            name: "Mehdi",
            avatar: undefined,
          },
          {
            uid: "10",
            name: "لنس تاکر",
            avatar: "/images/avatar/avatar-18.jpg",
          },
        ],
        commentsCount: 3,
        attachmentsCount: 1,
        dueDate: new Date(year, 4, 23),
      },
      {
        id: "task-4",
        title: "بهبود لودر انیمیشن",
        slug: "improve-nimation-loader",
        description: "بهبود لودر انیمیشن برای افزایش عملکرد",
        cover: "/images/technology/dashboard.jpg",
        status: "in-progress",
        color: "success",
        labels: [
          {
            id: "6",
            text: "عملکرد",
            color: "error",
          },
        ],
        members: [
          {
            uid: "10",
            name: "لنس تاکر",
            avatar: "/images/avatar/avatar-18.jpg",
          },
        ],
        commentsCount: 0,
        attachmentsCount: 1,
        dueDate: new Date(year, 4, 17),
      },
      {
        id: "task-5",
        title: "ایجاد ماژول انبارداری",
        slug: "create-inventory-module",
        description: "ایجاد ماژول انبارداری برای اپلیکیشن فروشگاه اینترنتی",
        cover: undefined,
        status: "pending",
        color: "neutral",
        labels: [
          {
            id: "2",
            text: "ایجاد",
            color: "primary",
          },
        ],
        members: [
          {
            uid: "11",
            name: "کاترینا وست",
            avatar: "/images/avatar/avatar-11.jpg",
          },
        ],
        commentsCount: 0,
        attachmentsCount: 2,
        dueDate: new Date(year, 5, 23),
      },
      {
        id: "task-6",
        title: "پرداخت حقوق اپلیکیشن",
        slug: "pay-apps-wage",
        description: "پرداخت حقوق اپلیکیشن برای فروشگاه اینترنتی",
        cover: undefined,
        status: "pending",
        color: "warning",
        labels: [
          {
            id: "6",
            text: "عملکرد",
            color: "error",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Reza",
            avatar: undefined,
          },
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        commentsCount: 2,
        attachmentsCount: 1,
        dueDate: new Date(year, 7, 11),
      },
      {
        id: "task-7",
        title: "تست قابلیت‌های جدید اپلیکیشن",
        slug: "testing-new-features-application",
        description: "لطفاً قابلیت‌های جدید اپلیکیشن را تست کنید",
        cover: "/images/technology/testing-sm.jpg",
        status: "pending",
        color: "neutral",
        labels: [
          {
            id: "4",
            text: "قابلیت",
            color: "warning",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Amir",
            avatar: undefined,
          },
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        commentsCount: 3,
        attachmentsCount: 2,
        dueDate: new Date(year, 6, 19),
      },
      {
        id: "task-8",
        title: "پست جدید روزانه",
        slug: "daily-new-post",
        description: "افزودن پست جدید به وبلاگ",
        cover: undefined,
        status: "pending",
        color: "neutral",
        labels: [
          {
            id: "7",
            text: "وبلاگ",
            color: "info",
          },
          {
            id: "9",
            text: "روزانه",
            color: "info",
          },
        ],
        members: [
          {
            uid: "12",
            name: "سامانتا شلتون",
            avatar: "/images/avatar/avatar-11.jpg",
          },
        ],
        commentsCount: 0,
        attachmentsCount: 2,
        dueDate: new Date(year, 5, 23),
      },
      {
        id: "task-9",
        title: "دعوت از کاربران جدید",
        slug: "invite-new-users",
        description: "دعوت از کاربران جدید به چت‌روم",
        cover: undefined,
        status: "pending",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "primary",
            text: "روزانه",
          },
        ],
        members: [
          {
            uid: "13",
            name: "کوری ایوانز",
            avatar: "/images/avatar/avatar-1.jpg",
          },
          {
            uid: "5",
            name: "آلفردو الیوت",
            avatar: "/images/avatar/avatar-4.jpg",
          },
          {
            uid: "14",
            name: "جو پرکینز",
            avatar: "/images/avatar/avatar-5.jpg",
          },
        ],
        commentsCount: 6,
        attachmentsCount: 0,
        dueDate: new Date(year, 5, 23),
      },
      {
        id: "task-10",
        title: "پیوستن به بحث",
        slug: "join-to-discussion",
        description: "پیوستن به بحث آخر هفته",
        cover: undefined,
        status: "in-review",
        color: "info",
        labels: [
          {
            id: "1",
            color: "primary",
            text: "پشتیبانی",
          },
        ],
        members: [
          {
            uid: "13",
            name: "کوری ایوانز",
            avatar: "/images/avatar/avatar-1.jpg",
          },
          {
            uid: "15",
            name: "Ali",
            avatar: undefined,
          },
          {
            uid: "14",
            name: "جو پرکینز",
            avatar: "/images/avatar/avatar-5.jpg",
          },
        ],
        commentsCount: 4,
        attachmentsCount: 0,
        dueDate: new Date(year, 5, 27),
      },
      {
        id: "task-11",
        title: "تبدیل فیگما به ری‌اکت",
        slug: "convert-figma-to-react",
        description:
          "تبدیل فایل فیگما ارائه شده به پروژه ری‌اکت و تیلویند سی‌اس‌اس",
        cover: undefined,
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "info",
            text: "ایجاد",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Amir",
            avatar: undefined,
          },
        ],
        commentsCount: 1,
        attachmentsCount: 2,
        dueDate: new Date(year, 5, 20),
      },
      {
        id: "task-12",
        title: "ساخت رابط کاربری جستجو",
        slug: "build-ui-for-search",
        description: "ایجاد رابط کاربری ماژول جستجو",
        cover: undefined,
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "info",
            text: "ایجاد",
          },
        ],
        members: [
          {
            uid: "6",
            name: "Matin",
            avatar: undefined,
          },
        ],
        commentsCount: 2,
        attachmentsCount: 1,
        dueDate: new Date(year, 5, 22),
      },
      {
        id: "task-13",
        title: "بازنویسی اندپوینت‌های احراز هویت",
        slug: "refactor-auth-endpoints",
        description: "بازنویسی اندپوینت‌های احراز هویت",
        cover: undefined,
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "success",
            text: "به‌روزرسانی",
          },
        ],
        members: [
          {
            uid: "4",
            name: "Behnam",
            avatar: undefined,
          },
        ],
        commentsCount: 1,
        attachmentsCount: 2,
        dueDate: new Date(year, 5, 13),
      },
      {
        id: "task-14",
        title: "ایجاد نمونه اولیه وایرفریم",
        slug: "create-wireframe-prototype",
        description: "ایجاد نمونه اولیه وایرفریم",
        cover: "/images/technology/hand-write-laptop.jpg",
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "info",
            text: "ایجاد",
          },
        ],
        members: [
          {
            uid: "5",
            name: "آلفردو الیوت",
            avatar: "/images/avatar/avatar-4.jpg",
          },
        ],
        commentsCount: 2,
        attachmentsCount: 5,
        dueDate: new Date(year, 7, 3),
      },
      {
        id: "task-15",
        title: "کشف بازار",
        slug: "market-discovery",
        description: "کشف بازار",
        cover: "/images/technology/sales-presentation-sm.jpg",
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "warning",
            text: "هفتگی",
          },
        ],
        members: [
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        commentsCount: 1,
        attachmentsCount: 0,
        dueDate: new Date(year, 7, 3),
      },
      {
        id: "task-16",
        title: "طراحی صفحه تنظیمات",
        slug: "design-setting-page",
        description: "طراحی صفحه تنظیمات",
        cover: undefined,
        status: "in-review",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "warning",
            text: "هفتگی",
          },
        ],
        members: [
          {
            uid: "10",
            name: "لنس تاکر",
            avatar: "/images/avatar/avatar-18.jpg",
          },
        ],
        commentsCount: 2,
        attachmentsCount: 2,
        dueDate: new Date(year, 6, 2),
      },
      {
        id: "task-17",
        title: "پشتیبان‌گیری سیستم",
        slug: "backup-system",
        description: "پشتیبان‌گیری چت‌ها، ویدیوها و همه داده‌ها",
        cover: undefined,
        status: "done",
        color: "error",
        labels: [
          {
            id: "1",
            color: "error",
            text: "روزانه",
          },
        ],
        members: [
          {
            uid: "5",
            name: "آلفردو الیوت",
            avatar: "/images/avatar/avatar-4.jpg",
          },
        ],
        commentsCount: 1,
        attachmentsCount: 1,
        dueDate: new Date(year, 6, 8),
      },
      {
        id: "task-18",
        title: "ردیابی باگ‌ها",
        slug: "traking-bugs",
        description: "ردیابی باگ‌های اپلیکیشن",
        cover: undefined,
        status: "done",
        color: "neutral",
        labels: [],
        members: [
          {
            uid: "6",
            name: "Matin",
            avatar: undefined,
          },
        ],
        commentsCount: 3,
        attachmentsCount: 3,
        dueDate: new Date(year, 5, 9),
      },
    ],
  },
  {
    id: "2",
    name: "اپلیکیشن بانکی",
    slug: "banking-app",
    isPrivate: true,
    columns: [
      {
        id: "1",
        name: "در حال انجام",
        slug: "in-progress",
        color: "info",
        Icon: FaSpinner,
        tasks: ["task-1", "task-2"],
      },
      {
        id: "2",
        name: "در انتظار",
        slug: "pending",
        color: "warning",
        Icon: FaRegClock,
        tasks: ["task-3"],
      },
    ],
    tasks: [
      {
        id: "task-1",
        title: "انتشار نسخه ۱.۰",
        slug: "launch-version-1-0",
        description: "انتشار نسخه اولیه اپلیکیشن",
        cover: undefined,
        status: "in-progress",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "secondary",
            text: "انتشار",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Amir",
            avatar: undefined,
          },
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        commentsCount: 3,
        attachmentsCount: 1,
        dueDate: new Date(year, 5, 6),
      },
      {
        id: "task-2",
        title: "بررسی بازخورد کاربران",
        slug: "review-users-feedback",
        description: "بررسی بازخورد کاربران",
        cover: undefined,
        status: "in-progress",
        color: "info",
        labels: [
          {
            id: "1",
            color: "info",
            text: "بررسی",
          },
        ],
        members: [
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
        ],
        commentsCount: 1,
        attachmentsCount: 0,
        dueDate: new Date(year, 7, 11),
      },
      {
        id: "task-3",
        title: "اشتراک‌گذاری خدمات در اینستاگرام",
        slug: "share-services-in-instagram",
        description: "اشتراک‌گذاری خدمات جدید در اینستاگرام",
        cover: undefined,
        status: "pending",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "warning",
            text: "اشتراک‌گذاری",
          },
        ],
        members: [
          {
            uid: "4",
            name: "Behnam",
            avatar: undefined,
          },
        ],
        commentsCount: 1,
        attachmentsCount: 0,
        dueDate: new Date(year, 6, 5),
      },
    ],
  },
  {
    id: "3",
    name: "اپلیکیشن آموزش مجازی",
    slug: "lms-app",
    isPrivate: false,
    columns: [
      {
        id: "1",
        name: "در حال انجام",
        slug: "in-progress",
        color: "info",
        Icon: FaSpinner,
        tasks: ["1"],
      },
      {
        id: "2",
        name: "در انتظار",
        slug: "pending",
        color: "warning",
        Icon: FaRegClock,
        tasks: ["2"],
      },
    ],
    tasks: [
      {
        id: "1",
        title: "راه‌اندازی نسخه بتا در پلتفرم Vercel",
        slug: "softlaunch-beta-version-of-application-in-vercel-platform",
        description:
          "راه‌اندازی نسخه بتا اپلیکیشن در پلتفرم Vercel برای تست",
        cover: undefined,
        status: "in-progress",
        color: "neutral",
        labels: [
          {
            id: "1",
            color: "secondary",
            text: "انتشار",
          },
        ],
        members: [
          {
            uid: "1",
            name: "Amir",
            avatar: undefined,
          },
          {
            uid: "2",
            name: "امیلیا کلارک",
            avatar: "/images/avatar/avatar-11.jpg",
          },
          {
            uid: "3",
            name: "مجید یحیایی",
            avatar: "/images/avatar/avatar-20.jpg",
          },
        ],
        commentsCount: 1,
        attachmentsCount: 0,
        dueDate: new Date(year, 5, 11),
      },
      {
        id: "2",
        title: "افزودن دیتاتیبل‌ها",
        slug: "add-datatables",
        description: "افزودن دیتاتیبل برای مدیریت محتوا",
        cover: undefined,
        status: "pending",
        color: "neutral",
        labels: [],
        members: [
          {
            uid: "4",
            name: "Behnam",
            avatar: undefined,
          },
        ],
        commentsCount: 1,
        attachmentsCount: 1,
        dueDate: new Date(year, 5, 10),
      },
    ],
  },
];

export const allMembers: Member[] = [
  {
    uid: "1",
    name: "Amir",
    avatar: undefined,
  },
  {
    uid: "2",
    name: "امیلیا کلارک",
    avatar: "/images/avatar/avatar-11.jpg",
  },
  {
    uid: "3",
    name: "مجید یحیایی",
    avatar: "/images/avatar/avatar-20.jpg",
  },
  {
    uid: "4",
    name: "Behnam",
    avatar: undefined,
  },
  {
    uid: "5",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    uid: "6",
    name: "Matin",
    avatar: undefined,
  },
  {
    uid: "10",
    name: "لنس تاکر",
    avatar: "/images/avatar/avatar-18.jpg",
  },
  {
    uid: "11",
    name: "کاترینا وست",
    avatar: "/images/avatar/avatar-11.jpg",
  },
  {
    uid: "12",
    name: "سامانتا شلتون",
    avatar: "/images/avatar/avatar-11.jpg",
  },
  {
    uid: "13",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-1.jpg",
  },
  {
    uid: "14",
    name: "جو پرکینز",
    avatar: "/images/avatar/avatar-5.jpg",
  },
  {
    uid: "15",
    name: "Ghasem",
    avatar: undefined,
  },
];

export const labels: Label[] = [
  {
    id: "1",
    color: "secondary",
    text: "به‌روزرسانی",
  },
  {
    id: "2",
    color: "primary",
    text: "ایجاد",
  },
  {
    id: "3",
    color: "success",
    text: "بهبود",
  },
  {
    id: "4",
    text: "قابلیت",
    color: "warning",
  },
  {
    id: "5",
    color: "primary",
    text: "پشتیبانی",
  },
  {
    id: "6",
    color: "error",
    text: "عملکرد",
  },
  {
    id: "7",
    color: "info",
    text: "وبلاگ",
  },
  {
    id: "8",
    color: "warning",
    text: "هفتگی",
  },
  {
    id: "9",
    color: "info",
    text: "روزانه",
  },
];

export const colors = COLORS;
