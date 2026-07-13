// Import Dependencies
import { useState } from "react";

// Local Imports
import { Progress, Circlebar, Button } from "@/components/ui";
import { useToggle, useStep } from "@/hooks";
import { ColorType } from "@/constants/app";

// ----------------------------------------------------------------------

const Customizer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showRail, setShowRails] = useState<boolean>(true);

  const [currentStep, helpers] = useStep(5);

  const [color, toggleColor] = useToggle<ColorType>([
    "success",
    "neutral",
    "primary",
    "secondary",
    "info",
    "warning",
    "error",
  ]);

  const { canGoToPrevStep, canGoToNextStep, goToNextStep, goToPrevStep } =
    helpers;

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-medium text-gray-600 dark:text-dark-100">
            {currentStep}
          </span>
          <span> از ۵ وظیفه</span>
        </p>
        <div className="flex !space-x-2 rtl:space-x-reverse">
          <Button
            onClick={goToPrevStep}
            className="size-7 rounded-full p-0"
            disabled={!canGoToPrevStep}
          >
            -
          </Button>
          <Button
            onClick={goToNextStep}
            className="size-7 rounded-full p-0"
            disabled={!canGoToNextStep}
          >
            +
          </Button>
        </div>
      </div>
      <div className="mt-2 flex items-end space-x-4 rtl:space-x-reverse">
        <Circlebar
          color={color}
          value={currentStep * 20}
          isActive={isActive}
          showRail={showRail}
        >
          <span className="text-lg font-medium text-gray-800 dark:text-dark-100">
            {currentStep} / ۵
          </span>
        </Circlebar>
        <div className="w-full">
          <div>
            <p className=" text-end">
              <span className="font-medium text-gray-600 dark:text-dark-100">
                {currentStep}
              </span>
              <span> / ۵ وظیفه</span>
            </p>
          </div>
          <Progress
            color={color}
            value={currentStep * 20}
            isActive={isActive}
            showRail={showRail}
            className="mt-2"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <Button onClick={() => toggleColor()}>رنگ</Button>
        <div className="flex !space-x-2 rtl:space-x-reverse">
          <Button onClick={() => setShowRails(!showRail)}>ریل</Button>

          <Button
            color={!isActive ? "primary" : "neutral"}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "غیرفعال" : "فعال‌سازی"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Customizer };
