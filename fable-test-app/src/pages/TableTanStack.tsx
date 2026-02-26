import React, { useEffect, useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Components (internal)
import { Button, Heading, Icon, Input, Select, Text } from "../components";

// Styles
import "./TableTanStack.css";

interface TableRow {
  date: string;
  nameEn: string;
  location: string;
}

// Constant for page sizes
const PAGE_SIZES = [10, 20, 50, 100];

const TableTanStack: React.FC = () => {
  const [data, setData] = useState<TableRow[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(20); // rows per page

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const res = await fetch(
          "https://canada-holidays.ca/api/v1/holidays?year=2026",
        );

        if (!res.ok) {
          console.error("Failed to fetch holidays", res.status);
          return;
        }

        const responseJson = await res.json();
        const holidaysList = responseJson.holidays || responseJson;

        // Flatten for table: one row per province observing the holiday
        const flattened: TableRow[] = holidaysList.flatMap((h: any) =>
          (h.provinces || []).map((p: any) => ({
            date: h.date,
            nameEn: h.nameEn,
            location: p.nameEn,
          })),
        );

        setData(flattened);
      } catch (err) {
        console.error("Error fetching holiday API", err);
      }
    };

    fetchHolidays();
  }, []);

  const columns = useMemo<ColumnDef<TableRow>[]>(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        sortingFn: "datetime",
        cell: ({ getValue }) =>
          new Date(getValue<string>()).toLocaleDateString("en-CA", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
      },
      { accessorKey: "nameEn", header: "Holiday" },
      { accessorKey: "location", header: "Location" },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination: { pageIndex, pageSize },
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });

  return (
    <section className="section-tan-stack">
      <Heading tag="h1">TanStack table</Heading>
      <Text>This section is testing TanStack.</Text>

      <Input
        inputId="holiday-search"
        label="Search holidays"
        hint="Search by holiday name, date, or location."
        type="search"
        value={globalFilter}
        onInput={(e) => setGlobalFilter(e.target.value)}
      />

      <div className="mt-600 mb-300 table-container">
        <table>
          <caption>
            Table listing all public holidays and where they are observed
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
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          onClick={header.column.getToggleSortingHandler()}
                          aria-label={ariaLabel}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {sorted === "asc" && " ▲"}
                          {sorted === "desc" && " ▼"}
                        </button>

                        {/* Visibility toggle button */}
                        <button
                          onClick={() => header.column.toggleVisibility()}
                          aria-label={
                            header.column.getIsVisible()
                              ? `Hide ${header.column.id}`
                              : `Show ${header.column.id}`
                          }
                        >
                          {header.column.getIsVisible() ? (
                            <Icon name="close" />
                          ) : null}
                        </button>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav
        className="d-flex sm:flex-row flex-col sm:align-items-center sm:justify-content-between gap-200"
        aria-label="Table pagination"
      >
        <div>
          {table.getCanPreviousPage() && (
            <Button
              type="button"
              size="small"
              buttonRole="secondary"
              onGcdsClick={() => table.previousPage()}
            >
              <Icon name="chevron-left" /> Previous
            </Button>
          )}
          <span className="mx-150" aria-live="polite">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          {table.getCanNextPage() && (
            <Button
              type="button"
              size="small"
              buttonRole="secondary"
              onGcdsClick={() => table.nextPage()}
            >
              Next <Icon name="chevron-right" />
            </Button>
          )}
        </div>
        <Select
          selectId="page-size"
          label="Select rows per page"
          name="page-size"
          hideLabel
          value={table.getState().pagination.pageSize.toString()}
          onInput={(e) => table.setPageSize(Number(e.target.value))}
        >
          {PAGE_SIZES.map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </Select>
      </nav>
    </section>
  );
};

export default TableTanStack;
