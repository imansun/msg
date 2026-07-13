import { useEffect, useState, useRef, Fragment } from "react";
import type { FilePondFile } from "filepond";
import { io, Socket } from "socket.io-client";
import { useNavigate } from "react-router";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  Button as HeadlessButton,
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleLeftIcon,
  BuildingOffice2Icon,
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
  PaperClipIcon,
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  Cog6ToothIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { IconType } from "react-icons";
import {
  TbShield,
  TbPencil,
  TbServer,
  TbSettings,
  TbChecklist,
  TbTruck,
  TbUsers,
  TbTools,
  TbBuildingStore,
  TbHealthRecognition,
  TbUser,
  TbFolder,
  TbFolderOpen,
  TbBuildingFactory,
  TbCoin,
  TbFile,
  TbFileText,
  TbFileSpreadsheet,
  TbFileTypePpt,
} from "react-icons/tb";
import axios from "@/utils/axios";
import { Page } from "@/components/shared/Page";
import { Button, Avatar, Badge } from "@/components/ui";
import { Collapse } from "@/components/ui";
import { FilePond } from "@/components/shared/form/Filepond";
import { useAuthContext } from "@/app/contexts/auth/context";
import { useLocalStorage } from "@/hooks";
import { randomId } from "@/utils/randomId";

const API = "http://localhost:3001";

function getFileIcon(ext?: string | null): IconType {
  if (!ext) return TbFile;
  const e = ext.toLowerCase();
  if (e.includes("pdf")) return TbFile;
  if (e.includes("doc")) return TbFileText;
  if (e.includes("xls")) return TbFileSpreadsheet;
  if (e.includes("ppt")) return TbFileTypePpt;
  if (e.includes("txt")) return TbFileText;
  return TbFile;
}

