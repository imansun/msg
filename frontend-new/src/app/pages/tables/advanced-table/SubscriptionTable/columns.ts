// Import Dependencies
import dayjs from "dayjs";
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import { RowActions } from "./RowActions";
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import {
  AmountCell,
  ClientNameCell,
  LicenseType,
  LicenseValiityCell,
  PurchaseDateCell,
  RenewalDateCell,
} from "./rows";
import { Subscription } from "./fakeData";

// ----------------------------------------------------------------------

const today = dayjs();

const columnHelper = createColumnHelper<Subscription>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => row.user_name, {
    id: "user_name",
    header: "مشتری",
    cell: ClientNameCell,
  }),
  columnHelper.accessor((row) => row.service_name, {
    id: "service_name",
    header: "نام سرویس",
  }),
  columnHelper.accessor((row) => row.license_type, {
    id: "license_type",
    header: "نوع لایسنس",
    cell: LicenseType,
  }),
  columnHelper.accessor((row) => row.amount, {
    id: "amount",
    header: "مبلغ",
    cell: AmountCell,
  }),
  columnHelper.accessor((row) => row.purchase_date, {
    id: "purchase_date",
    header: "تاریخ خرید",
    cell: PurchaseDateCell,
  }),
  columnHelper.accessor((row) => dayjs(row.renewal_date).diff(today), {
    id: "license_valiity",
    header: "اعتبار لایسنس",
    cell: LicenseValiityCell,
  }),
  columnHelper.accessor((row) => row.renewal_date, {
    id: "renewal_date",
    header: "تاریخ تمدید",
    cell: RenewalDateCell,
  }),
  columnHelper.accessor((row) => row.payment_method, {
    id: "payment_method",
    header: "روش پرداخت",
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
