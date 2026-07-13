import { Button } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="inline-space">
      <Button variant="outlined">خنثی</Button>
      <Button color="primary" variant="outlined">
        اصلی
      </Button>
      <Button color="secondary" variant="outlined">
        ثانویه
      </Button>
      <Button color="info" variant="outlined">
        اطلاعات
      </Button>
      <Button color="success" variant="outlined">
        موفق
      </Button>
      <Button color="warning" variant="outlined">
        هشدار
      </Button>
      <Button color="error" variant="outlined">
        خطا
      </Button>
    </div>
  );
};

export { Outlined };
