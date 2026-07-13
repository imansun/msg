import { Button, Card } from "@/components/ui";
import { useDisclosure } from "@/hooks";

export function Basic() {
  const [isOpen, { open, close, toggle }] = useDisclosure(true);
  return (
    <div>
      <Card className="p-4">
        {isOpen && (
          <div>
            <p>
              این یک نمونه متن نمایشی است. شما می‌توانید این محتوا را به دلخواه خود تغییر دهید.
            </p>
            <p>
              این یک متن توضیحی دیگر برای نمایش باز و بسته شدن کارت توسط هوک useDisclosure است.
            </p>
            <p>
              برای مشاهده نحوه عملکرد، از دکمه‌های زیر استفاده کنید.
            </p>
          </div>
        )}
        <div>وضعیت باز بودن: {isOpen.toString()}</div>
      </Card>

      <div className="mt-4 flex gap-2">
        <Button onClick={open}>باز کن</Button>
        <Button onClick={close}>ببند</Button>
        <Button onClick={toggle}>تعویض</Button>
      </div>
    </div>
  );
}
