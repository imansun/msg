const Outlined = () => {
  return (
    <div className="flex flex-col space-y-4">
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="size-3.5 rounded-full border-2 border-gray-300 dark:border-dark-300"></span>
        <span>خنثی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:primary size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>اصلی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:secondary size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>ثانویه</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:info size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>اطلاعاتی</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:success size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>موفقیت</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:warning size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>هشدار</span>
      </span>
      <span className="inline-flex items-center !space-x-2 leading-none rtl:space-x-reverse">
        <span className="this:error size-3.5 rounded-full border-2 border-this dark:border-this-light"></span>
        <span>خطا</span>
      </span>
    </div>
  );
};

export { Outlined };
