// Import Dependencies
import { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// Local Imports
import {
  ConfirmModal,
  ModalState,
  ConfirmMessages,
} from "@/components/shared/ConfirmModal";
import { Button } from "@/components/ui";
import { useDisclosure } from "@/hooks";

// ----------------------------------------------------------------------

const promise = () =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error("Random failure"));
      }
    }, 2000),
  );

export function ConfirmModalExample() {
  const [isOpen, { open, close }] = useDisclosure();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const state: ModalState = error ? "error" : success ? "success" : "pending";

  const messages: ConfirmMessages = {
    pending: {
      Icon: ExclamationTriangleIcon,
      title: "آیا مطمئن هستید؟",
      description:
        "آیا از حذف این رکورد اطمینان دارید؟ پس از حذف، امکان بازیابی وجود ندارد.",
      actionText: "حذف",
    },
    success: {
      title: "رکورد حذف شد",
    },
    error: {
      description:
        "اطمینان حاصل کنید که اینترنت وصل است و دوباره تلاش کنید. در صورت ادامه مشکل با پشتیبانی تماس بگیرید.",
    },
  };

  const onOk = () => {
    setConfirmLoading(true);
    promise()
      .then(() => {
        setConfirmLoading(false);
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setConfirmLoading(false);
        setError(true);
      });
  };

  return (
    <>
      <Button
        onClick={() => {
          setSuccess(false);
          setError(false);
          open();
        }}
      >
        تاییدیه
      </Button>

      <ConfirmModal
        show={isOpen}
        onClose={close}
        messages={messages}
        onOk={onOk}
        confirmLoading={confirmLoading}
        state={state}
      />
    </>
  );
}
