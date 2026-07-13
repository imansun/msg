// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
  SelectCell,
} from "@/components/shared/table/SelectCheckbox";
import {
  AssignCell,
  CourseNameCell,
  FileNameCell,
  PermissionCell,
  SizeCell,
} from "./rows";
import { RowActions } from "./RowActions";
import { Media } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Media>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: "انتخاب",
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "course_name",
    header: "نام دوره",
    cell: CourseNameCell,
  }),
  columnHelper.accessor((row) => row.file_name, {
    id: "file_name",
    header: "نام فایل",
    cell: FileNameCell,
  }),
  columnHelper.accessor((row) => row.permission.title, {
    id: "permission",
    header: "دسترسی",
    cell: PermissionCell,
  }),
  columnHelper.accessor((row) => row.assign_count, {
    id: "assign",
    header: "تخصیص",
    cell: AssignCell,
  }),
  columnHelper.accessor((row) => row.file_size, {
    id: "file_size",
    header: "حجم فایل",
    cell: SizeCell,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];

