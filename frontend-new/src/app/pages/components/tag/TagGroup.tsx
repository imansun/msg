// ایمپورت وابستگی‌ها
import { HeartIcon } from "@heroicons/react/24/outline";

// ایمپورت‌های محلی
import { Tag } from "@/components/ui";

const TagGroup = () => {
  return (
    <div className="inline-space flex flex-wrap items-end">
      <div className="inline-flex">
        <Tag href="#" className="ltr:rounded-r-none rtl:rounded-l-none">
          اولیه
        </Tag>
        <Tag
          href="#"
          color="primary"
          className="ltr:rounded-l-none rtl:rounded-r-none"
        >
          ۵۵
        </Tag>
      </div>
      <div className="inline-flex">
        <Tag
          href="#"
          color="info"
          variant="soft"
          className="ltr:rounded-r-none rtl:rounded-l-none"
        >
          پیام
        </Tag>
        <Tag
          href="#"
          color="info"
          className="ltr:rounded-l-none rtl:rounded-r-none"
        >
          ۳۲
        </Tag>
      </div>
      <div className="inline-flex">
        <Tag
          href="#"
          color="success"
          variant="soft"
          className="ltr:rounded-r-none rtl:rounded-l-none"
        >
          پیام
        </Tag>
        <Tag
          href="#"
          color="success"
          isGlow
          className="ltr:rounded-l-none rtl:rounded-r-none"
        >
          ۳۲
        </Tag>
      </div>
      <div className="inline-flex">
        <Tag
          href="#"
          color="warning"
          variant="outlined"
          className="ltr:rounded-r-none rtl:rounded-l-none"
        >
          هشدار
        </Tag>
        <Tag
          href="#"
          color="warning"
          className="ltr:rounded-l-none rtl:rounded-r-none"
        >
          ۳۲
        </Tag>
      </div>
      <Tag href="#" className="gap-2">
        <HeartIcon className="size-4.5 stroke-2 text-secondary dark:text-secondary-lighter" />
        <span>حامی</span>
      </Tag>
      <Tag
        href="#"
        unstyled
        className="rounded-sm bg-gray-200 px-2 py-1.5 text-xs text-gray-900"
      >
        روشن
      </Tag>
      <Tag
        href="#"
        unstyled
        className="rounded-sm bg-dark-800 px-2 py-1.5 text-xs text-white"
      >
        تیره
      </Tag>
    </div>
  );
};

export { TagGroup };
