// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

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
import { Project } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Project>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => row.partner_name, {
    id: "partner_name",
    header: "شریک",
    cell: PartnerCell,
  }),
  columnHelper.accessor((row) => row.project_name, {
    id: "project_name",
    header: "نام پروژه",
    cell: ProjectNameCell,
  }),
  columnHelper.display({
    id: "collaborators",
    header: "همکاران",
    cell: CollaboratorsCell,
  }),
  columnHelper.accessor((row) => row.tags, {
    id: "tags",
    header: "برچسب‌ها",
    cell: TagsCell,
  }),
  columnHelper.accessor((row) => row.progress, {
    id: "progress",
    header: "پیشرفت",
    cell: ProgressCell,
  }),
  columnHelper.accessor((row) => row.started_at, {
    id: "started_at",
    header: "تاریخ شروع",
    cell: StartedDateCell,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
