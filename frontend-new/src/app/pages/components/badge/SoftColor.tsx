import { Badge } from "@/components/ui";

const SoftColor = () => {
  return (
    <div className="inline-space">
      <Badge variant="soft" color="primary">
        اصلی
      </Badge>
      <Badge variant="soft" color="secondary">
        ثانویه
      </Badge>
      <Badge variant="soft" color="info">
        اطلاعات
      </Badge>
      <Badge variant="soft" color="success">
        موفقیت
      </Badge>
      <Badge variant="soft" color="warning">
        هشدار
      </Badge>
      <Badge variant="soft" color="error">
        خطا
      </Badge>
    </div>
  );
};

export { SoftColor };
