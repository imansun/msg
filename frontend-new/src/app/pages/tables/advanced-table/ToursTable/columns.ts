// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import { RowActions } from "./RowActions";
import {
  DepartureCell,
  DestinationCell,
  LengthCell,
  PriceCell,
  ReturnCell,
  TouristGroupCell,
} from "./rows";
import { Tour } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Tour>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => `${row.destination} ${row.country}`, {
    id: "destination",
    header: "مقصد",
    cell: DestinationCell,
  }),
  columnHelper.accessor((row) => row.duration, {
    id: "duration",
    header: "مدت زمان",
    cell: LengthCell,
  }),
  columnHelper.accessor((row) => row.start_date, {
    id: "start_date",
    header: "تاریخ رفت",
    cell: DepartureCell,
  }),
  columnHelper.accessor((row) => row.end_date, {
    id: "end_date",
    header: "تاریخ برگشت",
    cell: ReturnCell,
  }),
  columnHelper.accessor((row) => row.adults + row.childs, {
    id: "tourist_group",
    header: "گروه گردشگری",
    cell: TouristGroupCell,
  }),
  columnHelper.accessor((row) => row.price, {
    id: "price",
    header: "قیمت",
    cell: PriceCell,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
