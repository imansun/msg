// Local Imports
import { Button, Switch, Textarea } from "@/components/ui";

// ----------------------------------------------------------------------

export function Reply() {
  return (
    <div className="mt-6">
      <Textarea placeholder="پاسخ به هنری کرتیس..." rows={5}></Textarea>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Switch variant="outlined" label="بی‌صدا کردن این گفتگو" />
        <Button color="primary">ارسال</Button>
      </div>
    </div>
  );
}
