import { Swap, SwapOff, SwapOn } from "@/components/ui";

const Basic = () => {
  return (
    <Swap defaultValue="on">
      <SwapOn className="text-2xl">روشن</SwapOn>
      <SwapOff className="text-2xl">خاموش</SwapOff>
    </Swap>
  );
};

export { Basic };
