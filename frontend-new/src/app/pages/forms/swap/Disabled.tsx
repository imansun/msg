import { Swap, SwapOff, SwapOn } from "@/components/ui";

const Disabled = () => {
  return (
    <Swap defaultValue="on" disabled>
      <SwapOn className="text-2xl">روشن</SwapOn>
      <SwapOff className="text-2xl">خاموش</SwapOff>
    </Swap>
  );
};

export { Disabled };
