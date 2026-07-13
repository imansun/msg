// Local Imports
import {
  Timeline,
  TimelineItem,
  type TimelineItemProps,
} from "@/components/ui";
import { randomId } from "@/utils/randomId";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

type TimeLine = {
  id: string;
  content: ReactNode;
  title: TimelineItemProps["title"];
  time: TimelineItemProps["time"];
  color: TimelineItemProps["color"];
};

const timeline: TimeLine[] = [
  {
    id: randomId(),
    title: "تغییر عکس کاربری",
    time: new Date().setMinutes(new Date().getMinutes() - 12),
    content: "جان دو عکس آواتار خود را تغییر داد",
    color: "neutral",
  },
  {
    id: randomId(),
    title: "اضافه شدن ویدیو",
    time: new Date().setHours(new Date().getHours() - 2),
    content: "مورز کلارک یک ویدیوی جدید اضافه کرد",
    color: "primary",
  },
  {
    id: randomId(),
    title: "تکمیل طراحی",
    time: new Date().setHours(new Date().getHours() - 3),
    content: "رابرت نولان طراحی اپلیکیشن CRM را به پایان رساند",
    color: "success",
  },
  {
    id: randomId(),
    title: "نمودار ER",
    time: new Date().setDate(new Date().getDate() - 1),
    content: "تیم، اپلیکیشن نمودار ER را تکمیل کرد",
    color: "warning",
  },
  {
    id: randomId(),
    title: "گزارش هفتگی",
    time: new Date().setDate(new Date().getDate() - 2),
    content: "گزارش هفتگی بارگذاری شد",
    color: "error",
  },
];

export function Outlined() {
  return (
    <div className="max-w-xl">
      <Timeline variant="outlined" lineSpace="0.75rem">
        {timeline.map((item) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            time={item.time}
            color={item.color}
            isPing
          >
            {item.content}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
