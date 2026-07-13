import { Button } from "@/components/ui";

const Disabled = () => {
  return (
    <div className="inline-space">
      <Button disabled>خنثی</Button>
      <Button color="primary" disabled>
        اولیه
      </Button>
      <Button color="secondary" disabled>
        ثانویه
      </Button>
      <Button color="info" disabled>
        اطلاعات
      </Button>
      <Button color="success" disabled>
        موفقیت
      </Button>
      <Button color="warning" disabled>
        هشدار
      </Button>
      <Button color="error" disabled>
        خطا
      </Button>
    </div>
  );
};

export { Disabled };
