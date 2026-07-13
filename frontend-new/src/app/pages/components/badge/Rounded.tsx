import { Badge } from "@/components/ui";

const Rounded = () => {
  return (
    <div className="inline-space">
      <Badge className="rounded-full">خنثی</Badge>
      <Badge color="primary" className="rounded-full">
        اصلی
      </Badge>
      <Badge color="secondary" className="rounded-full">
        ثانویه
      </Badge>
      <Badge color="info" className="rounded-full">
        اطلاعات
      </Badge>
      <Badge color="success" className="rounded-full">
        موفقیت
      </Badge>
      <Badge color="warning" className="rounded-full">
        هشدار
      </Badge>
      <Badge color="error" className="rounded-full">
        خطا
      </Badge>
    </div>
  );
};

export { Rounded };
