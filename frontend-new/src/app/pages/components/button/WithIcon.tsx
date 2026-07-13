// Import Dependencies
import {
  HeartIcon,
  TicketIcon,
  ArrowPathIcon,
  NoSymbolIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import { CloudIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

const WithIcon = () => {
  return (
    <div className="inline-space flex flex-wrap">
      <Button color="secondary" className="space-x-2 rtl:space-x-reverse">
        <HeartIcon className="size-5 stroke-2" />
        <span>پسند</span>
      </Button>

      <Button
        color="primary"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <TicketIcon className="size-5 stroke-2" />
        <span>بلیط‌ها</span>
      </Button>

      <Button
        color="info"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span>ابر</span>
        <CloudIcon className="size-5" />
      </Button>

      <Button
        color="warning"
        variant="outlined"
        className="!space-x-2 rtl:space-x-reverse"
      >
        <span>روند صعودی</span>
        <ArrowTrendingUpIcon className="size-5" />
      </Button>

      <Button className="!space-x-2 rounded-full rtl:space-x-reverse">
        <ArrowPathIcon className="size-5" />
        <span>تازه‌سازی</span>
      </Button>

      <Button color="warning" isGlow className="!space-x-2 rtl:space-x-reverse">
        <span>کم انرژی</span>
        <ChevronDoubleDownIcon className="size-5" />
      </Button>

      <Button
        color="error"
        variant="soft"
        className="!space-x-2 rtl:space-x-reverse"
      >
        <NoSymbolIcon className="size-5" />
        <span>مسدود کردن</span>
      </Button>
    </div>
  );
};

export { WithIcon };
