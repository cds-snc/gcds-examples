import React, { useEffect, useRef, useState } from "react";

import { DataTable } from "simple-datatables"
import "simple-datatables/dist/style.css";
import { faker } from "@faker-js/faker";

import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData";
import './TableSimple.css';

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
        // perPageSelect: false,
        perPageSelect: [5, 10, 15, 20, 25, ["All", 0]],
        template: (options, dom) => `<div class='${options.classes.top}'>
          ${options.paging && options.perPageSelect ?
            `<div class='${options.classes.dropdown}'>
                  <label>
                      <select class='${options.classes.selector}'></select> ${options.labels.perPage}
                  </label>
              </div>` :
            ""
          }
          ${options.searchable ?
            `<div class='${options.classes.search}'>
                  <input class='${options.classes.input}' placeholder='${options.labels.placeholder}' type='search' title='${options.labels.searchTitle}'${dom.id ? ` aria-controls="${dom.id}"` : ""}>
              </div>` :
            ""
          }
      </div>
      ${options.paging ?
            `<div class='${options.classes.info}'></div>` :
            ""
          }
      <div class='${options.classes.container}'${options.scrollY.length ? ` style='height: ${options.scrollY}; overflow-Y: auto;'` : ""}></div>
      <div class='${options.classes.bottom}'>
        <nav style="float: left;" class='${options.classes.pagination}'></nav>
      </div>`
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
      <Heading tag="h1">Submissions</Heading>

      <table id="simple-datatable" ref={tableRef}>
        <thead>
          <tr>
            <th>Submission ID</th>
            <th>Submitter</th>
            <th>Date submitted</th>
            <th>Status</th>
            <th>Reviewer</th>
            <th data-sortable="false"><span className="visibility-sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {tableTestSubmissionData.map((row: typeof tableTestSubmissionColumns, index: number) => (
            <tr key={index}>
              <td data-label="Submission ID:"><a href={`#${row.submission_id}`}>{row.submission_id}</a></td>
              <td data-label="Submitter:">{row.submitter_name}</td>
              <td data-label="Date submitted:"><time dateTime={row.date_submitted}>{row.date_submitted}</time></td>
              <td data-label="Status:">
                <span className={`status-pill ${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {row.status}
                </span>
              </td>
              <td data-label="Reviewer:">{row.assigned_reviewer}</td>
              <td>
                <button type="button" className="simple-test-button">
                  Update <span className="visibility-sr-only">: {row.submission_id}</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default TableSimple;
