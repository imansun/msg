interface Icon {
  label: string;
  url: string;
}

const icons: Icon[] = [
  {
    label: "هیروآیکونز (Heroicons)",
    url: "https://heroicons.com/",
  },
  {
    label: "ری‌اکت آیکونز (React Icons)",
    url: "https://react-icons.github.io/react-icons/",
  },
];

export function Icons() {
  return (
    <section>
      <h3
        id="icons"
        className="mt-10 scroll-mt-20 text-lg font-semibold lg:text-2xl"
        data-heading="آیکون"
        data-order="2"
      >
        <a href="#icons">آیکون</a>
      </h3>

      <ul className="mt-4 space-y-1.5 text-base">
        {icons.map((icon) => (
          <li key={icon.label}>
            <a
              className="text-primary-600 dark:text-primary-400 hover:underline"
              href={icon.url}
            >
              {icon.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
