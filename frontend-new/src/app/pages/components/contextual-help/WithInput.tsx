import { ContextualHelp } from "@/components/shared/ContextualHelp";
import { Input } from "@/components/ui";

export function WithInput() {
  return (
    <div className="max-w-xl">
      <Input
        placeholder="نام کاربری را وارد کنید"
        label="نام شما:"
        suffix={
          <ContextualHelp
            title="سگمنت چیست؟"
            anchor={{ to: "bottom end", gap: 12 }}
            content={
              <p>
                سگمنت‌ها به شما کمک می‌کنند بفهمید بازدیدکنندگان شما چه کسانی هستند، از چه دستگاه‌ها و سرویس‌هایی استفاده می‌کنند، از کجا به سایت شما آمده‌اند و اطلاعات بیشتر.
              </p>
            }
          />
        }
      />
    </div>
  );
}
