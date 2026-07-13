import { Tag } from "@/components/ui";

const Rounded = () => {
  return (
    <div className="inline-space">
      <Tag href="#" className="rounded-full">
        خنثی
      </Tag>
      <Tag href="#" color="primary" className="rounded-full">
        اصلی
      </Tag>
      <Tag href="#" color="secondary" className="rounded-full">
        ثانویه
      </Tag>
      <Tag href="#" color="info" className="rounded-full">
        اطلاعاتی
      </Tag>
      <Tag href="#" color="success" className="rounded-full">
        موفقیت
      </Tag>
      <Tag href="#" color="warning" className="rounded-full">
        هشدار
      </Tag>
      <Tag href="#" color="error" className="rounded-full">
        خطا
      </Tag>
    </div>
  );
};

export { Rounded };
