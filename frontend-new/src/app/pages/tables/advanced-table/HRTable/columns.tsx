// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";
import { CopyableCell } from "@/components/shared/table/CopyableCell";

// Local Imports
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import {
  DepartmentCell,
  IdCell,
  NameCell,
  PositionCell,
  StatusCell,
} from "./rows";
import { RowActions } from "./RowActions";
import { HighlightableCell } from "@/components/shared/table/HighlightableCell";
import { type User } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => row.user_id, {
    id: "user_id",
    header: () => <span className="-mx-2">شناسه</span>,
    cell: IdCell,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: "نام",
    cell: NameCell,
  }),
  columnHelper.accessor((row) => row.position, {
    id: "position",
    header: "سمت",
    cell: PositionCell,
  }),
  columnHelper.accessor((row) => row.level, {
    id: "level",
    header: "سطح",
    cell: HighlightableCell,
  }),
  columnHelper.accessor((row) => row.status.title, {
    id: "status",
    header: "وضعیت",
    cell: StatusCell,
  }),
  columnHelper.accessor((row) => row.department, {
    id: "department",
    header: "دپارتمان",
    cell: DepartmentCell,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    header: "ایمیل",
    cell: (props) => <CopyableCell {...props} highlight />,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
