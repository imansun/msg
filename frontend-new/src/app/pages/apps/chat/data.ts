// Local Imports
import { randomId } from "@/utils/randomId";

// ----------------------------------------------------------------------

// Define Interfaces for the data structures
export interface User {
  uid: string;
  name: string;
  avatar?: string;
}

export interface Message {
  id: string;
  isMe: boolean;
  content: string;
  createdAt: Date;
}

export interface LastMessage {
  content: string;
  createdAt: Date;
}

export interface Chat {
  id: string;
  unreadCount: number;
  isMuted: boolean;
  isImportant: boolean;
  isOnline: boolean;
  profile: User;
  lastMessage: LastMessage;
  messages: Message[];
}

const now = new Date();

export const histories: User[] = [
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
    name: "کانر گوزمان",
    avatar: "/images/avatar/avatar-20.jpg",
  },
  {
    uid: "4",
    name: "Amir Fadaei",
    avatar: undefined,
  },
  {
    uid: "5",
    name: "آلفردو الیوت",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    uid: "6",
    name: "Ahmad",
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
    avatar: "/images/avatar/avatar-8.jpg",
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
    name: "Mehdi",
    avatar: undefined,
  },
];

export const fakeChats: Chat[] = [
  {
    id: "chat-1",
    unreadCount: 5,
    isMuted: true,
    isImportant: false,
    isOnline: true,
    profile: {
      uid: "1",
      name: "Amirhossein Fadaei",
      avatar: undefined,
    },
    lastMessage: {
      content: "😂 لطفا این فایل را دانلود کنید",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        11,
        3,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content: "سلام! روزت چطور می‌گذره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          19,
          47,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "سلام! خوبه، ممنون که پرسیدی. تازه یک صبح پربار رو تموم کردم. تو چطوری؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          19,
          49,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "خوشحالم که اینو می‌شنوم! صبح من کمی شلوغ بود، اما الان دارم جبران می‌کنم. امروز روی چی کار می‌کنی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          19,
          50,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اوه نه، صبح‌های شلوغ اصلاً خوب نیست! الان دارم روی یک پروژه کار می‌کنم. تو چطور؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          4,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "اوه، جالب به نظر می‌رسه! من در واقع دارم برای یک قابلیت جدید در اپمون کد می‌نویسم. برام آرزوی موفقیت کن!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          10,
          51,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "موفق باشی در برنامه‌نویسی! مطمئنم عالی انجامش می‌دی. راستی، آپدیت جدید اپ/وبسایت رو دیدی؟ یک قابلیت جدید اضافه کردن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          10,
          54,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "اوه، هنوز ندیدم! حتماً بعد از ناهار نگاه می‌کنم. شاید ایده‌هایی هم برای اپ خودمون بگیرم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          11,
          0,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عالیه! بعداً دوباره صحبت کنیم ببینیم اوضاع چطوره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          11,
          2,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "😂 لطفا این فایل را دانلود کنید",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          11,
          3,
        ),
      },
    ],
  },
  {
    id: "chat-2",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "2",
      name: "کانر گوزمان",
      avatar: "/images/avatar/avatar-20.jpg",
    },
    lastMessage: {
      content: "بررسیش می‌کنم",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        9,
        16,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام، می‌تونی کمی شیر و تخم‌مرغ به لیست خرید اضافه کنی؟ تقریباً تموم شدن!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          9,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "حتماً، اضافه‌شون کردم! چیز دیگه‌ای می‌خوای؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          9,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "و به همین دلیل قرن پانزدهم...",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          9,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "آهان، شاید کمی نان هم بیاری. ممنون!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          9,
          14,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "بررسیش می‌کنم",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          9,
          16,
        ),
      },
    ],
  },
  {
    id: "chat-3",
    unreadCount: 4,
    isMuted: false,
    isImportant: true,
    isOnline: true,
    profile: {
      uid: "3",
      name: "تراویس فولر",
      avatar: "/images/avatar/avatar-18.jpg",
    },
    lastMessage: {
      content:
        "نقدها خیلی مثبت به نظر می‌رسن. همیشه می‌تونیم تریلرها رو آنلاین ببینیم!",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        8,
        15,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content: "امشب چه فیلمی ببینیم؟ پیشنهادی داری؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          8,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "هوم، به یک کمدی فکر می‌کردم. اون جدید با بازیگر رو چطوری؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          8,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "خوبه! زیاد درباره‌ش نشنیدم، خوبه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          8,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "نقدها خیلی مثبت به نظر می‌رسن. همیشه می‌تونیم تریلرها رو آنلاین ببینیم!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          8,
          15,
        ),
      },
    ],
  },
  {
    id: "chat-4",
    unreadCount: 2,
    isMuted: true,
    isImportant: false,
    isOnline: true,
    profile: {
      uid: "4",
      name: "دریک سیمونز",
      avatar: "/images/avatar/avatar-14.jpg",
    },
    lastMessage: {
      content: "عالیه. به زودی همدیگه رو می‌بینیم!",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        6,
        21,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام به همه، فقط یادآوری جلسه تیمی امروز ساعت ۲ بعدازظهر. بیاید درباره ددلاین پروژه صحبت کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "خوبه. چیزی هست که بخوایم برای جلسه آماده کنیم؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "سوال خوبی بود. دوست دارم همه آماده باشن درباره موانع احتمالی و سوالاتشون درباره وظایف پروژه صحبت کنن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "متوجه شدم! وظایفم رو نگاه می‌کنم و سوالاتم رو یادداشت می‌کنم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "من هم می‌تونم چند طرح اولیه طراحی بیارم اگر مفید باشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          14,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "عالیه، هم‌تیمی! ممنون بابت ابتکارت.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          15,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "خواهش می‌کنم! منتظر جلسه هستم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          16,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "فقط اطلاع بدم، شاید چند دقیقه دیر برسم. به محض اینکه بتونم ملحق می‌شم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          17,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اشکالی نداره. می‌تونیم با معرفی و مرور پیشرفت‌ها شروع کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          19,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "عالیه. به زودی همدیگه رو می‌بینیم!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          21,
        ),
      },
    ],
  },
  {
    id: "chat-5",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: true,
    profile: {
      uid: "5",
      name: "گریس باکلند",
      avatar: "/images/avatar/avatar-6.jpg",
    },
    lastMessage: {
      content:
        "موافقم! بیاید این روند رو ادامه بدیم و این ابتکارات مشتری‌محور رو در اولویت قرار بدیم.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        6,
        21,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام تیم، دوست دارم درباره ایده‌هایی برای بهبود ارتباط با مشتری صحبت کنیم. چه چالش‌هایی اخیراً داشتید؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          29,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "چند مشتری از زمان انتظار طولانی در خط پشتیبانی شکایت داشتن. شاید بتونیم راه‌هایی برای بهبود این روند پیدا کنیم؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          30,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "ممنون که گفتی. نکته خوبی بود. شاید بتونیم چت زنده اضافه کنیم یا بخش سوالات متداول رو بهبود بدیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          36,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! همچنین بعضی مشتری‌ها احساس می‌کنن ایمیل‌های پیگیری بعد از خرید می‌تونه شخصی‌تر باشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          38,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "مشاهده جالبی بود، هم‌تیمی. چطور می‌تونیم ایمیل‌ها رو شخصی‌تر کنیم؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          39,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "می‌تونیم پیشنهادات محصول بر اساس تاریخچه خرید یا مزایای باشگاه مشتریان رو اضافه کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          20,
          41,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "هر دو پیشنهاد عالی هستن! بیاید چند قالب ایمیل با این ایده‌ها آماده کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          17,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "خوبه! من هم می‌تونم یک نظرسنجی برای جمع‌آوری بازخورد مشتری‌ها آماده کنم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          18,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "عالیه. با همکاری هم مطمئنم می‌تونیم ارتباط با مشتری رو خیلی بهتر کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          20,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "موافقم! بیاید این روند رو ادامه بدیم و این ابتکارات مشتری‌محور رو در اولویت قرار بدیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          21,
        ),
      },
    ],
  },
  {
    id: "chat-6",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "6",
      name: "کاترینا وست",
      avatar: "/images/avatar/avatar-11.jpg",
    },
    lastMessage: {
      content:
        "عالیه! هر چی پیدا کردید خبر بدید تا سفارش بدیم.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        6,
        21,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "کسی برای ناهار فست‌فود دوست داره؟ امروز هوس برگر و سیب‌زمینی کردم!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اوه، خوبه! منم می‌تونم ناگت بخورم. جایی مد نظرت هست؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "یه رستوران فست‌فود جدید همین نزدیکی باز شده. امتحانش کردی؟ اگه نه، می‌تونیم همون برگر همیشگی رو بگیریم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          14,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "نه هنوز نرفتم، ولی همیشه دوست دارم چیز جدید امتحان کنم! بیاید اون رستوران رو امتحان کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          15,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "شاید اول منوهاشون رو آنلاین ببینیم ببینیم هر کی چی دوست داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          16,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "ایده خوبیه. اینطوری می‌تونیم زودتر سفارش بدیم و توی شلوغی ناهار معطل نشیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          17,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عالیه! من پیگیری می‌کنم. کسی رژیم یا محدودیت غذایی داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          18,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "نه، من هر چی باشه می‌خورم. هم‌تیمی، تو چطور؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          19,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "من معمولاً برگر گیاهی می‌خورم، ولی سیب‌زمینی‌هاشون عالیه!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          20,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "عالیه! هر چی پیدا کردید خبر بدید تا سفارش بدیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          6,
          21,
        ),
      },
    ],
  },
  {
    id: "chat-7",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "7",
      name: "کوری ایوانز",
      avatar: "/images/avatar/avatar-13.jpg",
    },
    lastMessage: {
      content:
        "منم موافقم! مشتاقم بیشتر درباره React و Next.js با هم یاد بگیریم.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 1,
        8,
        56,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام به همه، دارم به استفاده از React برای پروژه بعدی فکر می‌کنم. نظرتون چیه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          6,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "انتخاب عالیه! React یکی از محبوب‌ترین و قدرتمندترین کتابخونه‌ها برای ساخت رابط کاربریه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          7,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "درسته! معماری مبتنی بر کامپوننتش رو برای ساخت اجزای قابل استفاده مجدد دوست دارم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          8,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! باعث میشه کد مرتب‌تر و قابل نگهداری‌تر باشه. به استفاده از فریمورکی مثل Next.js روی React فکر کردی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          9,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "Next.js جالبه! چه مزایایی نسبت به React خالص داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "Next.js قابلیت‌هایی مثل رندر سمت سرور، تقسیم خودکار کد و روتینگ داخلی داره که توسعه رو سریع‌تر و سئو رو بهتر می‌کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          42,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "خیلی کاربردیه! شاید با هم چند تا آموزش یا مستندات Next.js رو بررسی کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          44,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "حتماً! خوشحال میشم کمکت کنم. انجمن‌های آنلاین خوبی هم برای React هست که می‌تونیم منابع پیدا کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          50,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "عالیه! فکر کنم این انتخاب خوبی برای پروژه‌مونه. بیاید جلسه بذاریم و Next.js رو بیشتر بررسی کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          54,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "منم موافقم! مشتاقم بیشتر درباره React و Next.js با هم یاد بگیریم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          56,
        ),
      },
    ],
  },
  {
    id: "chat-8",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "8",
      name: "آنتونی جنسن",
      avatar: "/images/avatar/avatar-10.jpg",
    },
    lastMessage: {
      content:
        "کاملاً. شاید به جای ترس از جایگزینی، بتونیم بررسی کنیم چطور هوش مصنوعی می‌تونه ما رو به توسعه‌دهندگان فرانت‌اند مؤثرتری تبدیل کنه.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 1,
        8,
        56,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "کسی شنیده که هوش مصنوعی ممکنه در آینده جای توسعه‌دهندگان فرانت‌اند رو بگیره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          48,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "آره، این روزها نگرانی رایجیه. هوش مصنوعی واقعاً داره پیشرفت می‌کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          49,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "درسته، اما آیا واقعاً هوش مصنوعی می‌تونه جنبه‌های خلاقانه و کاربرمحور توسعه فرانت‌اند رو انجام بده؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          50,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "نکته خوبی گفتی. هوش مصنوعی شاید کارهای تکراری رو انجام بده، اما طراحی رابط کاربری جذاب هنوز به خلاقیت انسانی نیاز داره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          51,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "دقیقاً. به‌روز بودن با ترندها و تکنولوژی‌ها برای فرانت‌اند مهمه. آیا هوش مصنوعی می‌تونه با این سرعت پیشرفت هماهنگ باشه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          52,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "سوال خوبیه. شاید هوش مصنوعی بتونه کد یا پیشنهاد طراحی بده، اما فکر نکنم کاملاً جای تخصص ما رو بگیره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          53,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "این دیدگاه مثبتیه. با استفاده از هوش مصنوعی به عنوان ابزار، می‌تونیم کارمون رو بهتر و تجربه کاربری بهتری بسازیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          54,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "موافقم. باید درباره پیشرفت‌های هوش مصنوعی مطلع باشیم اما روی مهارت‌های منحصربه‌فردمون هم کار کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          55,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً. شاید به جای ترس از جایگزینی، بتونیم بررسی کنیم چطور هوش مصنوعی می‌تونه ما رو به توسعه‌دهندگان فرانت‌اند مؤثرتری تبدیل کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          8,
          56,
        ),
      },
    ],
  },
  {
    id: "chat-9",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "9",
      name: "جو پرکینز",
      avatar: "/images/avatar/avatar-2.jpg",
    },
    lastMessage: {
      content:
        "این امکان وجود داره! با پیشرفت فناوری ارتباطات، موقعیت مکانی شاید برای خیلی از شغل‌ها دیگه مانع نباشه.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 1,
        6,
        12,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام به همه، با نزدیک شدن به ۲۰۳۰ فکر می‌کنید چه شغل‌هایی پرتقاضا خواهند بود؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          1,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "سوال جالبیه! با رشد هوش مصنوعی، فکر کنم حوزه‌های فناوری همچنان مهم باشن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          3,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "حتماً! شاید تخصص‌هایی مثل اخلاق هوش مصنوعی یا امنیت سایبری خیلی مهم بشن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          4,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! اما همچنان به مهارت‌های انسانی مثل خلاقیت و حل مسائل پیچیده نیاز هست.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          5,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "درسته! شاید حوزه‌هایی مثل انرژی پایدار یا مهندسی رباتیک به اون نگاه انسانی نیاز داشته باشن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          6,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "و عنصر انسانی در سلامت رو فراموش نکن! پزشک‌ها، پرستارها و درمانگرها همیشه مورد نیاز خواهند بود.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          7,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "نکته خوبی گفتی! شاید شغل‌هایی در حوزه سلامت روان و رفاه هم بیشتر بشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          8,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! متخصص‌هایی مثل درمانگر واقعیت مجازی یا مربی دیجیتال دیتاکس می‌تونن پرتقاضا باشن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          9,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "این یه تمرین فکری جالبه! شاید کار از راه دور تو حوزه‌های مختلف خیلی رایج‌تر بشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "این امکان وجود داره! با پیشرفت فناوری ارتباطات، موقعیت مکانی شاید برای خیلی از شغل‌ها دیگه مانع نباشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          6,
          12,
        ),
      },
    ],
  },
  {
    id: "chat-10",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "10",
      name: "لنس تاکر",
      avatar: "/images/avatar/avatar-1.jpg",
    },
    lastMessage: {
      content:
        "موافقم! با آگاهی و سازگاری می‌تونیم در سال‌های آینده موفق باشیم.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 2,
        14,
        2,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: false,
        content:
          "این گفتگو من رو کنجکاو کرد! کسی منابع یا مقاله‌ای درباره روند شغلی ۲۰۳۰ داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          44,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "چند تا گزارش جالب از موسسات آینده کار پیدا کردم. لینک‌ها رو می‌فرستم!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          48,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عالی! ممنون. شاید با هم مرورشون کنیم و نکات کلیدی رو مشخص کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          50,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "خوبه! می‌تونیم سایت‌های کاریابی یا شرکت‌ها رو هم ببینیم ببینیم دنبال چه مهارت‌هایی هستن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          52,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "ایده خوبیه! اینطوری می‌فهمیم چه مهارت‌هایی در آینده ارزشمند می‌شن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          54,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "شاید با گذروندن دوره‌های آنلاین یا کارگاه‌ها بتونیم مهارت‌هامون رو آینده‌نگر کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          56,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! یادگیری مادام‌العمر تو این بازار کار همیشه در حال تغییر ضروریه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          57,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "می‌تونیم از شبکه‌هامون هم استفاده کنیم و با حرفه‌ای‌های حوزه‌های مورد علاقه‌مون ارتباط بگیریم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          13,
          58,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "شبکه‌سازی و مصاحبه‌های اطلاعاتی می‌تونه خیلی مفید باشه. آینده کار هیجان‌انگیزه!",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          14,
          0,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "موافقم! با آگاهی و سازگاری می‌تونیم در سال‌های آینده موفق باشیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          14,
          2,
        ),
      },
    ],
  },
  {
    id: "chat-11",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "11",
      name: "سامانتا شلتون",
      avatar: "/images/avatar/avatar-7.jpg",
    },
    lastMessage: {
      content:
        "بله، Tailwind فقط استایل‌هایی که واقعاً استفاده می‌کنی رو تولید می‌کنه. این باعث میشه سایتت سبک بمونه.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 2,
        10,
        33,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "کسی تا حالا برای پروژه جدیدمون از Tailwind CSS استفاده کرده؟ کنجکاوم درباره رویکرد utility-firstش.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          20,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "آره، مدتیه دارم استفاده می‌کنم. Tailwind برای ساخت سریع UI عالیه و نیاز به کلی CSS سفارشی نداره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          22,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "جالبه! محدودیت نداره که باید از کلاس‌های آماده استفاده کنی و خودت CSS ننویسی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          24,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "در واقع Tailwind انعطاف زیادی می‌ده. می‌تونی کلاس‌ها رو ترکیب و سفارشی کنی تا هر طرحی خواستی بسازی.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          25,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "خوبه بدونم. منحنی یادگیریش برای تازه‌کارها چطوره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          27,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "سینتکس Tailwind خیلی ساده‌ست، مخصوصاً نسبت به فریمورک‌های پیچیده‌تر. کلی آموزش و منبع هم براش هست.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          28,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "امیدوارکننده‌ست! شاید با هم چند کامپوننت ساده Tailwind رو امتحان کنیم ببینیم به کارمون میاد یا نه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          29,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "حتماً! می‌تونیم یه نمونه سریع بسازیم ببینیم چقدر زود میشه با Tailwind چیزی ساخت.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          30,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "یه مزیت دیگه که شنیدم اینه که Tailwind حجم نهایی کمی داره. درسته؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          31,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "بله، Tailwind فقط استایل‌هایی که واقعاً استفاده می‌کنی رو تولید می‌کنه. این باعث میشه سایتت سبک بمونه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          10,
          33,
        ),
      },
    ],
  },
  {
    id: "chat-12",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "12",
      name: "رائول بردلی",
      avatar: "/images/avatar/avatar-5.jpg",
    },
    lastMessage: {
      content:
        "کاملاً! باید ببینیم قالب امکاناتی مثل ایمیل یا پشتیبانی چندزبانه هم داره یا نه.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 2,
        8,
        19,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام به همه، دنبال یه قالب ادمین جدیدیم. چه ویژگی‌هایی برای کار راحت مهمه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "سلام، داشبورد تمیز و کاربرپسند خیلی مهمه. ناوبری راحت و نمایش داده واضح کلیدیه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "کاملاً! واکنش‌گرا بودن هم خیلی مهمه. قالب باید با هر اندازه صفحه سازگار باشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "موافقم! کلی کامپوننت آماده مثل دکمه، فرم و جدول هم لازم داریم تا وقتمون رو ذخیره کنیم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "نکته خوبی بود! جدول داده با مرتب‌سازی، فیلتر و صفحه‌بندی چطور؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          14,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "ضروریه! مدیریت داده‌های زیاد باید راحت باشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          15,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "کاملاً موافقم. کسی قالب با احراز هویت داخلی رو ترجیح می‌ده؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          16,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اونم خوبه، مخصوصاً اگه مدیریت نقش کاربر هم داشته باشه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          17,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "جالبه! امنیت خیلی مهمه، پس هش رمز عبور و مدیریت نشست کاربر هم لازمه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          18,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! باید ببینیم قالب امکاناتی مثل ایمیل یا پشتیبانی چندزبانه هم داره یا نه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 2,
          8,
          19,
        ),
      },
    ],
  },
  {
    id: "chat-13",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "13",
      name: "هنری کرتیس",
      avatar: "/images/avatar/avatar-3.jpg",
    },
    lastMessage: {
      content:
        "Remix همچنین روی واکشی داده و روتینگ تمرکز داره که توسعه رو سریع‌تر می‌کنه. Next.js جامعه بزرگ‌تر و منابع بیشتری داره.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 3,
        19,
        13,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام به همه، بین Remix و Next.js برای پروژه بعدی مرددیم. کسی با هر دو کار کرده؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "آره، با هر دو کار کردم! هر دو خوبن، اما تفاوت‌هایی دارن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "جالبه! موقع انتخاب بین Remix و Next.js به چه نکاتی باید توجه کنیم؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "Remix به طور پیش‌فرض SSR داره که برای سئو و عملکرد خوبه. Next.js انعطاف بیشتری با SSG و CSR داره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "مفید بود! شاید باید نوع محتوای سایت و اولویت سئو یا تعامل کاربر رو در نظر بگیریم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "Remix همچنین روی واکشی داده و روتینگ تمرکز داره که توسعه رو سریع‌تر می‌کنه. Next.js جامعه بزرگ‌تر و منابع بیشتری داره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "پس Remix برای اپ‌های داده‌محور خوبه و Next.js برای سایت‌های ساده‌تر یا مارکتینگ؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اینم دیدگاه خوبیه، البته هر دو می‌تونن پروژه‌های مختلف رو پوشش بدن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "Remix همچنین روی واکشی داده و روتینگ تمرکز داره که توسعه رو سریع‌تر می‌کنه. Next.js جامعه بزرگ‌تر و منابع بیشتری داره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          19,
          13,
        ),
      },
    ],
  },
  {
    id: "chat-14",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "14",
      name: "Robert Pattinson",
      avatar: undefined,
    },
    lastMessage: {
      content:
        "عالی! چند تا منبع پیدا کردم که مفاهیم RWD رو کامل توضیح می‌ده.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 3,
        17,
        9,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "سلام! دوست دارم بیشتر درباره طراحی واکنش‌گرا بدونم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          2,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "حتماً، طراحی واکنش‌گرا روشی برای نمایش خوب سایت روی همه دستگاه‌هاست، از دسکتاپ تا تبلت و موبایل.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          9,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "عالیه! دقیقاً چطور کار می‌کنه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "RWD از طرح‌های منعطف، تصاویر سیال و media query برای تطبیق محتوا با اندازه صفحه استفاده می‌کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "جالبه! مزایای طراحی واکنش‌گرا چیه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          19,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "کاملاً! RWD تجربه کاربری بهتری برای همه میاره و سئو رو بهتر و نگهداری رو راحت‌تر می‌کنه چون فقط یک سایت داری.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          0,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "منطقیه. منبعی برای یادگیری بیشتر سراغ داری؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          2,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "حتماً، منابع آنلاین زیادی هست! اگه خواستی چند تا مقاله یا آموزش می‌فرستم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          4,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content: "بله لطفاً! خیلی کمک می‌کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          8,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عالی! چند تا منبع پیدا کردم که مفاهیم RWD رو کامل توضیح می‌ده.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          9,
        ),
      },
    ],
  },
  {
    id: "chat-15",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "15",
      name: "هنری کویل",
      avatar: "/images/avatar/avatar-19.jpg",
    },
    lastMessage: {
      content:
        "جالبه! شاید برای پروژه بعدیم از ThemeForest استفاده کنم.",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 3,
        17,
        9,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content:
          "می‌خوای سایت جدید بسازی؟ ThemeForest رو دیدی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          15,
          45,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "ThemeForest؟ اون پلتفرم قالب سایت نیست؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          15,
          48,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "دقیقاً! کلی قالب برای وردپرس، شاپیفای و حتی لندینگ پیج داره.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          15,
          52,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "عجب! چطور قالب مناسب رو انتخاب می‌کنی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          0,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "فیلتر و دسته‌بندی داره، می‌تونی بر اساس صنعت، ویژگی و قیمت انتخاب کنی. بیشتر قالب‌ها دمو و نظر کاربران هم دارن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          11,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content: "خوبه. قالب‌ها قابل شخصی‌سازی هستن؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          16,
          49,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "بله! بیشتر قالب‌ها امکان تغییر رنگ، فونت و چیدمان رو دارن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          4,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عالیه! کیفیتشون چطوره؟ قابل اعتمادن؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          7,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "ThemeForest سیستم امتیازدهی و نظر کاربران داره، می‌تونی تجربه بقیه رو ببینی. خیلی از قالب‌ها پشتیبانی هم دارن.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          8,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "جالبه! شاید برای پروژه بعدیم از ThemeForest استفاده کنم.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          17,
          9,
        ),
      },
    ],
  },
  {
    id: "chat-16",
    unreadCount: 0,
    isMuted: true,
    isImportant: false,
    isOnline: false,
    profile: {
      uid: "16",
      name: "دیوید کورنسوت",
      avatar: "/images/avatar/avatar-17.jpg",
    },
    lastMessage: {
      content:
        "عجب، چقدر محتوای بتمن! برای کسی که تازه می‌خواد کمیک‌ها رو شروع کنه، از کجا پیشنهاد می‌کنی؟",
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 3,
        11,
        18,
      ),
    },
    messages: [
      {
        id: randomId(),
        isMe: true,
        content: "فیلم جدید بتمن رو دیدی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          2,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "نه هنوز! شنیدم خیلی تاریک و جدیه. ارزش دیدن داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          5,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "حتماً! نگاه متفاوتیه به بتمن، اما به ریشه‌های کارآگاهی شخصیت وفادار مونده.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          9,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اوه، اون بخش کارآگاهی بتمن رو دوست دارم. تو فیلم چه جور معماهایی حل می‌کنه؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          10,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "فقط می‌تونم بگم باید یه سری معما و پازل رو که یه شرور مرموز گذاشته حل کنه.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          12,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "اوه، جالبه! این بار رابرت پتینسون نقش بتمن رو داره؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          14,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "آره! واقعاً عالی بازی کرده. اون حالت جدی و مرموز بروس وین رو خوب نشون داده.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          15,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "خوبه! باید ببینمش. اما بتمن فقط فیلم نیست، کمیک هم داره، درسته؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          16,
        ),
      },
      {
        id: randomId(),
        isMe: true,
        content:
          "دقیقاً! بتمن یکی از غنی‌ترین تاریخچه‌های کمیک رو داره. صدها داستان درباره مبارزه‌اش برای عدالت در گاتهام هست.",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          17,
        ),
      },
      {
        id: randomId(),
        isMe: false,
        content:
          "عجب، چقدر محتوای بتمن! برای کسی که تازه می‌خواد کمیک‌ها رو شروع کنه، از کجا پیشنهاد می‌کنی؟",
        createdAt: new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 3,
          11,
          18,
        ),
      },
    ],
  },
];

export const profile: User = {
  uid: "1",
  name: "Alfredo Elliott",
  avatar: undefined,
};
