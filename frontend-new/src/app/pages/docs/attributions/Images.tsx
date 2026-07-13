interface Image {
  label: string;
  url: string;
}

const images: Image[] = [
  {
    label: "آن‌اس‌پلش (Unsplash)",
    url: "https://unsplash.com/",
  },
  {
    label: "فری‌پیک (Freepik)",
    url: "https://www.freepik.com/",
  },
  {
    label: "استوری‌ست (Storyset)",
    url: "https://storyset.com/",
  },
];

export function Images() {
  return (
    <section>
      <h3
        id="images"
        className="mt-10 scroll-mt-20 text-lg font-semibold lg:text-2xl"
        data-heading="تصاویر"
        data-order="2"
      >
        <a href="#images">تصاویر</a>
      </h3>

      <ul className="mt-4 space-y-1.5 text-base">
        {images.map((image) => (
          <li key={image.label}>
            <a
              className="text-primary-600 dark:text-primary-400 hover:underline"
              href={image.url}
            >
              {image.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
