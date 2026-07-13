// Import Dependencies
import { FaTwitter } from "react-icons/fa";

// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function TwitterPost() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <a
          href="##"
          className="dark:hover:text-dark-100 dark:focus:text-dark-100 font-medium tracking-wide transition-colors hover:text-gray-800 focus:text-gray-800"
        >
          @حساب_توییتر
        </a>

        <FaTwitter />
      </div>
      <p className="text-xs-plus mt-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ. دولورمک
        ایست لیبرو نکه.
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
    </Card>
  );
}
