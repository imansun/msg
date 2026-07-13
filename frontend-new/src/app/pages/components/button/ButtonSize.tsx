import { Button } from "@/components/ui";

const ButtonSize = () => {
  return (
    <div className="inline-space flex flex-wrap items-end">
      <Button className="rounded-sm px-3 py-1 text-xs">دکمه</Button>
      <Button className="px-4 py-1.5 text-xs-plus">دکمه</Button>
      <Button>دکمه</Button>
      <Button className="px-6 py-3 text-sm-plus">دکمه</Button>
      <Button className=" px-8 py-3.5 text-base">دکمه</Button>
    </div>
  );
};

export { ButtonSize };
