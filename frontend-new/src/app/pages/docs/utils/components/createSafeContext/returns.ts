import { type ReturnItem } from "@/components/docs/demo/DemoLayout/Returns";

export const returns: ReturnItem[] = [
  {
    name: "Provider",
    type: "React.FC<{ value: T, children: React.ReactNode }>",
    description:
      "کامپوننت Provider کانتکس. یک مقدار 'value' برای کانتکس می‌گیرد و فرزندان خود را رندر می‌کند.",
  },
  {
    name: "useSafeContext",
    type: "() => T",
    description:
      "یک هوک برای دسترسی به مقدار کانتکس. در صورت استفاده خارج از Provider، خطا می‌دهد.",
  },
];
