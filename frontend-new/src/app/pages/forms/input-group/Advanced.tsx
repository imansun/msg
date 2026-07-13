// Import Dependencies
import { MapPinIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Input, Button } from "@/components/ui";

// ----------------------------------------------------------------------

const Advanced = () => {
  return (
    <div className="max-w-xl space-y-4">
      <div>
        <div className="mt-1.5 flex -space-x-px rtl:space-x-reverse">
          <Input
            placeholder="نام کاربری"
            classNames={{
              root: "flex-1",
              input:
                "relative hover:z-1 focus:z-1 ltr:rounded-r-none rtl:rounded-l-none",
            }}
          />
          <div className="flex items-center justify-center border border-gray-300 bg-gray-150 px-3.5 text-gray-800 dark:border-dark-450 dark:bg-dark-500 dark:text-dark-100">
            <span className="leading-none">@</span>
          </div>
          <Input
            placeholder="سرور"
            classNames={{
              root: "flex-1",
              input:
                "relative hover:z-1 focus:z-1 ltr:rounded-l-none rtl:rounded-r-none",
            }}
          />
        </div>
      </div>
      <div>
        <div className="mt-1.5 flex -space-x-px rtl:space-x-reverse">
          <Input
            placeholder="ورود موقعیت"
            classNames={{
              root: "flex-1",
              input:
                "relative hover:z-1 focus:z-1 ltr:rounded-r-none rtl:rounded-l-none",
            }}
            prefix={<MapPinIcon className="size-4.5" />}
          />
          <Button
            color="primary"
            className="ltr:rounded-l-none rtl:rounded-r-none"
          >
            جستجو
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Advanced };
