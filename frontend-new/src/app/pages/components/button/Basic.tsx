import { Button } from "@/components/ui";

const Basic = () => {
  return (
    <div className="inline-space">
      <Button>پیش‌فرض</Button>
      <Button color="primary">اصلی</Button>
      <Button color="secondary">ثانویه</Button>
      <Button color="info">اطلاعات</Button>
      <Button color="success">موفق</Button>
      <Button color="warning">هشدار</Button>
      <Button color="error">خطا</Button>
    </div>
  );
};

export { Basic };
