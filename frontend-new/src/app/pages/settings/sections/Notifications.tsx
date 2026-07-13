// Import Dependencies
import { useState } from "react";
import { toast } from "sonner";

// Local Imports
import { Checkbox } from "@/components/ui";
import { useListState } from "@/hooks";
import { StyledSwitch } from "@/components/shared/form/StyledSwitch";

// ----------------------------------------------------------------------

interface NotificationItem {
  id: string;
  label: string;
  description: string;
  editable: boolean;
  enabled: boolean;
}

export default function Notifications() {
  const [appNotifications, appNotificationHandlers] =
    useListState<NotificationItem>([
      {
        id: "join-team",
        label: "درخواست‌های عضویت در تیم",
        description: "دریافت اعلان هنگام درخواست عضویت شخصی در تیم شما.",
        enabled: true,
        editable: false,
      },
      {
        id: "contact-messages",
        label: "پیام‌های تماس",
        description: "دریافت اعلان هنگام ارسال پیام توسط شخصی در برنامه.",
        enabled: true,
        editable: false,
      },
      {
        id: "news-and-updates",
        label: "اخبار و بروزرسانی‌ها",
        description:
          "دریافت اعلان هنگام اضافه شدن ویژگی یا بهبود جدید به برنامه یا سرویس‌هایمان",
        enabled: true,
        editable: false,
      },
      {
        id: "security-alerts",
        label: "هشدارهای امنیتی",
        description:
          "اعلان تغییرات یا مشکلات مربوط به امنیت حساب کاربری شما.",
        enabled: true,
        editable: true,
      },
    ]);

  const [emailNotifications, emailNotificationHandlers] =
    useListState<NotificationItem>([
      {
        id: "join-team",
        label: "درخواست‌های عضویت در تیم",
        description: "دریافت اعلان هنگام درخواست عضویت شخصی در تیم شما.",
        enabled: true,
        editable: false,
      },
      {
        id: "contact-messages",
        label: "پیام‌های تماس",
        description: "دریافت اعلان هنگام ارسال پیام توسط شخصی در برنامه.",
        enabled: true,
        editable: false,
      },
      {
        id: "news-and-updates",
        label: "اخبار و بروزرسانی‌ها",
        description:
          "دریافت اعلان هنگام اضافه شدن ویژگی یا بهبود جدید به برنامه یا سرویس‌هایمان",
        enabled: true,
        editable: false,
      },
      {
        id: "security-alerts",
        label: "هشدارهای امنیتی",
        description:
          "اعلان تغییرات یا مشکلات مربوط به امنیت حساب کاربری شما.",
        enabled: true,
        editable: true,
      },
    ]);

  const handleAppNotificationChange = (value: boolean, i: number) => {
    appNotificationHandlers.setItemProp(i, "enabled", value);
  };

  const handleEmailNotificationChange = (value: boolean, i: number) => {
    emailNotificationHandlers.setItemProp(i, "enabled", value);
  };

  return (
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        اعلان‌ها
      </h5>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        اعلان‌های برنامه و ایمیل خود را شخصی‌سازی کنید.
      </p>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />

      <div>
        <div>
          <p className="dark:text-dark-100 text-base font-medium text-gray-800">
            اعلان‌های ایمیلی
          </p>
          <p className="mt-0.5">اعلان‌های ایمیلی خود را شخصی‌سازی کنید</p>
        </div>
        <div className="mt-4 space-y-4">
          {emailNotifications.map((notification, i) => (
            <NotificationItem
              key={notification.id}
              {...notification}
              index={i}
              onChange={handleEmailNotificationChange}
            />
          ))}
        </div>
      </div>

      <div className="dark:bg-dark-500 my-7 h-px bg-gray-200"></div>

      <div>
        <div>
          <p className="dark:text-dark-100 text-base font-medium text-gray-800">
            اعلان‌های برنامه
          </p>
          <p className="mt-0.5">اعلان‌های درون برنامه‌ای خود را شخصی‌سازی کنید</p>
        </div>
        <div className="mt-4 space-y-4">
          {appNotifications.map((notification, i) => (
            <NotificationItem
              key={notification.id}
              {...notification}
              index={i}
              onChange={handleAppNotificationChange}
            />
          ))}
        </div>

        <div className="mt-5 pb-4">
          <Checkbox label="این تنظیمات را برای همه دستگاه‌های من اعمال کن" />
        </div>
      </div>
    </div>
  );
}

function NotificationItem({
  label,
  description,
  editable,
  enabled,
  onChange,
  index,
}: NotificationItem & {
  index: number;
  onChange: (value: boolean, index: number) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleChange = (value: boolean) => {
    setLoading(true);
    setTimeout(() => {
      onChange(value, index);
      toast.success("تغییرات شما ذخیره شد");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="dark:border-dark-500 flex items-center justify-between space-x-3 rounded-lg border border-gray-200 p-4">
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          {label}
        </p>
        <p className="mt-0.5 text-balance">{description}</p>
      </div>
      <StyledSwitch
        size={6}
        checked={enabled}
        onChange={handleChange}
        disabled={editable}
        loading={loading}
      />
    </div>
  );
}
