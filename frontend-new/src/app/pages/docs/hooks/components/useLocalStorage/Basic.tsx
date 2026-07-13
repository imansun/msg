import { Button, Input } from "@/components/ui";
import { useLocalStorage } from "@/hooks";

export function Basic() {
  const [state, setState, removeState] = useLocalStorage(
    "demo-localstorage-key",
    "",
  );

  return (
    <div>
      <div>
        <Input
          placeholder="Enter some text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <div className="mt-4 flex gap-3">
          <Button onClick={() => window?.location?.reload()}>
            رفرش کردن صفحه
          </Button>
          <Button onClick={removeState} color="error">
            حذف از LocalStorage
          </Button>
        </div>
      </div>
      <div className="mt-2">مقدار: {state}</div>
    </div>
  );
}
