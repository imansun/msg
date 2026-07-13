import { type ParamItem } from "@/components/docs/demo/DemoLayout/Params";

export const params: ParamItem[] = [
  {
    name: "parentSelector",
    type: "string",
    description:
      "سلکتور CSS برای کانتینر والد که ناوبری در آن محدوده انجام می‌شود.",
  },
  {
    name: "siblingSelector",
    type: "string",
    description: "سلکتور CSS برای عناصر هم‌رده که بین آن‌ها ناوبری صورت می‌گیرد.",
  },
  {
    name: "onKeyDown",
    type: "function",
    description: "تابع کال‌بک که در هر رویداد keydown فراخوانی می‌شود.",
  },
  {
    name: "loop",
    default: true,
    type: "boolean",
    description:
      "مشخص می‌کند آیا ناوبری باید به ابتدا یا انتها برگردد یا خیر.",
  },
  {
    name: "activateOnFocus",
    default: false,
    type: "boolean",
    description:
      "مشخص می‌کند آیا عناصر هنگام فوکوس فعال شوند (مثلاً کلیک شوند) یا خیر.",
  },
  {
    name: "dir",
    default: "document.documentElement.dir",
    type: "string",
    description:
      'جهت متن ("ltr" یا "rtl") برای تعیین رفتار ناوبری.',
  },
  {
    name: "orientation",
    type: "string",
    description:
      'مشخص‌کننده جهت ناوبری ("horizontal" یا "vertical").',
  },
];
