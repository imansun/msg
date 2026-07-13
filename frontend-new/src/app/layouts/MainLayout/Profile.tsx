import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleLeftIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { TbUser } from "react-icons/tb";
import { Link, useNavigate } from "react-router";

import { Avatar, AvatarDot, Button } from "@/components/ui";
import { ColorType } from "@/constants/app";
import { useAuthContext } from "@/app/contexts/auth/context";

interface LinkItem {
  id: string;
  title: string;
  to: string;
  Icon: React.ElementType;
  color: ColorType;
}

export function Profile() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const links: LinkItem[] = [
    {
      id: "1",
      title: "داشبورد",
      to: "/admin/dashboard",
      Icon: TbUser,
      color: "warning",
    },
    {
      id: "2",
      title: "مسنجر",
      to: "/apps/chat",
      Icon: ChatBubbleLeftIcon,
      color: "info",
    },
    {
      id: "3",
      title: "دپارتمان‌ها",
      to: "/admin/departments",
      Icon: BuildingOffice2Icon,
      color: "success",
    },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Popover className="relative">
      <PopoverButton
        as={Avatar}
        size={12}
        role="button"
        alt="Profile"
        indicator={
          <AvatarDot color="success" className="ltr:right-0 rtl:left-0" />
        }
        className="cursor-pointer"
      >
        <span className="text-xs font-bold">{(user?.displayName || user?.username || "U")[0]?.toUpperCase()}</span>
      </PopoverButton>
      <Transition
        enter="duration-200 ease-out"
        enterFrom="translate-x-2 opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="duration-200 ease-out"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-2 opacity-0"
      >
        <PopoverPanel
          anchor={{ to: "right end", gap: 12 }}
          className="z-70 flex w-64 flex-col rounded-lg border border-gray-150 bg-white shadow-soft transition dark:border-dark-600 dark:bg-dark-700 dark:shadow-none"
        >
          {({ close }) => (
            <>
              <div className="flex items-center gap-4 rounded-t-lg bg-gray-100 px-4 py-5 dark:bg-dark-800">
                <Avatar size={14}>
                  <span className="text-lg font-bold">{(user?.displayName || user?.username || "U")[0]?.toUpperCase()}</span>
                </Avatar>
                <div>
                  <p className="text-base font-medium text-gray-700 dark:text-dark-100">
                    {user?.displayName || user?.username}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400 dark:text-dark-300">
                    {user?.isAdmin ? "مدیر سیستم" : "کاربر"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col pb-5 pt-2">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    to={link.to}
                    onClick={() => close()}
                    className="group flex items-center gap-3 px-4 py-2 tracking-wide outline-hidden transition-all hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-dark-600 dark:focus:bg-dark-600"
                  >
                    <Avatar
                      size={8}
                      initialColor={link.color}
                      classNames={{ display: "rounded-lg" }}
                    >
                      <link.Icon className="size-4.5" />
                    </Avatar>
                    <div>
                      <h2 className="font-medium text-gray-800 transition-colors group-hover:text-primary-600 group-focus:text-primary-600 dark:text-dark-100 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400">
                        {link.title}
                      </h2>
                    </div>
                  </Link>
                ))}

                <div className="mx-4 my-2 h-px bg-gray-200 dark:bg-dark-500" />

                <div className="px-4 pt-2">
                  <Button
                    className="w-full gap-2"
                    color="error"
                    variant="outlined"
                    onClick={handleLogout}
                  >
                    <ArrowLeftStartOnRectangleIcon className="size-4.5" />
                    <span>خروج</span>
                  </Button>
                </div>
              </div>
            </>
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
