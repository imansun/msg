// Import Dependencies
import { type ColumnDef } from "@tanstack/react-table";

// Local Imports
import { CopyableCell } from "@/components/shared/table/CopyableCell";
import { NameCell, RoleCell, StatusCell } from "./rows";
import { RowActions } from "./RowActions";
import { HighlightableCell } from "@/components/shared/table/HighlightableCell";
import { type User } from "./data";

// ----------------------------------------------------------------------

export const columns: ColumnDef<User>[] = [
  {
    id: "status",
    accessorKey: "status",
    header: "وضعیت",
    label: "وضعیت",
    cell: StatusCell,
  },
  {
    id: "name",
    accessorKey: "name",
    header: "نام",
    label: "نام",
    cell: NameCell,
  },
  {
    id: "role",
    accessorKey: "role",
    header: "نقش",
    label: "نقش",
    cell: RoleCell,
    filterFn: "equalsString",
  },
  {
    id: "age",
    accessorKey: "age",
    header: "سن",
    label: "سن",
    cell: HighlightableCell,
  },
  {
    id: "phone",
    accessorKey: "phone",
    header: "شماره تلفن",
    label: "شماره تلفن",
    cell: (props: any) => <CopyableCell {...props} highlight />,
  },
  {
    id: "email",
    accessorKey: "email",
    header: "ایمیل",
    label: "ایمیل",
    cell: (props: any) => <CopyableCell {...props} highlight />,
  },
  {
    id: "actions",
    header: "",
    label: "عملیات",
    cell: RowActions,
  },
];
