// Import Dependencies
import { XMarkIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Avatar, Button, Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function MayYouKnow() {
  return (
    <Card className="px-4 pb-4 sm:px-5">
      <div className="flex h-14 items-center justify-between py-3">
        <h2 className="truncate text-sm-plus font-medium tracking-wide text-gray-800 dark:text-dark-100">
          شاید بشناسید
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Card skin="bordered" className="p-3">
          <div className="absolute right-0 top-0 mx-2 my-1">
            <button className="text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100">
              <XMarkIcon className="size-4 stroke-2" />
            </button>
          </div>
          <div className="text-center">
            <Avatar
              size={10}
              src="/images/avatar/avatar-20.jpg"
              classNames={{
                root: "mx-auto mt-3",
                display: "mask is-hexagon rounded-none",
              }}
            />
            <p className="mt-1.5 truncate font-medium text-gray-800 dark:text-dark-100">
              جان دو
            </p>
            <Button className="mt-3 h-6 rounded-full px-3 text-xs">
              دنبال کردن
            </Button>
          </div>
        </Card>
        <Card skin="bordered" className="p-3">
          <div className="absolute right-0 top-0 mx-2 my-1">
            <button className="text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100">
              <XMarkIcon className="size-4 stroke-2" />
            </button>
          </div>
          <div className="text-center">
            <Avatar
              size={10}
              classNames={{
                root: "mx-auto mt-3",
                display: "mask is-hexagon rounded-none",
              }}
              src="/images/avatar/avatar-19.jpg"
            />

            <p className="mt-1.5 truncate font-medium text-gray-800 dark:text-dark-100">
              کنر گوزمان
            </p>
            <Button className="mt-3 h-6 rounded-full px-3 text-xs">
              دنبال کردن
            </Button>
          </div>
        </Card>
        <Card skin="bordered" className="p-3">
          <div className="absolute right-0 top-0 mx-2 my-1">
            <button className="text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100">
              <XMarkIcon className="size-4 stroke-2" />
            </button>
          </div>
          <div className="text-center">
            <Avatar
              size={10}
              src="/images/avatar/avatar-18.jpg"
              classNames={{
                root: "mx-auto mt-3",
                display: "mask is-hexagon rounded-none",
              }}
            />

            <p className="mt-1.5 truncate font-medium text-gray-800 dark:text-dark-100">
              تراویس فولر
            </p>
            <Button className="mt-3 h-6 rounded-full px-3 text-xs">
              دنبال کردن
            </Button>
          </div>
        </Card>
        <Card skin="bordered" className="p-3">
          <div className="absolute right-0 top-0 mx-2 my-1">
            <button className="text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100">
              <XMarkIcon className="size-4 stroke-2" />
            </button>
          </div>
          <div className="text-center">
            <Avatar
              size={10}
              src="/images/avatar/avatar-6.jpg"
              classNames={{
                root: "mx-auto mt-3",
                display: "mask is-hexagon rounded-none",
              }}
            />

            <p className="mt-1.5 truncate font-medium text-gray-800 dark:text-dark-100">
              آلفردو الیوت
            </p>
            <Button className="mt-3 h-6 rounded-full px-3 text-xs">
              دنبال کردن
            </Button>
          </div>
        </Card>
      </div>
    </Card>
  );
}
