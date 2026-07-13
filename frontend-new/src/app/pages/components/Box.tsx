// Local Imports
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Box } from "@/components/ui";
import { Page } from "@/components/shared/Page";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "باکس" },
];

const Boxes = () => {
  return (
    <Page title="باکس">
      <div className="transition-content w-full px-(--margin-x) pb-8">
        <div className="flex items-center !space-x-4 py-5 lg:py-6 rtl:space-x-reverse">
          <h2 className="text-xl font-medium tracking-wide text-gray-800 dark:text-dark-50 lg:text-2xl">
            باکس
          </h2>
          <div className="hidden self-stretch py-1 sm:flex">
            <div className="h-full w-px bg-gray-300 dark:bg-dark-600"></div>
          </div>
          <Breadcrumbs items={breadcrumbs} className="max-sm:hidden" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {/* باکس ساده */}
          <Box className="rounded-lg bg-white px-4 py-4 shadow-soft dark:bg-dark-700 dark:shadow-none sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide text-gray-800 dark:text-dark-100">
                باکس ساده
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این یک متن نمونه است که درون یک باکس ساده قرار گرفته است تا نمایش بصری آن را ببینید.
              </p>
            </div>
          </Box>

          {/* باکس گرد */}
          <Box className="rounded-2xl bg-white px-4 py-4 shadow-soft dark:bg-dark-700 dark:shadow-none sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide text-gray-800 dark:text-dark-100">
                باکس گرد
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این یک متن نمونه درون یک باکس با گوشه‌های کاملا گرد است که برای تاکید ظاهر منحصر به فرد آن می‌باشد.
              </p>
            </div>
          </Box>

          {/* باکس حاشیه‌دار */}
          <Box className="rounded-lg border border-gray-150 bg-white px-4 py-4 dark:border-dark-600 dark:bg-dark-700 sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide text-gray-800 dark:text-dark-100">
                باکس حاشیه‌دار
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس یک حاشیه دارد که آن را از بقیه بخش‌ها مجزا می‌کند و برای نمایش کادر بندی استفاده می‌شود.
              </p>
            </div>
          </Box>

          {/* باکس اولیه */}
          <Box className="rounded-lg bg-primary-600 px-4 py-4 text-white dark:bg-primary-500 sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس اولیه
              </h2>
            </div>
            <div className="pt-2">
              <p>
                از این باکس برای نمایش اطلاعات مهم و برجسته با رنگ اصلی سایت استفاده می‌شود.
              </p>
            </div>
          </Box>

          {/* باکس ثانویه */}
          <Box className="rounded-lg bg-secondary px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس ثانویه
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس با رنگ ثانویه برای تاکید امکانات یا اطلاعات جانبی استفاده می‌شود.
              </p>
            </div>
          </Box>

          {/* باکس اطلاعاتی */}
          <Box className="rounded-lg bg-info px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس اطلاعاتی
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس مناسب نمایش نکات یا پیام‌های اطلاعاتی برای کاربران است.
              </p>
            </div>
          </Box>

          {/* باکس موفقیت */}
          <Box className="rounded-lg bg-success px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس موفقیت
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس برای اطلاع‌رسانی‌های موفقیت‌آمیز و پیام‌های مثبت به کار می‌رود.
              </p>
            </div>
          </Box>

          {/* باکس هشدار */}
          <Box className="rounded-lg bg-warning px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس هشدار
              </h2>
            </div>
            <div className="pt-2">
              <p>
                برای نمایش پیام‌های هشدار یا توجه به نکات مهم از این باکس استفاده کنید.
              </p>
            </div>
          </Box>

          {/* باکس خطا */}
          <Box className="rounded-lg bg-error px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس خطا
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس برای نمایش خطاها و پیام‌های منفی طراحی شده است.
              </p>
            </div>
          </Box>

          {/* باکس Glow اولیه */}
          <Box className="rounded-lg bg-primary-600 px-4 py-4 text-white shadow-lg shadow-primary-600/50 dark:bg-primary-500 dark:shadow-primary-500/50 sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس اولیه درخشان
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس دارای جلوه سایه روشن برای تاکید بیشتر است.
              </p>
            </div>
          </Box>

          {/* باکس Glow هشدار */}
          <Box className="rounded-lg bg-warning px-4 py-4 text-white shadow-lg shadow-warning/50 sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس هشدار درخشان
              </h2>
            </div>
            <div className="pt-2">
              <p>
                جعبه‌ای با رنگ هشدار و سایه ویژه برای پیام‌های اخطاری مهم.
              </p>
            </div>
          </Box>

          {/* باکس Glow اطلاعاتی */}
          <Box className="rounded-lg bg-info px-4 py-4 text-white shadow-lg shadow-info/50 sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس اطلاعاتی درخشان
              </h2>
            </div>
            <div className="pt-2">
              <p>
                باکس اطلاعاتی با افکت ویژه سایه جهت جلب توجه بیشتر به پیام.
              </p>
            </div>
          </Box>

          {/* باکس گرادیان ارغوانی به نیلی */}
          <Box className="rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس گرادیان ارغوانی ـ نیلی
              </h2>
            </div>
            <div className="pt-2">
              <p>
                این باکس با گرادیان رنگی جذاب برای بخش‌های خاص مورد استفاده قرار می‌گیرد.
              </p>
            </div>
          </Box>

          {/* باکس گرادیان سرخابی به صورتی */}
          <Box className="rounded-lg bg-linear-to-r from-fuchsia-600 to-pink-600 px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس گرادیان سرخابی ـ صورتی
              </h2>
            </div>
            <div className="pt-2">
              <p>
                یک باکس با گرادیان چشم‌نواز از سرخابی به صورتی برای استفاده ویژه.
              </p>
            </div>
          </Box>

          {/* باکس گرادیان کهربایی به نارنجی */}
          <Box className="rounded-lg bg-linear-to-br from-amber-400 to-orange-600 px-4 py-4 text-white sm:px-5">
            <div>
              <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                باکس گرادیان کهربایی ـ نارنجی
              </h2>
            </div>
            <div className="pt-2">
              <p>
                باکس با افکت گرادیان از رنگ کهربایی به نارنجی برای تاکید بخش‌های پویا.
              </p>
            </div>
          </Box>

          {/* باکس گرادیان حاشیه‌دار آبی */}
          <Box className="rounded-lg bg-linear-to-r from-sky-400 to-blue-600 p-1">
            <Box className="rounded-lg bg-gray-50 px-4 py-4 dark:bg-dark-900 sm:px-5">
              <div>
                <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                  باکس گرادیان حاشیه‌دار آبی
                </h2>
              </div>
              <div className="pt-2">
                <p>
                  این باکس با حاشیه گرادیانی و پس زمینه روشن نمایش داده شده است.
                </p>
              </div>
            </Box>
          </Box>

          {/* باکس گرادیان حاشیه‌دار سبز */}
          <Box className="rounded-lg bg-linear-to-r from-green-400 to-fuchsia-400 p-1">
            <Box className="rounded-lg bg-gray-50 px-4 py-4 dark:bg-dark-900 sm:px-5">
              <div>
                <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                  باکس گرادیان حاشیه‌دار سبز
                </h2>
              </div>
              <div className="pt-2">
                <p>
                  این باکس با خط حاشیه گرادیانی سبز تا سرخابی و پس‌زمینه روشن ارائه شده است.
                </p>
              </div>
            </Box>
          </Box>

          {/* باکس گرادیان حاشیه‌دار نارنجی */}
          <Box className="rounded-lg bg-linear-to-r from-amber-400 to-orange-600 p-1">
            <Box className="rounded-lg bg-gray-50 px-4 py-4 dark:bg-dark-900 sm:px-5">
              <div>
                <h2 className="line-clamp-1 text-lg font-medium tracking-wide">
                  باکس گرادیان حاشیه‌دار نارنجی
                </h2>
              </div>
              <div className="pt-2">
                <p>
                  یک باکس با حاشیه گرادیانی از کهربایی به نارنجی و پس زمینه روشن و مدرن.
                </p>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export default Boxes;
