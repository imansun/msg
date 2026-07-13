// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
    SelectCell,
    SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import { RowActions } from "./RowActions";
import {
    CourseNameCell,
    EarningCell,
    LevelCell,
    RatingCell,
    StatusCell,
} from "./rows";
import { Course } from "./data";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Course>();

export const columns = [
    columnHelper.display({
        id: "select",
        header: SelectHeader,
        cell: SelectCell,
    }),
    columnHelper.accessor((row) => row.name, {
        id: "name",
        header: "نام دوره",
        cell: CourseNameCell,
    }),
    columnHelper.accessor((row) => row.category, {
        id: "category",
        header: "دسته‌بندی",
    }),
    columnHelper.accessor((row) => row.level, {
        id: "level",
        header: "سطح",
        cell: LevelCell,
    }),
    columnHelper.accessor((row) => row.rating, {
        id: "rating",
        header: "امتیاز",
        cell: RatingCell,
    }),
    columnHelper.accessor((row) => row.price, {
        id: "price",
        header: "قیمت",
    }),
    columnHelper.accessor((row) => row.earning, {
        id: "earning",
        header: "درآمد",
        cell: EarningCell,
    }),
    columnHelper.accessor((row) => row.status, {
        id: "status",
        header: "وضعیت",
        cell: StatusCell,
    }),

    columnHelper.display({
        id: "actions",
        header: "",
        cell: RowActions,
    }),
]
