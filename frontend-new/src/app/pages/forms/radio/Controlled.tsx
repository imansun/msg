// وارد کردن وابستگی‌ها
import { useState } from "react";

// واردات محلی
import { Radio } from "@/components/ui";

// ----------------------------------------------------------------------

const Controlled = () => {
  const [selected, setSelected] = useState("vue");

  return (
    <div className="max-w-xl">
      <div className="flex flex-wrap gap-5">
        <Radio
          value="vue"
          checked={selected === "vue"}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
          label="ویو"
        />
        <Radio
          value="react"
          checked={selected === "react"}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
          label="ری‌اکت"
        />
        <Radio
          value="solid"
          checked={selected === "solid"}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
          label="سالید"
        />
        <Radio
          value="svelte"
          checked={selected === "svelte"}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
          label="اسولت"
        />
      </div>
      <p className="mt-1">{selected === "vue"
        ? "ویو"
        : selected === "react"
        ? "ری‌اکت"
        : selected === "solid"
        ? "سالید"
        : selected === "svelte"
        ? "اسولت"
        : selected}</p>
    </div>
  );
};

export { Controlled };
