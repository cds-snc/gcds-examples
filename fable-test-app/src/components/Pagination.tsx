import React from "react";
import { GcdsPagination } from "@gcds-core/components-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  label: string;
}

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPageChange, label }) => {
    if (totalPages <= 1) return null;

    return (
      <GcdsPagination
        display="list"
        label={label}
        currentPage={currentPage}
        totalPages={totalPages}
        onGcdsClick={(e) => {
          const { page } = e.detail as { page: number; href: string };
          onPageChange(page);
        }}
      />
    );
  },
);

export default Pagination;
