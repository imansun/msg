// Local Imports
import { Collapse, Button } from "@/components/ui";
import { useDisclosure } from "@/hooks";

// ----------------------------------------------------------------------

export function TimingFunction() {
  const [isExpanded, { toggle }] = useDisclosure();

  return (
    <div className="max-w-xl">
      <Button onClick={toggle} color="primary">
        تغییر وضعیت
      </Button>
      <div className="pt-2">
        <Collapse
          in={isExpanded}
          transitionTimingFunction="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
        >
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </Collapse>
      </div>
      <div className="pt-2">محتوای بعد از Collapse</div>
    </div>
  );
}
