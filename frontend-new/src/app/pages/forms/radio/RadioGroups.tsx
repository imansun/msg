import { Label, Radio, RadioGroup } from "@headlessui/react";
import { useState, type SVGProps } from "react";

const plans = [
  {
    name: "استارتاپ",
    ram: "۱۲ گیگابایت",
    cpus: "۶ هسته پردازنده",
    disk: "۱۶۰ گیگابایت SSD",
  },
  {
    name: "بیزینس",
    ram: "۱۶ گیگابایت",
    cpus: "۸ هسته پردازنده",
    disk: "۵۱۲ گیگابایت SSD",
  },
  {
    name: "اینترپرایز",
    ram: "۳۲ گیگابایت",
    cpus: "۱۲ هسته پردازنده",
    disk: "۱۰۲۴ گیگابایت SSD",
  },
];

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RadioGroups = () => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="max-w-xl">
      <RadioGroup value={selected} onChange={setSelected}>
        <Label className="sr-only">اندازه سرور</Label>
        <div className="space-y-2">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className={({ checked, focus }) =>
                `${focus && "ring-2 ring-primary-500/50"} ${
                  checked
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 dark:bg-dark-600"
                } relative flex cursor-pointer rounded-lg px-5 py-4 outline-hidden transition-colors`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <Label
                          as="p"
                          className={`font-medium ${
                            checked
                              ? "text-white"
                              : "text-gray-900 dark:text-dark-50"
                          }`}
                        >
                          {plan.name}
                        </Label>
                        <span
                          className={`inline text-xs ${
                            checked
                              ? "text-primary-100"
                              : "text-gray-500 dark:text-dark-200"
                          }`}
                        >
                          <span>
                            {plan.ram} / {plan.cpus}
                          </span>
                          <span aria-hidden="true">&middot;</span>
                          <span>{plan.disk}</span>
                        </span>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="size-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export { RadioGroups };
