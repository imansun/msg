// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import { CopyableCell } from "@/components/shared/table/CopyableCell";
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import { AvatarCell, NameCell, RoleCell, StatusCell } from "./rows";
import { RowActions } from "./RowActions";
import { User } from "./fakeData";
// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.display({
    id: "avatar",
    header: "آواتار",
    cell: AvatarCell,
  }),
  columnHelper.accessor((row) => row.name, {
    id: "name",
    header: "نام",
    cell: NameCell,
  }),
  columnHelper.accessor((row) => row.role, {
    id: "role",
    header: "نقش",
    cell: RoleCell,
  }),
  columnHelper.accessor((row) => row.age, {
    id: "age",
    header: "سن",
  }),
  columnHelper.accessor((row) => row.phone, {
    id: "phone",
    header: "تلفن",
    cell: CopyableCell,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    header: "ایمیل",
    cell: CopyableCell,
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
];

