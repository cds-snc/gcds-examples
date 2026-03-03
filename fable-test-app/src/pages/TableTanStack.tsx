import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  tableTestSubmissionColumns,
  tableTestSubmissionData,
} from "../data/tableTestSubmissionsData";

// Components (internal)
import { Heading, Pagination, Text } from "../components";

// Styles
import "./TableTanStack.css";

interface TableRow {
  submission_id: string;
  submitter_name: string;
  date_submitted: string;
  status: string;
  assigned_reviewer: string;
}

const columns: ColumnDef<TableRow>[] = Object.entries(
  tableTestSubmissionColumns,
).map(([key, header]) => {
  if (key === "submission_id") {
    return {
      accessorKey: key,
      header,
      cell: ({ getValue }) => {
        const value = getValue<string>();
        return <a href={`/submission/${value}`}>{value}</a>;
      },
    };
  } else if (key === "date_submitted") {
    return {
      accessorKey: key,
      header,
      cell: ({ getValue }) =>
        new Date(getValue<string>()).toLocaleString("en-CA", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
    };
  } else {
    return { accessorKey: key, header };
  }
});

const TableTanStack: React.FC = () => {
  const table = useReactTable({
    data: tableTestSubmissionData,
    columns,
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Calculate pagination range for summary
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.getFilteredRowModel().rows.length;
  const startRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);
  const pageSummary = `Showing submissions ${startRow} - ${endRow} of ${totalRows}`;

  return (
    <section className="mb-1200 section-tan-stack">
      <Heading tag="h1">TanStack table</Heading>
      <Text>
        This page shows a list of test submissions. You can sort the columns by
        clicking on the headers and navigate through pages using the pagination
        controls.
      </Text>
      <Text
        text-role="secondary"
        size="small"
        marginBottom="200"
        aria-live="polite"
        aria-atomic="true"
      >
        {pageSummary}
      </Text>

      <div className="mb-300 table-container">
        <table>
          <caption className="visibility-sr-only">
            This table lists submission ID, submitter name, submission date,
            review status, and assigned reviewer. Columns are sortable.
          </caption>

          <thead>
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => {
                  const sorted = header.column.getIsSorted();
                  const ariaLabel = `Sort by ${header.column.id}${
                    sorted
                      ? sorted === "asc"
                        ? ", currently ascending"
                        : ", currently descending"
                      : ""
                  }`;

                  return (
                    <th
                      key={header.id}
                      scope="col"
                      aria-sort={
                        sorted
                          ? sorted === "asc"
                            ? "ascending"
                            : "descending"
                          : "none"
                      }
                    >
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        aria-label={ariaLabel}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {sorted === "asc" && <span aria-hidden="true"> ▲</span>}
                        {sorted === "desc" && (
                          <span aria-hidden="true"> ▼</span>
                        )}
                      </button>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>No submissions found.</td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getAllCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <nav aria-label="Table pagination">
        <Pagination
          label="Submission results"
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          onPageChange={(page) => {
            table.setPageIndex(page - 1);
          }}
        />
      </nav>
    </section>
  );
};

export default TableTanStack;
