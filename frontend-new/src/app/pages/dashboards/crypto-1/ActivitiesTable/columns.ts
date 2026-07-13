// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
  SelectCell,
  SelectHeader,
} from "@/components/shared/table/SelectCheckbox";
import { RowActions } from "./RowActions";
import {
  AccountNameCell,
  ActivityCell,
  AmountCell,
  TransactionDateCell,
} from "./rows";
import { CryptoActivity } from "./fakeData";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<CryptoActivity>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: SelectHeader,
    cell: SelectCell,
  }),
  columnHelper.accessor((row) => row.activity_name, {
    id: "activity",
    header: "فعالیت",
    cell: ActivityCell,
  }),
  columnHelper.accessor((row) => row.account_name, {
    id: "account",
    header: "حساب",
    cell: AccountNameCell,
  }),
  columnHelper.accessor((row) => row.transaction_date, {
    id: "transaction_date",
    header: "تاریخ تراکنش",
    cell: TransactionDateCell,
  }),

  columnHelper.accessor((row) => row.amount, {
    id: "amount",
    header: "مبلغ",
    cell: AmountCell,
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell: RowActions,
  }),
];
