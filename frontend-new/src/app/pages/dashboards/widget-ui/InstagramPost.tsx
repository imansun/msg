// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function InstagramPost() {
  return (
    <Card className="p-3">
      <img
        className="h-48 w-full rounded-lg object-cover object-center"
        src="/images/objects/object-3.jpg"
        alt="پست"
      />
      <div className="mt-3">
        <p className="font-medium tracking-wide text-gray-800 dark:text-dark-100">
          ❤ پست اینستاگرام
        </p>
        <p className="mt-1 text-xs-plus">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <a
            href="##"
            className="text-xs-plus text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
          >
            #پی‌اچ‌پی
          </a>
          <a
            href="##"
            className="text-xs-plus text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
          >
            #ری‌اکت‌جی‌اس
          </a>
          <a
            href="##"
            className="text-xs-plus text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
          >
            #نکست‌جی‌اس
          </a>
        </div>
      </div>
    </Card>
  );
}
