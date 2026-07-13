// Local Imports
import { type Demo, DemoLayout } from "@/components/docs/demo/DemoLayout";
import { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";
import { Diamond } from "./Diamond";
import { Heart } from "./Heart";
import { Hexagon } from "./Hexagon";
import { Octagon } from "./Octagon";
import { ReuleauxTriangle } from "./ReuleauxTriangle";
import { Squircle } from "./Squircle";
import { Star } from "./Star";

// ----------------------------------------------------------------------

const breadcrumbs: BreadcrumbItem[] = [
  { title: "کامپوننت‌ها", path: "/components" },
  { title: "ماسک" },
];

const markdownPath = "components/mask";

const demos: Demo[] = [
  {
    title: "اسکوایرکل (Squircle Shape)",
    description:
      "ماسک محتوای المنت را به اشکال رایج برش می‌دهد. با این ماسک می‌توانید المان را به شکل اسکوایرکل برش دهید. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Squircle,
    markdownName: "Squircle",
  },
  {
    title: "مثلث رولئو (Reuleaux Triangle Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل مثلث رولئو برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: ReuleauxTriangle,
    markdownName: "ReuleauxTriangle",
  },
  {
    title: "لوزی (Diamond Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل لوزی برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Diamond,
    markdownName: "Diamond",
  },
  {
    title: "شش‌ضلعی (Hexagon Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل شش‌ضلعی برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Hexagon,
    markdownName: "Hexagon",
  },
  {
    title: "هشت‌ضلعی (Octagon Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل هشت‌ضلعی برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Octagon,
    markdownName: "Octagon",
  },
  {
    title: "ستاره (Star Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل ستاره برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Star,
    markdownName: "Star",
  },
  {
    title: "قلب (Heart Shape)",
    description:
      "ماسک می‌تواند محتوای المان را به شکل قلب برش دهد. برای جزئیات نحوه استفاده، کد را مشاهده کنید.",
    Component: Heart,
    markdownName: "Heart",
  },
];

export default function Mask() {
  return (
    <DemoLayout
      title="ماسک"
      breadcrumbs={breadcrumbs}
      markdownPath={markdownPath}
      demos={demos}
    />
  );
}
