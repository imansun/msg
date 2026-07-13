// Local Imports
import { Avatar } from "@/components/ui";

// ----------------------------------------------------------------------

export function Sender() {
  return (
    <div className="flex flex-col items-start justify-between pt-3 md:flex-row">
      <div className="flex gap-3">
        <Avatar
          size={10}
          name="H K"
          color="warning"
          classNames={{
            display: "text-base",
          }}
        />
        <div>
          <div className="font-bold text-gray-800 dark:text-dark-100">
            هنری کرتیس
          </div>
          <div className="mt-1 text-xs text-gray-800 dark:text-dark-100">
            پاسخ به:{" "}
            <a
              href="mailto:henrycurtis@example.com"
              className="hover:underline"
            >
              henrycurtis@example.com
            </a>
          </div>
          <div className="mt-1 text-xs md:hidden">۲۴ اردیبهشت ۱۴۰۳، ۲۰:۱۵:۰۰</div>
        </div>
      </div>
      <div className="mt-2 text-end text-xs max-md:hidden">
        ۲۴ اردیبهشت ۱۴۰۳، ۲۰:۱۵:۰۰
      </div>
    </div>
  );
}
