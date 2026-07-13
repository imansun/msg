import { Tag } from "@/components/ui";

const Outlined = () => {
  return (
    <div className="inline-space">
      <Tag href="#" variant="outlined">
        خنثی
      </Tag>
      <Tag href="#" variant="outlined" color="primary">
        اصلی
      </Tag>
      <Tag href="#" variant="outlined" color="secondary">
        ثانویه
      </Tag>
      <Tag href="#" variant="outlined" color="info">
        اطلاعات
      </Tag>
      <Tag href="#" variant="outlined" color="success">
        موفقیت
      </Tag>
      <Tag href="#" variant="outlined" color="warning">
        هشدار
      </Tag>
      <Tag href="#" variant="outlined" color="error">
        خطا
      </Tag>
    </div>
  );
};

export { Outlined };
