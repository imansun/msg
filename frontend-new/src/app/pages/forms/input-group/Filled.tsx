import { Input } from "@/components/ui";

const Filled = () => {
  return (
    <div className="max-w-xl">
      <label htmlFor="betweenAddonFilled">افزونه پرشده</label>
      <div className="mt-1.5 flex -space-x-px rtl:space-x-reverse">
        <div className=" flex items-center justify-center border border-gray-300 bg-gray-150 px-3.5 text-gray-800 dark:border-dark-450 dark:bg-dark-500 dark:text-dark-100 ltr:rounded-l-lg rtl:rounded-r-lg">
          <span className="leading-none">تومان</span>
        </div>
        <Input
          id="betweenAddonFilled"
          placeholder="نام کاربری"
          classNames={{
            root: "flex-1",
            input:'relative rounded-none hover:z-1 focus:z-1'
          }}
        />
        <div className=" flex items-center justify-center border border-gray-300 bg-gray-150 px-3.5 text-gray-800 dark:border-dark-450 dark:bg-dark-500 dark:text-dark-100 ltr:rounded-r-lg rtl:rounded-l-lg">
          <span className="leading-none">.۰۰</span>
        </div>
      </div>
    </div>
  );
};

export { Filled };
