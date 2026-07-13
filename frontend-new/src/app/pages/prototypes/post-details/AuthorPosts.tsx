// Import Dependencies
import {
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

interface Post {  
  uid: string;
  title: string;
  cover: string;
  readTime: string;
  created_at: string;
}

const posts: Post[] = [
  {
    uid: "1",
    title: "Tailwind CSS چیست؟",
    cover: "/images/objects/object-1.jpg",
    readTime: "۲ دقیقه مطالعه",
    created_at: "۱۵ آبان",
  },
  {
    uid: "2",
    title: "برترین سیستم‌های طراحی",
    cover: "/images/objects/object-15.jpg",
    readTime: "۵ دقیقه مطالعه",
    created_at: "۲۱ مهر",
  },
  {
    uid: "3",
    title: "۱۰ نکته برای بهتر کردن دوربین خوب",
    cover: "/images/objects/object-17.jpg",
    readTime: "۷ دقیقه مطالعه",
    created_at: "۳۰ مهر",
  },
  {
    uid: "4",
    title: "۲۵ حقیقت شگفت‌انگیز درباره صندلی",
    cover: "/images/objects/object-19.jpg",
    readTime: "۴ دقیقه مطالعه",
    created_at: "۱۰ آبان",
  },
];

export function AuthorPosts() {
  return (
    <div className="mt-5">
      <p className="dark:border-dark-600 dark:text-dark-100 border-b border-gray-200 pb-2 text-base text-gray-800">
        مطالب بیشتر از تراویس فولر
      </p>
      <div className="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
        {posts.map((post) => (
          <div className="flex justify-between gap-2" key={post.uid}>
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                <p className="truncate text-xs font-medium">
                  {post.created_at}
                </p>
                <div className="dark:text-dark-100 mt-1 line-clamp-3 text-gray-800">
                  <a
                    href="##"
                    className="hover:text-primary-600 focus:text-primary-600 dark:text-dark-100 dark:hover:text-primary-400 dark:focus:text-primary-400 font-medium text-gray-700"
                  >
                    {post.title}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="truncate text-xs font-medium">{post.readTime}</p>
                <div className="flex">
                  <Button className="size-7 rounded-full" isIcon variant="flat">
                    <EllipsisHorizontalIcon className="size-4.5" />
                  </Button>
                  <Button className="size-7 rounded-full" isIcon variant="flat">
                    <BookmarkIcon className="size-4.5" />
                  </Button>
                </div>
              </div>
            </div>
            <img
              src={post.cover}
              className="size-24 rounded-lg object-cover object-center"
              alt={post.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
