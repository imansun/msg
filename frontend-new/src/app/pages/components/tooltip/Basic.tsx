import { Button } from "@/components/ui";

const Basic = () => {
  return (
    <div className="inline-space flex flex-wrap">
      <Button data-tooltip data-tooltip-content="من یک تولتیپ هستم">
        پیش‌فرض
      </Button>
      <Button
        color="success"
        data-tooltip
        data-tooltip-variant="success"
        data-tooltip-content="من یک تولتیپ هستم"
      >
        موفقیت
      </Button>
      <Button
        color="warning"
        data-tooltip
        data-tooltip-variant="warning"
        data-tooltip-content="من یک تولتیپ هستم"
      >
        هشدار
      </Button>
      <Button
        color="info"
        data-tooltip
        data-tooltip-variant="info"
        data-tooltip-content="من یک تولتیپ هستم"
      >
        اطلاعات
      </Button>
      <Button
        color="error"
        data-tooltip
        data-tooltip-variant="error"
        data-tooltip-content="من یک تولتیپ هستم"
      >
        خطا
      </Button>
    </div>
  );
};

export { Basic };
