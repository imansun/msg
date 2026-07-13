import { Badge } from "@/components/ui";

const Glow = () => {
  return (
    <div className="inline-space">
      <Badge isGlow>خنثی</Badge>
      <Badge isGlow color="primary">
        اصلی
      </Badge>
      <Badge isGlow color="secondary">
        ثانویه
      </Badge>
      <Badge isGlow color="info">
        اطلاعات
      </Badge>
      <Badge isGlow color="success">
        موفقیت
      </Badge>
      <Badge isGlow color="warning">
        هشدار
      </Badge>
      <Badge isGlow color="error">
        خطا
      </Badge>
    </div>
  );
};

export { Glow };
