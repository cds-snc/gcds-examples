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
import { Button, Icon, Pagination, Text } from "../components";

// Styles
import "./TanStackTable.css";

interface TableRow {
  submission_id: string;
  submitter_name: string;
  date_submitted: string;
  status: string;
  assigned_reviewer: string;
}

interface TanStackTableProps {
  layout?: "scroll" | "stacked";
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
        return <a href={`#${value}`}>{value}</a>;
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
  } else if (key === "status") {
    return {
      accessorKey: key,
      header,
      cell: ({ getValue }) => {
        const value = getValue<string>();
        const statusClass = value.toLowerCase().replace(/\s+/g, "-");

        return <span className={`status-pill ${statusClass}`}>{value}</span>;
      },
    };
  } else {
    return { accessorKey: key, header };
  }
});

const TanStackTable: React.FC<TanStackTableProps> = ({
  layout = "stacked",
}) => {
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
  const pageSummary = `Showing ${startRow} - ${endRow} of ${totalRows}`;

  return (
    <section className="mb-1200 section-tan-stack">
      <Text
        textRole="secondary"
        size="small"
        marginBottom="200"
        ariaLive="polite"
      >
        {pageSummary}
      </Text>

      <div className={`mb-300 table-container layout-${layout}`}>
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
                        <p className="mb-0" aria-hidden="true">
                          {sorted === "asc" ? (
                            <Icon name="chevron-up"></Icon>
                          ) : sorted === "desc" ? (
                            <Icon name="chevron-down"></Icon>
                          ) : (
                            <>
                              <Icon name="chevron-up"></Icon>
                              <Icon name="chevron-down"></Icon>
                            </>
                          )}
                        </p>
                      </button>
                    </th>
                  );
                })}
                <th>
                  <span className="visibility-sr-only">Action</span>
                </th>
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
                    <td key={cell.id} data-label={cell.column.columnDef.header}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                  <td data-label="Action">
                    <Button type="button" buttonRole="secondary" size="small">
                      Update
                      <span className="visibility-sr-only">
                        submission {row.original.submission_id}
                      </span>
                    </Button>
                  </td>
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

export default TanStackTable;
