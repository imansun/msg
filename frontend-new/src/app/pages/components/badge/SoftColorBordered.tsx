import { Badge } from "@/components/ui";

const SoftColorBordered = () => {
  return (
    <div className="inline-space">
      <Badge
        variant="soft"
        color="primary"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        اصلی
      </Badge>
      <Badge
        variant="soft"
        color="secondary"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        ثانویه
      </Badge>
      <Badge
        variant="soft"
        color="info"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        اطلاعات
      </Badge>
      <Badge
        variant="soft"
        color="success"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        موفقیت
      </Badge>
      <Badge
        variant="soft"
        color="warning"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        هشدار
      </Badge>
      <Badge
        variant="soft"
        color="error"
        className="border border-this-darker/20 dark:border-this-lighter/20"
      >
        خطا
      </Badge>
    </div>
  );
};

export { SoftColorBordered };
