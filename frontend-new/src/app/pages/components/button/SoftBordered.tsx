import { Button } from "@/components/ui";

const SoftBordered = () => {
  return (
    <div className="inline-space">
      <Button
        color="primary"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        اولیه
      </Button>
      <Button
        color="secondary"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        ثانویه
      </Button>
      <Button
        color="info"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        اطلاعات
      </Button>
      <Button
        color="success"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        موفقیت
      </Button>
      <Button
        color="warning"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        هشدار
      </Button>
      <Button
        color="error"
        variant="soft"
        className="rounded-full border border-this-darker/40 dark:border-this-lighter/30"
      >
        خطا
      </Button>
    </div>
  );
};

export { SoftBordered };
