// Import Dependencies
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { register } from "swiper/element/bundle";
import { useLayoutEffect, useRef } from "react";
import type { SwiperContainer } from "swiper/element";
import invariant from "tiny-invariant";

// Local Imports
import { CreditCard } from "./CreditCard";
import { useLocaleContext } from "@/app/contexts/locale/context";

// ----------------------------------------------------------------------

register();

export function Balance() {
  const carouselRef = useRef<SwiperContainer>(null);
  const { direction } = useLocaleContext();

  useLayoutEffect(() => {
    invariant(carouselRef.current, "carouselRef is not defined");

    const params = {
      injectStyles: [
        `
        :host(.credit-card-carousel) .swiper {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        `,
      ],
    };

    Object.assign(carouselRef.current, params);

    setTimeout(() => {
      carouselRef.current?.initialize();
    });
  }, []);

  return (
    <div className="from-primary-600 to-primary-500 col-span-12 grid grid-cols-12 rounded-lg bg-linear-to-r py-5 sm:py-6">
      <div className="col-span-12 flex flex-col px-4 text-white sm:col-span-6 lg:col-span-4 sm:ltr:pr-0 sm:rtl:pl-0">
        <div className="-mt-1 flex items-center space-x-2">
          <h2 className="text-base font-medium tracking-wide">موجودی</h2>
        </div>
        <div className="mt-3 grow">
          <p className="text-2xl font-semibold">۶۵,۵۶۵,۵۰۰ تومان</p>
          <p className="text-xs text-white/90">3.5% +</p>
        </div>
        <div className="mt-4 flex space-x-7">
          <div>
            <p className="text-white/90">درآمد</p>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-black/20">
                <ArrowUpIcon className="size-4" />
              </div>
              <p className="text-base font-medium">۲۲,۲۵۲,۲۰۰ تومان</p>
            </div>
          </div>
          <div>
            <p className="text-white/90">هزینه</p>
            <div className="mt-1 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-black/20">
                <ArrowDownIcon className="size-4" />
              </div>
              <p className="text-base font-medium">۲,۲۵۲,۲۰۰ تومان</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 mt-5 sm:col-span-6 sm:mt-0 lg:col-span-8">
        {/* @ts-expect-error - Swiper web components */}
        <swiper-container
          init="false"
          slides-per-view="auto"
          dir={direction}
          space-between="16"
          ref={carouselRef}
          class="credit-card-carousel flex"
        >
          {/* @ts-expect-error - Swiper web components */}
          <swiper-slide class="w-auto!">
            <CreditCard
              image="/images/payments/cc-visa-white.svg"
              balance="۱۶,۸۶۶,۶۰۰ تومان"
              number="**** **** **** 7946"
            />
            {/* @ts-expect-error - Swiper web components */}
          </swiper-slide>
          {/* @ts-expect-error - Swiper web components */}
          <swiper-slide class="w-auto!">
            <CreditCard
              image="/images/payments/cc-visa-white.svg"
              balance="۲۵۹,۹۲۰,۰۰۰ تومان"
              number="**** **** **** 2694"
            />
            {/* @ts-expect-error - Swiper web components */}
          </swiper-slide>
          {/* @ts-expect-error - Swiper web components */}
          <swiper-slide class="w-auto!">
            <CreditCard
              image="/images/payments/cc-visa-white.svg"
              balance="۳۹,۵۲۵,۰۰۰ تومان"
              number="**** **** **** 3298"
            />
            {/* @ts-expect-error - Swiper web components */}
          </swiper-slide>
          {/* @ts-expect-error - Swiper web components */}
          <swiper-slide class="w-auto!">
            <CreditCard
              image="/images/payments/cc-visa-white.svg"
              balance="۳۲,۰۶۱,۱۰۰ تومان"
              number="**** **** **** 3812"
            />
            {/* @ts-expect-error - Swiper web components */}
          </swiper-slide>
          {/* @ts-expect-error - Swiper web components */}
        </swiper-container>
      </div>
    </div>
  );
}
