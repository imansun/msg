// Local Imports
import {
  Card,
  Timeline,
  TimelineItem,
  type TimelineItemProps,
} from "@/components/ui";
import { randomId } from "@/utils/randomId";

// ----------------------------------------------------------------------

interface Timeline {
  id: string;
  title: TimelineItemProps["title"];
  time: TimelineItemProps["time"];
  content: TimelineItemProps["content"];
  color: TimelineItemProps["color"];
  isActive: TimelineItemProps["isPing"];
}

const timeline: Timeline[] = [
  {
    id: randomId(),
    title: "عکس کاربر تغییر کرد",
    time: new Date().setMinutes(new Date().getMinutes() - 12),
    content: "جان دو عکس آواتار خود را تغییر داد",
    color: "neutral",
    isActive: undefined,
  },
  {
    id: randomId(),
    title: "ویدئو اضافه شد",
    time: new Date().setHours(new Date().getHours() - 2),
    content: "مورس کلارک ویدئوی جدیدی اضافه کرد",
    color: "primary",
    isActive: true,
  },
  {
    id: randomId(),
    title: "طراحی تکمیل شد",
    time: new Date().setHours(new Date().getHours() - 3),
    content: "رابرت نولان طراحی اپلیکیشن CRM را تکمیل کرد",
    color: "success",
    isActive: true,
  },
  {
    id: randomId(),
    title: "نمودار ER",
    time: new Date().setDate(new Date().getDate() - 1),
    content: "تیم نمودار ER اپلیکیشن را تکمیل کرد",
    color: "warning",
    isActive: undefined,
  },
  {
    id: randomId(),
    title: "گزارش هفتگی",
    time: new Date().setDate(new Date().getDate() - 2),
    content: "گزارش هفتگی بارگذاری شد",
    color: "error",
    isActive: true,
  },
];

export function TeamActivity() {
  return (
    <Card className="col-span-12 px-4 pb-4 sm:col-span-6 sm:px-5 lg:col-span-4">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className="dark:text-dark-100 min-w-0 font-medium tracking-wide text-gray-800">
          فعالیت تیم
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <Timeline lineSpace="0.75rem">
        {timeline.map((item) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            time={item.time}
            color={item.color}
            isPing={item.isActive}
          >
            {item.content}
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
}
