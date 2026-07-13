// Import Dependencies
import { ColumnDef } from "@tanstack/react-table";

// Local Imports
import { RowActions } from "./RowActions";
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import {
  AddressCell,
  CustomerCell,
  DateCell,
  OrderIdCell,
  OrderStatusCell,
  ProfitCell,
  TotalCell,
} from "./rows";
import { Order, orderStatusOptions } from "./data";

// ----------------------------------------------------------------------

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    label: "انتخاب سطر",
    header: SelectHeader,
    cell: SelectCell,
  },
  {
    id: "order_id",
    accessorKey: "order_id",
    label: "شناسه سفارش",
    header: "سفارش",
    cell: OrderIdCell,
  },
  {
    id: "created_at",
    accessorKey: "created_at",
    label: "تاریخ سفارش",
    header: "تاریخ",
    cell: DateCell,
    filterColumn: "dateRange",
    filterFn: "inNumberRange",
  },
  {
    id: "customer",
    accessorFn: (row) => row.customer.name,
    label: "مشتری",
    header: "مشتری",
    cell: CustomerCell,
  },
  {
    id: "total",
    accessorKey: "total",
    label: "مبلغ کل",
    header: "مبلغ کل",
    filterColumn: "numberRange",
    filterFn: "inNumberRange",
    cell: TotalCell,
  },
  {
    id: "profit",
    accessorKey: "profit",
    label: "سود",
    header: "سود",
    cell: ProfitCell,
    filterColumn: "numberRange",
    filterFn: "inNumberRange",
  },
  {
    id: "order_status",
    accessorKey: "order_status",
    label: "وضعیت سفارش",
    header: "وضعیت سفارش",
    cell: OrderStatusCell,
    filterColumn: "select",
    filterFn: "arrIncludesSome",
    options: orderStatusOptions,
  },
  {
    id: "address",
    accessorFn: (row) =>
      `${row.shipping_address?.street}, ${row.shipping_address?.line}`,
    label: "آدرس",
    header: "آدرس",
    cell: AddressCell,
  },
  {
    id: "actions",
    label: "عملیات سطر",
    header: "عملیات",
    cell: RowActions,
  },
];
