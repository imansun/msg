import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { Card } from "@/components/ui";
import { Page } from "@/components/shared/Page";
import {
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

interface Stats {
  totalUsers: number;
  approvedUsers: number;
  pendingUsers: number;
  departments: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, approvedUsers: 0, pendingUsers: 0, departments: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [users, pending, depts] = await Promise.all([
          axios.get("/auth/users"),
          axios.get("/auth/pending"),
          axios.get("/departments"),
        ]);
        setStats({
          totalUsers: users.data.length,
          approvedUsers: users.data.filter((u: any) => u.isApproved).length,
          pendingUsers: pending.data.length,
          departments: depts.data.length,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "کل کاربران", value: stats.totalUsers, icon: UserGroupIcon, color: "bg-primary/10 text-primary" },
    { label: "تأیید شده", value: stats.approvedUsers, icon: CheckCircleIcon, color: "bg-success/10 text-success" },
    { label: "در انتظار تأیید", value: stats.pendingUsers, icon: ClockIcon, color: "bg-warning/10 text-warning" },
    { label: "دپارتمان‌ها", value: stats.departments, icon: BuildingOffice2Icon, color: "bg-info/10 text-info" },
  ];

  return (
    <Page title="داشبورد مدیریت">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-100">داشبورد مدیریت</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.label} className="flex items-center gap-4 p-5">
              <div className={`flex size-12 items-center justify-center rounded-xl ${card.color}`}>
                <card.icon className="size-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400 dark:text-dark-300">{card.label}</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-dark-100">{card.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Page>
  );
}
