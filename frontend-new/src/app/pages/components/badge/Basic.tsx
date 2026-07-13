import { Badge } from "@/components/ui";

const Basic = () => {
  return (
    <div className="inline-space">
      <Badge>خنثی</Badge>
      <Badge color="primary">اصلی</Badge>
      <Badge color="secondary">ثانویه</Badge>
      <Badge color="info">اطلاعات</Badge>
      <Badge color="success">موفقیت</Badge>
      <Badge color="warning">هشدار</Badge>
      <Badge color="error">خطا</Badge>
    </div>
  );
};

export { Basic };
