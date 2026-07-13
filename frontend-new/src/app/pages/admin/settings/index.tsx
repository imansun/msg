import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "@/utils/axios";
import { Page } from "@/components/shared/Page";
import { Button, Input, Badge } from "@/components/ui";
import { toast } from "sonner";
import {
  PlusIcon,
  TrashIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const PRESET_EXTS = [
  { ext: ".pdf", label: "PDF", color: "error" as const },
  { ext: ".docx", label: "Word", color: "info" as const },
  { ext: ".xlsx", label: "Excel", color: "success" as const },
  { ext: ".pptx", label: "PowerPoint", color: "warning" as const },
  { ext: ".txt", label: "Text", color: "neutral" as const },
];

export default function AdminSettings() {
  const { t } = useTranslation();
  const [maxSize, setMaxSize] = useState(6);
  const [extensions, setExtensions] = useState<string[]>([]);
  const [newExt, setNewExt] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    axios
      .get("/chat/settings")
      .then((r) => {
        setMaxSize(r.data.maxFileSizeMB);
        setExtensions(r.data.allowedExtensions || []);
      })
      .finally(() => setLoading(false));
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      const r = await axios.put("/chat/settings", {
        maxFileSizeMB: maxSize,
        allowedExtensions: extensions,
      });
      setMaxSize(r.data.maxFileSizeMB);
      setExtensions(r.data.allowedExtensions);
      toast.success(t("fileSettings.saveSuccess"));
    } catch {
      toast.error(t("fileSettings.saveError"));
    }
    setSaving(false);
  };

  const addExtension = () => {
    let ext = newExt.trim().toLowerCase();
    if (!ext) return;
    if (!ext.startsWith(".")) ext = "." + ext;
    if (extensions.includes(ext)) {
      toast.warning(t("fileSettings.extExists"));
      return;
    }
    setExtensions([...extensions, ext]);
    setNewExt("");
  };

  const removeExtension = (ext: string) => {
    setExtensions(extensions.filter((e) => e !== ext));
  };

  if (loading) {
    return (
      <Page title={t("fileSettings.title")}>
        <div className="flex h-64 items-center justify-center text-sm text-gray-400">
          {t("fileSettings.loading")}
        </div>
      </Page>
    );
  }

  return (
    <Page title={t("fileSettings.title")}>
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Max Size */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-500 dark:bg-dark-800">
          <div className="mb-4 flex items-center gap-2">
            <Cog6ToothIcon className="size-5 text-primary" />
            <h3 className="font-bold text-gray-800 dark:text-dark-100">
              {t("fileSettings.maxSizeTitle")}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              min={1}
              max={100}
              value={maxSize}
              onChange={(e) => setMaxSize(Number(e.target.value))}
              className="w-32"
            />
            <span className="text-sm text-gray-500">{t("fileSettings.maxSizeUnit")}</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">
            {t("fileSettings.maxSizeDesc")}
          </p>
        </div>

        {/* Allowed Extensions */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-dark-500 dark:bg-dark-800">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-bold text-gray-800 dark:text-dark-100">
              {t("fileSettings.extensionsTitle")}
            </span>
          </div>

          {/* Current extensions */}
          <div className="mb-4 flex flex-wrap gap-2">
            {extensions.map((ext) => {
              const preset = PRESET_EXTS.find((p) => p.ext === ext);
              return (
                <Badge
                  key={ext}
                  color={preset?.color || "neutral"}
                  variant="soft"
                  className="flex items-center gap-1.5 px-2.5 py-1 text-sm"
                >
                  {preset?.label || ext}
                  <span className="text-xs opacity-60">{ext}</span>
                  <button
                    onClick={() => removeExtension(ext)}
                    className="ml-1 rounded-full p-0.5 hover:bg-black/10"
                  >
                    <TrashIcon className="size-3" />
                  </button>
                </Badge>
              );
            })}
            {extensions.length === 0 && (
              <p className="text-sm text-gray-400">{t("fileSettings.noExtensions")}</p>
            )}
          </div>

          {/* Add new extension */}
          <div className="flex gap-2">
            <Input
              placeholder={t("fileSettings.newExtPlaceholder")}
              value={newExt}
              onChange={(e) => setNewExt(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addExtension()}
              className="flex-1"
            />
            <Button
              color="primary"
              variant="outlined"
              onClick={addExtension}
              className="px-3"
            >
              <PlusIcon className="size-4" />
            </Button>
          </div>

          {/* Preset quick-add */}
          <div className="mt-4">
            <p className="mb-2 text-xs text-gray-400">{t("fileSettings.quickAdd")}</p>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_EXTS.filter((p) => !extensions.includes(p.ext)).map(
                (p) => (
                  <button
                    key={p.ext}
                    onClick={() => setExtensions([...extensions, p.ext])}
                    className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-50 dark:border-dark-500 dark:text-dark-300 dark:hover:bg-dark-600"
                  >
                    {p.label} ({p.ext})
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <Button color="primary" onClick={save} disabled={saving}>
            {saving ? t("fileSettings.savingBtn") : t("fileSettings.saveBtn")}
          </Button>
        </div>
      </div>
    </Page>
  );
}
