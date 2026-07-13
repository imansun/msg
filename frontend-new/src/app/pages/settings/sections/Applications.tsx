// Import Dependencies
import clsx from "clsx";
import { toast } from "sonner";
import { FaInfo, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

// Local Imports
import { StyledSwitch } from "@/components/shared/form/StyledSwitch";
import { Button, GhostSpinner } from "@/components/ui";
import { useThemeContext } from "@/app/contexts/theme/context";
import { useListState } from "@/hooks";

// ----------------------------------------------------------------------

interface App {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface InstalledAppProps extends App {
  enabled: boolean;
  onChangeStatus: (id: string, value: boolean) => void;
  onUninstall: (id: string) => void;
}

interface NotInstalledAppProps extends App {
  onInstall: (id: string) => void;
}

const apps: App[] = [
  {
    id: "slack",
    name: "اسلک",
    icon: "slack.svg",
    description: "اتصال حساب اسلک شما",
  },
  {
    id: "github",
    name: "گیت‌هاب",
    icon: "github.svg",
    description: "دسترسی به حساب گیت‌هاب شما",
  },
  {
    id: "jira",
    name: "جیرا",
    icon: "jira.svg",
    description: "دسترسی به حساب جیرا شما",
  },
  {
    id: "google-drive",
    name: "گوگل درایو",
    icon: "google-drive.svg",
    description: "دسترسی به فایل‌های شما در گوگل درایو",
  },
  {
    id: "discord",
    name: "دیسکورد",
    icon: "discord-round.svg",
    description: "اتصال حساب دیسکورد شما",
  },
  {
    id: "google-calendar",
    name: "گوگل کلندر",
    icon: "google-calendar.svg",
    description: "دسترسی به رویدادهای شما در گوگل کلندر",
  },
  {
    id: "hubspot",
    name: "هاب‌اسپات",
    icon: "hubspot.svg",
    description: "دسترسی به حساب هاب‌اسپات شما",
  },
  {
    id: "dribbble",
    name: "دریبل",
    icon: "dribbble-round.svg",
    description: "دسترسی به حساب دریبل شما",
  },
  {
    id: "dropbox",
    name: "دراپ‌باکس",
    icon: "dropbox-round.svg",
    description: "اتصال حساب دراپ‌باکس شما",
  },
  {
    id: "figma",
    name: "فیگما",
    icon: "figma-round.svg",
    description: "دسترسی به حساب فیگما شما",
  },
  {
    id: "twitter",
    name: "توییتر",
    icon: "twitter-round.svg",
    description: "دسترسی به حساب توییتر شما",
  },
  {
    id: "trello",
    name: "ترلو",
    icon: "trello.svg",
    description: "دسترسی به حساب ترلو شما",
  },
  {
    id: "notion",
    name: "نوشن",
    icon: "notion.svg",
    description: "دسترسی به حساب نوشن شما",
  },
];

export default function Applications() {
  const [installedAppsList, installedAppsHandlers] = useListState([
    {
      id: "slack",
      enabled: true,
    },
    {
      id: "github",
      enabled: true,
    },
    {
      id: "jira",
      enabled: false,
    },
    {
      id: "google-drive",
      enabled: true,
    },
  ]);

  const installedApps = apps
    .filter((app) =>
      installedAppsList.some((installedApp) => installedApp.id === app.id),
    )
    .map((app) => ({
      ...app,
      enabled:
        installedAppsList.find((installedApp) => installedApp.id === app.id)
          ?.enabled ?? false,
    }));

  const restApps = apps.filter(
    (app) =>
      !installedAppsList.some((installedApp) => installedApp.id === app.id),
  );

  const updateAppStatusHandler = (id: string, value: boolean) => {
    installedAppsHandlers.applyWhere(
      (app) => app.id === id,
      (app) => ({ ...app, enabled: value }),
    );
  };

  const installAppHandler = (id: string) => {
    installedAppsHandlers.append({
      id,
      enabled: true,
    });
  };

  const uninstallAppHandler = (id: string) => {
    installedAppsHandlers.filter((app) => app.id !== id);
  };

  return (
    <div className="w-full max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        برنامه‌ها
      </h5>
      <p className="dark:text-dark-200 mt-0.5 text-sm text-balance text-gray-500">
        مدیریت برنامه‌های متصل شده
      </p>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          برنامه‌های نصب شده
        </p>
        <p className="mt-0.5">لیست تمامی برنامه‌های نصب شده</p>
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {installedApps.map((app) => (
              <InstalledApp
                key={app.id}
                {...app}
                onUninstall={uninstallAppHandler}
                onChangeStatus={updateAppStatusHandler}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />
      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          برنامه‌های بیشتر
        </p>
        <p className="mt-0.5">
          لیست برنامه‌های اضافی که می‌توانید به حساب خود اضافه کنید
        </p>
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {restApps.map((app) => (
              <NotInstalledApp
                key={app.id}
                {...app}
                onInstall={installAppHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InstalledApp({
  id,
  name,
  icon,
  description,
  enabled,
  onChangeStatus,
  onUninstall,
}: InstalledAppProps) {
  const [loadingUninstall, setLoadingUninstall] = useState(false);
  const [loadingChangeStatus, setLoadingChangeStatus] = useState(false);
  const { cardSkin } = useThemeContext();

  const handleUninstall = () => {
    setLoadingUninstall(true);
    setTimeout(() => {
      onUninstall(id);
      toast.success(`${name} با موفقیت حذف شد`);
      setLoadingUninstall(false);
    }, 2000);
  };

  const handleChangeStatus = (val: boolean) => {
    setLoadingChangeStatus(true);
    setTimeout(() => {
      onChangeStatus(id, val);
      toast.success(`وضعیت ${name} تغییر کرد`);
      setLoadingChangeStatus(false);
    }, 2000);
  };

  return (
    <div
      className={clsx(
        "flex flex-col rounded-lg bg-gray-100 p-3",
        cardSkin === "shadow" ? "dark:bg-dark-900" : "dark:bg-dark-700",
      )}
    >
      <div className="flex items-center gap-2">
        <img className="size-8" src={`/images/logos/${icon}`} alt={name} />
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          {name}
        </p>
      </div>
      <p className="mt-2 grow">{description}</p>

      <div className="mt-6 flex items-end justify-between gap-2">
        <div className="flex justify-between gap-2">
          <Button
            data-tooltip
            data-tooltip-content={description}
            isIcon
            className="size-7 rounded-full"
          >
            <FaInfo className="size-3.5" />
          </Button>
          <Button
            onClick={handleUninstall}
            isIcon
            color="error"
            className="size-7 rounded-full"
          >
            {loadingUninstall ? (
              <GhostSpinner className="size-3.5 border-2" />
            ) : (
              <FaTrashAlt className="size-3.5" />
            )}
          </Button>
        </div>
        <StyledSwitch
          checked={enabled}
          onChange={handleChangeStatus}
          loading={loadingChangeStatus}
        />
      </div>
    </div>
  );
}

function NotInstalledApp({
  id,
  name,
  icon,
  description,
  onInstall,
}: NotInstalledAppProps) {
  const [loading, setLoading] = useState(false);

  const handleInstall = () => {
    setLoading(true);
    setTimeout(() => {
      onInstall(id);
      toast.success(`${name} با موفقیت نصب شد`);
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="dark:border-dark-500 flex flex-col rounded-lg border border-gray-200 p-3">
      <div className="flex items-center gap-2">
        <img className="size-8" src={`/images/logos/${icon}`} alt={name} />
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          {name}
        </p>
      </div>
      <p className="mt-2 grow">{description}</p>

      <div className="mt-6 flex justify-between">
        <Button
          data-tooltip
          data-tooltip-content={description}
          isIcon
          className="size-7 rounded-full"
        >
          <FaInfo className="size-3.5" />
        </Button>
        <Button
          color="primary"
          className="text-xs-plus h-8 gap-2 rounded-md uppercase"
          onClick={handleInstall}
        >
          {loading && <GhostSpinner className="size-3.5 border-2" />}
          <span> {loading ? "در حال نصب..." : "نصب"}</span>
        </Button>
      </div>
    </div>
  );
}

