// Import Dependencies
import clsx from "clsx";
import { useState } from "react";

// Local Imports
import { Collapse, Button } from "@/components/ui";
import { useDisclosure } from "@/hooks";

// ----------------------------------------------------------------------

export function MinWidth() {
  const [isExpanded, { toggle }] = useDisclosure();
  const [truncate, setTruncate] = useState(true);

  return (
    <div className="max-w-xl">
      <Button onClick={toggle} color="primary">
        حداقل عرض
      </Button>
      <div className="mt-2">
        <Collapse
          in={isExpanded}
          min="20px"
          onTransitionEnd={() =>
            isExpanded ? setTruncate(false) : setTruncate(true)
          }
        >
          <p className={clsx(truncate && !isExpanded && "truncate")}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </Collapse>
      </div>
    </div>
  );
}
