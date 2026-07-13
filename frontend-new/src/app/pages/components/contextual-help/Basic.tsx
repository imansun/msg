import { ContextualHelp } from "@/components/shared/ContextualHelp";

export function Basic() {
  return (
    <div>
      <ContextualHelp
        title="راهنمای متنی چیست؟"
        content={
          <p>
            راهنمای متنی به کاربر اطلاعات بیشتری درباره وضعیت یک کامپوننت مجاور یا یک نمای کلی ارائه می‌دهد.
          </p>
        }
      />
    </div>
  );
}
