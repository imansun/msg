import { Tag } from "@/components/ui";

const Glow = () => {
  return (
    <div className="inline-space">
      <Tag href="#" isGlow>
        خنثی
      </Tag>
      <Tag href="#" color="primary" isGlow>
        اصلی
      </Tag>
      <Tag href="#" color="secondary" isGlow>
        ثانویه
      </Tag>
      <Tag href="#" color="info" isGlow>
        اطلاعاتی
      </Tag>
      <Tag href="#" color="success" isGlow>
        موفقیت
      </Tag>
      <Tag href="#" color="warning" isGlow>
        هشدار
      </Tag>
      <Tag href="#" color="error" isGlow>
        خطا
      </Tag>
      <Tag href="#" variant="soft" color="warning" isGlow>
        هشدار (ملایم)
      </Tag>
    </div>
  );
};

export { Glow };
