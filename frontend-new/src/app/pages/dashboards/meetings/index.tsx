// Import Dependencies
import { PlusIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Page } from "@/components/shared/Page";
import { Avatar } from "@/components/ui";
import { type Meeting, MeetingCard } from "./MeetingCard";

// ----------------------------------------------------------------------

const teamMembers = [
  {
    uid: "6",
    name: "هنری کرتیس",
    avatar: "/images/avatar/avatar-4.jpg",
  },
  {
    uid: "7",
    name: "رائول بردلی",
    avatar: "/images/avatar/avatar-5.jpg",
  },
  {
    uid: "8",
    name: "Amir Fadaei",
    avatar: undefined,
  },
  {
    uid: "9",
    name: "کوری ایوانز",
    avatar: "/images/avatar/avatar-6.jpg",
  },
];

const todayMeetings: Meeting[] = [
  {
    id: "1",
    isActive: true,
    title: "نقشه راه محصول سه‌ماهه چهارم",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    image: "/images/technology/hand-write-laptop.jpg",
    meetingDate: "امروز",
    meetingRange: "۱۱:۳۰ - ۱۳:۰۰",
    members: [
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "8",
        name: "Amir Fadaei",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-12.jpg",
      },
    ],
  },
  {
    id: "2",
    isActive: false,
    title: "بازبینی طراحی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی.",
    image: "/images/technology/design-sm.jpg",
    meetingDate: "امروز",
    meetingRange: "۱۶:۰۰ - ۱۶:۳۰",
    members: [
      {
        uid: "1",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "2",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "3",
        name: "Ahmad Fadaei",
        avatar: undefined,
      },
      {
        uid: "4",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-9.jpg",
      },
      {
        uid: "5",
        name: "تراویس فولر",
        avatar: "/images/avatar/avatar-8.jpg",
      },
      {
        uid: "6",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-16.jpg",
      },
    ],
  },
  {
    id: "3",
    isActive: false,
    title: "جلسه هفتگی",
    description: "برخی از ویژگی‌های برجسته.",
    image: "/images/technology/check-report-sm.jpg",
    meetingDate: "امروز",
    meetingRange: "۱۸:۰۰ - ۱۸:۴۵",
    members: [
      {
        uid: "5",
        name: "کاترینا وست",
        avatar: "/images/avatar/avatar-11.jpg",
      },
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-4.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "8",
        name: "Abol Hosseini",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-6.jpg",
      },
      {
        uid: "10",
        name: "Reza",
        avatar: undefined,
      },
      {
        uid: "11",
        name: "آنتونی جنسن",
        avatar: "/images/avatar/avatar-1.jpg",
      },
      {
        uid: "12",
        name: "آنتونی جنسن",
        avatar: "/images/avatar/avatar-2.jpg",
      },
    ],
  },
];

const weekMeetings = [
  {
    id: "1",
    isActive: false,
    title: "ارائه فروش",
    description: "ارائه درباره فروش و بازار.",
    image: "/images/technology/dashboard.jpg",
    meetingDate: "فردا",
    meetingRange: "۱۱:۳۰ - ۱۲:۰۰",
    members: [
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "8",
        name: "Hashemi",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-12.jpg",
      },
    ],
  },
  {
    id: "2",
    isActive: false,
    title: "تست نسخه ۱",
    description: "در حال بررسی و تست ویژگی‌ها.",
    image: "/images/technology/testing-sm.jpg",
    meetingDate: "پنجشنبه، ۴ خرداد ۱۴۰۱",
    meetingRange: "۱۴:۳۰ - ۱۵:۰۰",
    members: [
      {
        uid: "4",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-9.jpg",
      },
      {
        uid: "5",
        name: "تراویس فولر",
        avatar: "/images/avatar/avatar-8.jpg",
      },
      {
        uid: "6",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-16.jpg",
      },
      {
        uid: "1",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "2",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },
      {
        uid: "3",
        name: "Amir",
        avatar: undefined,
      },
    ],
  },
];

