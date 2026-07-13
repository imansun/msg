// Import Dependencies
import { Button as HeadlessButton } from "@headlessui/react";
import { Fragment } from "react";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

const GlowButton = () => {
  return (
    <div className="space-y-4">
      <div className="inline-space">
        <Button isGlow>خنثی</Button>
        <Button color="primary" isGlow>
          اصلی
        </Button>
        <Button color="secondary" isGlow>
          ثانویه
        </Button>
        <Button color="info" isGlow>
          اطلاعات
        </Button>
        <Button color="success" isGlow>
          موفق
        </Button>
        <Button color="warning" isGlow>
          هشدار
        </Button>
        <Button color="error" isGlow>
          خطا
        </Button>
      </div>
      <div className="inline-space">
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="primary" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="secondary" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="info" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="success" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="warning" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
        <HeadlessButton as={Fragment}>
          {({ hover, active }) => (
            <Button color="error" isGlow={hover && !active}>
              خنثی
            </Button>
          )}
        </HeadlessButton>
      </div>
    </div>
  );
};

export { GlowButton };
