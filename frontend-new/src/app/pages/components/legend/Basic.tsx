const Basic = () => {
  return (
    <div className="flex flex-col space-y-4">
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="size-2 rounded-full bg-gray-600 dark:bg-dark-200" />
        <span>خنثی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:primary size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>اصلی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:secondary size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>ثانویه</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:info size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>اطلاعاتی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:success size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>موفقیت</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:warning size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>هشدار</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:error size-2 rounded-full bg-this dark:bg-this-lighter" />
        <span>خطا</span>
      </span>
    </div>
  );
};

export { Basic };
