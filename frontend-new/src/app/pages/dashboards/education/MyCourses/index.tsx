// Import Dependencies
import { Fragment, useLayoutEffect, useRef } from "react";
import { register, SwiperContainer } from "swiper/element/bundle";
import invariant from "tiny-invariant";

// Local Imports
import { useLocaleContext } from "@/app/contexts/locale/context";
import { CourseCard, type Course } from "./CourseCard";

// ----------------------------------------------------------------------

register();

const courses: Course[] = [
  {
    id: "1",
    title: "طراحی برای مبتدیان",
    teacher: "کانر گوزمان",
    level: "advanced",
    progress: 36,
  },
  {
    id: "2",
    title: "بازاریابی در شبکه‌های اجتماعی",
    teacher: "اریک فاکس",
    level: "beginner",
    progress: 60,
  },
  {
    id: "3",
    title: "مبانی بازاریابی دیجیتال",
    teacher: "تراویس فولر",
    level: "intermediate",
    progress: 68,
  },
  {
    id: "4",
    title: "فیگما: ساخت سیستم طراحی",
    teacher: "دریک سیمونز",
    level: "advanced",
    progress: 15,
  },
  {
    id: "5",
    title: "شروع کار با ویو",
    teacher: "کاترینا وست",
    level: "beginner",
    progress: 44,
  },
  {
    id: "6",
    title: "جاوااسکریپت شی‌گرا برای مبتدیان",
    teacher: "تراویس فولر",
    level: "intermediate",
    progress: 36,
  },
];

export function MyCourses() {
  const carouselRef = useRef<SwiperContainer>(null);
  const { direction } = useLocaleContext();

  useLayoutEffect(() => {
    invariant(carouselRef.current, "Carousel ref is not found");
    const params = {
      injectStyles: [
        `
        :host(.my-courses-carousel) .swiper {
          padding-left: var(--margin-x) !important;
          padding-right: var(--margin-x) !important;
        }
        `,
      ],
    };

    Object.assign(carouselRef.current, params);

    carouselRef.current?.initialize();
  }, []);

  return (
    <div>
      <p className="transition-content text-dark-700 dark:text-dark-100 px-(--margin-x) text-base font-medium">
        دوره‌های من
      </p>
      <div>
        {/* @ts-expect-error  Custom Web Component*/}
        <swiper-container
          init="false"
          class="my-courses-carousel transition-content mx-0 mt-4 flex"
          slides-per-view="auto"
          dir={direction}
          space-between="18"
          ref={carouselRef}
        >
          {courses.map((course) => (
            <Fragment key={course.id}>
              {/* @ts-expect-error  Custom Web Component*/}
              <swiper-slide class="flex h-auto w-auto flex-col">
                <CourseCard {...course} />
                {/* @ts-expect-error  Custom Web Component*/}
              </swiper-slide>
            </Fragment>
          ))}
          {/* @ts-expect-error  Custom Web Component*/}
        </swiper-container>
      </div>
    </div>
  );
}
