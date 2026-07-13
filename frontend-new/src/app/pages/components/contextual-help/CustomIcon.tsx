// Import Dependencies
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { ContextualHelp } from "@/components/shared/ContextualHelp";

// ----------------------------------------------------------------------

export function CustomIcon() {
  return (
    <div className="flex space-x-2 rtl:space-x-reverse">
      <ContextualHelp
        Icon={ExclamationCircleIcon}
        title="راهنمای متنی چیست؟"
        content={
          <p>
            راهنمای متنی به کاربر اطلاعات بیشتری درباره وضعیت یک کامپوننت مجاور یا یک نمای کلی ارائه می‌دهد.
          </p>
        }
      />
      <ContextualHelp
        Icon={ExclamationTriangleIcon}
        title="راهنمای متنی چیست؟"
        content={
          <p>
            راهنمای متنی به کاربر اطلاعات بیشتری درباره وضعیت یک کامپوننت مجاور یا یک نمای کلی ارائه می‌دهد.
          </p>
        }
      />
    </div>
  );
}
