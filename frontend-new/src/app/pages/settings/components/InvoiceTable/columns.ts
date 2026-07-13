// Import Dependencies
import { createColumnHelper } from "@tanstack/react-table";

// Local Imports
import {
    Amount,
    Date,
    Download,
    InvoiceName,
    Status
} from "./rows";
import { Invoice } from "./invoiceList";

// ----------------------------------------------------------------------

const columnHelper = createColumnHelper<Invoice>();

export const columns = [
    columnHelper.accessor((row) => row.invoice_name, {
        id: "invoice_name",
        header: "نام فاکتور",
        cell: InvoiceName,
    }),
    columnHelper.accessor((row) => row.id, {
        id: "id",
        header: "شماره",
    }),
    columnHelper.accessor((row) => row.invoice_date, {
        id: "invoice_date",
        header: "تاریخ صدور",
        filterFn: "inNumberRange",
        cell: Date
    }),
    columnHelper.accessor((row) => row.due_date, {
        id: "due_date",
        header: "تاریخ سررسید",
        cell: Date
    }),
    columnHelper.accessor((row) => row.amount, {
        id: "amount",
        header: "مبلغ",
        cell: Amount,
        filterFn: 'inNumberRange'
    }),
    columnHelper.accessor((row) => row.status, {
        id: "status",
        filterFn: 'arrIncludesSome',
        header: "وضعیت",
        cell: Status
    }),
    columnHelper.display({
        id: 'download',
        header: "دانلود",
        cell: Download
    })
]
