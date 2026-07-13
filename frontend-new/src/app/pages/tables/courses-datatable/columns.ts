// Import Dependencies
import { ColumnDef } from "@tanstack/react-table";

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
  PriceCell,
  RatingCell,
  StatusCell,
} from "./rows";
import { Course } from "./data";

// ----------------------------------------------------------------------

export const columns: ColumnDef<Course>[] = [
  {
    id: "select",
    label: "انتخاب سطر",
    header: SelectHeader,
    cell: SelectCell,
  },
  {
    id: "name",
    accessorKey: "name",
    header: "نام دوره",
    label: "نام دوره",
    cell: CourseNameCell,
  },
  {
    id: "category",
    accessorKey: "category",
    header: "دسته‌بندی",
    label: "دسته‌بندی",
  },
  {
    id: "level",
    accessorKey: "level",
    header: "سطح",
    label: "سطح",
    cell: LevelCell,
    filterColumn: "searchableSelect",
    filterFn: "arrIncludesSome",
  },
  {
    id: "rating",
    accessorKey: "rating",
    header: "امتیاز",
    label: "امتیاز",
    cell: RatingCell,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
  {
    id: "price",
    accessorKey: "price",
    header: "قیمت",
    label: "قیمت",
    cell: PriceCell,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
  {
    id: "earning",
    accessorKey: "earning",
    header: "درآمد",
    label: "درآمد",
    cell: EarningCell,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
  {
    id: "status",
    accessorKey: "status",
    header: "وضعیت",
    label: "وضعیت",
    cell: StatusCell,
    filterColumn: "searchableSelect",
    filterFn: "arrIncludesSome",
  },
  {
    id: "actions",
    header: "",
    label: "عملیات سطر",
    cell: RowActions,
  },
  {
    id: "lesson_count",
    accessorKey: "lesson_count",
    isHiddenColumn: true,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
  {
    id: "students",
    accessorKey: "students",
    isHiddenColumn: true,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
  {
    id: "duration",
    accessorKey: "duration",
    isHiddenColumn: true,
    filterFn: "inNumberRange",
    filterColumn: "numberRange",
  },
];
