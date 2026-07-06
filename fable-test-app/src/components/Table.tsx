import React from "react";
import { GcdsTable, ReactTableColumn } from "@gcds-core/components-react";

interface TableProps {
  children?: React.ReactNode;
  className?: string;
  columns?: ReactTableColumn[] | string;
  data?: Record<string, unknown>[] | string;
  filter?: boolean;
  filterValue?: string;
  pagination?: boolean;
  paginationCurrentPage?: number;
  paginationSize?: number;
  paginationSizeOptions?: number[];
  sort?: boolean;
}

const Table: React.FC<TableProps> = ({
  children,
  className,
  columns,
  data,
  filter = false,
  filterValue = "",
  pagination = false,
  paginationCurrentPage = 1,
  paginationSize = 10,
  paginationSizeOptions = [10, 20, 50, 0],
  sort = false,
}) => {
  return (
    <GcdsTable
      className={className}
      columns={typeof columns === "string" ? JSON.parse(columns) : columns}
      data={typeof data === "string" ? JSON.parse(data) : data}
      filter={filter}
      filterValue={filterValue}
      pagination={pagination}
      paginationCurrentPage={paginationCurrentPage}
      paginationSize={paginationSize}
      paginationSizeOptions={paginationSizeOptions}
      sort={sort}
    >
      {children}
    </GcdsTable>
  );
}

export default Table;