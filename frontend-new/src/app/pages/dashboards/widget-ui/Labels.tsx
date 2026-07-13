// Local Imports
import { Card, Tag } from "@/components/ui";

// ----------------------------------------------------------------------

export function Labels() {
  return (
    <Card className="px-4 pb-4 sm:px-5">
      <div className="flex h-14 items-center justify-between py-3">
        <h2 className="truncate text-sm-plus font-medium tracking-wide text-gray-800 dark:text-dark-100">
          برچسب‌ها
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag component="button">آیکون</Tag>
        <Tag component="button">رابط کاربری/تجربه کاربری</Tag>
        <Tag component="button" color="primary">
          تیلویند
        </Tag>
        <Tag component="button">بوت‌استرپ</Tag>
        <Tag component="button" color="primary">
          ری‌اکت
        </Tag>
        <Tag component="button">آلپاین</Tag>
        <Tag component="button" color="primary">
          طراحی
        </Tag>
      </div>
    </Card>
  );
}
