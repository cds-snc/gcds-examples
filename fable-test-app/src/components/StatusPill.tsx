import React from "react";
import "../pages/Table.css";

export type StatusType = "pending" | "approved" | "under-review" | "rejected";

const statusMap: Record<StatusType, { label: string; className: string }> = {
  pending: { label: "Pending review", className: "pill pill-purple" },
  approved: { label: "Approved", className: "pill pill-green" },
  "under-review": { label: "Under review", className: "pill pill-blue" },
  rejected: { label: "Rejected", className: "pill pill-red" },
};

interface StatusPillProps {
  status: StatusType;
  className?: string;
}

const StatusPill: React.FC<StatusPillProps> = ({ status, className = "" }) => {
  const pill = statusMap[status];
  return (
    <span className={`${pill.className} ${className}`.trim()}>
      <span className="pill-circle" />
      {pill.label}
    </span>
  );
};

export default StatusPill;

