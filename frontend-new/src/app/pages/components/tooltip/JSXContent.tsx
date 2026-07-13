import { Tooltip } from "@/components/shared/Tooltip";
import { Avatar, Button } from "@/components/ui";

const JSXContent = () => {
  return (
    <div>
      <Button data-tooltip-id="jsx-tooltip">دکمه</Button>
      <Tooltip id="jsx-tooltip" place="right" clickable>
        <div className="flex items-center gap-2">
          <Avatar name="جان دو" initialColor="primary" size={10} />

          <div>
            <h3 className="text-sm font-semibold">جان دو</h3>
            <p className="text-xs">توسعه‌دهنده وب</p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export { JSXContent };
