import { Button } from "@/components/ui";

const Default = () => {
  return (
    <Button
      data-tooltip
      data-tooltip-content={`من یک تولتیپ هستم`}
    >
      پیش‌فرض
    </Button>
  );
};

export { Default };
