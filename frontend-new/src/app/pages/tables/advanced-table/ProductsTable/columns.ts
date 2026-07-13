// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import { RowActions } from "./RowActions";
import { BrandCell, NameCell, PriceCell, StockCell, ViewCell } from "./rows";
import { Product } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Product>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => `${row.name} ${row.sku}`, {
    id: "name",
    header: "نام محصول",
    cell: NameCell,
  }),
  columnHelper.accessor((row) => row.category, {
    id: "category",
    header: "دسته‌بندی",
  }),
  columnHelper.accessor((row) => row.brand, {
    id: "brand",
    header: "برند",
    cell: BrandCell,
  }),
  columnHelper.accessor((row) => row.price, {
    id: "price",
    header: "قیمت",
    cell: PriceCell,
  }),
  columnHelper.accessor((row) => row.stock_count, {
    id: "stock_count",
    header: "موجودی",
    cell: StockCell,
  }),
  columnHelper.accessor((row) => row.view, {
    id: "views",
    header: "تعداد بازدید",
    cell: ViewCell,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