const monthMeetings = [
  {
    id: "1",
    isActive: false,
    title: "اپلیکیشن تحلیل جدید",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.",
    image: "/images/technology/man-tablet.jpg",
    meetingDate: "دوشنبه، ۲۸ خرداد ۱۴۰۱",
    meetingRange: "۰۸:۰۰ - ۰۹:۰۰",
    members: [
      {
        uid: "8",
        name: "Davod",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-12.jpg",
      },
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },
    ],
  },
  {
    id: "2",
    isActive: false,
    title: "کنفرانس React",
    description: "در حال بررسی و توسعه.",
    image: "/images/technology/sales-presentation-sm.jpg",
    meetingDate: "شنبه، ۳۱ خرداد ۱۴۰۱",
    meetingRange: "۱۰:۰۰ - ۱۲:۰۰",
    members: [
      {
        uid: "3",
        name: "Agha Gili",
        avatar: undefined,
      },
      {
        uid: "4",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-9.jpg",
      },
      {
        uid: "5",
        name: "تراویس فولر",
        avatar: "/images/avatar/avatar-8.jpg",
      },
      {
        uid: "1",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "2",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-20.jpg",
      },

      {
        uid: "6",
        name: "آلفردو الیوت",
        avatar: "/images/avatar/avatar-16.jpg",
      },
    ],
  },
  {
    id: "3",
    isActive: false,
    title: "جلسه ماهانه",
    description: "برخی ویژگی‌های مهم و بررسی عملکرد.",
    image: "/images/technology/check-report-sm.jpg",
    meetingDate: "دوشنبه، ۱۰ خرداد ۱۴۰۱",
    meetingRange: "۱۸:۰۰ - ۱۸:۴۵",
    members: [
      {
        uid: "5",
        name: "کاترینا وست",
        avatar: "/images/avatar/avatar-11.jpg",
      },
      {
        uid: "6",
        name: "هنری کرتیس",
        avatar: "/images/avatar/avatar-4.jpg",
      },
      {
        uid: "7",
        name: "رائول بردلی",
        avatar: "/images/avatar/avatar-5.jpg",
      },
      {
        uid: "8",
        name: "Sajad",
        avatar: undefined,
      },
      {
        uid: "9",
        name: "کوری ایوانز",
        avatar: "/images/avatar/avatar-6.jpg",
      },
      {
        uid: "10",
        name: "Aboli",
        avatar: undefined,
      },
      {
        uid: "11",
        name: "آنتونی جنسن",
        avatar: "/images/avatar/avatar-1.jpg",
      },
      {
        uid: "12",
        name: "آنتونی جنسن",
        avatar: "/images/avatar/avatar-2.jpg",
      },
    ],
  },
];

export default function Meetings() {
  return (
    <Page title="جلسات">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <div className="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-start">
          <div>
            <h3 className="dark:text-dark-100 text-xl font-semibold text-gray-800">
              جلسات شما
            </h3>
            <p className="mt-1 hidden sm:block">جلسات اخیر در تیم شما</p>
          </div>

          <div>
            <p className="dark:text-dark-100 font-medium text-gray-800">
              اعضای تیم
            </p>
            <div className="mt-2 flex space-x-2">
              {teamMembers.map((member) => (
                <Avatar
                  size={8}
                  key={member.uid}
                  name={member.name}
                  src={member.avatar}
                  initialColor="auto"
                  classNames={{
                    display: "mask is-squircle text-xs-plus rounded-none",
                  }}
                />
              ))}
              <Avatar
                size={8}
                component="button"
                title="افزودن عضو"
                classNames={{
                  display: "mask is-squircle text-xs-plus rounded-none",
                }}
                initialColor="primary"
              >
                <PlusIcon className="size-4" />
              </Avatar>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="dark:text-dark-100 text-base font-medium text-gray-800">
            امروز
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {todayMeetings.map((meeting) => (
              <MeetingCard key={meeting.id} {...meeting} />
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6">
          <h3 className="dark:text-dark-100 text-base font-medium text-gray-800">
            این هفته
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {weekMeetings.map((meeting) => (
              <MeetingCard key={meeting.id} {...meeting} />
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6">
          <h3 className="dark:text-dark-100 text-base font-medium text-gray-800">
            این ماه
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {monthMeetings.map((meeting) => (
              <MeetingCard key={meeting.id} {...meeting} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
