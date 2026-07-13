import { Button } from "@/components/ui";

const Flat = () => {
  return (
    <div className="inline-space">
      <Button variant="flat">خنثی</Button>
      <Button color="primary" variant="flat">
        اصلی
      </Button>
      <Button color="secondary" variant="flat">
        ثانویه
      </Button>
      <Button color="info" variant="flat">
        اطلاعات
      </Button>
      <Button color="success" variant="flat">
        موفق
      </Button>
      <Button color="warning" variant="flat">
        هشدار
      </Button>
      <Button color="error" variant="flat">
        خطا
      </Button>
    </div>
  );
};

export { Flat };
