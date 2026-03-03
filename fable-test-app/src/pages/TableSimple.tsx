import React, { useEffect, useRef, useState } from "react";

import { DataTable } from "simple-datatables"
import "simple-datatables/dist/style.css";
import { faker } from "@faker-js/faker";

import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData";

// Components (internal)
import { DateModified, Heading } from "../components";

function getRowCountFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const value = parseInt(params.get("rows") ?? "25", 10);

  return value;
}

function generateRows(count: number) {
  return Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    country: faker.location.country(),
  }));
}

const TableSimple: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const dataTable = useRef<DataTable | null>(null);
  const [rows] = useState(() => generateRows(getRowCountFromQuery()));

  useEffect(() => {
    if (dataTable.current) {
      dataTable.current.destroy();
    }

    if (tableRef.current) {
      dataTable.current = new DataTable(tableRef.current, {
        searchable: true,
        perPage: 10,
        perPageSelect: [5, 10, 15, 20, 25, ["All", 0]],
      });
    }

    return () => {
      if (dataTable.current) {
        dataTable.current.destroy();
      }
    };
  }, [rows]);

  return (
    <section>
      <Heading tag="h1">Simple-datatables test page</Heading>

      <table id="simple-datatable" ref={tableRef}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Submitter</th>
            <th>Date submitted</th>
            <th>Status</th>
            <th>Reviewer</th>
          </tr>
        </thead>
        <tbody>
          {tableTestSubmissionData.map((row: typeof tableTestSubmissionColumns, index: number) => (
            <tr key={index}>
              <td data-label="ID:">{row.submission_id}</td>
              <td data-label="Submitter:">{row.submitter_name}</td>
              <td data-label="Date submitted:"><time dateTime={row.date_submitted}>{row.date_submitted}</time></td>
              <td data-label="Status:">
                <span className={`status-pill ${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {row.status}
                </span>
              </td>
              <td data-label="Reviewer:">{row.assigned_reviewer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default TableSimple;