function formatFileSize(bytes?: number | null): string {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} بایت`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} کیلوبایت`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} مگابایت`;
}

function getFileColor(ext?: string | null): string {
  if (!ext) return "text-gray-400";
  const e = ext.toLowerCase();
  if (e.includes("pdf")) return "text-red-500";
  if (e.includes("doc")) return "text-blue-500";
  if (e.includes("xls")) return "text-green-600";
  if (e.includes("ppt")) return "text-orange-500";
  if (e.includes("txt")) return "text-gray-500";
  return "text-gray-400";
}

const deptIconMap: Record<string, IconType> = {
  "صنایع": TbBuildingFactory,
  "مالی و حقوقی": TbCoin,
  "مالی": TbCoin,
  "حقوقی": TbCoin,
  "انتظامات": TbShield,
  "واحد طراحی": TbPencil,
  "طراحی": TbPencil,
  "آی‌تی": TbServer,
  "تولید": TbSettings,
  "کنترل کیفیت": TbChecklist,
  "کیفیت": TbChecklist,
  "انبار و لجستیک": TbTruck,
  "انبار": TbTruck,
  "لجستیک": TbTruck,
  "منابع انسانی": TbUsers,
  "تعمیرات و نگهداری": TbTools,
  "تعمیرات": TbTools,
  "نگهداری": TbTools,
  "بازرگانی": TbBuildingStore,
  "ایمنی و بهداشت": TbHealthRecognition,
  "ایمنی": TbHealthRecognition,
  "بهداشت": TbHealthRecognition,
};

function getDeptIcon(name: string): IconType {
  for (const [key, Icon] of Object.entries(deptIconMap)) {
    if (name.includes(key)) return Icon;
  }
  return TbUser;
}

interface Msg {
  id: number;
  text: string;
  senderId: number;
  senderName: string;
  room: string;
  fileName?: string | null;
  filePath?: string | null;
  fileType?: string | null;
  fileSize?: number | null;
  createdAt: string;
  deletedBy?: number[];
}

interface UserItem {
  id: number;
  username: string;
  displayName?: string | null;
  isAdmin: boolean;
}

interface Dept {
  id: number;
  name: string;
  parentId: number | null;
  level: number;
  children?: Dept[];
}

interface ChatTab {
  id: string;
  type: "dm" | "dept" | "general";
  targetId?: number;
  targetName: string;
  room: string;
  messages: Msg[];
  text: string;
}

function getPrivateRoom(a: number, b: number) {
  return [Math.min(a, b), Math.max(a, b)].join("-");
}
function DeptTreeNode({
  dept,
  tabs,
  onOpenDept,
  openState,
  toggleOpen,
  myDeptIds,
}: {
  dept: Dept;
  tabs: ChatTab[];
  onOpenDept: (d: Dept) => void;
  openState: Record<number, boolean>;
  toggleOpen: (id: number) => void;
  myDeptIds: number[];
}) {
  const open = openState[dept.id] ?? false;
  const hasChildren = dept.children && dept.children.length > 0;
  const hasOpenTab = tabs.some((t) => t.type === "dept" && t.targetId === dept.id);
  const DeptIcon = getDeptIcon(dept.name);

  return (
    <div>
      <div className="flex items-center">
        {hasChildren ? (
          <button
            onClick={(e) => { e.stopPropagation(); toggleOpen(dept.id); }}
            className="flex size-5 shrink-0 items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-dark-600"
          >
            {open ? <ChevronDownIcon className="size-3 text-gray-400" /> : <ChevronRightIcon className="size-3 text-gray-400" />}
          </button>
        ) : (
          <span className="w-5 shrink-0" />
        )}
        <button
          onClick={() => onOpenDept(dept)}
          className={clsx(
            "flex flex-1 items-center gap-1.5 truncate rounded-lg px-2 py-1.5 text-right text-sm transition-colors",
            hasOpenTab
              ? "bg-primary/10 text-primary font-medium"
              : "text-gray-600 hover:bg-gray-100 dark:text-dark-300 dark:hover:bg-dark-600"
          )}
        >
          {hasChildren ? (
            open ? (
              <TbFolderOpen className={clsx("size-4 shrink-0", hasOpenTab ? "text-primary" : "text-warning")} />
            ) : (
              <TbFolder className={clsx("size-4 shrink-0", hasOpenTab ? "text-primary" : "text-warning")} />
            )
          ) : (
            <DeptIcon className={clsx("size-4 shrink-0", hasOpenTab ? "text-primary" : "text-gray-400 dark:text-dark-400")} />
          )}
          <span className="truncate">{dept.name}</span>
          {myDeptIds.includes(dept.id) && (
            <Badge isGlow color="primary" className="mr-auto shrink-0 px-1.5 py-0.5 text-[8px] leading-none">
              عضو
            </Badge>
          )}
        </button>
      </div>
      {hasChildren && (
        <Collapse in={open} transitionDuration={200}>
          <div className="mr-2.5 mt-0.5 space-y-0.5 border-r-2 border-gray-100 pr-1 dark:border-dark-600">
            {dept.children!.map((child) => (
              <DeptTreeNode
                key={child.id}
                dept={child}
                tabs={tabs}
                onOpenDept={onOpenDept}
                openState={openState}
                toggleOpen={toggleOpen}
                myDeptIds={myDeptIds}
              />
            ))}
          </div>
        </Collapse>
      )}
    </div>
  );
}
export default function Messenger() {
  const { user, logout } = useAuthContext();
  const [tabs, setTabs] = useState<ChatTab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>("");
  const [onlineUsers, setOnlineUsers] = useState<number[]>([]);
  const [departments, setDepartments] = useState<Dept[]>([]);
  const [openDepts, setOpenDepts] = useState<Record<number, boolean>>({});
  const socketRef = useRef<Socket | null>(null);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [myDeptIds, setMyDeptIds] = useState<number[]>([]);

  const [membersOpen, setMembersOpen] = useState(false);
  const [membersDept, setMembersDept] = useState<Dept | null>(null);
  const [members, setMembers] = useState<UserItem[]>([]);
  const [membersLoading, setMembersLoading] = useState(false);

  const [fileModalOpen, setFileModalOpen] = useState(false);
  const [fileCaption, setFileCaption] = useState("");
  const [pondFiles, setPondFiles] = useState<FilePondFile[]>([]);
  const [uploadedFileInfo, setUploadedFileInfo] = useState<{
    fileName: string; filePath: string; fileType: string; fileSize: number;
  } | null>(null);
  const pondRef = useRef<any>(null);
  const [contextMsg, setContextMsg] = useState<Msg | null>(null);

  const toggleDeptOpen = (id: number) => {
    setOpenDepts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeTab = tabs.find((t) => t.id === activeTabId) || null;
  const activeTabMessages = activeTab?.messages || [];
  const isGeneral = activeTab?.type === "general";
  const canSend = !isGeneral || user?.isAdmin;

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const socket = io(API, { auth: { token } });
    socketRef.current = socket;

    socket.on("newMessage", (msg: Msg) => {
      setTabs((prev) =>
        prev.map((tab) =>
          tab.room === msg.room
            ? { ...tab, messages: [...tab.messages, msg] }
            : tab
        )
      );
    });

    socket.on("onlineUsers", (ids: number[]) => setOnlineUsers(ids));

    socket.on("messageDeleted", (data: { messageId: number; hard: boolean }) => {
      setTabs((prev) =>
        prev.map((tab) => {
          if (data.hard) {
            return { ...tab, messages: tab.messages.filter((m) => m.id !== data.messageId) };
          }
          return {
            ...tab,
            messages: tab.messages.map((m) =>
              m.id === data.messageId
                ? { ...m, deletedBy: [...(m.deletedBy || []), user!.id] }
                : m
            ),
          };
        })
      );
    });

    axios.get("/departments/tree").then((r) => setDepartments(r.data));
    axios.get("/auth/me").then((r) => setMyDeptIds(r.data.departmentIds || []));

    return () => { socket.disconnect(); };
  }, []);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeTabMessages]);

  useEffect(() => {
    const handler = () => setContextMsg(null);
    if (contextMsg) {
      window.addEventListener("click", handler);
      return () => window.removeEventListener("click", handler);
    }
  }, [contextMsg]);

  const loadMessages = async (tabId: string, room: string) => {
    const r = await axios.get(`/chat/messages?room=${room}&userId=${user!.id}`);
    setTabs((prev) =>
      prev.map((t) => (t.id === tabId ? { ...t, messages: r.data.reverse() } : t))
    );
  };
  const openTab = (type: "dm" | "dept" | "general", targetId?: number, targetName?: string) => {
    let room: string;
    let name: string;
    if (type === "general") { room = "general"; name = "اطلاع‌رسانی عمومی"; }
    else if (type === "dm") { room = getPrivateRoom(user!.id, targetId!); name = targetName || "چت خصوصی"; }
    else { room = `dept-${targetId}`; name = targetName || "گروه کاری"; }

    const existing = tabs.find((t) => t.room === room);
    if (existing) {
      setActiveTabId(existing.id);
      return;
    }

    const id = randomId();
    const newTab: ChatTab = { id, type, targetId, targetName: name, room, messages: [], text: "" };
    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(id);
    socketRef.current?.emit("joinRoom", room);
    loadMessages(id, room);
  };

  const closeTab = (tabId: string) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.id !== tabId);
      if (activeTabId === tabId) {
        const lastTab = next[next.length - 1];
        setActiveTabId(lastTab ? lastTab.id : "");
      }
      return next;
    });
  };

  const updateTabText = (tabId: string, text: string) => {
    setTabs((prev) => prev.map((t) => (t.id === tabId ? { ...t, text } : t)));
  };

  const openGeneral = () => openTab("general");

  const openDM = (u: UserItem) => {
    openTab("dm", u.id, u.displayName || u.username);
    setMembersOpen(false);
  };

  const openDept = async (d: Dept) => {
    setMembersDept(d);
    setMembersOpen(true);
    setMembersLoading(true);
    try {
      const r = await axios.get(`/departments/${d.id}/members`);
      setMembers(r.data.filter((m: UserItem) => m.id !== user?.id));
    } catch { setMembers([]); }
    setMembersLoading(false);
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTab || !activeTab.text.trim()) return;
    const payload: any = { text: activeTab.text };
    if (activeTab.type === "dm" && activeTab.targetId) { payload.recipientId = activeTab.targetId; }
    else { payload.room = activeTab.room; }
    socketRef.current?.emit("sendMessage", payload);
    updateTabText(activeTab.id, "");
  };

  const openFileModal = () => {
    setFileCaption(""); setPondFiles([]); setUploadedFileInfo(null); setFileModalOpen(true);
  };
  const closeFileModal = () => {
    setFileModalOpen(false); setFileCaption(""); setPondFiles([]); setUploadedFileInfo(null);
  };

  const sendFileMessage = () => {
    if (!uploadedFileInfo || !activeTab) return;
    const payload: any = {
      text: fileCaption,
      fileName: uploadedFileInfo.fileName,
      filePath: uploadedFileInfo.filePath,
      fileType: uploadedFileInfo.fileType,
      fileSize: uploadedFileInfo.fileSize,
    };
    if (activeTab.type === "dm" && activeTab.targetId) { payload.recipientId = activeTab.targetId; }
    else { payload.room = activeTab.room; }
    socketRef.current?.emit("sendMessage", payload);
    closeFileModal();
  };

  const deleteMessage = (msg: Msg) => {
    setContextMsg(null);
    const ageMs = Date.now() - new Date(msg.createdAt).getTime();
    const within60s = ageMs < 60000;
    const isSender = msg.senderId === user?.id;
    if (!within60s && !isSender) return;
    socketRef.current?.emit("deleteMessage", { messageId: msg.id });
  };

  const topDepts = departments.filter((d) => !d.parentId);
  return (
    <Page title="مسنجر">
      <div className="flex h-[calc(100vh-8rem)] overflow-hidden rounded-xl border border-gray-200 dark:border-dark-500">
        {/* Sidebar */}
        <div className="flex w-64 flex-col border-s-0 border-gray-200 bg-gray-50/50 dark:border-dark-500 dark:bg-dark-700/30">
          <div className="border-b border-gray-200 p-3 dark:border-dark-500">
            <p className="text-xs font-bold text-gray-400">گفتگوها</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <button
              onClick={openGeneral}
              className={clsx(
                "mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                activeTab?.type === "general"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:bg-gray-100 dark:text-dark-300 dark:hover:bg-dark-600"
              )}
            >
              <span className="font-bold">#</span> اطلاع‌رسانی عمومی
              {!user?.isAdmin && (
                <span className="mr-auto rounded bg-warning/10 px-1.5 py-0.5 text-[9px] text-warning">
                  فقط خواندنی
                </span>
              )}
            </button>

            <div className="my-2 h-px bg-gray-200 dark:bg-dark-500" />
            <p className="mb-1 px-3 text-[10px] font-bold uppercase text-gray-400">
              گروه‌های کاری
            </p>

            <div className="space-y-0.5 px-1">
              {topDepts.map((d) => (
                <DeptTreeNode
                  key={d.id}
                  dept={d}
                  tabs={tabs}
                  onOpenDept={openDept}
                  openState={openDepts}
                  toggleOpen={toggleDeptOpen}
                  myDeptIds={myDeptIds}
                />
              ))}
            </div>
          </div>

          {/* Profile Footer */}
          <div className="border-t border-gray-200 dark:border-dark-500">
            <Popover className="relative">
              <PopoverButton className="flex w-full items-center gap-3 px-3 py-3 text-right outline-none transition-colors hover:bg-gray-100 dark:hover:bg-dark-600">
                <Avatar size={9}>
                  <span className="text-xs font-bold">
                    {(user?.displayName || user?.username || "U")[0]?.toUpperCase()}
                  </span>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-700 dark:text-dark-100">
                    {user?.displayName || user?.username}
                  </p>
                  <p className="truncate text-[10px] text-gray-400 dark:text-dark-300">
                    {user?.isAdmin ? "مدیر سیستم" : "کاربر"}
                  </p>
                </div>
              </PopoverButton>
              <Transition
                enter="duration-200 ease-out"
                enterFrom="translate-y-2 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="duration-200 ease-out"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="translate-y-2 opacity-0"
              >
                <PopoverPanel
                  anchor={{ to: "top start", gap: 8 }}
                  className="z-70 flex w-56 flex-col rounded-lg border border-gray-150 bg-white shadow-soft dark:border-dark-600 dark:bg-dark-700 dark:shadow-none"
                >
                  {({ close }) => (
                    <div className="flex flex-col py-2">
                      {user?.isAdmin && (
                        <>
                          <button onClick={() => { close(); navigate("/admin/dashboard"); }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-dark-100 dark:hover:bg-dark-600">
                            <TbUser className="size-4" /> داشبورد
                          </button>
                          <button onClick={() => { close(); navigate("/admin/departments"); }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-dark-100 dark:hover:bg-dark-600">
                            <BuildingOffice2Icon className="size-4" /> دپارتمان‌ها
                          </button>
                          <button onClick={() => { close(); navigate("/admin/settings"); }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-dark-100 dark:hover:bg-dark-600">
                            <Cog6ToothIcon className="size-4" /> تنظیمات فایل
                          </button>
                          <div className="mx-4 my-1 h-px bg-gray-200 dark:bg-dark-500" />
                        </>
                      )}
                      <button onClick={() => { close(); navigate("/apps/chat"); }} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-dark-100 dark:hover:bg-dark-600">
                        <ChatBubbleLeftIcon className="size-4" /> مسنجر
                      </button>
                      <div className="mx-4 my-1 h-px bg-gray-200 dark:bg-dark-500" />
                      <button onClick={() => { close(); logout(); navigate("/login"); }} className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-dark-600">
                        <ArrowLeftStartOnRectangleIcon className="size-4" /> خروج
                      </button>
                    </div>
                  )}
                </PopoverPanel>
              </Transition>
            </Popover>
          </div>
        </div>
        {/* Chat Area with Tabs */}
        <div className="flex flex-1 flex-col bg-white dark:bg-dark-800">
          <TabGroup
            selectedIndex={tabs.findIndex((t) => t.id === activeTabId)}
            onChange={(idx) => { if (tabs[idx]) setActiveTabId(tabs[idx].id); }}
            className="flex flex-1 flex-col"
          >
            {/* Tabs Header */}
            <div className="shrink-0 overflow-x-auto border-b border-gray-200 dark:border-dark-500">
                <TabList className="-mb-0.5 flex min-w-full border-b-2 border-gray-150 dark:border-dark-500">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      className={({ selected }) =>
                        clsx(
                          "group flex shrink-0 items-center gap-2 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-medium rtl:space-x-reverse",
                          selected
                            ? "border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-400"
                            : "border-transparent text-gray-500 hover:text-gray-800 dark:text-dark-400 dark:hover:text-dark-100"
                        )
                      }
                      as={Button}
                      unstyled
                    >
                      {tab.type === "general" ? (
                        <span className="font-bold">#</span>
                      ) : tab.type === "dm" ? (
                        <span className="flex size-5 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                          {tab.targetName[0]?.toUpperCase()}
                        </span>
                      ) : (
                        (() => { const Icon = getDeptIcon(tab.targetName); return <Icon className="size-4" />; })()
                      )}
                      <span className="max-w-[120px] truncate">{tab.targetName}</span>
                      <Button
                        component="span"
                        unstyled
                        isIcon
                        color="error"
                        variant="soft"
                        className="ms-1 size-5 shrink-0 items-center justify-center rounded-full cursor-pointer"
                        onClick={(e: React.MouseEvent) => { e.stopPropagation(); closeTab(tab.id); }}
                      >
                        <XMarkIcon className="size-3" />
                      </Button>
                    </Tab>
                  ))}
                </TabList>
            </div>

                <TabPanels className="flex flex-1 flex-col">
                  {tabs.map((tab) => (
                    <TabPanel key={tab.id} className="flex flex-1 flex-col" unmount={false}>
                      {/* Messages */}
                      <div className="flex-1 overflow-y-auto p-4">
                        {tab.messages.length === 0 && (
                          <div className="flex h-full items-center justify-center text-sm text-gray-400">
                            پیامی نیست
                          </div>
                        )}
                        {tab.messages.map((m) => {
                          const isSoftDeletedByMe = m.deletedBy?.includes(user!.id);
                          if (isSoftDeletedByMe) return null;
                          const isSoftDeleted = m.deletedBy && m.deletedBy.length > 0;
                          const ageMs = Date.now() - new Date(m.createdAt).getTime();
                          const within60s = ageMs < 60000;
                          const isSender = m.senderId === user?.id;
                          const canDelete = within60s || isSender;
                          const isOwn = m.senderId === user?.id;

                          return (
                            <div
                              key={m.id}
                              className={clsx("group mb-2 flex max-w-[70%] flex-col", isOwn ? "ml-auto items-end" : "mr-auto items-start")}
                              onContextMenu={(e) => { e.preventDefault(); if (canDelete) setContextMsg(m); }}
                            >
                              {!isOwn && (
                                <p className="mb-0.5 px-2 text-[10px] font-bold text-primary">{m.senderName}</p>
                              )}
                              <div className={clsx("rounded-xl px-4 py-2", isOwn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900 dark:bg-dark-600 dark:text-dark-50")}>
                                {isSoftDeleted ? (
                                  <p className="flex items-center gap-1.5 text-sm italic opacity-60">
                                    <TrashIcon className="size-3.5 shrink-0" /> پیام حذف شد
                                  </p>
                                ) : (
                                  <>
                                    {m.text && <p className="text-sm leading-relaxed">{m.text}</p>}
                                    {m.filePath && (
                                      <div className="mt-1">
                                        <a
                                          href={`${API}${m.filePath}`}
                                          download={m.fileName || undefined}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className={clsx("flex items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors no-underline", isOwn ? "bg-white/20 hover:bg-white/30" : "bg-gray-100 hover:bg-gray-200 dark:bg-dark-500 dark:hover:bg-dark-400")}
                                        >
                                          <span className={clsx("flex size-10 shrink-0 items-center justify-center rounded-lg", isOwn ? "bg-white/20" : "bg-gray-300 dark:bg-dark-400")}>
                                            {(() => { const FileIcon = getFileIcon(m.fileType); return <FileIcon className={clsx("size-5", isOwn ? "text-white" : getFileColor(m.fileType))} />; })()}
                                          </span>
                                          <div className="min-w-0 flex-1">
                                            <p className={clsx("truncate text-xs font-medium leading-tight", isOwn ? "text-white" : "text-gray-800 dark:text-dark-100")}>{m.fileName}</p>
                                            <p className={clsx("mt-0.5 text-[10px] leading-tight", isOwn ? "text-white/70" : "text-gray-500 dark:text-dark-300")}>{formatFileSize(m.fileSize)}</p>
                                          </div>
                                          <ArrowDownTrayIcon className={clsx("size-4 shrink-0", isOwn ? "text-white/80" : "text-gray-500 dark:text-dark-300")} />
                                        </a>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                              <p className="mt-0.5 px-2 text-[10px] text-gray-400">
                                {new Date(m.createdAt).toLocaleTimeString("fa-IR")}
                              </p>
                            </div>
                          );
                        })}
                        <div ref={messagesEnd} />
                      </div>

                      {/* Input */}
                      <form
                        onSubmit={(e) => { e.preventDefault(); send(e); }}
                        className="flex items-center gap-2 border-t border-gray-200 p-3 dark:border-dark-500"
                      >
                        <HeadlessButton as={Fragment}>
                          {({ hover, active }) => (
                            <Button type="button" color="primary" variant="outlined" isGlow={hover && !active} isIcon className="size-9 shrink-0 rounded-full" disabled={!canSend} onClick={openFileModal}>
                              <PaperClipIcon className="size-4" />
                            </Button>
                          )}
                        </HeadlessButton>
                        <input
                          className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-500 dark:bg-dark-700"
                          placeholder={canSend ? "پیام بنویسید..." : "فقط ادمین‌ها می‌توانند پیام بفرستند"}
                          value={tab.text}
                          onChange={(e) => updateTabText(tab.id, e.target.value)}
                          disabled={!canSend}
                        />
                        <HeadlessButton as={Fragment}>
                          {({ hover, active }) => (
                            <Button type="submit" color="info" isGlow={hover && !active} isIcon className="size-9 shrink-0 rounded-full" disabled={!canSend || !tab.text.trim()}>
                              <PaperAirplaneIcon className="size-4" />
                            </Button>
                          )}
                        </HeadlessButton>
                      </form>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

            {tabs.length === 0 && (
              <div className="flex flex-1 items-center justify-center text-sm text-gray-400">
                یک گفتگو را از سمت راست انتخاب کنید
              </div>
            )}
        </div>
      </div>
      {/* File Upload Modal */}
      <Transition show={fileModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeFileModal}>
          <TransitionChild as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/40" />
          </TransitionChild>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild as={Fragment} enter="ease-out duration-200" enterFrom="scale-95 opacity-0" enterTo="scale-100 opacity-100" leave="ease-in duration-150" leaveFrom="scale-100 opacity-100" leaveTo="scale-95 opacity-0">
              <DialogPanel className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-dark-500 dark:bg-dark-800">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-gray-800 dark:text-dark-100">ارسال فایل</h3>
                  <button onClick={closeFileModal} className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-600">
                    <XMarkIcon className="size-5" />
                  </button>
                </div>
                <FilePond
                  ref={pondRef}
                  allowMultiple={false}
                  maxFileSize="6MB"
                  acceptedFileTypes={[".pdf", ".docx", ".xlsx", ".pptx", ".txt"]}
                  server={{
                    url: API,
                    process: {
                      url: "/chat/upload",
                      method: "POST",
                      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
                      ondata: (formData: FormData) => formData,
                      onload: (response: any) => {
                        const data = typeof response === "string" ? JSON.parse(response) : response;
                        if (data.error) { alert(data.error); return null; }
                        setUploadedFileInfo(data);
                        return data;
                      },
                      onerror: () => { alert("خطا در آپلود فایل"); return null; },
                    },
                  }}
                  onupdatefiles={(files) => { setPondFiles(files); if (files.length === 0) setUploadedFileInfo(null); }}
                  className="mb-3"
                />
                <input
                  className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-500 dark:bg-dark-700"
                  placeholder="توضیحات (اختیاری)..."
                  value={fileCaption}
                  onChange={(e) => setFileCaption(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <HeadlessButton as={Fragment}>
                    {({ hover, active }) => (
                      <Button color="error" variant="outlined" isGlow={hover && !active} onClick={closeFileModal}>انصراف</Button>
                    )}
                  </HeadlessButton>
                  <HeadlessButton as={Fragment}>
                    {({ hover, active }) => (
                      <Button color="primary" isGlow={hover && !active} onClick={sendFileMessage} disabled={!uploadedFileInfo}>
                        {uploadedFileInfo ? (<><PaperAirplaneIcon className="size-4" /> ارسال</>) : (<span className="flex items-center gap-2"><span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> آپلود...</span>)}
                      </Button>
                    )}
                  </HeadlessButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Members Panel - RTL Left Drawer */}
      <Transition appear show={membersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={() => setMembersOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity dark:bg-black/40" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out transform-gpu transition-transform duration-200"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in transform-gpu transition-transform duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="fixed left-0 top-0 flex h-full w-80 transform-gpu flex-col border-e border-gray-200 bg-white transition-transform duration-200 dark:border-dark-500 dark:bg-dark-700">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  {membersDept && (() => { const Icon = getDeptIcon(membersDept.name); return <Icon className="size-6 text-primary" />; })()}
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-dark-50">{membersDept?.name}</h3>
                    <p className="text-[10px] text-gray-400">اعضای دپارتمان</p>
                  </div>
                </div>
                <Button
                  onClick={() => setMembersOpen(false)}
                  variant="flat"
                  isIcon
                  className="size-6 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
                >
                  <XMarkIcon className="size-4.5" />
                </Button>
              </div>

              <hr className="mx-5 h-px border-gray-200 dark:border-dark-500" />

              {/* Members List */}
              <div className="flex-1 space-y-1.5 overflow-y-auto px-5 py-4">
                {membersLoading && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="mb-3 size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <p className="text-sm text-gray-400">در حال بارگذاری...</p>
                  </div>
                )}
                {!membersLoading && members.length === 0 && (
                  <div className="py-12 text-center text-sm text-gray-400">عضوی وجود ندارد</div>
                )}
                {!membersLoading && members.map((m) => (
                  <button key={m.id} onClick={() => openDM(m)} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-right transition-colors hover:bg-gray-300/20 dark:hover:bg-dark-300/20">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {(m.displayName || m.username)[0]?.toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-800 dark:text-dark-50">{m.displayName || m.username}</p>
                      <p className="truncate text-[10px] text-gray-400">{m.username}</p>
                    </div>
                    {m.isAdmin && <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-[9px] text-primary">ادمین</span>}
                    <span className={clsx("size-2 shrink-0 rounded-full", onlineUsers.includes(m.id) ? "bg-success" : "bg-gray-300")} />
                  </button>
                ))}
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>

      {/* Right-click context menu */}
      {contextMsg && (() => {
        const ageMs = Date.now() - new Date(contextMsg.createdAt).getTime();
        const within60s = ageMs < 60000;
        return (
          <Menu as="div" className="fixed inset-0 z-[200]" onClick={() => setContextMsg(null)}>
            <MenuItems
              static
              className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-300 bg-white py-1 shadow-xl shadow-gray-200/50 outline-hidden dark:border-dark-500 dark:bg-dark-700 dark:shadow-none"
            >
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteMessage(contextMsg); }}
                    className={clsx(
                      "flex h-9 w-full items-center space-x-3 px-3 tracking-wide outline-hidden transition-colors rtl:space-x-reverse",
                      within60s ? "text-red-500 dark:text-red-400" : "text-orange-500 dark:text-orange-400",
                      focus && (within60s ? "bg-red-50 dark:bg-dark-600" : "bg-orange-50 dark:bg-dark-600")
                    )}
                  >
                    <TrashIcon className="size-4.5 stroke-1" />
                    <span className="text-sm">{within60s ? "حذف کامل پیام" : "حذف پیام من"}</span>
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        );
      })()}
    </Page>
  );
}
