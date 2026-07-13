import { Button } from "@/components/ui";

const Rounded = () => {
  return (
    <div className="inline-space">
      <Button className="rounded-full">خنثی</Button>
      <Button color="primary" className="rounded-full">
        اصلی
      </Button>
      <Button color="secondary" className="rounded-full">
        ثانویه
      </Button>
      <Button color="info" className="rounded-full">
        اطلاعات
      </Button>
      <Button color="success" className="rounded-full">
        موفق
      </Button>
      <Button color="warning" className="rounded-full">
        هشدار
      </Button>
      <Button color="error" className="rounded-full">
        خطا
      </Button>
    </div>
  );
};

export { Rounded };
