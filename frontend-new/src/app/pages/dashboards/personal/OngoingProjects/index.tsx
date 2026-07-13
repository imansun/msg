// Local Imports
import { ProjectCard, type Project } from "./ProjectCard";

// ----------------------------------------------------------------------

const projects: Project[] = [
  {
    uid: 1,
    name: "طراحی اپلیکیشن LMS",
    image: "/images/technology/design-sm.jpg",
    updated_at: "به‌روزرسانی در ۷ مهر",
    deadline: "۴ شهریور ۱۳۹۹",
    isActive: true,
    progress: 24,
    color: "primary",
  },
  {
    uid: 2,
    name: "داشبورد فروشگاه",
    image: "/images/technology/dashboard.jpg",
    updated_at: "یک ساعت پیش به‌روزرسانی شد",
    deadline: "۳۱ مرداد ۱۳۹۹",
    isActive: false,
    progress: 56,
    color: "secondary",
  },
  {
    uid: 3,
    name: "اپلیکیشن چت موبایل",
    image: "/images/technology/mobile-social.jpg",
    updated_at: "۳ روز پیش به‌روزرسانی شد",
    deadline: "۲۶ شهریور ۱۳۹۹",
    isActive: false,
    progress: 64,
    color: "warning",
  },
  {
    uid: 4,
    name: "اپلیکیشن بازار NFT",
    image: "/images/technology/ai-technology-brain.jpg",
    updated_at: "یک هفته پیش به‌روزرسانی شد",
    deadline: "۶ آذر ۱۳۹۹",
    isActive: false,
    progress: 14,
    color: "info",
  },
];

export function OngoingProjects() {
  return (
    <div>
      <div className="flex min-w-0 items-center justify-between">
        <h2 className="text-sm-plus dark:text-dark-100 truncate font-medium tracking-wide text-gray-800">
          پروژه‌های در حال انجام
        </h2>
        <a
          href="##"
          className="text-xs-plus text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 font-medium outline-hidden transition-colors duration-300"
        >
          مشاهده همه
        </a>
      </div>
      <div className="mt-3 space-y-3.5">
        {projects.map((project) => (
          <ProjectCard key={project.uid} {...project} />
        ))}
      </div>
    </div>
  );
}
