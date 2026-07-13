const Extended = () => {
  return (
    <div className="max-w-2xl space-y-4">
      <div
        role="alert"
        className="this:success overflow-hidden rounded-lg bg-white"
      >
        <div className="flex bg-this-darker/10">
          <div className="w-1.5 shrink-0 bg-this"></div>
          <div className="px-4 py-3">
            <h2 className="text-lg font-semibold uppercase text-this-darker">
              موفقیت
            </h2>
            <p className="mt-2 text-this-darker">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. روشنایی زیادی دارد، که باعث می‌شود تفاوت قابل توجهی ایجاد گردد. مشکلاتی به وجود می‌آورد. افراد باتجربه نتیجه را بدون مشکل دریافت می‌کنند، اما برخی با موانع روبرو می‌شوند.
            </p>
          </div>
        </div>
      </div>
      <div
        role="alert"
        className="this:warning overflow-hidden rounded-lg bg-white"
      >
        <div className="flex bg-this-darker/10">
          <div className="w-1.5 shrink-0 bg-this"></div>
          <div className="px-4 py-3">
            <h2 className="text-lg font-semibold uppercase text-this-darker">
              هشدار
            </h2>
            <p className="mt-2 text-this-darker">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. روشنایی زیادی دارد، که باعث می‌شود تفاوت قابل توجهی ایجاد گردد. مشکلاتی به وجود می‌آورد. افراد باتجربه نتیجه را بدون مشکل دریافت می‌کنند، اما برخی با موانع روبرو می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Extended };
