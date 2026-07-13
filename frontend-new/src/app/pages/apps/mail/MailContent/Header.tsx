// Import Dependencies
import {
  ArrowLeftIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ClockIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="-mx-1 flex justify-between pt-4">
      <div className="flex gap-1">
        <Button
          data-tooltip
          data-tooltip-content="بازگشت"
          onClick={() => navigate(-1)}
          isIcon
          variant="flat"
          className="size-8"
        >
          <ArrowLeftIcon className="size-4.5 rtl:rotate-180" />
        </Button>
        <Button
          data-tooltip
          data-tooltip-content="بایگانی"
          isIcon
          variant="flat"
          className="size-8"
        >
          <ArchiveBoxIcon className="size-4.5" />
        </Button>
        <Button
          data-tooltip
          data-tooltip-content="حذف"
          isIcon
          color="error"
          variant="flat"
          className="size-8"
        >
          <TrashIcon className="size-4.5" />
        </Button>
        <div
          role="none"
          className="m-1 w-px shrink-0 bg-gray-200 dark:bg-dark-500"
        />
        <Button
          data-tooltip
          data-tooltip-content="چرت زدن"
          isIcon
          variant="flat"
          className="size-8"
        >
          <ClockIcon className="size-4.5" />
        </Button>
      </div>
      <div className="flex gap-1">
        <Button
          data-tooltip
          data-tooltip-content="پاسخ"
          isIcon
          variant="flat"
          className="size-8"
        >
          <ArrowUturnLeftIcon className="size-4.5" />
        </Button>
        <Button
          data-tooltip
          data-tooltip-content="ارسال به جلو"
          isIcon
          variant="flat"
          className="size-8"
        >
          <ArrowUturnRightIcon className="size-4.5" />
        </Button>
        <div
          role="none"
          className="m-1 w-px shrink-0 bg-gray-200 dark:bg-dark-500"
        />
        <Button isIcon variant="flat" className="size-8">
          <EllipsisVerticalIcon className="size-4.5" />
        </Button>
      </div>
    </header>
  );
}
