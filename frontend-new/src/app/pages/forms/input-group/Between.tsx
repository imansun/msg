import { Input } from "@/components/ui";

const Between = () => {
  return (
    <div className="max-w-xl">
      <label htmlFor="betweenAddon">افزونه دوطرفه</label>
      <div className="mt-1.5 flex -space-x-px rtl:space-x-reverse">
        <div className=" flex items-center justify-center border border-gray-300 px-3.5 dark:border-dark-450 ltr:rounded-l-lg rtl:rounded-r-lg">
          <span className="leading-none">تومان</span>
        </div>
        <Input
          id="betweenAddon"
          placeholder="نام کاربری"
          classNames={{
            root: "flex-1",
            input: "relative rounded-none hover:z-1 focus:z-1",
          }}
        />
        <div className=" flex items-center justify-center border border-gray-300 px-3.5 dark:border-dark-450 ltr:rounded-r-lg rtl:rounded-l-lg">
          <span className="leading-none">.۰۰</span>
        </div>
      </div>
    </div>
  );
};

export { Between };
