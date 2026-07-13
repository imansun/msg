import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { Card, Button, Input } from "@/components/ui";
import { Page } from "@/components/shared/Page";
import { toast } from "sonner";
import {
  PlusIcon,
  TrashIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLocaleContext } from "@/app/contexts/locale/context";
import { getLocalizedField } from "@/utils";
import { locales } from "@/i18n/langs";

interface Department {
  id: number;
  name: Record<string, string>;
  description: Record<string, string>;
  level: number;
  parentId: number | null;
  children: Department[];
  members: { id: number; username: string; isAdmin: boolean }[];
}

const langEntries = Object.entries(locales).map(([code, { label }]) => ({ code, label }));

export default function AdminDepartments() {
  const { locale } = useLocaleContext();
  const [tree, setTree] = useState<Department[]>([]);
  const [flat, setFlat] = useState<Department[]>([]);
  const [allUsers, setAllUsers] = useState<{ id: number; username: string; isApproved: boolean }[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState<Record<string, string>>({ fa: "", en: "", ar: "", es: "", "zh-cn": "" });
  const [newDesc, setNewDesc] = useState<Record<string, string>>({ fa: "", en: "", ar: "", es: "", "zh-cn": "" });
  const [parentId, setParentId] = useState<number | null>(null);
  const [assignTarget, setAssignTarget] = useState<number | null>(null);

  const fetchData = async () => {
    const [t, f, u] = await Promise.all([
      axios.get("/departments/tree"),
      axios.get("/departments"),
      axios.get("/auth/approved"),
    ]);
    setTree(t.data);
    setFlat(f.data);
    setAllUsers(u.data);
  };

  useEffect(() => { fetchData(); }, []);

  const addDept = async () => {
    const nameObj: Record<string, string> = {};
    const descObj: Record<string, string> = {};
    for (const { code } of langEntries) {
      if (newName[code]?.trim()) nameObj[code] = newName[code].trim();
      if (newDesc[code]?.trim()) descObj[code] = newDesc[code].trim();
    }
    if (!nameObj.fa && !nameObj.en) { toast.error("حداقل یک نام وارد کنید"); return; }
    await axios.post("/departments", { name: nameObj, description: descObj, parentId });
    toast.success("دپارتمان ساخته شد");
    setNewName({ fa: "", en: "", ar: "", es: "", "zh-cn": "" });
    setNewDesc({ fa: "", en: "", ar: "", es: "", "zh-cn": "" });
    setParentId(null); setShowAdd(false);
    fetchData();
  };

  const deleteDept = async (id: number) => {
    if (!confirm("آیا مطمئن هستید؟")) return;
    await axios.delete(`/departments/${id}`);
    toast.success("حذف شد");
    fetchData();
  };

  const assignUser = async (deptId: number, userId: number) => {
    await axios.post(`/departments/${deptId}/assign/${userId}`);
    toast.success("کاربر انتساب یافت");
    setAssignTarget(null);
    fetchData();
  };

  const removeUser = async (deptId: number, userId: number) => {
    await axios.post(`/departments/${deptId}/remove/${userId}`);
    toast.success("کاربر جدا شد");
    fetchData();
  };

  const renderTree = (nodes: Department[], depth = 0) => {
    return nodes.map((node) => (
      <div key={node.id} className="mt-2" style={{ marginRight: depth * 24 }}>
        <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3 dark:border-dark-500 dark:bg-dark-700/30">
          <span className="font-medium text-gray-800 dark:text-dark-100">
            {depth > 0 && <span className="ml-1 text-gray-400">└─</span>}
            {getLocalizedField(node.name, locale)}
          </span>
          {node.members?.length > 0 && (
            <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs text-success">
              {node.members.length} نفر
            </span>
          )}
          <div className="mr-auto flex gap-1">
            <Button size="sm" color="primary" variant="ghost" onClick={() => setAssignTarget(node.id)}>
              <UserPlusIcon className="size-4" />
            </Button>
            <Button size="sm" color="error" variant="ghost" onClick={() => deleteDept(node.id)}>
              <TrashIcon className="size-4" />
            </Button>
          </div>
        </div>
        {node.members?.length > 0 && (
          <div className="mr-4 mt-1 flex flex-wrap gap-1">
            {node.members.map((m) => (
              <span
                key={m.id}
                className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary cursor-pointer hover:bg-primary/20"
                onClick={() => removeUser(node.id, m.id)}
              >
                {m.username}
                <XMarkIcon className="size-3" />
              </span>
            ))}
          </div>
        )}
        {node.children?.length > 0 && renderTree(node.children, depth + 1)}
      </div>
    ));
  };

  return (
    <Page title="مدیریت دپارتمان‌ها">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-100">دپارتمان‌ها</h2>
          <Button color="primary" onClick={() => setShowAdd(!showAdd)}>
            <PlusIcon className="size-4" />
            <span>دپارتمان جدید</span>
          </Button>
        </div>

        {showAdd && (
          <Card className="space-y-3 p-4">
            <div className="grid grid-cols-2 gap-2">
              {langEntries.map(({ code, label }) => (
                <Input key={code} placeholder={`نام (${label})`} value={newName[code]} onChange={(e) => setNewName({ ...newName, [code]: e.target.value })} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {langEntries.map(({ code, label }) => (
                <Input key={code} placeholder={`توضیحات (${label})`} value={newDesc[code]} onChange={(e) => setNewDesc({ ...newDesc, [code]: e.target.value })} />
              ))}
            </div>
            <div className="flex gap-3">
              <select
                className="flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm dark:border-dark-500 dark:bg-dark-800"
                value={parentId || ""}
                onChange={(e) => setParentId(e.target.value ? Number(e.target.value) : null)}
              >
                <option value="">— ریشه —</option>
                {flat.map((d) => (
                  <option key={d.id} value={d.id}>{getLocalizedField(d.name, locale)}</option>
                ))}
              </select>
              <Button color="primary" onClick={addDept}>ذخیره</Button>
            </div>
          </Card>
        )}

        <Card className="p-4">
          {tree.length === 0 && <p className="text-center text-sm text-gray-400">دپارتمانی وجود ندارد</p>}
          {renderTree(tree)}
        </Card>
      </div>

      {assignTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setAssignTarget(null)}>
          <Card className="w-96 max-h-[80vh] overflow-y-auto p-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-3 font-bold text-gray-800 dark:text-dark-100">انتخاب کاربر</h3>
            <div className="space-y-1">
              {allUsers.filter((u) => u.isApproved).map((u) => (
                <div
                  key={u.id}
                  className="flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-dark-600"
                  onClick={() => assignUser(assignTarget, u.id)}
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {u.username[0]?.toUpperCase()}
                  </div>
                  <span className="text-sm">{u.username}</span>
                </div>
              ))}
            </div>
            <Button className="mt-3 w-full" variant="outlined" color="secondary" onClick={() => setAssignTarget(null)}>
              بستن
            </Button>
          </Card>
        </div>
      )}
    </Page>
  );
}
