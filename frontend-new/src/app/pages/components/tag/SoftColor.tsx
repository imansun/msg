import { Tag } from "@/components/ui";

const SoftColor = () => {
  return (
    <div className="inline-space">
      <Tag href="#" variant="soft" color="primary" className="rounded-full">
        اصلی
      </Tag>
      <Tag href="#" variant="soft" color="secondary" className="rounded-full">
        ثانویه
      </Tag>
      <Tag href="#" variant="soft" color="info" className="rounded-full">
        اطلاعاتی
      </Tag>
      <Tag href="#" variant="soft" color="success" className="rounded-full">
        موفقیت
      </Tag>
      <Tag href="#" variant="soft" color="warning" className="rounded-full">
        هشدار
      </Tag>
      <Tag href="#" variant="soft" color="error" className="rounded-full">
        خطا
      </Tag>
    </div>
  );
};

export { SoftColor };
