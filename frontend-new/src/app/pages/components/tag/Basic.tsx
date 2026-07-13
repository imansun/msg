import { Tag } from "@/components/ui";

const Basic = () => {
  return (
    <div className="inline-space">
      <Tag href="#">خنثی</Tag>
      <Tag href="#" color="primary">
        اصلی
      </Tag>
      <Tag href="#" color="secondary">
        ثانویه
      </Tag>
      <Tag href="#" color="info">
        اطلاعات
      </Tag>
      <Tag href="#" color="success">
        موفقیت
      </Tag>
      <Tag href="#" color="warning">
        هشدار
      </Tag>
      <Tag href="#" color="error">
        خطا
      </Tag>
    </div>
  );
};

export { Basic };
