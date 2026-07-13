import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { Card, Button, Input } from "@/components/ui";
import { Page } from "@/components/shared/Page";
import { toast } from "sonner";
import { MagnifyingGlassIcon, LinkIcon, BuildingOffice2Icon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface Dept {
  id: number;
  name: string;
  parentId?: number | null;
  children?: Dept[];
}

interface UserRow {
  id: number;
  username: string;
  displayName?: string | null;
  windowsUser?: string | null;
  isAdmin: boolean;
  isApproved: boolean;
  isActive: boolean;
  ip: string;
  departments?: { id: number; name: string }[];
  createdAt: string;
}

interface AdUser {
  username: string;
  displayName: string | null;
  mail: string | null;
}

function DeptChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
      <BuildingOffice2Icon className="size-3" />
      {name}
    </span>
  );
}

function DeptCheckbox({ dept, selected, onToggle, depth = 0 }: { dept: Dept; selected: Set<number>; onToggle: (id: number) => void; depth?: number }) {
  const [open, setOpen] = useState(true);
  const hasChildren = dept.children && dept.children.length > 0;

  return (
    <div>
      <div className="flex items-center gap-1.5 py-1" style={{ paddingRight: depth * 16 }}>
        {hasChildren ? (
          <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-gray-600">
            {open ? <ChevronUpIcon className="size-3.5" /> : <ChevronDownIcon className="size-3.5" />}
          </button>
        ) : (
          <span className="size-3.5" />
        )}
        <label className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700 dark:text-dark-200">
          <input
            type="checkbox"
            checked={selected.has(dept.id)}
            onChange={() => onToggle(dept.id)}
            className="size-3.5 rounded border-gray-300 text-primary focus:ring-primary/30"
          />
          {dept.name}
        </label>
      </div>
      {hasChildren && open && dept.children!.map((c) => (
        <DeptCheckbox key={c.id} dept={c} selected={selected} onToggle={onToggle} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function AdminUsers() {
  const [pending, setPending] = useState<UserRow[]>([]);
  const [all, setAll] = useState<UserRow[]>([]);
  const [tab, setTab] = useState<"pending" | "all">("pending");
  const [adQuery, setAdQuery] = useState("");
  const [adResults, setAdResults] = useState<AdUser[]>([]);
  const [linkingUser, setLinkingUser] = useState<UserRow | null>(null);
  const [searching, setSearching] = useState(false);
  const [departments, setDepartments] = useState<Dept[]>([]);
  const [assigningUser, setAssigningUser] = useState<UserRow | null>(null);
  const [selectedDepts, setSelectedDepts] = useState<Set<number>>(new Set());

  const fetchUsers = async () => {
    const [p, a] = await Promise.all([
      axios.get("/auth/pending"),
      axios.get("/auth/users"),
    ]);
    setPending(p.data);
    setAll(a.data);
  };

  useEffect(() => {
    fetchUsers();
    axios.get("/departments/tree").then((r) => setDepartments(r.data));
  }, []);

  const approve = async (id: number) => {
    await axios.post(`/auth/approve/${id}`);
    toast.success("کاربر تأیید شد");
    fetchUsers();
  };

  const reject = async (id: number) => {
    await axios.post(`/auth/reject/${id}`);
    toast.error("کاربر رد شد");
    fetchUsers();
  };

  const searchAd = async () => {
    if (!adQuery.trim()) return;
    setSearching(true);
    try {
      const r = await axios.get(`/auth/ad/search?q=${encodeURIComponent(adQuery)}`);
      setAdResults(r.data);
    } catch {
      toast.error("خطا در جستجوی AD");
    }
    setSearching(false);
  };

  const linkAd = async (userId: number, adUsername: string) => {
    try {
      const r = await axios.post(`/auth/link-ad/${userId}`, { adUsername });
      toast.success(r.data.message);
      setLinkingUser(null);
      setAdResults([]);
      setAdQuery("");
      fetchUsers();
    } catch {
      toast.error("خطا در لینک کردن");
    }
  };

  const toggleActive = async (id: number) => {
    try {
      const r = await axios.post(`/auth/toggle-active/${id}`);
      toast.success(r.data.message);
      fetchUsers();
    } catch {
      toast.error("خطا در تغییر وضعیت");
    }
  };

  const openAssignDepts = (u: UserRow) => {
    setAssigningUser(u);
    setSelectedDepts(new Set((u.departments || []).map((d) => d.id)));
  };

  const saveDepartments = async () => {
    if (!assigningUser) return;
    try {
      const r = await axios.post(`/auth/assign-departments/${assigningUser.id}`, {
        departmentIds: Array.from(selectedDepts),
      });
      toast.success(r.data.message);
      setAssigningUser(null);
      fetchUsers();
    } catch {
      toast.error("خطا در تخصیص دپارتمان");
    }
  };

  const topDepts = departments.filter((d) => !d.parentId);

  return (
    <Page title="مدیریت کاربران">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-100">مدیریت کاربران</h2>

        <div className="flex gap-2">
          <Button size="sm" color={tab === "pending" ? "primary" : "secondary"} onClick={() => setTab("pending")}>
            در انتظار تأیید ({pending.length})
          </Button>
          <Button size="sm" color={tab === "all" ? "primary" : "secondary"} onClick={() => setTab("all")}>
            همه کاربران ({all.length})
          </Button>
        </div>

        {tab === "pending" && (
          <Card className="divide-y divide-gray-100 dark:divide-dark-500">
            {pending.length === 0 && (
              <div className="p-6 text-center text-sm text-gray-400">کاربر در انتظاری وجود ندارد</div>
            )}
            {pending.map((u) => (
              <div key={u.id} className="flex items-center gap-4 p-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-warning/10 text-warning">
                  {(u.displayName || u.username)[0]?.toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 dark:text-dark-100">{u.displayName || u.username}</p>
                  <p className="text-xs text-gray-400">{u.username} &middot; {u.ip} {u.windowsUser ? `· ${u.windowsUser}` : ''}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" color="success" onClick={() => approve(u.id)}>تأیید</Button>
                  <Button size="sm" color="error" variant="outlined" onClick={() => reject(u.id)}>رد</Button>
                </div>
              </div>
            ))}
          </Card>
        )}

        {tab === "all" && (
          <>
            {linkingUser && (
              <Card className="border border-primary/30 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700 dark:text-dark-100">
                    لینک AD به: <span className="text-primary">{linkingUser.displayName || linkingUser.username}</span>
                  </p>
                  <Button size="sm" color="secondary" variant="outlined" onClick={() => { setLinkingUser(null); setAdResults([]); setAdQuery(""); }}>
                    لغو
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="جستجو در AD (نام یا نام خانوادگی)..."
                    value={adQuery}
                    onChange={(e) => setAdQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && searchAd()}
                    prefix={<MagnifyingGlassIcon className="size-4" />}
                  />
                  <Button size="sm" color="primary" onClick={searchAd} loading={searching}>
                    جستجو
                  </Button>
                </div>
                {adResults.length > 0 && (
                  <div className="mt-3 max-h-60 divide-y divide-gray-100 overflow-y-auto rounded-lg border border-gray-200 dark:divide-dark-500 dark:border-dark-500">
                    {adResults.map((ad) => (
                      <button
                        key={ad.username}
                        onClick={() => linkAd(linkingUser.id, ad.username)}
                        className="flex w-full items-center gap-3 px-3 py-2 text-right transition-colors hover:bg-gray-50 dark:hover:bg-dark-600"
                      >
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {(ad.displayName || ad.username)[0]?.toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-700 dark:text-dark-100">{ad.displayName || ad.username}</p>
                          <p className="text-xs text-gray-400">{ad.username} &middot; {ad.mail || ""}</p>
                        </div>
                        <LinkIcon className="size-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                )}
                {adResults.length === 0 && adQuery && !searching && (
                  <p className="mt-2 text-xs text-gray-400">نتیجه‌ای یافت نشد</p>
                )}
              </Card>
            )}

            {assigningUser && (
              <Card className="border border-primary/30 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700 dark:text-dark-100">
                    تخصیص دپارتمان: <span className="text-primary">{assigningUser.displayName || assigningUser.username}</span>
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" color="primary" onClick={saveDepartments}>
                      ذخیره
                    </Button>
                    <Button size="sm" color="secondary" variant="outlined" onClick={() => setAssigningUser(null)}>
                      لغو
                    </Button>
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto rounded-lg border border-gray-200 p-2 dark:border-dark-500">
                  {topDepts.map((d) => (
                    <DeptCheckbox key={d.id} dept={d} selected={selectedDepts} onToggle={(id) => {
                      setSelectedDepts((prev) => {
                        const next = new Set(prev);
                        if (next.has(id)) next.delete(id);
                        else next.add(id);
                        return next;
                      });
                    }} />
                  ))}
                </div>
              </Card>
            )}

            <Card className="divide-y divide-gray-100 dark:divide-dark-500">
              {all.map((u) => (
                <div key={u.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${u.isAdmin ? "bg-primary/10 text-primary" : u.isApproved ? "bg-success/10 text-success" : "bg-gray-100 text-gray-400"}`}>
                      {(u.displayName || u.username)[0]?.toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 dark:text-dark-100">{u.displayName || u.username}</p>
                      <p className="text-xs text-gray-400">{u.username} &middot; {u.ip} {u.windowsUser ? `· ${u.windowsUser}` : ''}</p>
                      {u.departments && u.departments.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {u.departments.map((d) => <DeptChip key={d.id} name={d.name} />)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${u.isAdmin ? "bg-primary/10 text-primary" : u.isApproved ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                      {u.isAdmin ? "ادمین" : u.isApproved ? "تأیید شده" : "در انتظار"}
                    </span>
                    {!u.isAdmin && (
                      <Button
                        size="sm"
                        variant="outlined"
                        color={u.isActive ? "error" : "success"}
                        onClick={() => toggleActive(u.id)}
                      >
                        {u.isActive ? "غیرفعال" : "فعال"}
                      </Button>
                    )}
                    <Button size="sm" variant="outlined" color="secondary" onClick={() => openAssignDepts(u)}>
                      <BuildingOffice2Icon className="size-3.5 ml-1" />
                      دپارتمان
                    </Button>
                    <Button size="sm" variant="outlined" color="secondary" onClick={() => { setLinkingUser(u); setAdQuery(u.username); }}>
                      <LinkIcon className="size-3.5 ml-1" />
                      لینک AD
                    </Button>
                  </div>
                </div>
              ))}
            </Card>
          </>
        )}
      </div>
    </Page>
  );
}
