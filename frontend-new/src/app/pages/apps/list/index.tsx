// Import Dependencies
import {
  ChatBubbleLeftIcon,
  ViewColumnsIcon,
  CloudIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaN, FaCar, FaShapes } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { Link } from "react-router";

// Local Imports
import { Page } from "@/components/shared/Page";
import { randomId } from "@/utils/randomId";
import { Avatar, AvatarProps, Card } from "@/components/ui";

// ----------------------------------------------------------------------

interface App {
  id: string;
  logo: React.ElementType;
  color: AvatarProps["initialColor"];
  name: string;
  text: string;
  path: string;
}

const apps: App[] = [
  {
    id: randomId(),
    logo: ChatBubbleLeftIcon,
    color: "info",
    name: "اپلیکیشن چت",
    text: "کیت رابط کاربری پیام‌رسان Tailux شامل طراحی‌هایی برای چت اجتماعی است.",
    path: "/apps/chat",
  },
  {
    id: randomId(),
    logo: ViewColumnsIcon,
    color: "warning",
    name: "تخته کانبان",
    text: "تخته کانبان برای پیگیری وظایف شخصی و کاری شما.",
    path: "/apps/kanban",
  },
  {
    id: randomId(),
    logo: CloudIcon,
    color: "secondary",
    name: "مدیریت فایل",
    text: "کیت رابط کاربری مدیریت فایل Tailux با جدیدترین ترندهای طراحی ساخته شده است.",
    path: "/apps/filemanager",
  },
  {
    id: randomId(),
    logo: FaMoneyBillWave,
    color: "primary",
    name: "اپلیکیشن کارها",
    text: "کیت رابط کاربری Todo Tailux یک لیست کار ساده و اپلیکیشن مدیریت وظایف است.",
    path: "/apps/todo",
  },
  {
    id: randomId(),
    logo: RiRobot2Line,
    color: "warning",
    name: "چت هوش مصنوعی",
    text: "چت‌بات هوش مصنوعی Tailux یک چت‌بات آماده است که متن می‌نویسد. می‌توانید از آن برای نوشتن داستان، پیام یا کد برنامه‌نویسی استفاده کنید.",
    path: "/apps/ai-chat",
  },
  {
    id: randomId(),
    logo: EnvelopeIcon,
    color: "error",
    name: "اپلیکیشن ایمیل",
    text: "کیت رابط کاربری ایمیل Tailux شامل طراحی‌هایی برای سیستم ایمیل است.",
    path: "/apps/mail",
  },
  {
    id: randomId(),
    logo: FaN,
    color: "success",
    name: "بازار NFT نسخه ۱",
    text: "کیت رابط کاربری فروشگاه NFT Tailux یک کیت طراحی واکنش‌گرا و با کیفیت بالا برای بازار NFT است.",
    path: "/apps/nft-1",
  },
  {
    id: randomId(),
    logo: FaN,
    color: "info",
    name: "بازار NFT نسخه ۲",
    text: "کیت رابط کاربری فروشگاه NFT Tailux یک کیت طراحی واکنش‌گرا و با کیفیت بالا برای بازار NFT است.",
    path: "/apps/nft-2",
  },
  {
    id: randomId(),
    logo: FaMoneyBillWave,
    color: "warning",
    name: "فروشگاه (POS)",
    text: "کیت رابط کاربری POS Tailux یک کیت طراحی واکنش‌گرا و با کیفیت بالا برای سیستم فروشگاهی است.",
    path: "/apps/pos",
  },
  {
    id: randomId(),
    logo: FaCar,
    color: "primary",
    name: "سفر",
    text: "کیت رابط کاربری سفر Tailux یک کیت طراحی واکنش‌گرا و با کیفیت بالا برای وب‌سایت‌های آژانس مسافرتی است.",
    path: "/apps/travel",
  },
];

export default function AppsList() {
  return (
    <Page title="اپلیکیشن NFT نسخه ۲">
      <div className="transition-content px-(--margin-x) pb-8">
        <div className="mt-12 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-500 text-white">
            <FaShapes className="size-8" />
          </div>
          <h3 className="dark:text-dark-100 mt-3 text-xl font-semibold text-gray-800">
            اپلیکیشن‌های Tailux
          </h3>
          <p className="mt-0.5 text-base">
            لیست اپلیکیشن‌های آماده Tailux
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {apps.map((app) => (
            <Card className="flex flex-col p-4 sm:p-5" key={app.id}>
              <Avatar size={12} initialColor={app.color}>
                <app.logo className="size-6" />
              </Avatar>
              <h2 className="dark:text-dark-100 mt-5 line-clamp-1 text-base font-medium tracking-wide text-gray-800">
                {app.name}
              </h2>
              <p className="mt-1 grow">{app.text}</p>
              <div className="mt-5 pb-1">
                <Link
                  to={app.path}
                  className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
                >
                  مشاهده اپلیکیشن
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Page>
  );
}
