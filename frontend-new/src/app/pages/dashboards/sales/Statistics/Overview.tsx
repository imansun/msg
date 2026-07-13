// Import Dependencies
import {
  ArrowUpIcon,
  CubeIcon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Avatar, Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function Overview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      <Card className="flex justify-between p-5">
        <div>
          <p>فروش</p>
          <p className="this:info text-this dark:text-this-lighter mt-0.5 text-2xl font-medium">
            65,000 تومان
          </p>
          <p className="this:success text-this dark:text-this-lighter mt-3 flex items-center gap-1">
            <ArrowUpIcon className="size-4" />
            <span>4.3%</span>
          </p>
        </div>
        <Avatar
          size={12}
          classNames={{
            display: "mask is-squircle rounded-none",
          }}
          initialVariant="soft"
          initialColor="info"
        >
          <PresentationChartBarIcon className="size-6" />
        </Avatar>
      </Card>

      <Card className="flex justify-between p-5">
        <div>
          <p>مشتریان</p>
          <p className="this:warning text-this dark:text-this-lighter mt-0.5 text-2xl font-medium">
            12,000
          </p>
          <p className="this:success text-this dark:text-this-lighter mt-3 flex items-center gap-1">
            <ArrowUpIcon className="size-4" />
            <span>7.2%</span>
          </p>
        </div>
        <Avatar
          size={12}
          classNames={{
            display: "mask is-squircle rounded-none",
          }}
          initialVariant="soft"
          initialColor="warning"
        >
          <UsersIcon className="size-6" />
        </Avatar>
      </Card>

      <Card className="flex justify-between p-5">
        <div>
          <p>محصولات</p>
          <p className="this:success text-this dark:text-this-lighter mt-0.5 text-2xl font-medium">
            47,000
          </p>
          <p className="this:success text-this dark:text-this-lighter mt-3 flex items-center gap-1">
            <ArrowUpIcon className="size-4" />
            <span>8%</span>
          </p>
        </div>
        <Avatar
          size={12}
          classNames={{
            display: "mask is-squircle rounded-none",
          }}
          initialVariant="soft"
          initialColor="success"
        >
          <CubeIcon className="size-6" />
        </Avatar>
      </Card>

      <Card className="flex justify-between p-5">
        <div>
          <p>درآمد</p>
          <p className="this:secondary text-this dark:text-this-lighter mt-0.5 text-2xl font-medium">
            128,000 تومان
          </p>
          <p className="this:success text-this dark:text-this-lighter mt-3 flex items-center gap-1">
            <ArrowUpIcon className="size-4" />
            <span>3.69%</span>
          </p>
        </div>
        <Avatar
          size={12}
          classNames={{
            display: "mask is-squircle rounded-none",
          }}
          initialVariant="soft"
          initialColor="secondary"
        >
          <CurrencyDollarIcon className="size-6" />
        </Avatar>
      </Card>
    </div>
  );
}
