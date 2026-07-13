// Import Dependencies
import { ColumnDef } from "@tanstack/react-table";

// Local Imports
import { RowActions } from "./RowActions";
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import {
  CollaboratorsCell,
  PartnerCell,
  ProgressCell,
  ProjectNameCell,
  StartedDateCell,
  TagsCell,
} from "./rows";
import { Project } from "./data";

// ----------------------------------------------------------------------

export const columns: ColumnDef<Project>[] = [
  {
    id: "select",
    header: SelectHeader,
    label: "انتخاب ردیف",
    cell: SelectCell,
  },
  {
    id: "partner_name",
    accessorKey: "partner_name",
    header: "همکار",
    label: "نام همکار",
    cell: PartnerCell,
  },
  {
    id: "project_name",
    accessorKey: "project_name",
    header: "نام پروژه",
    label: "نام پروژه",
    cell: ProjectNameCell,
  },
  {
    id: "collaborators",
    accessorKey: "collaborators",
    header: "همکاران",
    label: "همکاران",
    cell: CollaboratorsCell,
    filterFn: "arrIncludesSome",
  },
  {
    id: "tags",
    accessorKey: "tags",
    header: "برچسب‌ها",
    label: "برچسب‌ها",
    cell: TagsCell,
    filterFn: "arrIncludesSome",
  },
  {
    id: "progress",
    accessorKey: "progress",
    header: "پیشرفت",
    label: "پیشرفت",
    cell: ProgressCell,
  },
  {
    id: "started_at",
    accessorKey: "started_at",
    header: "تاریخ شروع",
    label: "تاریخ شروع",
    cell: StartedDateCell,
    filterFn: "inNumberRange",
  },
  {
    id: "deadline",
    accessorKey: "deadline",
    isHiddenColumn: true,
    filterFn: "inNumberRange",
  },
  {
    id: "status",
    accessorKey: "status",
    isHiddenColumn: true,
  },
  {
    id: "actions",
    header: "",
    cell: RowActions,
  },
];
