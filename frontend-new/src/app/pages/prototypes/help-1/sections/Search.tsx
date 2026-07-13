// Import Dependencies
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Input, Tag } from "@/components/ui";

// ----------------------------------------------------------------------

export function Search() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h2 className="dark:text-dark-100 mt-8 text-xl font-medium text-gray-800 lg:text-2xl">
        چگونه می‌توانیم به شما کمک کنیم؟
      </h2>
      <Input
        classNames={{
          root: "mt-6 w-full max-w-md",
          input: "h-12 rounded-full text-base",
          prefix: "w-10!",
        }}
        placeholder="سؤال خود را جستجو کنید"
        prefix={<MagnifyingGlassIcon className="size-5 stroke-2" />}
      />

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <span>جستجوهای پرطرفدار:</span>

        <div className="flex flex-wrap gap-1">
          <Tag href="#" color="info" variant="soft" className="rounded-full">
            اپلیکیشن‌ها
          </Tag>
          <Tag href="#" color="info" variant="soft" className="rounded-full">
            توسعه‌دهندگان
          </Tag>
          <Tag href="#" color="info" variant="soft" className="rounded-full">
            تعمیرات
          </Tag>
          <Tag href="#" color="info" variant="soft" className="rounded-full">
            صورتحساب
          </Tag>
        </div>
      </div>
    </div>
  );
}
