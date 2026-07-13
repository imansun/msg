import { Badge } from "@/components/ui";

const SoftColor = () => {
  return (
    <div className="inline-space">
      <Badge
        color="primary"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>اصلی</span>
      </Badge>
      <Badge
        color="secondary"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>ثانویه</span>
      </Badge>
      <Badge
        color="info"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>اطلاعاتی</span>
      </Badge>
      <Badge
        color="success"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>موفقیت</span>
      </Badge>
      <Badge
        color="warning"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>هشدار</span>
      </Badge>
      <Badge
        color="error"
        variant="soft"
        className="!space-x-2 rounded-full rtl:space-x-reverse"
      >
        <span className="size-2 rounded-full bg-current" />
        <span>خطا</span>
      </Badge>
    </div>
  );
};

export { SoftColor };
