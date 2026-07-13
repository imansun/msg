import { Button } from "@/components/ui";

const SoftColor = () => {
  return (
    <div className="inline-space">
      <Button color="primary" variant="soft">
        اصلی
      </Button>
      <Button color="secondary" variant="soft">
        ثانویه
      </Button>
      <Button color="info" variant="soft">
        اطلاعات
      </Button>
      <Button color="success" variant="soft">
        موفق
      </Button>
      <Button color="warning" variant="soft">
        هشدار
      </Button>
      <Button color="error" variant="soft">
        خطا
      </Button>
    </div>
  );
};

export { SoftColor };
