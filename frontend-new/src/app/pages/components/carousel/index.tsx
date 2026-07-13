// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Default } from "./Default";
import { PaginationExample } from "./PaginationExample";
import { Vertical } from "./Vertical";
import { SpaceBetween } from "./SpaceBetween";
import { WithScrollbar } from "./WithScrollbar";
import { ZoomExample } from "./ZoomExample";
import { Fade } from "./Fade";
import { Flip } from "./Flip";
import { Coverflow } from "./Coverflow";
import { Cube } from "./Cube";
import { Card } from "./Card";
import { Creative } from "./Creative";
import { Creative2 } from "./Creative2";
import { ParallaxExample } from "./ParallaxExample";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "اسلایدر" },
];

const markdownPath = "components/carousel";

const demos: Demo[] = [
  {
    title: "پیش‌فرض (Default)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> رایگان و مدرن‌ترین اسلایدر لمسی موبایل است که با انتقال‌های سخت‌افزاری شتاب‌دهی شده و رفتار طبیعی عالی ارائه می‌شود.",
    Component: Default,
    markdownName: "Default",
  },
  {
    title: "همراه با صفحه‌بندی (With Pagination)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> تمامی عناصر ناوبری مورد نیاز مانند صفحه‌بندی را به‌صورت داخلی ارائه می‌دهد. شما می‌توانید گلوله‌های صفحه‌بندی را با یک تابع سفارشی‌سازی کنید که شماره ایندکس گلوله و نام کلاس مورد نیاز را می‌گیرد.",
    Component: PaginationExample,
    markdownName: "PaginationExample",
  },
  {
    title: "اسلایدر عمودی (Vertical Carousel)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از اسلایدرهای عمودی پشتیبانی می‌کند. در اینجا یک نمونه از ایجاد اسلایدر عمودی با استفاده از Swiper آورده شده است.",
    Component: Vertical,
    markdownName: "Vertical",
  },
  {
    title: "فاصله بین اسلایدها (Space Between Carousel)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از فاصله بین اسلایدها پشتیبانی می‌کند. در اینجا نمونه‌ای از افزودن فاصله بین اسلایدها با استفاده از Swiper آمده است.",
    Component: SpaceBetween,
    markdownName: "SpaceBetween",
  },
  {
    title: "همراه با اسکرول‌بار (With Scrollbar)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از اسکرول‌بار پشتیبانی می‌کند. در اینجا مثالی از افزودن اسکرول‌بار با استفاده از Swiper آورده شده است.",
    Component: WithScrollbar,
    markdownName: "WithScrollbar",
  },
  {
    title: "بزرگ‌نمایی (Zoom)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از قابلیت بزرگ‌نمایی پشتیبانی می‌کند. در اینجا مثالی از افزودن بزرگ‌نمایی با استفاده از Swiper آمده است.",
    Component: ZoomExample,
    markdownName: "ZoomExample",
  },
  {
    title: "محو شدن (Fade)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت محو شدن پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت محو شدن با استفاده از Swiper آمده است.",
    Component: Fade,
    markdownName: "Fade",
  },
  {
    title: "چرخش (Flip)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت چرخش پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت چرخش با استفاده از Swiper آمده است.",
    Component: Flip,
    markdownName: "Flip",
  },
  {
    title: "کاورفلو (Coverflow)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت کاورفلو پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت کاورفلو با استفاده از Swiper آمده است.",
    Component: Coverflow,
    markdownName: "Coverflow",
  },
  {
    title: "مکعب (Cube)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت مکعبی پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت مکعب با استفاده از Swiper آمده است.",
    Component: Cube,
    markdownName: "Cube",
  },
  {
    title: "افکت کارت (Card Effect)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت کارت پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت کارت با استفاده از Swiper آمده است.",
    Component: Card,
    markdownName: "Card",
  },
  {
    title: "خلاقانه (Creative)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> به شما اجازه می‌دهد افکت‌های سفارشی با استفاده از ترنزیشن‌ها و ترنسفورم‌ها ایجاد کنید. در اینجا نمونه‌ای از ایجاد یک افکت سفارشی با Swiper آمده است.",
    Component: Creative,
    markdownName: "Creative",
  },
  {
    title: "خلاقانه ۲ (Creative 2)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> به شما اجازه می‌دهد افکت‌های سفارشی با استفاده از ترنزیشن‌ها و ترنسفورم‌ها ایجاد کنید. در اینجا نمونه‌ای از ایجاد یک افکت سفارشی با Swiper آمده است.",
    Component: Creative2,
    markdownName: "Creative2",
  },
  {
    title: "پاراالاکس (Parallax)",
    description:
      "<a href='https://swiperjs.com/' class='text-primary-600 dark:text-primary-400 hover:underline'>Swiper</a> از افکت پاراالاکس پشتیبانی می‌کند. در اینجا مثالی از افزودن افکت پاراالاکس با استفاده از Swiper آمده است.",
    Component: ParallaxExample,
    markdownName: "ParallaxExample",
  },
];

export default function Carousel() {
  return (
    <DemoLayout
      title="اسلایدر"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
