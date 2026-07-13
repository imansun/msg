import { Badge } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="inline-space">
      <Badge variant="outlined" className="rounded-full">
        خنثی
      </Badge>
      <Badge variant="outlined" color="primary" className="rounded-full">
        اصلی
      </Badge>
      <Badge variant="outlined" color="secondary" className="rounded-full">
        ثانویه
      </Badge>
      <Badge variant="outlined" color="info" className="rounded-full">
        اطلاعات
      </Badge>
      <Badge variant="outlined" color="success" className="rounded-full">
        موفقیت
      </Badge>
      <Badge variant="outlined" color="warning" className="rounded-full">
        هشدار
      </Badge>
      <Badge variant="outlined" color="error" className="rounded-full">
        خطا
      </Badge>
    </div>
  );
};

export { Outlined };
