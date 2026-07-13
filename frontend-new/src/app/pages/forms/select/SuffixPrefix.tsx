// Import Dependencies
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

// Local Imports
import { Select } from "@/components/ui";

// ----------------------------------------------------------------------

const SuffixPrefix = () => {
  return (
    <div className="max-w-xl">
      <Select
        label="انتخاب موقعیت"
        defaultValue="آمریکا"
        prefix={<MapPinIcon className="w-1/2" />}
        suffix={<ChevronUpDownIcon className="w-1/2" />}
        data={["کانادا", "آمریکا", "آلمان", "ژاپن"]}
      />
    </div>
  );
};

export { SuffixPrefix };
